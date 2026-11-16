import React from 'react'
import type { ReactNode } from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from './App'
import {
  dateOrder, entities, eventDay, events, formatYear, onDay, personNames,
  personTextParts, plainText, sources, topicLabel, topicTags,
} from './data'
import type { Entity, HistoryEvent } from './data'
import { countryName } from './ChronicleScene'
import {
  absoluteUrl, countryMonthPath, countryPath, dayPath, eventPath,
  HOME_DESCRIPTION, HOME_TITLE, monthPath, personPath, SITE_NAME, SITE_URL, topicPath, yearPath,
} from './site'

type JsonObject = Record<string, unknown>
type Crumb = { name: string; path: string }
type Page = { path: string; title: string; description: string; body: ReactNode; crumbs?: Crumb[]; entity?: JsonObject; noindex?: boolean }

const people = Object.values(entities).filter(item => item.type === '人物')
const years = [...new Set(events.map(item => item.year))].sort((a, b) => a - b)
const countryIds = [...new Set(events.map(item => item.country))]
const sorted = (items: HistoryEvent[]) => [...items].sort((a, b) => a.year - b.year || dateOrder(a) - dateOrder(b))
const yearLabel = (year: number) => `${formatYear(year).replace(' ', '')}年`
const shortText = (text: string, max = 150) => plainText(text).replace(/\s+/g, ' ').slice(0, max)
const sourceIds = (item: HistoryEvent) => [...new Set([item.source, ...(item.references ?? [])])]
const personSourceIds = (item: Entity) => [...new Set([...(item.biographySources ?? []), ...(item.sources ?? [])])]
const precisionLabel = (item: HistoryEvent) => ({
  day: '定日记录', range: '跨日记录', approximate: '约日记录', disputed: '日期待核', month: '月级记录',
}[item.precision ?? 'month'] ?? '按原文纪年')
const knownMonth = (item: HistoryEvent) => Boolean(item.archive || (item.year >= 1912 && /年\d{1,2}月/.test(item.date)))
// Month numbers on ancient overview nodes are UI coordinates, not source dates.
const months = years.flatMap(year => [...new Set(events.filter(item => item.year === year && knownMonth(item)).map(item => item.month))]
  .sort((a, b) => a - b).map(month => ({ year, month, items: sorted(events.filter(item => item.year === year && item.month === month && knownMonth(item))) })))
  .filter(group => group.items.length >= 2)
const monthExists = (year: number, month: number) => months.some(group => group.year === year && group.month === month)
const dailyGroups = months.filter(group => group.items.some(item => item.archive)).flatMap(group => {
  const days = [...new Set(group.items.filter(item => item.precision === 'day' || item.precision === 'range')
    .flatMap(item => Array.from({ length: (item.endDay ?? eventDay(item)) - eventDay(item) + 1 }, (_, i) => eventDay(item) + i)))]
    .filter(day => day >= 1 && day <= 31).sort((a, b) => a - b)
  return days.map(day => ({
    ...group, day,
    items: group.items.filter(item => (item.precision === 'day' || item.precision === 'range') && onDay(item, day)),
    uncertain: group.items.filter(item => (item.precision === 'approximate' || item.precision === 'disputed') && onDay(item, day)),
  }))
})

function RichText({ text }: { text: string }) {
  return <>{personTextParts(text).map((part, i) => part.personId
    ? <a key={i} href={personPath(part.personId)}>{part.text}</a>
    : <React.Fragment key={i}>{part.text}</React.Fragment>)}</>
}
function SourceList({ ids }: { ids: string[] }) {
  return <ul className="source-list">{ids.map(id => {
    if (!sources[id]) throw new Error(`Missing source: ${id}`)
    return <li key={id}><a href={sources[id].url} rel="noreferrer" target="_blank">{sources[id].name}<span aria-hidden="true"> ↗</span></a></li>
  })}</ul>
}
function EventList({ items }: { items: HistoryEvent[] }) {
  return <ol className="record-list">{items.map(item => <li key={item.id}>
    <div className="record-meta"><span>{item.date}</span><span>{countryName(item.country, item.year)} · {item.category}</span></div>
    <h3><a href={eventPath(item.id)}>{item.title}<span aria-hidden="true"> ↗</span></a></h3>
    <p><RichText text={item.summary} /></p>
    {item.precision && <span className="precision">{precisionLabel(item)}</span>}
  </li>)}</ol>
}
function LinkGrid({ links }: { links: { name: string; path: string; detail?: string }[] }) {
  return <ul className="link-grid">{links.map(link => <li key={link.path}><a href={link.path}><strong>{link.name}</strong>{link.detail && <span>{link.detail}</span>}<b aria-hidden="true">↗</b></a></li>)}</ul>
}
function TrustNote() {
  return <aside className="trust-note"><strong>阅读与引用说明</strong>
    <p>这是按现有资料编写的历史阅读档案。请保留原文的日期精度与核验限制，引用具体结论时继续核对所列史料。收录空白不表示当天没有历史事件。</p>
    <a href="/sources/">查看史料与纪年说明 →</a></aside>
}
function collectionEntity(name: string, items: HistoryEvent[]): JsonObject {
  return {
    '@type': 'ItemList', name, numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: absoluteUrl(eventPath(item.id)) })),
  }
}
const homeCrumb = { name: '首页', path: '/' }
const timelineCrumb = { name: '历史年表', path: '/timeline/' }

export function pageHead(page: Pick<Page, 'path' | 'title' | 'description' | 'crumbs' | 'entity' | 'noindex'>) {
  const url = absoluteUrl(page.path)
  const graph: JsonObject[] = [
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, description: HOME_DESCRIPTION, inLanguage: 'zh-CN' },
    { '@type': page.path === '/' ? 'WebPage' : page.entity?.['@type'] === 'Person' ? 'ProfilePage' : page.entity?.['@type'] === 'ItemList' ? 'CollectionPage' : 'WebPage',
      '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'zh-CN',
      isPartOf: { '@id': `${SITE_URL}/#website` }, ...(page.entity ? { mainEntity: { '@id': `${url}#content` } } : {}) },
  ]
  if (page.entity) graph.push({ ...page.entity, '@id': `${url}#content`, mainEntityOfPage: { '@id': `${url}#webpage` } })
  if (page.crumbs) graph.push({
    '@type': 'BreadcrumbList', itemListElement: page.crumbs.map((crumb, index) => ({
      '@type': 'ListItem', position: index + 1, name: crumb.name, item: absoluteUrl(crumb.path),
    })),
  })
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
  return renderToStaticMarkup(<>
    <title>{page.title}</title>
    <meta name="description" content={page.description} />
    <meta name="robots" content={page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
    {!page.noindex && <link rel="canonical" href={url} />}
    <meta property="og:type" content={page.entity?.['@type'] === 'Article' ? 'article' : 'website'} />
    <meta property="og:site_name" content={SITE_NAME} /><meta property="og:locale" content="zh_CN" />
    <meta property="og:title" content={page.title} /><meta property="og:description" content={page.description} /><meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary" /><meta name="twitter:title" content={page.title} /><meta name="twitter:description" content={page.description} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  </>)
}
function document(page: Page) {
  return '<!doctype html>' + renderToStaticMarkup(<html lang="zh-CN"><head>
    <meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="theme-color" content="#0c1115" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" /><link rel="stylesheet" href="/archive.css" />
  </head><body>
    <a className="skip" href="#content">跳到正文</a>
    <header className="archive-header"><a className="archive-brand" href="/">浩汉<small>HAO HAN / 在时间中，读懂世界</small></a>
      <nav aria-label="主导航"><a href="/timeline/">历史年表</a><a href="/people/">人物志</a><a href="/sources/">史料</a></nav></header>
    <main id="content">
      {page.crumbs && <nav className="breadcrumbs" aria-label="面包屑"><ol>{page.crumbs.map((crumb, i) => <li key={crumb.path}>{i === page.crumbs!.length - 1 ? <span aria-current="page">{crumb.name}</span> : <a href={crumb.path}>{crumb.name}</a>}</li>)}</ol></nav>}
      <div className="page-intro"><span className="eyebrow">浩汉 / 历史档案</span><h1>{page.title.replace(/ · 浩汉$/, '')}</h1><p>{page.description}</p></div>
      {page.body}
    </main>
    <footer><a href="/">返回交互历史长卷 →</a><div><a href="/about/">关于与编写原则</a><a href="/sources/">史料与纪年说明</a></div>
      <p>以中国历史为主线，阅读同时代的世界。日期分歧、资料缺口与来源限制均保留于正文。</p></footer>
  </body></html>).replace('</head>', () => `${pageHead(page)}</head>`)
}
export function renderHome() {
  return {
    html: renderToString(<React.StrictMode><App /></React.StrictMode>),
    head: pageHead({ path: '/', title: HOME_TITLE, description: HOME_DESCRIPTION }),
  }
}
export function* staticPages(): Generator<{ path: string; html: string }> {
  const emit = (page: Page) => ({ path: page.path, html: document(page) })
  yield emit({
    path: '/timeline/', title: '中国与世界历史年表 · 浩汉', description: `沿已收录的${years.length}个年份阅读中国与同期世界。古代为代表性节点，1937—1945年为全面抗战大事记，1936年9月至12月与1937年全年提供八国逐日活动档案。`,
    crumbs: [homeCrumb, timelineCrumb],
    body: <><LinkGrid links={years.map(year => ({ name: yearLabel(year), path: yearPath(year), detail: `${events.filter(item => item.year === year).length}条已收录记录` }))} /><TrustNote /></>,
  })
  for (const year of years) {
    const items = sorted(events.filter(item => item.year === year))
    const path = yearPath(year), name = `${yearLabel(year)}中国与世界历史事件`
    yield emit({ path, title: `${name} · 浩汉`, description: `${yearLabel(year)}已收录${items.length}条历史记录，包含${[...new Set(items.map(item => countryName(item.country, year)))].join('、')}。阅读事件摘要、原始纪年和史料入口。`,
      crumbs: [homeCrumb, timelineCrumb, { name: yearLabel(year), path }], entity: collectionEntity(name, items),
      body: <><LinkGrid links={months.filter(group => group.year === year).map(group => ({ name: `${group.month}月档案`, path: monthPath(year, group.month), detail: `${group.items.length}条按已知开始月收录的记录` }))} /><EventList items={items} /><TrustNote /></>,
    })
  }
  for (const group of months) {
    const { year, month, items } = group, path = monthPath(year, month), name = `${yearLabel(year)}${month}月历史活动`
    yield emit({ path, title: `${name} · 浩汉`, description: `${yearLabel(year)}${month}月收录${items.length}条中国与世界活动。按已知开始月份编排，跨日、约日、待核和月级记录保留原文精度；条目提供独立正文与直接出处。`,
      crumbs: [homeCrumb, timelineCrumb, { name: yearLabel(year), path: yearPath(year) }, { name: `${month}月`, path }], entity: collectionEntity(name, items),
      body: <><LinkGrid links={dailyGroups.filter(day => day.year === year && day.month === month).map(day => ({ name: `${month}月${day.day}日`, path: dayPath(year, month, day.day), detail: `${day.items.length}条定日与跨日记录` }))} /><EventList items={items} /><TrustNote /></>,
    })
  }
  for (const group of dailyGroups) {
    const { year, month, day, items, uncertain } = group, path = dayPath(year, month, day), name = `${yearLabel(year)}${month}月${day}日历史活动`
    yield emit({ path, title: `${name} · 浩汉`, description: `${name}：${items.length}条已收录的定日活动与跨日进程。各国按所引史料的日历记录，未统一换算时区；月级记录不视为当天发生的事件。`,
      crumbs: [homeCrumb, timelineCrumb, { name: yearLabel(year), path: yearPath(year) }, { name: `${month}月`, path: monthPath(year, month) }, { name: `${day}日`, path }],
      entity: collectionEntity(name, items),
      body: <><EventList items={items} />{uncertain.length > 0 && <section><h2>所记日期附近，仍有分歧或约日的活动</h2><p>以下条目不计入上方定日记录，不能当作已经核实的当日事件。</p><EventList items={uncertain} /></section>}<TrustNote /></>,
    })
  }
  yield emit({ path: '/countries/', title: '国家与文明历史档案 · 浩汉', description: '按中国、日本、朝鲜、美国、苏联、德国、英国、法国及古代文明浏览已收录历史。各条目按所处时代区分国家、政权与地区。',
    crumbs: [homeCrumb, { name: '国家与文明', path: '/countries/' }],
    body: <LinkGrid links={countryIds.map(id => ({ name: entities[id].name, path: countryPath(id), detail: `${events.filter(item => item.country === id).length}条已收录记录` }))} />,
  })
  for (const id of countryIds) {
    const items = sorted(events.filter(item => item.country === id)), path = countryPath(id), name = `${entities[id].name}历史档案`
    yield emit({ path, title: `${name} · 浩汉`, description: `${name}收录${items.length}条事件与活动，包含原始纪年、分类、正文和史料出处。区域名称用于阅读导航，不将历史上的王国、政权和现代国家视为同一概念。`,
      crumbs: [homeCrumb, { name: '国家与文明', path: '/countries/' }, { name: entities[id].name, path }], entity: collectionEntity(name, items),
      body: <><p>{entities[id].description}</p><LinkGrid links={months.filter(group => group.items.filter(item => item.country === id).length >= 2).map(group => ({ name: `${yearLabel(group.year)}${group.month}月`, path: countryMonthPath(id, group.year, group.month), detail: `${group.items.filter(item => item.country === id).length}条活动` }))} /><EventList items={items} /><TrustNote /></>,
    })
    for (const group of months) {
      const selected = group.items.filter(item => item.country === id)
      if (selected.length < 2) continue
      const country = countryName(id, group.year), name = `${country}${yearLabel(group.year)}${group.month}月活动`, path = countryMonthPath(id, group.year, group.month)
      yield emit({ path, title: `${name} · 浩汉`, description: `${name}共${selected.length}条已收录记录，按原文日期及精度浏览政治、军事、外交、经济、文化与社会活动，查看直接来源及核验说明。`,
        crumbs: [homeCrumb, { name: '国家与文明', path: '/countries/' }, { name: entities[id].name, path: countryPath(id) }, { name: `${yearLabel(group.year)}${group.month}月`, path }],
        entity: collectionEntity(name, selected), body: <><EventList items={selected} /><TrustNote /></>,
      })
    }
  }
  yield emit({ path: '/topics/', title: '历史专题目录 · 浩汉', description: '按国别阅读西安事变、抗日统一战线、迁驻延安、淞沪会战、二战与文化活动等已收录专题。专题只包含已有记录，不代表完整研究结论。',
    crumbs: [homeCrumb, { name: '历史专题', path: '/topics/' }],
    body: <LinkGrid links={Object.values(topicTags).filter(tag => events.some(item => item.topicIds.includes(tag.id))).map(tag => ({ name: topicLabel(tag.id), path: topicPath(tag.id), detail: tag.description }))} />,
  })
  for (const tag of Object.values(topicTags)) {
    const items = sorted(events.filter(item => item.topicIds.includes(tag.id)))
    if (!items.length) continue
    const path = topicPath(tag.id), name = topicLabel(tag.id)
    yield emit({ path, title: `${name}历史专题 · 浩汉`, description: `${name}：${tag.description}本专题收录${items.length}条活动，提供原文纪年、人物入口及来源；不代表全部相关事件已经收录。`,
      crumbs: [homeCrumb, { name: '历史专题', path: '/topics/' }, { name, path }], entity: collectionEntity(name, items),
      body: <><EventList items={items} /><TrustNote /></>,
    })
  }
  yield emit({ path: '/people/', title: '历史人物生平与传记目录 · 浩汉', description: `${people.length}位历史人物的独立生平，按姓名浏览早年、主要经历、后期生活与传记资料。资料缺口、生卒未详及日期分歧在各篇正文中说明。`,
    crumbs: [homeCrumb, { name: '人物志', path: '/people/' }],
    body: <><LinkGrid links={people.map(person => ({ name: person.name, path: personPath(person.id), detail: `${person.lifespan} · ${person.subtitle}` }))} /><TrustNote /></>,
  })
  for (const person of people) {
    const path = personPath(person.id), aliases = Object.entries(personNames).filter(([name, id]) => id === person.id && name !== person.name).map(([name]) => name)
    yield emit({ path, title: `${person.name}生平与传记资料 · 浩汉`, description: shortText(`${person.name}（${person.lifespan}），${person.subtitle}。${person.description}`),
      crumbs: [homeCrumb, { name: '人物志', path: '/people/' }, { name: person.name, path }],
      entity: { '@type': 'Person', name: person.name, url: absoluteUrl(path), description: plainText(person.description), disambiguatingDescription: person.subtitle, ...(aliases.length ? { alternateName: aliases } : {}) },
      body: <article className="prose"><dl className="facts"><div><dt>生卒与年代</dt><dd>{person.lifespan}</dd></div><div><dt>人物身份</dt><dd>{person.subtitle}</dd></div></dl>
        {aliases.length > 0 && <p className="aliases">本站索引别名：{aliases.join('、')}</p>}
        {person.biographyNote && <aside className="evidence"><h2>资料与身份说明</h2><p>{person.biographyNote}</p></aside>}
        {!person.biography?.some(section => section.text === person.description) && <p><RichText text={person.description} /></p>}
        {person.biography?.length ? person.biography.map((section, index) => <section key={index}><h2>{section.title}<small>{section.period}</small></h2><p><RichText text={section.text} /></p></section>)
          : <section><h2>已知生平节点</h2>{person.milestones.map((item, i) => <p key={i}><strong>{item.date}</strong>　<RichText text={item.text} /></p>)}</section>}
        <section><h2>生平资料与延伸阅读</h2><SourceList ids={personSourceIds(person)} /></section><TrustNote />
        <a className="action-link" href={`/?person=${encodeURIComponent(person.id)}`}>在历史长卷中阅读人物生平 →</a>
      </article>,
    })
  }
  for (const item of events) {
    const path = eventPath(item.id), ids = sourceIds(item), related = sorted(events.filter(other => other.id !== item.id && other.year === item.year && other.country !== item.country)).slice(0, 4)
    const temporalPath = monthExists(item.year, item.month) && knownMonth(item) ? monthPath(item.year, item.month) : yearPath(item.year)
    yield emit({ path, title: `${item.title}（${item.date}） · 浩汉`, description: shortText(`${item.date}，${countryName(item.country, item.year)}。${item.summary}${item.evidenceNote ? ` 日期依据：${item.evidenceNote}` : ''}`),
      crumbs: [homeCrumb, timelineCrumb, { name: yearLabel(item.year), path: yearPath(item.year) }, { name: item.title, path }],
      entity: { '@type': 'Article', headline: item.title, description: plainText(item.summary), inLanguage: 'zh-CN', url: absoluteUrl(path),
        articleSection: item.category, articleBody: plainText(`${item.date}\n${item.detail}${item.evidenceNote ? `\n日期依据：${item.evidenceNote}` : ''}`),
        temporalCoverage: item.date, citation: ids.map(id => sources[id].url),
        about: { '@type': 'Thing', name: item.title },
        ...(item.location ? { contentLocation: { '@type': 'Place', name: item.location } } : {}),
      },
      body: <article className="prose"><dl className="facts"><div><dt>历史日期</dt><dd>{item.date}{item.precision && <small>{precisionLabel(item)}</small>}</dd></div><div><dt>区域与分类</dt><dd><a href={countryPath(item.country)}>{countryName(item.country, item.year)}</a> · {item.category}</dd></div>{item.location && <div><dt>所记地点</dt><dd>{item.location}</dd></div>}</dl>
        <section><h2>事件详述</h2><p><RichText text={item.detail} /></p></section>
        {Boolean(item.actions?.length) && <section><h2>所记行动</h2><ul>{item.actions!.map((action, i) => <li key={i}><strong>{entities[action.actor]?.name ?? action.actor}</strong>：<RichText text={action.text} /></li>)}</ul></section>}
        {item.evidenceNote && <aside className="evidence"><h2>日期与史料依据</h2><p>{item.evidenceNote}</p></aside>}
        <section><h2>直接出处与延伸阅读</h2><SourceList ids={ids} /></section>
        {item.entities.some(id => entities[id]?.type === '人物') && <section><h2>历史中的人物</h2><LinkGrid links={item.entities.filter(id => entities[id]?.type === '人物').map(id => ({ name: entities[id].name, path: personPath(id), detail: entities[id].subtitle }))} /></section>}
        <section><h2>继续阅读</h2><LinkGrid links={[{ name: `${yearLabel(item.year)}${knownMonth(item) && monthExists(item.year, item.month) ? `${item.month}月` : ''}历史档案`, path: temporalPath }, ...item.topicIds.filter(id => topicTags[id]).map(id => ({ name: topicLabel(id), path: topicPath(id) }))]} /></section>
        {related.length > 0 && <section><h2>同年其他地区的已收录记录</h2><EventList items={related} /></section>}
        <TrustNote /><a className="action-link" href={`/?event=${encodeURIComponent(item.id)}`}>在交互历史长卷中打开此事件 →</a>
      </article>,
    })
  }
  yield emit({ path: '/sources/', title: '史料、纪年与核验说明 · 浩汉', description: '了解浩汉历史档案的资料来源、日期精度、引用方法与覆盖限制。区分定日、跨日、约日、待核和月级记录，保留原始史料与二手资料的差别。',
    crumbs: [homeCrumb, { name: '史料与纪年说明', path: '/sources/' }],
    body: <article className="prose">
      <section><h2>这份档案覆盖什么？</h2><p>以中国历史为主线，连接同时代世界。1937年全年有八国787条活动，1936年9—12月另有八国103条活动；1937—1945年为全面抗战大事记，其他年代主要为代表性节点和同期概况。现有样本对政治军事活动的覆盖较密，经济、文化、普通民众与其他地区仍有缺口。</p><p>抗日战争自1931年开始持续十四年；1937—1945年的八年是全面抗战阶段。人物生平独立编写，不由当前事件列表拼接；部分人物只有档案简介，不能视为完整人生。</p></section>
      <section><h2>如何理解历史日期？</h2><p>近代日期按所引史料的公历或当地日历记载，未统一换算为一个全球时区。远古保留约年、世纪和有争议的纪年。月初、中旬、下旬与月级记录在交互时间轴的邻近展示位置不表示已经确定的发生日。</p><p>定日、跨日、约日、日期待核和月级分别保留。报纸刊出、文书署日、会议举行、政策通过、实际施行和经费到账不能互相替代。跨日进程不改写为每天新发生的事件；日期有异时不人为消除分歧。</p></section>
      <section><h2>来源与核验层级</h2><p>资料包括政府与机构档案、法律和议会记录、图书馆目录、博物馆年表、专业研究、报刊及辅助百科资料。每条记录展示对应出处，正文保留“全文已读”“目录依据”“单一来源”“原件待核”及日期冲突等原有说明。</p><p>列出链接不等于原始档案中的所有细节都已校读，也不等于多个来源独立交叉证明。史料中的当事人主张、司法指控、传闻和宣传不自动当作事实。引用时应同时保留相关限制，并核对原始资料。</p></section>
      <section><h2>人物身份与生卒资料</h2><p>姓名相近或同名者按文书、职务与语境区分。生卒未详、年份异文和具体日期分歧原样保留，不按同名资料拼接经历。部分人物由演职员表、访客日志、署名或救援站史识别，只提供明确注明缺口的档案简介。</p></section>
      <section><h2>图片与内容编写</h2><p>交互页面的氛围插画由AI生成，已标注为示意图，不能用作史料照片。正文是基于所列来源整理的阅读材料，仍需持续校核，不是对历史研究完整性的保证。</p></section>
      <section><h2>参考与延伸阅读目录</h2><SourceList ids={Object.keys(sources)} /></section>
    </article>,
  })
  yield emit({ path: '/about/', title: '关于浩汉与内容编写原则 · 浩汉', description: '浩汉是一份以中国历史为主线、连接同时代世界的交互历史阅读项目。了解内容范围、人物生平、史料引用、日期分歧与纠错方式。',
    crumbs: [homeCrumb, { name: '关于浩汉', path: '/about/' }],
    body: <article className="prose"><section><h2>在时间中，读懂世界</h2><p>沿着中国历史的时间长卷，阅读同一时期其他国家与文明的活动。浩汉提供交互时间轴、独立事件档案和人物生平，便于阅读、分享与核对史料。</p></section>
      <section><h2>内容编写原则</h2><p>以具体来源支持具体表述，区分事实、同期概况、观点与传闻。保留日期精度和来源限制，不为填满日期而制造事件。国家、朝代、文明及历史政权分别解释。人物生平保持独立，资料不足时明确写出缺口。</p></section>
      <section><h2>如何引用与反馈问题</h2><p>引用某项活动或人物时，使用该档案的独立网址，并一并核对正文列出的史料。遇到疑似错误，请记录档案网址、具体句子及可核验的出处，交由站点维护者复核；当前站点尚未提供公开投稿或纠错表单。</p></section>
      <LinkGrid links={[{ name: '史料与纪年说明', path: '/sources/' }]} />
    </article>,
  })
  yield emit({ path: '/404.html', title: '未找到这份历史档案 · 浩汉', description: '此地址没有对应的历史档案。请从历史年表或人物志继续浏览。', noindex: true,
    body: <><p>请检查链接是否完整，或从下方入口寻找已有内容。</p><LinkGrid links={[{ name: '历史年表', path: '/timeline/' }, { name: '人物志', path: '/people/' }]} /></>,
  })
}
export function machineDocuments(paths: string[]) {
  const robots = `# Search crawlers, including AI search, may read public content.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.filter(path => path !== '/404.html').map(path => `  <url><loc>${absoluteUrl(path).replace(/&/g, '&amp;')}</loc></url>`).join('\n')}\n</urlset>\n`
  const llms = `# 浩汉\n\n> 以中国历史为主线，连接同时代世界的历史阅读档案。\n\n这是可选的内容导航文件，不是搜索引擎或AI搜索收录的必要条件。请以各档案页面正文和列出的原始来源为准。\n\n## 主要入口\n\n- [历史年表](${SITE_URL}/timeline/)\n- [1937年1月逐日活动](${absoluteUrl(monthPath(1937, 1))})\n- [人物志](${SITE_URL}/people/)\n- [国家与文明](${SITE_URL}/countries/)\n- [历史专题](${SITE_URL}/topics/)\n- [史料、纪年与核验说明](${SITE_URL}/sources/)\n- [关于与内容编写原则](${SITE_URL}/about/)\n- [完整文本档案](${SITE_URL}/llms-full.txt)\n- [XML站点地图](${SITE_URL}/sitemap.xml)\n\n## 引用限制\n\n历史事件日期不是网页发布日期。定日、跨日、约日、待核、月级和远古约年应按原文保留。各国日历未统一换算时区。列出出处不等于全文或多源核验；人物资料缺口及同名身份说明不能省略。空白日期不代表没有事件。AI氛围插画不是史料照片。\n`
  const full = `${llms}\n## 历史事件\n\n${sorted(events).map(item => `### ${item.title}\n\n档案：${absoluteUrl(eventPath(item.id))}\n历史日期：${item.date}${item.precision ? `（${precisionLabel(item)}）` : ''}\n区域：${countryName(item.country, item.year)}；分类：${item.category}${item.location ? `；地点：${item.location}` : ''}\n\n${plainText(item.summary)}\n\n${plainText(item.detail)}\n${item.evidenceNote ? `\n日期与史料依据：${item.evidenceNote}\n` : ''}\n来源：\n${sourceIds(item).map(id => `- ${sources[id].name}：${sources[id].url}`).join('\n')}\n`).join('\n')}\n## 人物生平\n\n${people.map(person => `### ${person.name}\n\n档案：${absoluteUrl(personPath(person.id))}\n生卒与年代：${person.lifespan}\n身份：${person.subtitle}\n\n${plainText(person.description)}\n${person.biographyNote ? `\n资料说明：${person.biographyNote}\n` : ''}\n${person.biography?.map(section => `#### ${section.title}（${section.period}）\n\n${plainText(section.text)}\n`).join('\n') ?? person.milestones.map(item => `${item.date}：${plainText(item.text)}`).join('\n')}\n生平资料：\n${personSourceIds(person).map(id => `- ${sources[id].name}：${sources[id].url}`).join('\n')}\n`).join('\n')}`
  return { 'robots.txt': robots, 'sitemap.xml': sitemap, 'llms.txt': llms, 'llms-full.txt': full }
}
