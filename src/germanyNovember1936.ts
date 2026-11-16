import type { Category, HistoryEvent } from './data'

// November 1936 in Nazi Germany: the new penal code, the ban on art criticism,
// the Condor Legion, and the Anti-Comintern Pact.
export const germanyNovember1936Sources = {
  nov36GeDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36GePact: { name: 'Wikipedia · Anti-Comintern Pact', url: 'https://en.wikipedia.org/wiki/Anti-Comintern_Pact' },
  nov36GeCondor: { name: 'Wikipedia · Condor Legion', url: 'https://en.wikipedia.org/wiki/Condor_Legion' },
}

type SourceId = keyof typeof germanyNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-ge-${id}`, year: 1936, month: 11, country: 'germany', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyNovember1936Events: HistoryEvent[] = [
  record('new-penal-code', 5, '政治', '纳粹德国公布新刑法典', '德国 · 柏林',
    '纳粹政权公布新刑法典，加重对“诽谤”希特勒及纳粹殉难者的惩罚。',
    '11月5日，纳粹德国公布新刑法典，对“诽谤”希特勒以及已故的兴登堡、霍尔斯特·韦塞尔、施拉格特等人规定重刑，同时把决斗从犯罪清单中删除。法典把领袖崇拜与纳粹纪念纳入刑法保护。\n\n新刑法典是纳粹政权以法律形式强化政治忠诚与意识形态控制的一环，不等于所有条款当天生效执行；具体条文、量刑与司法实践须据德国法律档案。本条只记公布。',
    'nov36GeDec',
    '1936年11月事件汇编记11月5日德国公布新刑法典、加重诽谤希特勒等罪、删除决斗罪；法典原文与施行记录未逐条核对。',
    ['nov36GeDec'], ['hitler']),
  record('art-criticism-ban', 11, '文化', '戈培尔禁止艺术批评', '德国 · 柏林',
    '纳粹宣传部长戈培尔下令禁止艺术批评，只允许“艺术报道”。',
    '11月11日，纳粹宣传部长约瑟夫·戈培尔下令禁止艺术批评，宣布此后只允许“艺术报道”。措施把文艺评价纳入宣传控制，批评者被要求以描述与赞美代替判断。\n\n禁令是纳粹文化统制的一部分，不等于所有艺术评论当天消失；具体执行范围、受影响刊物与艺术家反应须据宣传部档案。本条只记禁令。',
    'nov36GeDec',
    '1936年11月事件汇编记11月11日戈培尔禁止艺术批评、只允许“艺术报道”；宣传部档案与执行细节未逐条核对。',
    ['nov36GeDec'], ['hitler']),
  record('condor-legion', 15, '军事', '德国“秃鹰军团”开始参加西班牙内战', '西班牙',
    '德国派遣的“秃鹰军团”开始积极参与西班牙内战，支援佛朗哥一方。',
    '11月15日，德国派遣的“秃鹰军团”开始积极参与西班牙内战，为佛朗哥的国民军提供航空运输、轰炸与地面支援。军团在此后数年成为德国测试飞机、战术与人员的重要力量。\n\n参战是纳粹德国介入西班牙内战的关键节点，也加剧了欧洲的阵营对立；军团规模、作战经过与暴行须据军事档案与西班牙战争史。本条只记开始参战。',
    'nov36GeCondor',
    '“秃鹰军团”条目与1936年11月事件汇编记11月15日开始积极参与西班牙内战；军团编制、作战记录与伤亡未逐条核对。',
    ['nov36GeDec'], ['hitler']),
  record('anti-comintern-pact', 25, '外交', '德国与日本签署《反共产国际协定》', '德国 · 柏林',
    '纳粹德国与日本在柏林签署《反共产国际协定》，以苏联为对象。',
    '11月25日，纳粹德国与日本在柏林签署《反共产国际协定》，公开部分以反对共产国际为名，另附秘密协定，实际针对苏联。意大利于1937年加入，德意日三国轴心逐步形成。\n\n协定是德国在退出国联后与日本相互靠拢的重要节点，也加剧了苏联的安全忧虑与欧洲阵营分化。协定签字不等于立即形成军事同盟；具体条款、秘密附件与后续加入程序须据外交档案。本条只记签署。',
    'nov36GePact',
    '《反共产国际协定》条目与1936年11月事件汇编记11月25日德日在柏林签署协定；秘密附件与谈判记录未逐条核对。',
    ['nov36GeDec'], ['hitler']),
]
