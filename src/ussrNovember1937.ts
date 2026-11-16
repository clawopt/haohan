import type { Category, HistoryEvent } from './data'

// November 1937 in the USSR: the Revolution anniversary parade and another
// purge victim.
export const ussrNovemberSources = {
  novSuNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
}

type SourceId = keyof typeof ussrNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov37-su-${id}`, year: 1937, month: 11, country: 'ussr', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrNovemberEvents: HistoryEvent[] = [
  record('gorkic-death', 1, '政治', '南斯拉夫共产党领导人戈尔基奇在大清洗中死亡', '苏联 · 莫斯科',
    '南斯拉夫共产党总书记米兰·戈尔基奇在大清洗中被处决。',
    '11月1日，南斯拉夫共产党总书记米兰·戈尔基奇在大清洗中死亡，通常认为被处决。他长期在莫斯科活动，是共产国际体系中的南斯拉夫共产党领导人。\n\n戈尔基奇之死是1937年大清洗波及外国共产党人的案例，具体指控与审判过程须据苏联档案；不能把当时的“间谍”“托派”指控当作已证实的事实。本条只记死亡日期与身份。',
    'novSuNov',
    '1937年11月事件汇编记11月1日戈尔基奇在大清洗中死亡；审判档案与指控内容未逐条核对，指控不作事实认定。',
    ['novSuNov'], ['stalin']),
  record('revolution-parade', 7, '政治', '莫斯科举行十月革命二十周年游行', '苏联 · 莫斯科',
    '约一百万人在莫斯科游行，纪念十月革命二十周年。',
    '11月7日，苏联在莫斯科举行约一百万人参加的游行，纪念十月革命二十周年。游行展示苏联的军事与经济成就，斯大林等领导人出席。\n\n游行是苏联政治宣传与动员的节点，不等于国内大清洗或经济困难当天缓解；具体阅兵规模、外国来宾与宣传内容须据苏联档案。本条只记游行。',
    'novSuNov',
    '1937年11月事件汇编记11月7日莫斯科约百万人游行、纪念十月革命二十周年；阅兵与宣传记录未逐条核对。',
    ['novSuNov'], ['stalin']),
]
