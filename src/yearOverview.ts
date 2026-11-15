import { dateOrder, formatYear } from './data'
import type { Category, CountryId, HistoryEvent } from './data'
import { annualNarratives, topicalNarratives } from './annualNarratives'

export const overviewCategories: Category[] = ['政治', '军事', '经济', '文化', '社会', '外交', '战役']

export interface YearOverview {
  country: CountryId
  category: Category
  records: HistoryEvent[]
  highlights: HistoryEvent[]
  title: string
  summary: string
  coverage: string
}

// Prefer representative yearbook entries over the densely collected January
// sample, and spread the selected records across the available months.
function selectHighlights(records: HistoryEvent[]) {
  const yearbook = records.filter(item => !item.archive)
  const pool = yearbook.length ? yearbook : records
  const selected: HistoryEvent[] = []
  const add = (item: HistoryEvent | undefined) => {
    if (item && !selected.includes(item) && selected.length < 3) selected.push(item)
  }
  add(pool.find(item => item.featured) ?? pool[0])
  add(pool[pool.length - 1])
  add(pool.find(item => !selected.some(other => other.month === item.month)))
  add(pool.find(item => !selected.includes(item)))
  return selected.sort((a, b) => dateOrder(a) - dateOrder(b))
}

export function yearOverviews(items: HistoryEvent[], country: CountryId, topic = ''): YearOverview[] {
  return overviewCategories.flatMap(category => {
    const records = items.filter(item => item.country === country && item.category === category)
      .sort((a, b) => dateOrder(a) - dateOrder(b))
    if (!records.length) return []
    const highlights = selectHighlights(records)
    const hasMajor = records.some(item => item.featured || !item.archive)
    const months = [...new Set((hasMajor ? highlights : records).map(item => item.month))]
    const key = `${records[0].year}/${country}/${category}`
    const text = (topic && topicalNarratives[`${topic}/${key}`]) || annualNarratives[key]
    // New data should remain readable until its editorial overview is written,
    // without passing a list of event titles off as an annual summary.
    const title = text?.title ?? `${formatYear(records[0].year)}年的${category}脉络`
    const summary = text?.summary ?? '本类记录的年度大事记尚待补充，可沿“探索”阅读已收录的具体活动。'
    const coverage = months.length === 1 ? `${hasMajor ? '关键事件' : '代表性记录'}集中于${months[0]}月`
      : months.length > 1 ? `${hasMajor ? '关键事件' : '代表性记录'}见于${months.join('、')}月` : '按原文纪年收录的代表性节点'
    return [{ country, category, records, highlights, title, summary, coverage }]
  })
}
