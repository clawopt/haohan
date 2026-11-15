import type { Category, HistoryEvent } from './data'

// February 1937 in Nazi Germany: the Four Year Plan reaches into agriculture,
// prisons and party-state administration, while rearmament and propaganda
// shape economic and cultural policy.
const archive = (number: number, name: string) => ({
  name: `德国联邦档案馆 ·《帝国总理府档案》1937年文件${number}：${name}`,
  url: `https://aktenreichskanzlei.bundesarchiv.de/dokument/arh04d${String(number).padStart(3, '0')}`,
})
export const germanyFebruarySources = {
  febGeTourism: archive(26, '官方促进旅游业'),
  febGeFarm: archive(27, '四年计划小内阁会议：农业增产'),
  febGePrisoners: archive(34, '司法代表与希姆莱谈囚犯劳动'),
  febGePartyState: archive(35, '四年计划中国家与党的任务分工'),
  febGeSchool: archive(43, '帝国学校法草案'),
  febGeSalute: { name: 'Wikipedia · February 1937（里宾特洛甫向乔治六世行礼事件）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febGeAutoShow: { name: 'Wikipedia · February 1937（希特勒为柏林汽车展揭幕）', url: 'https://en.wikipedia.org/wiki/February_1937' },
}

type SourceId = keyof typeof germanyFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `feb37-ge-${id}`, year: 1937, month: 2, country: 'germany', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyFebruaryEvents: HistoryEvent[] = [
  record('ribbentrop-salute', 4, '外交', '里宾特洛甫在伦敦向乔治六世行纳粹礼', '英国 · 伦敦',
    '德国驻英大使以纳粹举手礼迎接英国国王，场面一度尴尬。',
    '2月4日，德国驻英国大使约阿希姆·冯·里宾特洛甫在伦敦向英国国王乔治六世行纳粹举手礼。据当时报道，国王正伸手准备握手，险些被对方的动作碰到。\n\n这一失仪举动发生在英德关系敏感、德国要求归还殖民地的背景下，成为外交礼仪与纳粹政治姿态的公开插曲。具体细节来自事件汇编与同期报纸，不能据此推断英国政府的正式反应。',
    'febGeSalute',
    '事件日期与经过见1937年2月事件汇编及所引同期报纸；德国外交部档案与英国宫廷记录未逐条核对。',
    [], []),
  record('tourism-promotion', 7, '经济', '旅游事务官员致函宣传部谈官方旅游促进', '德国 · 柏林',
    '帝国旅游委员会副主席向宣传部说明官方促进旅游业的安排。',
    '2月7日，帝国旅游委员会副主席致函帝国国民教育与宣传部部长，说明官方促进德国旅游业的事务。信中称希特勒在此前几天曾与他详细交谈，讨论旅游宣传与设施建设。\n\n这封信反映纳粹政权把旅游、交通与对外形象纳入国家宣传和经济安排。信件的具体建议与最终执行情况未在正文展开，不能把一次汇报写成政策已经落地。',
    'febGeTourism',
    '联邦档案馆《帝国总理府档案》第26号文件，已读信件正文与编者标注；旅游促进的预算、线路与实施结果未逐项核对。',
    [], []),
  record('farm-council', 11, '经济', '四年计划小内阁讨论农业增产', '德国 · 柏林',
    '戈林主持四年计划小内阁会议，讨论农业生产的增长与调控。',
    '2月11日，四年计划小内阁在柏林开会，戈林主持，财政部长施韦林·冯·克罗西克、国务秘书克尔纳等参加。会议记录以“农业生产的增长与调控”为题，讨论在四年计划下提高农产品产量与调配农业资源。\n\n会议体现纳粹政权把农业、自给与扩军准备联系起来的治理方式。记录中的目标与部门分歧，不等于各项措施当天已经实施。',
    'febGeFarm',
    '联邦档案馆《帝国总理府档案》第27号文件，为会议记录转写；已读与会者与议题，未逐条核对会议附件与执行文件。',
    [], []),
  record('prisoner-labor', 13, '政治', '司法代表与希姆莱讨论囚犯劳动用于四年计划', '德国 · 柏林',
    '司法部代表与党卫队全国领袖商谈把刑事囚犯投入四年计划劳动。',
    '2月13日，司法部代表与党卫队全国领袖希姆莱会谈，讨论把刑事囚犯的劳动用于四年计划。司法部方面由E. Schmidt与高级检察官Nörr记录，文件标题为“刑事囚犯为四年计划目的的劳动投入”。\n\n会议把监狱劳动力纳入纳粹经济动员，反映司法系统与党卫队在国家项目中的协作。具体劳动项目、人数与条件未在记录中展开，不能据此写成大规模囚犯营已经当天建立。',
    'febGePrisoners',
    '联邦档案馆《帝国总理府档案》第34号文件，已读会谈记录与档案号R 22/1437；未核对党卫队与司法部的后续执行文件。',
    [], ['hitler']),
  record('party-state-tasks', 15, '政治', '四年计划中国家与党的任务分工', '德国 · 柏林',
    '四年计划全权代表通函各邦，规定国家与纳粹党在计划中的任务分工。',
    '2月15日，四年计划全权代表发出通函，规定国家机构与纳粹党在四年计划中的任务分工。通函发给各大区领袖、帝国总督、各邦政府及有关部门，要求党与国家机关在计划实施中明确职责。\n\n这份通函显示四年计划不仅是经济机构，也把纳粹党的组织网络纳入国家任务。通函的具体条款与地方执行差异未在正文展开。',
    'febGePartyState',
    '联邦档案馆《帝国总理府档案》第35号文件，已读通函正文与发文范围；原件为油印转写，未核对地方执行报告。',
    [], ['hitler']),
  record('auto-show', 20, '经济', '希特勒为柏林汽车展揭幕，大众样车展出', '德国 · 柏林',
    '希特勒主持柏林汽车展，展出三辆“大众”样车。',
    '2月20日，希特勒为柏林汽车展揭幕，展会上展出三辆“大众”（Volkswagen）样车。\n\n大众汽车计划与纳粹政权的“国民汽车”宣传、道路建设和工业动员相联系。车展是宣传与工业展示活动，样车展出不等于量产或面向公众销售已经开始；大众汽车的大规模生产在随后几年才逐步推进。',
    'febGeAutoShow',
    '日期与三辆样车见1937年2月事件汇编；大众汽车官方企业史与车展图录未逐条核对，量产时间不写入本条。',
    [], ['hitler']),
  record('school-law', 22, '文化', '帝国教育部协调帝国学校法草案', '德国 · 柏林',
    '教育部就帝国学校法草案与宣传部、总理府协调，草案拟统一学校教育原则。',
    '2月22日，帝国科学与教育部长致函总理府国务秘书，回应宣传部2月20日对帝国学校法草案的意见。草案试图统一各类学校的教育原则，并把纳粹意识形态进一步纳入学校管理。\n\n教育部与宣传部在草案权限、宗教课程和学校管理上仍有分歧。本条记录部门协调，不把草案写成当天已经通过或生效的法律。',
    'febGeSchool',
    '联邦档案馆《帝国总理府档案》第43号文件，已读教育部致总理府函；学校法草案全文与后续内阁审议未逐条核对。',
    [], []),
]
