import type { Category, HistoryEvent } from './data'

// December 1937 in the USSR: the first elections to the Supreme Soviet under
// the 1936 constitution.
export const ussrDecemberSources = {
  decSuDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof ussrDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec37-su-${id}`, year: 1937, month: 12, country: 'ussr', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrDecemberEvents: HistoryEvent[] = [
  record('supreme-soviet-election', 12, '政治', '苏联举行最高苏维埃第一次选举', '苏联 · 全国',
    '苏联根据1936年宪法举行最高苏维埃第一次选举，官方公布投票率与得票率极高。',
    '12月12日，苏联根据1936年宪法举行最高苏维埃第一次选举。官方公布约9400万选民中有9100万人参加投票，联共（布）与无党派联盟提出的候选人几乎全部当选，官方称共产党获得99.3%的选票。\n\n选举是1936年宪法后的首次最高苏维埃选举，但在大清洗背景下，候选人提名与选举结果受到严格控制，不能视为竞争性多党选举。具体投票率、候选人名单与选举程序须据苏联档案。本条只记选举。',
    'decSuDec',
    '1937年12月事件汇编与苏联选举资料记12月12日选举、投票率与官方得票率；选举档案与候选人名单未逐条核对。',
    ['decSuDec'], ['stalin']),
]
