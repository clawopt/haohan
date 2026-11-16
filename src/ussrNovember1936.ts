import type { Category, HistoryEvent } from './data'

// November 1936 in the USSR: the Eighth Extraordinary Congress of Soviets
// opens to discuss the draft "Stalin Constitution".
export const ussrNovember1936Sources = {
  nov36SuDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36SuCongress: { name: '俄罗斯总统图书馆 · 1936年“斯大林宪法”通过', url: 'https://www.prlib.ru/en/history/619782' },
}

type SourceId = keyof typeof ussrNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-su-${id}`, year: 1936, month: 11, country: 'ussr', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrNovember1936Events: HistoryEvent[] = [
  record('congress-opens', 25, '政治', '苏维埃第八次非常代表大会开幕', '苏联 · 莫斯科',
    '苏联苏维埃第八次非常代表大会在莫斯科开幕，讨论新宪法草案。',
    '11月25日下午，苏联苏维埃第八次非常代表大会在莫斯科开幕，议程为讨论新宪法草案，斯大林作关于宪法草案的报告。大会在12月5日通过新宪法，即1936年宪法。\n\n大会开幕是苏联宪法程序的重要节点，不等于宪法当天通过；宪法全文、讨论与表决在12月上旬完成。具体代表人数、报告内容与表决过程须据苏联档案；本条只记开幕。',
    'nov36SuCongress',
    '俄罗斯总统图书馆与1936年11月事件汇编记11月25日第八次非常苏维埃代表大会开幕、讨论宪法草案；会议记录与报告全文未逐条核对。',
    ['nov36SuDec'], ['stalin']),
]
