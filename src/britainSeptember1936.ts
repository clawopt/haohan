import type { Category, HistoryEvent } from './data'

// September 1936 in Britain: Edward VIII stamps, the Palestine command, the
// TUC's neutrality vote, and the sentencing of the king's would-be attacker.
export const britainSeptember1936Sources = {
  septBrDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septBrStamps: { name: 'Wikipedia · Edward VIII postage stamps', url: 'https://en.wikipedia.org/wiki/Edward_VIII_postage_stamps' },
  septBrTuc: { name: 'Wikipedia · Trades Union Congress', url: 'https://en.wikipedia.org/wiki/Trades_Union_Congress' },
  septBrDill: { name: 'Wikipedia · John Dill', url: 'https://en.wikipedia.org/wiki/John_Dill' },
}

type SourceId = keyof typeof britainSeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep36-br-${id}`, year: 1936, month: 9, country: 'britain', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainSeptember1936Events: HistoryEvent[] = [
  record('edward-stamps', 1, '文化', '首套爱德华八世邮票发行', '英国',
    '英国发行首套印有爱德华八世头像的邮票。',
    '9月1日，英国发行首套印有爱德华八世头像的邮票。爱德华八世在位时间很短，这套邮票成为其短暂统治的邮政与视觉记忆之一。\n\n邮票发行是王室形象与公共文化事件，不等于爱德华八世的政治地位当天发生变化；具体票面、发行量与集邮反响须据邮政档案。本条只记发行。',
    'septBrStamps',
    '爱德华八世邮票条目与1936年9月事件汇编记9月1日首套邮票发行；票面与发行量未逐条核对。',
    ['septBrDec'], []),
  record('dill-palestine', 7, '外交', '英国任命约翰·迪尔为巴勒斯坦英军司令', '英国 · 伦敦',
    '英国殖民部任命约翰·迪尔为巴勒斯坦英军总司令。',
    '9月7日，英国殖民部宣布任命约翰·迪尔为巴勒斯坦英军总司令（GOC Palestine Command）。此时巴勒斯坦阿拉伯起义仍在持续，英国正调整当地军事指挥。\n\n任命是英国托管政策与军事部署的节点，不等于巴勒斯坦局势当天稳定；具体任命文件、兵力与行动须据英国托管档案。本条只记任命。',
    'septBrDill',
    '约翰·迪尔条目与1936年9月事件汇编记9月7日英国殖民部任命迪尔为巴勒斯坦英军司令；任命文件与军事部署未逐条核对。',
    ['septBrDec'], []),
  record('tuc-neutrality', 10, '政治', '英国职工大会投票支持西班牙中立', '英国 · 伦敦',
    '英国职工大会投票支持在西班牙内战中保持中立，担心干预引发欧洲大战。',
    '9月10日，英国职工大会（TUC）投票支持在西班牙内战中保持中立。代表们担心对西班牙的干预会引发更大规模的欧洲战争，因此支持不干涉政策。\n\n投票反映英国劳工运动在反法西斯与避免战争之间的两难，不等于英国工人整体支持佛朗哥；具体辩论、票数与工会反应须据TUC档案。本条只记投票结果。',
    'septBrTuc',
    '英国职工大会资料与1936年9月事件汇编记9月10日TUC投票支持西班牙中立；辩论记录与票数未逐条核对。',
    ['septBrDec'], []),
  record('mcmahon-sentenced', 14, '社会', '向爱德华八世举枪者被判刑', '英国 · 伦敦',
    '乔治·麦克马洪因7月向爱德华八世举枪，被判处12个月苦役。',
    '9月14日，乔治·麦克马洪因7月在一次阅兵活动中向爱德华八世举枪，被判处12个月苦役，罪名是“意图惊扰国王”。事件未造成伤害，但加剧了王室安保与公众秩序的紧张。\n\n判决是1936年英国治安与王室安保的节点，不等于事件动机已完全查明；具体庭审、精神鉴定与安保检讨须据法院与内政部档案。本条只记判决。',
    'septBrDec',
    '1936年9月事件汇编记9月14日麦克马洪因向爱德华八世举枪被判处12个月苦役；庭审与动机记录未逐条核对。',
    ['septBrDec'], []),
]
