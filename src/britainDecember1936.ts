import type { Category, HistoryEvent } from './data'

// December 1936 in Britain: the abdication of Edward VIII and the accession of
// George VI.
export const britainDecember1936Sources = {
  dec36BrDec: { name: 'Wikipedia · December 1936', url: 'https://en.wikipedia.org/wiki/December_1936' },
  dec36BrAbdication: { name: 'Wikipedia · Abdication of Edward VIII', url: 'https://en.wikipedia.org/wiki/Abdication_of_Edward_VIII' },
}

type SourceId = keyof typeof britainDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec36-br-${id}`, year: 1936, month: 12, country: 'britain', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainDecember1936Events: HistoryEvent[] = [
  record('abdication-instrument', 10, '政治', '爱德华八世签署退位书', '英国 · 伦敦',
    '爱德华八世签署退位文件，宣布放弃王位。',
    '12月10日，英国国王爱德华八世签署《退位文书》，宣布为自己和后代放弃王位。退位文书当天在下议院宣读，英国政府随后推动立法程序。\n\n签署退位书是退位危机的决定性节点，不等于王位继承当天完成；《退位法案》在12月11日凌晨获御准，乔治六世继位。具体文书、见证人与法律程序须据王室与议会档案。本条只记签署。',
    'dec36BrAbdication',
    '退位危机资料与1936年12月事件汇编记12月10日签署退位文书、下议院宣读；文书原文与程序记录未逐条核对。',
    ['dec36BrDec'], []),
  record('abdication-act', 11, '政治', '英国《退位法案》生效，乔治六世继位', '英国 · 伦敦',
    '英国议会通过《退位法案》，爱德华八世统治结束，乔治六世继位。',
    '12月11日凌晨1时52分，英国《退位法案》获得御准，爱德华八世的统治正式结束，其弟约克公爵阿尔伯特继位为乔治六世。英国及自治领随后完成相关法律程序。\n\n法案生效是英国宪政与王位继承的节点，不等于加冕典礼当天举行；乔治六世的加冕在1937年5月12日。具体法案文本、自治领立法与继位仪式须据档案。本条只记法案生效。',
    'dec36BrDec',
    '1936年12月事件汇编记12月11日凌晨退位法案获御准、乔治六世继位；法案文本与自治领立法未逐条核对。',
    ['dec36BrAbdication'], ['george']),
  record('abdication-speech', 11, '文化', '爱德华八世发表退位广播讲话', '英国 · 伦敦',
    '爱德华八世通过广播向全世界发表退位讲话，解释退位原因。',
    '12月11日，爱德华八世通过BBC广播发表退位讲话，向全世界听众解释自己无法在没有“我所爱的女人”帮助与支持下承担国王职责。讲话成为20世纪最著名的王室广播之一。\n\n讲话是退位危机的公众沟通节点，不等于所有听众接受其理由；英国社会、教会与自治领对退位的反应复杂。具体广播文本、收听规模与后续反应须据BBC与王室档案。本条只记讲话。',
    'dec36BrDec',
    '1936年12月事件汇编与退位资料记12月11日爱德华退位广播讲话；广播录音与文本未逐条核对。',
    ['dec36BrAbdication'], []),
  record('edward-leaves', 12, '社会', '爱德华离开英国，乔治六世宣布封其为温莎公爵', '英国 · 伦敦',
    '退位后的爱德华离开英国前往奥地利，乔治六世宣布将封他为温莎公爵。',
    '12月12日，退位后的爱德华离开英国前往奥地利。同日，乔治六世宣布将封哥哥为“温莎公爵”；正式封号在1937年3月8日创建。\n\n爱德华离开是退位危机后的个人安排，不等于他与英国王室关系当天完全断绝；他此后以温莎公爵身份生活在国外，1937年与沃利斯结婚。具体行程、封号与王室安排须据档案。本条只记离开与封号宣布。',
    'dec36BrDec',
    '1936年12月事件汇编记12月12日爱德华离英、乔治六世宣布温莎公爵封号；行程与封号文件未逐条核对。',
    ['dec36BrAbdication'], ['george']),
  record('public-order-act', 18, '政治', '英国《公共秩序法》获御准', '英国 · 伦敦',
    '英国《公共秩序法》获御准，限制政治制服与煽动性集会。',
    '12月18日，英国《公共秩序法》（Public Order Act 1936）获得御准。该法禁止在公共集会中穿着政治制服、限制政治游行与煽动性言论，主要针对法西斯组织与政治暴力。\n\n法案是英国应对1930年代政治极端主义的措施，不等于政治冲突当天停止；具体条款、执行与对公民自由的影响须据英国议会档案。本条只记御准。',
    'dec36BrDec',
    '1936年12月事件汇编记12月18日《公共秩序法》获御准；法案条文与议会辩论未逐条核对。',
    [], []),
]
