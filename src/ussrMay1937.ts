import type { Category, HistoryEvent } from './data'

// May 1937 in the USSR: the military purge begins with Tukhachevsky's arrest,
// Arctic exploration scores a success, and Trotsky announces a new
// International.
export const ussrMaySources = {
  maySuMay: { name: 'Wikipedia · May 1937', url: 'https://en.wikipedia.org/wiki/May_1937' },
  maySuTukh: { name: 'Wikipedia · Mikhail Tukhachevsky', url: 'https://en.wikipedia.org/wiki/Mikhail_Tukhachevsky' },
  maySuNorthPole: { name: 'Wikipedia · North Pole-1', url: 'https://en.wikipedia.org/wiki/North_Pole-1' },
  maySuTrotsky: { name: 'Wikipedia · Leon Trotsky', url: 'https://en.wikipedia.org/wiki/Leon_Trotsky' },
  maySuRudz: { name: 'Wikipedia · Jānis Rudzutaks', url: 'https://en.wikipedia.org/wiki/J%C4%81nis_Rudzutaks' },
}

type SourceId = keyof typeof ussrMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `may37-su-${id}`, year: 1937, month: 5, country: 'ussr', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrMayEvents: HistoryEvent[] = [
  record('japan-spies-executed', 20, '政治', '苏联处决44名被指为日本间谍者', '苏联 · 莫斯科',
    '苏联宣布处决44名被指控为日本从事间谍活动的人。',
    '5月20日，苏联宣布处决44名被指控为日本从事间谍活动的人。这一行动发生在大清洗扩大化的背景下，审判与处决程序高度保密，被告的辩护权有限。\n\n“日本间谍”是当时官方提出的指控，不能当作已经独立证实的犯罪事实。具体名单、审判程序与证据须据苏联档案；本条只记官方宣布的处决行为。',
    'maySuMay',
    '1937年5月事件汇编记5月20日苏联处决44名被指为日本间谍者；名单与审判档案未逐条核对，指控不作事实认定。',
    ['maySuMay'], ['stalin']),
  record('north-pole-1', 21, '文化', '苏联建立“北极-1”浮冰漂流站', '北冰洋',
    '苏联考察队在北冰洋建立“北极-1”科学漂流站。',
    '5月21日，苏联在北冰洋建立“北极-1”浮冰漂流站。考察队由伊万·帕帕宁领导，四名队员在浮冰上开展气象、海洋与地磁观测，并在冰上生活了九个月。\n\n“北极-1”是苏联北极研究与宣传的重要成就，不等于苏联对北极的主权主张已经得到国际承认。考察数据、漂流路线与撤离过程须据苏联科考档案；本条只记建站。',
    'maySuNorthPole',
    'North Pole-1条目与1937年5月事件汇编记5月21日建站；科考数据与漂流记录未逐项核对。',
    ['maySuMay'], []),
  record('tukhachevsky-arrest', 22, '军事', '图哈切夫斯基元帅被捕', '苏联 · 莫斯科',
    '红军元帅图哈切夫斯基被秘密逮捕，随后被控阴谋推翻政府并为德国间谍。',
    '5月22日，苏联红军元帅米哈伊尔·图哈切夫斯基被秘密逮捕。他此前被解除副国防人民委员职务，调任伏尔加军区司令，赴任途中被捕并押回莫斯科。审讯由内务人民委员部主导，图哈切夫斯基后来在6月的秘密审判中被控阴谋推翻政府并为德国从事间谍活动。\n\n图哈切夫斯基是红军现代化的重要推动者，其被捕是1937年军队大清洗的关键节点。审判中的供述与指控不能当作已证实的犯罪事实；审判与处决在6月进行，本条只记逮捕日期。',
    'maySuTukh',
    '图哈切夫斯基条目记5月22日秘密逮捕与审讯经过；俄文档案与审判记录未逐页核对，6月审判与处决不写入本条日期。',
    ['maySuMay'], ['stalin']),
  record('fourth-international', 23, '政治', '托洛茨基提出建立第四国际', '墨西哥 · 科约阿坎',
    '流亡中的托洛茨基提出建立第四国际，以对抗斯大林领导的共产国际。',
    '5月23日，流亡墨西哥的列夫·托洛茨基提出建立第四国际，以对抗斯大林领导的第三国际（共产国际）。他主张以新的国际组织团结各国革命者，反对官僚化的苏联领导层。\n\n第四国际的正式成立在1938年，5月的提议属于筹备与宣传阶段，不等于组织当天已经建立。托洛茨基的处境、支持者规模与各国支部须据托洛茨基档案；本条只记提议。',
    'maySuTrotsky',
    '托洛茨基条目记1937年5月提出第四国际、1938年正式成立；具体会议与支持者名单未逐条核对。',
    ['maySuMay'], []),
  record('rudzutaks-arrest', 24, '政治', '鲁祖塔克被捕', '苏联 · 莫斯科',
    '老布尔什维克鲁祖塔克被逮捕，被控托洛茨基主义与为德国从事间谍活动。',
    '5月24日，苏联政治家扬·鲁祖塔克被逮捕，被控托洛茨基主义与为德国从事间谍活动。他曾任联共（布）中央政治局委员、人民委员会副主席和交通人民委员，是大清洗中受到清洗的高级干部之一。\n\n鲁祖塔克的被捕与图哈切夫斯基案同期，属于1937年军队与党政高层清洗的一部分。指控内容不能当作已证实的犯罪事实；审判、判决与处决须另据档案。本条只记逮捕。',
    'maySuRudz',
    '鲁祖塔克条目与1937年5月事件汇编记5月24日逮捕及指控；审判与处决记录未逐条核对。',
    ['maySuMay'], ['stalin']),
]
