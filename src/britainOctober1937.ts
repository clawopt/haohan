import type { Category, HistoryEvent } from './data'

// October 1937 in Britain: fascist marches, a submarine attack on a destroyer,
// Rutherford's death, a record flight, and the new Parliament.
export const britainOctoberSources = {
  octBrOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof britainOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct37-br-${id}`, year: 1937, month: 10, country: 'britain', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainOctoberEvents: HistoryEvent[] = [
  record('bermondsey-march', 3, '政治', '黑衫军伯蒙德赛游行引发冲突', '英国 · 伦敦 · 伯蒙德赛',
    '英国法西斯联盟在伯蒙德赛游行，反法西斯群众投掷杂物，百余人被捕。',
    '10月3日，英国法西斯联盟（黑衫军）数千人在伦敦伯蒙德赛游行，纪念组织成立五周年。反法西斯群众向游行队伍投掷鸡蛋、砖块等物，3000名警察维持秩序，100多人被捕。\n\n伯蒙德赛冲突是1930年代英国法西斯与反法西斯对抗的典型事件，不等于英国社会已经法西斯化；具体冲突经过、伤亡与警方处置须据当时报道与档案。本条只记游行与逮捕人数。',
    'octBrOct',
    '1937年10月事件汇编记10月3日伯蒙德赛游行、3000名警察与100多人被捕；冲突细节未逐条核对。',
    ['octBrOct'], []),
  record('hms-basilisk', 4, '军事', '英国驱逐舰“巴西利斯克”号遭潜艇攻击', '地中海',
    '一艘不明国籍潜艇向英国驱逐舰“巴西利斯克”号发射鱼雷，未命中。',
    '10月4日，一艘不明国籍潜艇在地中海向英国驱逐舰“巴西利斯克”号发射鱼雷，未命中。这是尼尔荣协议生效后首次发生此类袭击；“巴西利斯克”号投掷深水炸弹反击，效果不明。\n\n袭击是西班牙内战期间地中海航运危机的一部分，不等于英国当天决定扩大军事行动；具体潜艇身份与调查须据海军档案。本条只记袭击。',
    'octBrOct',
    '1937年10月事件汇编记10月4日“巴西利斯克”号遭潜艇鱼雷攻击、未命中并投掷深水炸弹；海军档案未逐条核对。',
    ['octBrOct'], []),
  record('mosley-liverpool', 10, '政治', '莫斯利在利物浦演讲时被石块击昏', '英国 · 利物浦',
    '莫斯利在利物浦法西斯集会上被石块击中头部，一度失去知觉。',
    '10月10日，奥斯瓦尔德·莫斯利在利物浦站在卡车上向法西斯集会发表演讲时，被一块石头击中头部，一度失去知觉。事件反映英国法西斯集会面临的激烈反对。\n\n袭击是政治暴力事件，不等于英国法西斯运动当天停止；莫斯利随后继续活动。具体袭击者、伤情与警方处理须据当时报道与档案。本条只记事件。',
    'octBrOct',
    '1937年10月事件汇编记10月10日莫斯利在利物浦被石块击昏；伤情与警方记录未逐条核对。',
    ['octBrOct'], []),
  record('rutherford-death', 19, '文化', '物理学家卢瑟福去世', '英国 · 剑桥',
    '新西兰裔英国物理学家欧内斯特·卢瑟福去世，享年66岁。',
    '10月19日，新西兰裔英国物理学家欧内斯特·卢瑟福在剑桥去世，享年66岁。他通过金箔实验发现原子核，提出原子核模型，并培养了大批物理学家，被誉为“核物理之父”。\n\n卢瑟福的去世是科学史节点，不等于其研究当天停止；核物理在二战前后继续发展。具体病因、葬礼与学术评价须据传记与档案。本条只记去世。',
    'octBrOct',
    '卢瑟福条目与1937年10月事件汇编记10月19日去世、享年66岁；病史与葬礼记录未逐条核对。',
    ['octBrOct'], []),
  record('jean-batten-record', 24, '文化', '吉恩·巴顿创澳大利亚至英国飞行纪录', '英国 · 克罗伊登',
    '新西兰飞行员吉恩·巴顿从澳大利亚飞抵英国，用时5天18小时15分。',
    '10月24日，新西兰飞行员吉恩·巴顿从澳大利亚达尔文起飞，抵达英国克罗伊登机场，用时5天18小时15分，创下澳大利亚至英国的单人飞行纪录。\n\n纪录是航空史节点，不等于女性飞行员当天获得平等机会；巴顿的飞行路线、机型与后续纪录须据航空档案。本条只记抵达与纪录。',
    'octBrOct',
    '1937年10月事件汇编记10月24日巴顿抵达克罗伊登、5天18小时15分；飞行记录与认证未逐条核对。',
    ['octBrOct'], []),
  record('george-parliament', 26, '政治', '乔治六世主持首次议会开幕', '英国 · 伦敦 · 威斯敏斯特',
    '乔治六世主持即位后首次议会开幕，宣读政府施政纲领。',
    '10月26日，英国国王乔治六世主持即位后首次议会开幕，宣读政府施政纲领。此时内维尔·张伯伦已出任首相，英国面临欧洲局势紧张与重整军备的压力。\n\n议会开幕是宪政仪式，不等于政府政策当天确定；具体施政纲领与议会辩论须据Hansard记录。本条只记开幕。',
    'octBrOct',
    '1937年10月事件汇编记10月26日乔治六世主持首次议会开幕；施政纲领与议会记录未逐条核对。',
    ['octBrOct'], ['george', 'chamberlain']),
]
