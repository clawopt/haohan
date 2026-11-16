import type { Category, HistoryEvent } from './data'

// June 1937 in Britain: the Windsor wedding, whaling diplomacy, television
// firsts, the Imperial Conference, and Chamberlain's foreign policy debut.
export const britainJuneSources = {
  junBrJune: { name: 'Wikipedia · June 1937', url: 'https://en.wikipedia.org/wiki/June_1937' },
  junBrWindsor: { name: 'Wikipedia · Edward VIII', url: 'https://en.wikipedia.org/wiki/Edward_VIII' },
  junBrWhaling: { name: 'Wikipedia · Whaling', url: 'https://en.wikipedia.org/wiki/Whaling' },
  junBrSolomon: { name: 'Wikipedia · King Solomon’s Mines (1937 film)', url: 'https://en.wikipedia.org/wiki/King_Solomon%27s_Mines_(1937_film)' },
  junBrWimbledon: { name: 'Wikipedia · 1937 Wimbledon Championships', url: 'https://en.wikipedia.org/wiki/1937_Wimbledon_Championships' },
  junBrImperial: { name: 'Wikipedia · 1937 Imperial Conference', url: 'https://en.wikipedia.org/wiki/1937_Imperial_Conference' },
  junBrChamberlain: { name: 'Wikipedia · Neville Chamberlain', url: 'https://en.wikipedia.org/wiki/Neville_Chamberlain' },
}

type SourceId = keyof typeof britainJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jun37-br-${id}`, year: 1937, month: 6, country: 'britain', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainJuneEvents: HistoryEvent[] = [
  record('windsor-wedding', 3, '社会', '温莎公爵与沃利斯在法国结婚', '法国 · 蒙斯 · 康代城堡',
    '退位后的爱德华八世与沃利斯·辛普森在法国举行婚礼。',
    '6月3日，退位后的英国前国王爱德华八世（温莎公爵）与沃利斯·辛普森在法国蒙斯的康代城堡举行婚礼。婚礼规模很小，英国王室成员未出席；爱德华的弟弟乔治六世授予他“温莎公爵”封号，但不承认沃利斯的王室身份。\n\n婚礼是1936年退位危机的最终社会结果，不等于英国王室与政府接纳这段婚姻。婚礼细节、宾客与婚后安排须据当时报道与王室档案；本条只记婚礼。',
    'junBrWindsor',
    '爱德华八世条目与1937年6月事件汇编记6月3日康代城堡婚礼；婚礼宾客与王室反应未逐条核对。',
    ['junBrJune'], ['george']),
  record('whaling-agreement', 8, '外交', '八国在伦敦达成限制捕鲸协议', '英国 · 伦敦',
    '英国等八国同意限制捕鲸，以阻止世界鲸群数量急剧下降。',
    '6月8日，英国、阿根廷、澳大利亚、爱尔兰、挪威、南非、德国与美国代表在伦敦达成协议，同意限制捕鲸，阻止世界鲸群数量急剧下降。协议是战前国际自然保护与渔业外交的早期尝试。\n\n协议达成不等于捕鲸当天停止或各国立即执行；具体配额、生效条件与后续遵守情况须据国际捕鲸档案。本条只记协议达成。',
    'junBrWhaling',
    '1937年6月事件汇编记6月8日八国在伦敦达成限制捕鲸协议；协议文本与各国批准情况未逐条核对。',
    ['junBrJune'], []),
  record('king-solomons-mines', 17, '文化', '《所罗门王的宝藏》在英国首映', '英国 · 伦敦',
    '改编自哈格德小说的冒险片《所罗门王的宝藏》在英国首映。',
    '6月17日，改编自亨利·赖德·哈格德小说的冒险片《所罗门王的宝藏》在英国首映。影片由罗伯特·史蒂文森执导，塞德里克·哈德威克、保罗·罗贝森等出演，讲述探险队寻找传说中宝藏的故事。\n\n影片首映是英国电影与帝国冒险题材的文化节点，不等于原著或影片的殖民想象当天已被普遍接受；影片制作、发行与评论须据电影档案。本条只记首映。',
    'junBrSolomon',
    '《所罗门王的宝藏》条目与1937年6月事件汇编记6月17日英国首映；影片原版与首映记录未逐条核对。',
    ['junBrJune'], []),
  record('wimbledon-televised', 21, '文化', '温布尔登网球锦标赛首次电视转播', '英国 · 伦敦 · 温布尔登',
    'BBC电视首次转播温布尔登网球锦标赛。',
    '6月21日，BBC电视首次转播温布尔登网球锦标赛。这是继5月加冕游行户外转播之后，英国电视向大型体育赛事扩展的又一步；当时电视观众仍集中在伦敦及周边地区。\n\n首次转播是电视与体育传播史上的节点，不等于赛事已经全面电视化；转播场次、摄像机位置与观众数量须据BBC档案。本条只记首次转播。',
    'junBrWimbledon',
    '1937年温网条目与6月事件汇编记6月21日首次电视转播；BBC节目档案与转播技术记录未逐条核对。',
    ['junBrJune'], []),
  record('imperial-conference-ends', 24, '外交', '第八次帝国会议闭幕', '英国 · 伦敦',
    '英国与自治领、印度代表的帝国会议结束，讨论外交与防务协调。',
    '6月24日，5月14日开幕的第八次帝国会议在伦敦闭幕。英国与加拿大、澳大利亚、新西兰、南非、爱尔兰自由邦、印度等代表就外交政策、防务协调与帝国关系进行协商。\n\n帝国会议是英联邦内部协商机制，不是拥有强制力的超国家机构；会议公报对各自治领的约束力有限。具体议程、分歧与公报须据会议文件；本条只记闭幕。',
    'junBrImperial',
    '1937年帝国会议条目与6月事件汇编记6月24日闭幕；会议公报与议程未逐条核对。',
    ['junBrJune'], ['george']),
  record('chamberlain-foreign-policy', 25, '政治', '张伯伦发表首次重大外交政策演说', '英国 · 伦敦 · 下议院',
    '张伯伦在下院发表首次重大外交政策演说，呼吁对德国政策保持谨慎。',
    '6月25日，英国首相内维尔·张伯伦在下议院发表上任后首次重大外交政策演说。他呼吁英国社会有影响力的人士在谈论德国与西班牙政策时保持谨慎，避免引发更大的欧洲战争，并用“高山上的大声喊叫可能引发雪崩”作比喻。\n\n演说反映张伯伦对德绥靖与避免战争的思路，不等于英国当天已经确定具体对德政策；后续的慕尼黑协定与1939年对德宣战须分别记录。本条只记演说。',
    'junBrChamberlain',
    '张伯伦条目与1937年6月事件汇编记6月25日首次重大外交政策演说及“雪崩”比喻；演说原文未逐字校读。',
    ['junBrJune'], ['chamberlain']),
]
