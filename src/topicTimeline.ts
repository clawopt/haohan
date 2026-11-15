import { events } from './data'

const counts: Record<string, Record<number, number>> = {}
for (const item of events) {
  for (const id of item.topicIds) {
    counts[id] ??= {}
    counts[id][item.year] = (counts[id][item.year] ?? 0) + 1
  }
}
const years = Object.fromEntries(Object.entries(counts).map(([id, values]) =>
  [id, Object.keys(values).map(Number).sort((a, b) => a - b)]))

export function topicYears(id: string): readonly number[] {
  return years[id] ?? []
}
export function topicYearCount(id: string, year: number) {
  return counts[id]?.[year] ?? 0
}
export function nearestTopicYear(id: string, current: number) {
  return topicYears(id).reduce<number | undefined>((nearest, year) =>
    nearest === undefined || Math.abs(year - current) < Math.abs(nearest - current) ? year : nearest, undefined)
}
