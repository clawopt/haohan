import type { Category, HistoryEvent } from './data'

// September 1937 in the USSR: attacks on Soviet shipping in the Mediterranean
// and another purge victim among senior diplomats.
export const ussrSeptemberSources = {
  sepSuSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof ussrSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep37-su-${id}`, year: 1937, month: 9, country: 'ussr', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrSeptemberEvents: HistoryEvent[] = [
  record('blagoev-sunk', 3, '军事', '苏联货轮“布拉戈耶夫”号在地中海被击沉', '地中海 · 希腊附近',
    '苏联货轮“布拉戈耶夫”号在希腊附近被袭击沉没。',
    '9月3日，苏联货轮“布拉戈耶夫”号在希腊附近的地中海被袭击沉没。此前8月30日苏联货轮“季米里亚泽夫”号已被鱼雷击沉，苏联舆论指责意大利实施袭击。\n\n袭击方与鱼雷来源在资料中未完全明确，不能据此认定某一国蓄意攻击苏联船只；具体调查与外交交涉须据档案。本条只记击沉。',
    'sepSuSept',
    '1937年9月事件汇编记9月3日“布拉戈耶夫”号在希腊附近被击沉；袭击方与调查记录未逐条核对。',
    ['sepSuSept'], ['stalin']),
  record('pravda-blames-italy', 4, '外交', '《真理报》指责意大利袭击苏联船只', '苏联 · 莫斯科',
    '《真理报》指责意大利应对苏联货轮被击沉负责，并警告将让“法西斯匪徒”付出代价。',
    '9月4日，苏联《真理报》指责意大利应对8月30日“季米里亚泽夫”号被击沉负责，并警告“政府将让法西斯匪徒付出沉重代价”。苏联舆论把地中海袭击与意大利支持佛朗哥、袭击中立国船只联系起来。\n\n报纸指责是宣传与外交施压，不等于苏联当天已经采取军事报复；意大利随后否认责任。具体报道原文与两国交涉须据档案。本条只记报纸表态。',
    'sepSuSept',
    '1937年9月事件汇编引《真理报》9月4日表态；报纸原文与苏意外交交涉未逐条核对。',
    ['sepSuSept'], ['stalin']),
  record('karakhan-death', 20, '政治', '外交官卡拉汉在大清洗中被处决', '苏联 · 莫斯科',
    '苏联外交官列夫·卡拉汉在大清洗中被处决。',
    '9月20日，苏联外交官列夫·卡拉汉在大清洗中被处决。他曾任副外交人民委员、驻土耳其大使等职，是苏联早期外交的重要人物。\n\n卡拉汉之死是1937年大清洗的一部分，具体指控与审判过程须据苏联档案；不能把当时的“间谍”“托派”指控当作已证实的事实。本条只记死亡日期与身份。',
    'sepSuSept',
    '1937年9月事件汇编记9月20日卡拉汉在大清洗中被处决；审判档案与指控内容未逐条核对，指控不作事实认定。',
    ['sepSuSept'], ['stalin']),
]
