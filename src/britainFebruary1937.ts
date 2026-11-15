import type { Category, HistoryEvent } from './data'

// February 1937 in Britain: the new reign settles in, the Royal Navy is drawn
// into Spanish waters, and broadcasting and the theatre produce new firsts.
export const britainFebruarySources = {
  febBrHonours: { name: 'Wikipedia · February 1937（2月1日新年荣誉名单）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febBrRoyalOak: { name: 'Geoffrey B. Mason · 皇家海军“皇家橡树”号舰史', url: 'https://www.naval-history.net/xGM-Chrono-01BB-RoyalOak.htm' },
  febBrBoxing: { name: 'BBC Genome · 1937年2月4日拳击赛电视转播', url: 'https://genome.ch.bbc.co.uk/d85f09844df1400382c9924fc8783f05' },
  febBrGallacher: { name: '英国议会 Hansard · 1937年2月4日摄政法案辩论', url: 'https://api.parliament.uk/historic-hansard/commons/1937/feb/04/regency-bill' },
  febBrCavalcade: { name: 'Wikipedia · February 1937（《Cavalcade》被禁）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febBrLlandovery: { name: 'Wikipedia · February 1937（“兰多弗里城堡”号触雷）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febBrF6: { name: 'Wikipedia · February 1937（《F6的上升》首演）', url: 'https://en.wikipedia.org/wiki/February_1937' },
}

type SourceId = keyof typeof britainFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `feb37-br-${id}`, year: 1937, month: 2, country: 'britain', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainFebruaryEvents: HistoryEvent[] = [
  record('honours-list', 1, '政治', '乔治六世发布新年荣誉名单', '英国 · 伦敦',
    '因退位危机推迟一个月的新年荣誉名单公布。',
    '2月1日，英国国王乔治六世发布英帝国新年荣誉名单。名单因1936年爱德华八世退位危机推迟一个月公布，伊丽莎白王后被授予皇家维多利亚勋章大十字级。\n\n荣誉名单是王室与政府年度表彰的一部分，名单公布与授勋仪式、实际册封日期须分别理解。本条记录名单公布，不逐项列出全部受勋者。',
    'febBrHonours',
    '日期、推迟原因与王后受勋见1937年2月事件汇编及所引同期报纸；伦敦公报原期未逐页核对。',
    [], ['george']),
  record('royal-oak-attack', 2, '军事', '“皇家橡树”号在西班牙附近遭飞机投弹', '地中海 · 西班牙附近',
    '三架飞机向正在巡逻的英国战列舰投弹，未造成损伤。',
    '2月2日，英国皇家海军“皇家橡树”号战列舰在地中海执行保护直布罗陀航线的巡逻任务时，遭三架隶属西班牙共和国的飞机投弹。三枚炸弹中两枚在距舰约550米处爆炸，未造成舰体损伤。\n\n这是西班牙内战外溢到英国海军巡逻的风险事件。飞机隶属与投弹意图见英国海军资料，不能据此认定西班牙共和国政府已对英国宣战。',
    'febBrRoyalOak',
    '海军舰史与1937年2月事件汇编均记2月2日遭三架飞机投弹、炸弹未命中；原始海军报告未逐页核对。',
    [], []),
  record('tv-boxing', 4, '文化', 'BBC首次电视转播英国体育赛事', '英国 · 伦敦 · 亚历山德拉宫',
    'BBC电视播出英格兰对爱尔兰的国际拳击比赛。',
    '2月4日，英国广播公司在亚历山德拉宫首次电视转播英国体育赛事，内容为英格兰对爱尔兰国际拳击比赛的多个回合。\n\n这是早期电视从演播室节目扩展到大型体育现场的一步。转播试验的覆盖范围、观众数量与接收条件有限，不能按今天的“直播”规模理解。',
    'febBrBoxing',
    'BBC节目索引给出2月4日拳击赛转播记录；转播时长与摄像机数量未在节目索引中展开。',
    [], []),
  record('gallacher-regency', 4, '政治', '加拉赫在下院就摄政法案发言引发哗然', '英国 · 伦敦 · 下议院',
    '共产党议员加拉赫称摄政法案针对现任国王，议会一度喧哗。',
    '2月4日，英国下议院继续辩论摄政法案。唯一的共产党议员威利·加拉赫发言称，该法案“明显是针对目前在位的国王”，因为国王“受到怀疑”，引发现场哗然。\n\n加拉赫的发言涉及爱德华八世退位后新国王乔治六世的地位与王室继承安排。议会记录保存了发言与程序，但本条不把个别议员的激烈言辞写成议会整体立场。',
    'febBrGallacher',
    'Hansard 1937年2月4日摄政法案辩论记录支持日期、发言人与发言内容；现场反应与后续程序未逐条转录。',
    [], []),
  record('cavalcade-ban', 11, '社会', '《Cavalcade》因刊登国王健康传闻被禁', '英国 · 伦敦',
    '英国周刊登载有关国王癫痫传闻的文章，该期被禁止发行。',
    '2月11日，英国周报《Cavalcade》因刊登有关国王乔治六世癫痫传闻的文章被禁止发行。\n\n禁令发生在爱德华八世退位后不久，王室健康与继承问题极为敏感。所引资料只记禁令与传闻，不证明国王确实患有癫痫；本条不把传闻当作医学事实。',
    'febBrCavalcade',
    '日期与禁令见1937年2月事件汇编及所引同期报纸；禁令原文与发行数量未核对，健康传闻不作事实判断。',
    [], ['george']),
  record('royal-oak-hit', 23, '军事', '“皇家橡树”号被西班牙共和派防空炮弹误击', '地中海 · 瓦伦西亚附近',
    '英国战列舰在西班牙附近再次被炮弹击中，舰员受伤。',
    '2月23日，英国战列舰“皇家橡树”号在西班牙瓦伦西亚附近海域再次遭遇射击事件：一枚由西班牙共和国方面发射的防空炮弹在舰上爆炸，造成舰员受伤。\n\n这是本月初飞机投弹事件之后的又一起外溢事件。炮弹为防空射击误击，不能写成西班牙方面对英国军舰的有意攻击；具体伤亡与舰体损伤见海军舰史。',
    'febBrRoyalOak',
    '海军舰史记2月23日在瓦伦西亚附近被防空炮弹击中并造成伤亡；1937年2月事件汇编亦记同一事件，细节以舰史为准。',
    [], []),
  record('llandovery-castle', 25, '社会', '邮轮“兰多弗里城堡”号在西班牙附近触雷', '地中海 · 克雷乌斯角附近',
    '载有约百名乘客的英国邮轮触雷，舰体受损后驶抵法国港口。',
    '2月25日，英国邮轮“兰多弗里城堡”号从直布罗陀驶往马赛，载有约100名乘客，在西班牙克雷乌斯角附近触雷。船体被炸出大洞，但仍驶抵法国旺德尔港。\n\n水雷来源与布设方在资料中未明确，不能据此认定某一方蓄意袭击英国船只。本条记录触雷与受损，不补写伤亡与赔偿结果。',
    'febBrLlandovery',
    '日期、航线、乘客数与受损经过见1937年2月事件汇编；水雷来源与最终伤亡未由所引资料说明。',
    [], []),
  record('ascent-f6', 26, '文化', '《F6的上升》在伦敦水星剧院首演', '英国 · 伦敦 · 水星剧院',
    '奥登与伊舍伍德合作的两幕剧首演。',
    '2月26日，W. H. 奥登与克里斯托弗·伊舍伍德合作的两幕剧《F6的上升》在伦敦水星剧院首演。剧情围绕一座尚未被攀登的“F6”山峰展开，山峰位于英国殖民地与虚构国家交界处。\n\n剧作以登山探险映射帝国、英雄崇拜与政治宣传。本条记录首演，不把后来的文学评价当作1937年观众的普遍反应。',
    'febBrF6',
    '日期、剧院与剧作性质见1937年2月事件汇编；首演节目单与剧评未逐条核对。',
    [], []),
]
