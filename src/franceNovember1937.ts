import type { Category, HistoryEvent } from './data'

// November 1937 in France: the Windsor trip cancellation and the closing of
// the Paris world's fair.
export const franceNovemberSources = {
  novFrNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
  novFrExpo: { name: '国际展览局 · 1937年巴黎世界博览会', url: 'https://support.bie-paris.org/site/en/1937-paris' },
}

type SourceId = keyof typeof franceNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov37-fr-${id}`, year: 1937, month: 11, country: 'france', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceNovemberEvents: HistoryEvent[] = [
  record('windsor-cancels-us-trip', 5, '社会', '温莎公爵取消访美计划', '法国 / 美国',
    '温莎公爵在启程前一天取消访美计划，称外界对访问目的存在“严重误解”。',
    '11月5日，温莎公爵在计划启程前往美国的前一天取消访问。他通过英美新闻协会发表声明，称外界对访问目的存在“严重误解”；此行原计划与商人查尔斯·贝多一起进行。\n\n取消访问是温莎公爵退位后公共生活争议的一部分，不等于他当天离开法国或放弃所有公开活动；具体行程、赞助者与英国政府态度须据当时报道与档案。本条只记取消。',
    'novFrNov',
    '1937年11月事件汇编记11月5日温莎公爵取消访美、称存在“严重误解”；声明原文与行程记录未逐条核对。',
    ['novFrNov'], []),
  record('paris-expo-closes', 25, '文化', '巴黎国际博览会闭幕', '法国 · 巴黎',
    '1937年巴黎国际艺术与技术博览会闭幕，展期近六个月。',
    '11月25日，1937年巴黎国际艺术与技术博览会闭幕。博览会于5月25日向公众开放，展期近六个月，德国与苏联展馆的对峙、西班牙馆的《格尔尼卡》等成为重要记忆。\n\n闭幕是文化与外交展示的节点，不等于法国经济或国际地位当天改善；参观人数、财政结果与展馆拆除须据博览会档案。本条只记闭幕。',
    'novFrExpo',
    '国际展览局资料记1937年巴黎博览会11月25日闭幕；参观人数与财政结果未逐条核对。',
    ['novFrNov'], ['blum']),
]
