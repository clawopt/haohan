import type { Category, HistoryEvent } from './data'

// October 1937 in Nazi Germany: a neutrality guarantee to Belgium, the
// Nazification of Danzig, and the Duke of Windsor's visit to Hitler.
export const germanyOctoberSources = {
  octGeOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof germanyOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct37-ge-${id}`, year: 1937, month: 10, country: 'germany', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyOctoberEvents: HistoryEvent[] = [
  record('belgium-guarantee', 13, '外交', '德国向比利时保证中立', '德国 · 柏林',
    '德国向比利时发出照会，保证只要比利时不对德采取军事行动，德国将尊重其中立。',
    '10月13日，德国向比利时发出照会，保证只要比利时不对德国采取军事行动，德国将尊重比利时中立。此前比利时已退出洛迦诺安全义务，寻求中立地位。\n\n保证是德国对比利时的外交承诺，不等于纳粹德国真的放弃西线侵略计划；1940年德国仍入侵比利时。具体照会文本与后续政策须据德国外交部档案。本条只记保证。',
    'octGeOct',
    '1937年10月事件汇编记10月13日德国向比利时保证中立；照会原文与后续政策未逐条核对。',
    ['octGeOct'], ['hitler']),
  record('danzig-centre-party', 21, '政治', '但泽天主教中央党被勒令解散', '但泽自由市',
    '纳粹当局勒令但泽天主教中央党解散，纳粹党成为当地唯一合法政党。',
    '10月21日，但泽自由市的天主教中央党被勒令解散，纳粹党成为当地唯一允许存在的政党。但泽当时处于国际联盟托管下，但纳粹党已逐步控制当地议会与行政。\n\n解散政党是但泽纳粹化的重要节点，不等于但泽当天并入德国；1939年德国才正式吞并但泽。具体法令、政党反应与国际联盟态度须据但泽档案。本条只记解散。',
    'octGeOct',
    '1937年10月事件汇编记10月21日但泽天主教中央党被勒令解散、纳粹党成为唯一政党；法令与国际联盟档案未逐条核对。',
    ['octGeOct'], ['hitler']),
  record('windsor-hitler', 22, '外交', '温莎公爵在贝格霍夫会见希特勒', '德国 · 贝希特斯加登',
    '温莎公爵与夫人在贝格霍夫会见希特勒，希特勒以纳粹礼相送。',
    '10月22日，温莎公爵爱德华与夫人沃利斯在德国贝希特斯加登的贝格霍夫会见希特勒。会面结束时，希特勒行纳粹礼，爱德华回礼。\n\n会面发生在爱德华退位后、英德关系紧张之际，成为温莎公爵与纳粹关系争议的焦点。会面本身是外交礼仪活动，不等于爱德华代表英国政府作出承诺；具体会谈内容与英国政府反应须据档案。本条只记会面。',
    'octGeOct',
    '1937年10月事件汇编记10月22日温莎公爵在贝格霍夫会见希特勒、双方行礼；会谈记录与英国政府档案未逐条核对。',
    ['octGeOct'], ['hitler']),
]
