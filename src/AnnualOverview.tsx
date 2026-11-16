import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { formatYear } from './data'
import type { Category, CountryId, HistoryEvent } from './data'
import { archiveHref, isPlainClick } from './site'
import { overviewCategories, yearOverviews } from './yearOverview'

export default function AnnualOverview({ year, countries, items, explore, exploreJanuary, topic }: {
  year: number; countries: CountryId[]; items: HistoryEvent[]
  explore: (country: CountryId, category: Category) => void
  exploreJanuary: () => void; topic: string
}) {
  const outlines = Object.fromEntries(countries.map(id => [id, yearOverviews(items, id, topic)]))
  const rows = overviewCategories.filter(category => countries.some(id => outlines[id].some(item => item.category === category)))
  const topicQuery = topic ? `&topic=${encodeURIComponent(topic)}` : ''
  const firstMonth = items.length ? Math.min(...items.map(item => item.month)) : 1
  return <div className="annual-overview" data-view="overview" data-year={year}
    style={{ gridTemplateColumns: `repeat(${countries.length}, var(--column-width))` }}>
    <div className="annual-preamble"><div><span>{formatYear(year)}年 / 年度大事记</span><p>只记这一年的关键事件，按分类对读各国。<ArrowDown size={12} /></p></div></div>
    {rows.map(category => <Fragment key={category}>
      {countries.map(id => {
        const outline = outlines[id].find(item => item.category === category)
        return <div className={`annual-slot ${id === 'china' ? 'china-track' : ''} ${outline ? '' : 'annual-slot-empty'}`}
          key={`${id}-${category}`} data-country={id} data-category={category} aria-hidden={!outline || undefined}>
          <span className="annual-rail" aria-hidden="true" />
          {outline && <>
            <span className="event-connector" aria-hidden="true"><i /><b /></span>
            <article className="event-card annual-card" aria-label={`${category}年度大事记`} data-overview-category={category}>
              <span className="card-corner corner-tl" aria-hidden="true" /><span className="card-corner corner-br" aria-hidden="true" />
              <div className="annual-card-body">
                <div className="annual-card-meta"><span>{String(overviewCategories.indexOf(category) + 1).padStart(2, '0')} / {category}</span></div>
                <h2>{outline.title}</h2><p className="annual-summary">{outline.summary}</p>
                <p className="annual-coverage">{outline.coverage}</p>
              </div>
              <a className="annual-card-explore" href={archiveHref(`/?year=${year}&view=records&country=${id}&category=${encodeURIComponent(category)}${topicQuery}`)}
                aria-label={`探索${category}年度记录`}
                onClick={event => { if (isPlainClick(event)) { event.preventDefault(); explore(id, category) } }}>
                <span>探索</span><ArrowRight size={14} />
              </a>
            </article>
          </>}
        </div>
      })}
    </Fragment>)}
    {!rows.length && <div className="annual-no-records"><p>当前筛选条件下暂无年度大事记。</p></div>}
    <div className="annual-tail"><div className="annual-tail-inner">
      <a className="annual-explore-all" href={archiveHref(`/?year=${year}&month=${firstMonth}${topicQuery}`)} onClick={event => {
        if (isPlainClick(event)) { event.preventDefault(); exploreJanuary() }
      }}><span>详细探索<small>{formatYear(year)}年{firstMonth}月 · {topic ? '当前专题' : '全部记录'}</small></span><ArrowRight size={19} /></a>
    </div></div>
  </div>
}
