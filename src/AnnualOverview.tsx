import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { formatYear } from './data'
import type { Category, CountryId, HistoryEvent } from './data'
import { archiveHref, eventPath, isPlainClick } from './site'
import { overviewCategories, yearOverviews } from './yearOverview'

export default function AnnualOverview({ year, countries, items, explore, exploreJanuary, openEvent, topic }: {
  year: number; countries: CountryId[]; items: HistoryEvent[]
  explore: (country: CountryId, category: Category) => void
  exploreJanuary: () => void; openEvent: (item: HistoryEvent) => void; topic: string
}) {
  const outlines = Object.fromEntries(countries.map(id => [id, yearOverviews(items, id, topic)]))
  const rows = overviewCategories.filter(category => countries.some(id => outlines[id].some(item => item.category === category)))
  const topicQuery = topic ? `&topic=${encodeURIComponent(topic)}` : ''
  return <div className="annual-overview" data-view="overview" data-year={year}
    style={{ gridTemplateColumns: `repeat(${countries.length}, var(--column-width))` }}>
    <div className="annual-preamble"><div><span>{formatYear(year)}年 / 年度大纲</span><p>沿分类对读各国，探索这一年的历史。<ArrowDown size={12} /></p></div></div>
    {rows.map(category => <Fragment key={category}>
      {countries.map(id => {
        const outline = outlines[id].find(item => item.category === category)
        return <div className={`annual-slot ${id === 'china' ? 'china-track' : ''} ${outline ? '' : 'annual-slot-empty'}`}
          key={`${id}-${category}`} data-country={id} data-category={category} aria-hidden={!outline || undefined}>
          <span className="annual-rail" aria-hidden="true" />
          {outline && <>
            <span className="event-connector" aria-hidden="true"><i /><b /></span>
            <article className="event-card annual-card" aria-label={`${category}年度概述`} data-overview-category={category}>
              <span className="card-corner corner-tl" aria-hidden="true" /><span className="card-corner corner-br" aria-hidden="true" />
              <div className="annual-card-body">
                <div className="annual-card-meta"><span>{String(overviewCategories.indexOf(category) + 1).padStart(2, '0')} / {category}</span><small>{outline.records.length}条已收录记录</small></div>
                <h2>{outline.title}</h2><p className="annual-summary">{outline.summary}</p>
                <ul className="annual-highlights">{outline.highlights.map(item => <li key={item.id}>
                  <a href={archiveHref(eventPath(item.id))} onClick={event => { if (isPlainClick(event)) { event.preventDefault(); openEvent(item) } }}>
                    <span>{item.date}</span>{item.title}<ArrowRight size={11} />
                  </a>
                </li>)}</ul>
                <p className="annual-coverage">{outline.coverage}</p>
              </div>
              <a className="annual-card-explore" href={archiveHref(`/?year=${year}&view=records&country=${id}&category=${encodeURIComponent(category)}${topicQuery}`)}
                aria-label={`探索${category}年度记录：${outline.records.length}条`}
                onClick={event => { if (isPlainClick(event)) { event.preventDefault(); explore(id, category) } }}>
                <span>探索</span><ArrowRight size={14} />
              </a>
            </article>
          </>}
        </div>
      })}
    </Fragment>)}
    {!rows.length && <div className="annual-no-records"><p>当前筛选条件下暂无年度概述。</p></div>}
    <div className="annual-tail"><div className="annual-tail-inner"><span className="annual-tail-mark" aria-hidden="true"><i /><ArrowDown size={14} /></span>
      <p>大纲至此，继续走进这一年的每一个月。</p>
      <a className="annual-explore-all" href={archiveHref(`/?year=${year}&month=1${topicQuery}`)} onClick={event => {
        if (isPlainClick(event)) { event.preventDefault(); exploreJanuary() }
      }}><span>详细探索<small>{formatYear(year)}年1月 · {topic ? '当前专题' : '全部记录'}</small></span><ArrowRight size={19} /></a>
    </div></div>
  </div>
}
