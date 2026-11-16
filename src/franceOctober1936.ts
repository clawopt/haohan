import type { Category, HistoryEvent } from './data'

// October 1936 in France: a Paris demonstration for Spain, Belgium's
// withdrawal from the military treaty, and a mock air-raid blackout.
export const franceOctober1936Sources = {
  oct36FrDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36FrBelgium: { name: 'Wikipedia · Belgium–France relations', url: 'https://en.wikipedia.org/wiki/Belgium%E2%80%93France_relations' },
}

type SourceId = keyof typeof franceOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct36-fr-${id}`, year: 1936, month: 10, country: 'france', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceOctober1936Events: HistoryEvent[] = [
  record('paris-spain-demo', 4, '政治', '巴黎十万人游行支持西班牙共和国', '法国 · 巴黎',
    '十万名左翼群众在巴黎游行支持西班牙共和国，与亲国民军者发生冲突。',
    '10月4日，约十万名左翼群众在巴黎游行，支持西班牙共和国，并与支持佛朗哥国民军的人发生街头冲突。游行反映法国社会对西班牙内战的分歧，也加大人民阵线政府在不干涉政策上的压力。\n\n游行是法国社会动员的节点，不等于法国政府当天改变不干涉政策；具体组织者、路线与冲突规模须据警方与报刊档案。本条只记游行与冲突。',
    'oct36FrDec',
    '1936年10月事件汇编记10月4日巴黎约十万人游行支持西班牙共和国并与亲国民军者冲突；组织者与冲突细节未逐条核对。',
    [], ['blum']),
  record('belgium-withdraws', 14, '外交', '比利时废止法比军事互助条约', '比利时 · 布鲁塞尔',
    '比利时因法国未对德国重占莱茵兰作出反应，废止与法国的军事互助条约。',
    '10月14日，比利时宣布废止与法国的军事互助条约，转向中立政策。比利时方面认为，法国在1936年3月德国重占莱茵兰时未采取有效行动，条约已失去保障意义。\n\n这一决定削弱了法国在中欧与西欧的同盟体系，也反映1930年代欧洲集体安全的松动；具体照会、条约文本与后续政策须据比利时与法国外交档案。本条只记废止。',
    'oct36FrBelgium',
    '比利时—法国关系资料与1936年10月事件汇编记10月14日比利时废止军事互助条约；照会与条约文本未逐条核对。',
    ['oct36FrDec'], []),
  record('paris-blackout', 16, '社会', '巴黎举行防空演习，全城熄灯一小时', '法国 · 巴黎',
    '巴黎为模拟空袭实行灯火管制，全城熄灯一小时。',
    '10月16日晚9时30分起，巴黎为举行模拟空袭的防空演习实行灯火管制，全城熄灯约一小时。演习检验了城市在空袭条件下的防空与疏散能力，也反映欧洲战争阴云下民防意识的上升。\n\n演习是民防准备活动，不等于巴黎当天进入战争状态；具体参演部队、警报与演练结果须据市政与军方档案。本条只记熄灯演习。',
    'oct36FrDec',
    '1936年10月事件汇编记10月16日晚巴黎为模拟空袭熄灯一小时；演习规模与档案未逐条核对。',
    [], []),
]
