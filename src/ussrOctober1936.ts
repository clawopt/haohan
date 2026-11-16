import type { Category, HistoryEvent } from './data'

// October 1936 in the USSR: the State Symphony's first public performance, a
// diplomatic ultimatum over Spain, and T-26 tanks arriving in Cartagena.
export const ussrOctober1936Sources = {
  oct36SuDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36SuSymphony: { name: 'Wikipedia · State Academic Symphony Orchestra of Russia', url: 'https://en.wikipedia.org/wiki/State_Academic_Symphony_Orchestra_of_Russia' },
  oct36SuT26: { name: 'Wikipedia · T-26', url: 'https://en.wikipedia.org/wiki/T-26' },
}

type SourceId = keyof typeof ussrOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct36-su-${id}`, year: 1936, month: 10, country: 'ussr', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrOctober1936Events: HistoryEvent[] = [
  record('state-symphony-debut', 5, '文化', '苏联国家交响乐团首次公开演出', '苏联 · 莫斯科',
    '苏联国家交响乐团在莫斯科举行首次公开演出。',
    '10月5日，苏联国家交响乐团（今俄罗斯国家学术交响乐团）在莫斯科举行首次公开演出。乐团在此后成为苏联重要的交响乐演出团体。\n\n首演是苏联音乐生活与文化建设的事件，不等于乐团当天形成全国影响；具体曲目、指挥与演出场地须据乐团档案。本条只记首次公开演出。',
    'oct36SuSymphony',
    '1936年10月事件汇编与乐团资料记10月5日苏联国家交响乐团在莫斯科首次公开演出；曲目与演出记录未逐条核对。',
    ['oct36SuDec'], []),
  record('spain-ultimatum', 7, '外交', '苏联就西班牙问题向葡意德发出警告', '苏联 · 莫斯科',
    '苏联警告葡萄牙、意大利和德国，若继续援助西班牙国民军，苏联将采取积极介入。',
    '10月7日，苏联政府就西班牙内战发出警告，要求葡萄牙、意大利和德国停止援助佛朗哥一方，并威胁否则将积极介入。苏联此前已向西班牙共和国提供武器与顾问，这一表态使围绕西班牙的国际对抗进一步公开化。\n\n警告是外交施压，不等于苏联当天决定全面参战；具体照会文本、各国回应与后续援助须据外交档案。本条只记警告。',
    'oct36SuDec',
    '1936年10月事件汇编记10月7日苏联向葡萄牙、意大利和德国发出警告、威胁积极介入西班牙；照会文本与各国回应未逐条核对。',
    [], ['stalin']),
  record('t26-cartagena', 12, '军事', '苏联T-26坦克运抵西班牙卡塔赫纳', '西班牙 · 卡塔赫纳',
    '50辆苏联T-26坦克和一批BA-3装甲车运抵卡塔赫纳，援助西班牙共和国。',
    '10月12日，50辆苏联T-26坦克和一批BA-3装甲车运抵西班牙卡塔赫纳，交付西班牙共和国军队。T-26此后参加马德里周边作战，是苏联援助西班牙共和国的重要装备之一。\n\n装备运抵是苏联介入西班牙内战的重要节点，不等于当天形成战斗力；训练、编制与作战使用在随后数周展开。具体数量、运输船与作战记录须据军事档案。本条只记运抵。',
    'oct36SuT26',
    '《T-26》条目与1936年10月事件汇编记10月12日50辆T-26坦克及BA-3装甲车运抵卡塔赫纳；运输与作战细节未逐条核对。',
    ['oct36SuDec'], ['stalin']),
]
