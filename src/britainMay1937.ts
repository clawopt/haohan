import type { Category, HistoryEvent } from './data'

// May 1937 in Britain: the coronation of George VI, the end of the Baldwin
// era, the Spanish shipping crisis, and the Imperial Conference.
export const britainMaySources = {
  mayBrMay: { name: 'Wikipedia · May 1937', url: 'https://en.wikipedia.org/wiki/May_1937' },
  mayBrCoronation: { name: 'Wikipedia · Coronation of George VI and Elizabeth', url: 'https://en.wikipedia.org/wiki/Coronation_of_George_VI_and_Elizabeth' },
  mayBrHunter: { name: 'Wikipedia · HMS Hunter (H35)', url: 'https://en.wikipedia.org/wiki/HMS_Hunter_(H35)' },
  mayBrChamberlain: { name: 'Wikipedia · Neville Chamberlain', url: 'https://en.wikipedia.org/wiki/Neville_Chamberlain' },
  mayBrImperial: { name: 'Wikipedia · 1937 Imperial Conference', url: 'https://en.wikipedia.org/wiki/1937_Imperial_Conference' },
}

type SourceId = keyof typeof britainMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `may37-br-${id}`, year: 1937, month: 5, country: 'britain', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainMayEvents: HistoryEvent[] = [
  record('london-bus-strike', 1, '经济', '伦敦公共汽车司机开始罢工', '英国 · 伦敦',
    '约两万六千名伦敦公共汽车司机罢工，威胁加冕典礼前的城市交通。',
    '5月1日，约两万六千名伦敦公共汽车司机开始罢工，要求改善工资与工作条件。罢工发生在乔治六世加冕典礼前，可能影响伦敦交通与庆典安排。\n\n罢工是劳工与公共交通管理方的争议，不等于所有伦敦交通当天停运；地铁、电车与其他线路仍在运行。具体工会、诉求与结束日期须据当时报道与工会记录。',
    'mayBrMay',
    '1937年5月事件汇编记5月1日约2.6万名伦敦公共汽车司机罢工；工会名称、诉求与罢工结束日期未逐条核对。',
    ['mayBrMay'], []),
  record('baldwin-labour-peace', 5, '政治', '鲍德温呼吁加冕前保持劳资和平', '英国 · 伦敦',
    '首相鲍德温呼吁罢工双方在加冕典礼前缓和冲突。',
    '5月5日，英国首相斯坦利·鲍德温呼吁劳资双方在乔治六世加冕典礼前保持和平，避免公共汽车罢工扩大。罢工已影响伦敦交通，政府担心庆典期间出现更大范围的停工。\n\n呼吁是政治调解，不等于罢工当天结束或政府已经介入仲裁。具体谈判、工会回应与罢工结束时间须据当时报道；本条只记首相表态。',
    'mayBrMay',
    '1937年5月事件汇编记5月5日鲍德温呼吁劳资和平；首相演说原文与工会回应未逐条核对。',
    ['mayBrMay'], []),
  record('coronation', 12, '政治', '乔治六世与伊丽莎白王后加冕', '英国 · 伦敦 · 威斯敏斯特教堂',
    '乔治六世在威斯敏斯特教堂加冕，英国举行盛大典礼。',
    '5月12日，乔治六世与伊丽莎白王后在伦敦威斯敏斯特教堂加冕。加冕典礼在爱德华八世退位半年后举行，英国及自治领、殖民地代表出席，伦敦举行游行与庆祝活动。\n\n加冕是王位继承与政治仪式，不等于新国王的政策方向当天确定；乔治六世在二战期间的角色在此后展开。典礼细节、出席名单与花费须据王室与政府档案。',
    'mayBrCoronation',
    '加冕条目与1937年5月事件汇编记5月12日威斯敏斯特教堂加冕；典礼程序与出席名单未逐条核对。',
    ['mayBrMay'], ['george']),
  record('bbc-outdoor-broadcast', 12, '文化', 'BBC首次进行户外电视转播', '英国 · 伦敦',
    'BBC电视首次在户外转播国王加冕游行。',
    '5月12日，英国广播公司（BBC）首次进行户外电视转播，报道乔治六世加冕游行。此前BBC电视主要在演播室制作节目；这次转播把摄像机架设到伦敦街头，向有限的电视观众呈现游行队伍。\n\n首次户外转播是电视技术史上的节点，不等于电视已经普及；当时英国电视观众数量有限，覆盖范围主要限于伦敦地区。转播时长、摄像机位置与观众数量须据BBC档案。',
    'mayBrMay',
    '1937年5月事件汇编记5月12日BBC首次户外电视转播加冕游行；BBC节目档案与转播技术记录未逐条核对。',
    ['mayBrCoronation'], []),
  record('hms-hunter-mined', 13, '军事', '英国驱逐舰“猎手”号触雷', '西班牙 · 阿尔梅里亚附近海域',
    '英国驱逐舰“猎手”号在西班牙附近触雷，8人死亡、多人受伤。',
    '5月13日，英国皇家海军驱逐舰“猎手”号在西班牙阿尔梅里亚以南海域触雷，舰体严重受损，8名舰员死亡。当时英国军舰正在西班牙内战海域执行巡逻与护侨任务。\n\n水雷来源在资料中未完全明确；事件加剧了英国对西班牙内战外溢的担忧，也推动英国加强护航。具体雷区、责任与伤员数字须据海军调查；本条只记触雷与死亡人数。',
    'mayBrHunter',
    '“猎手”号条目与1937年5月事件汇编记5月13日触雷、8人死亡；水雷来源与海军调查报告未逐条核对。',
    ['mayBrMay'], []),
  record('imperial-conference', 14, '外交', '第八次帝国会议在伦敦开幕', '英国 · 伦敦',
    '英国与自治领、印度代表举行帝国会议，讨论外交与防务协调。',
    '5月14日，第八次帝国会议在伦敦开幕。英国与加拿大、澳大利亚、新西兰、南非、爱尔兰自由邦、印度等自治领和殖民地代表讨论外交政策、防务协调与帝国关系。会议在乔治六世加冕后举行。\n\n帝国会议是英联邦内部协商机制，不是拥有强制力的超国家机构；会议决议对各自治领的约束力有限。具体议程、分歧与公报须据会议文件；本条只记开幕。',
    'mayBrImperial',
    '1937年帝国会议条目与5月事件汇编记5月14日开幕；会议议程与公报未逐条核对。',
    ['mayBrMay'], ['george']),
  record('baldwin-last-speech', 18, '政治', '鲍德温发表任内最后一次重要演说', '英国 · 伦敦',
    '即将卸任的鲍德温警告法西斯与共产主义的威胁，并称国联的价值“可疑”。',
    '5月18日，即将卸任的英国首相斯坦利·鲍德温发表任内最后一次重要演说。他要求英国青年警惕法西斯主义与共产主义的威胁，并称国际联盟的价值“可疑”。\n\n演说反映鲍德温对1930年代国际秩序与意识形态冲突的看法，不等于英国政府当天改变外交政策。张伯伦继任后继续重整军备与对德绥靖，具体政策须据内阁与议会记录；本条只记演说。',
    'mayBrMay',
    '1937年5月事件汇编记5月18日鲍德温最后一次重要演说及国联“可疑”表述；演说原文未逐字校读。',
    ['mayBrMay'], []),
  record('basque-children', 23, '社会', '三千余名西班牙儿童抵达南安普敦', '英国 · 南安普敦',
    '西班牙内战中的三千八百余名儿童抵达英国，接受临时安置。',
    '5月23日，三千八百四十名西班牙内战中的儿童抵达英国南安普敦，随后被安置到英国各地家庭与机构。这次撤离由英国援助组织与工会协调，主要来自巴斯克地区。\n\n儿童撤离是人道救援行动，不等于英国政府改变对西班牙内战的“不干涉”政策；安置期限、家庭条件与后续回国情况须据救援组织档案。本条只记抵达。',
    'mayBrMay',
    '1937年5月事件汇编记5月23日3840名西班牙儿童抵达南安普敦；安置组织与后续记录未逐条核对。',
    ['mayBrMay'], []),
  record('chamberlain-pm', 28, '政治', '内维尔·张伯伦出任英国首相', '英国 · 伦敦',
    '鲍德温退休，张伯伦接任首相并组建新政府。',
    '5月28日，斯坦利·鲍德温退休，内维尔·张伯伦接任英国首相并组建新政府。张伯伦此前担任财政大臣，上任后继续重整军备，并逐步推行对德“绥靖”政策，1938年签署《慕尼黑协定》。\n\n张伯伦就任是英国政治交接节点，不等于其绥靖政策当天已经成形；具体内阁组成、政策演变与1939年对德宣战须分别记录。本条只记就任。',
    'mayBrChamberlain',
    '张伯伦条目与1937年5月事件汇编记5月28日就任首相；内阁名单与政策文件未逐条核对。',
    ['mayBrMay'], ['chamberlain']),
]
