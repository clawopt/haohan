import type { Category, HistoryEvent } from './data'

// July 1937 in the USSR: railway sabotage executions and a record trans-polar
// flight by the ANT-25.
export const ussrJulySources = {
  julSuJuly: { name: 'Wikipedia · July 1937', url: 'https://en.wikipedia.org/wiki/July_1937' },
  julSuANT: { name: 'Wikipedia · Tupolev ANT-25', url: 'https://en.wikipedia.org/wiki/Tupolev_ANT-25' },
}

type SourceId = keyof typeof ussrJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jul37-su-${id}`, year: 1937, month: 7, country: 'ussr', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrJulyEvents: HistoryEvent[] = [
  record('railway-sabotage-executions', 10, '政治', '西伯利亚处决24名“破坏铁路者”', '苏联 · 西伯利亚',
    '苏联在西伯利亚处决24名被指控破坏铁路的人。',
    '7月10日，苏联在西伯利亚处决24名被指控破坏铁路的人。这一行动发生在大清洗扩大化的背景下，审判与处决程序高度保密，被告的辩护权有限。\n\n“破坏铁路”是当时官方提出的指控，不能当作已经独立证实的犯罪事实。具体名单、审判程序与证据须据苏联档案；本条只记处决行为。',
    'julSuJuly',
    '1937年7月事件汇编记7月10日西伯利亚处决24名被指破坏铁路者；名单与审判档案未逐条核对，指控不作事实认定。',
    ['julSuJuly'], ['stalin']),
  record('ant25-record', 14, '文化', 'ANT-25 完成莫斯科至美国的长距离飞行', '苏联 · 莫斯科 → 美国 · 加州圣哈辛托',
    '格罗莫夫机组驾驶 ANT-25 完成6306英里飞行，创下新距离纪录。',
    '7月14日，苏联飞行员米哈伊尔·格罗莫夫与两名机组驾驶图波列夫 ANT-25 飞机，完成从莫斯科到美国加州圣哈辛托的6306英里飞行，创下新的长距离飞行纪录。此前的6月，契卡洛夫机组已完成跨越北极的飞行。\n\n长距离飞行是苏联航空技术与宣传的成就，不等于跨极商业航线当天已经开通；飞行路线、时间与机组记录须据航空档案。本条只记抵达与纪录。',
    'julSuANT',
    'ANT-25条目与1937年7月事件汇编记7月14日6306英里飞行纪录；飞行日志与机组记录未逐条核对。',
    ['julSuJuly'], []),
]
