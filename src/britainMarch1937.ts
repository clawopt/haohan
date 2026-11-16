import type { Category, HistoryEvent } from './data'

// March 1937 in Britain: rearmament is endorsed, the new reign settles its
// financial and regency arrangements, and the Spanish patrol draws the navy in.
export const britainMarchSources = {
  marBrMarch: { name: 'Wikipedia · March 1937', url: 'https://en.wikipedia.org/wiki/March_1937' },
  marBrWindsor: { name: 'Wikipedia · Edward VIII', url: 'https://en.wikipedia.org/wiki/Edward_VIII' },
  marBrAusten: { name: 'Wikipedia · Austen Chamberlain', url: 'https://en.wikipedia.org/wiki/Austen_Chamberlain' },
  marBrRegency: { name: '英国议会 Hansard · Regency Act 1937', url: 'https://api.parliament.uk/historic-hansard/acts/regency-act-1937' },
  marBrBoatRace: { name: 'Wikipedia · The Boat Race 1937', url: 'https://en.wikipedia.org/wiki/The_Boat_Race_1937' },
}

type SourceId = keyof typeof britainMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `mar37-br-${id}`, year: 1937, month: 3, country: 'britain', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainMarchEvents: HistoryEvent[] = [
  record('rearmament-vote', 2, '政治', '英国议会通过政府重整军备计划', '英国 · 伦敦 · 下议院',
    '下议院以243票对134票支持重整军备计划。',
    '3月2日，英国下议院以243票对134票通过政府提出的重整军备计划。计划扩大陆海空军的装备与预算，背景是欧洲局势恶化、德国重新武装和西班牙内战的外溢风险。\n\n表决结果是议会支持扩军，不等于所有军备项目当天已获拨款或开始执行。具体预算分配、各军种规模与反对党的批评须据议会辩论与国防白皮书。',
    'marBrMarch',
    '1937年3月事件汇编记3月2日243比134的表决结果；议会辩论全文与国防预算文件未逐条核对。',
    [], []),
  record('duke-of-windsor', 8, '政治', '爱德华八世被封为温莎公爵', '英国 · 伦敦',
    '退位后的爱德华八世获得“温莎公爵”封号。',
    '3月8日，英国国王乔治六世为退位的哥哥爱德华八世创建“温莎公爵”爵位。爱德华在1936年12月退位后，以温莎公爵的身份定居国外。\n\n封号是王室对退位危机的善后安排，解决的是爱德华的称号与身份，不涉及他是否获得政府年金。公爵的年金与王室财政另见3月16日的王室年费安排；本条只记封号创设。',
    'marBrWindsor',
    '1937年3月事件汇编记3月8日创建温莎公爵爵位；王室敕令原文与封号授予仪式未逐条核对。',
    ['marBrMarch'], ['george']),
  record('spanish-patrol', 14, '军事', '英国海军参加四国巡逻西班牙海域', '西班牙周边海域',
    '英国与法、德、意海军开始分区巡逻，阻止武器和志愿者进入西班牙。',
    '3月14日零时起，英国、法国、德国和意大利的海军开始巡逻西班牙海域，执行“不干涉”安排。英国负责直布罗陀以西及部分北部海域，巡逻目的是阻止外国武器和志愿者进入西班牙内战。\n\n巡逻是英法主导的多边安排，但德国和意大利同时继续援助佛朗哥一方，苏联也向共和国提供援助，因此“不干涉”并未真正阻止外国介入。本条只记英国海军参加巡逻的开始。',
    'marBrMarch',
    '1937年3月事件汇编记3月14日四国海军巡逻开始；英国海军分区与舰船记录未逐项核对。',
    [], []),
  record('civil-list', 16, '政治', '乔治六世王室年费提交下议院', '英国 · 伦敦 · 下议院',
    '王室年费名单提交下院，退位的爱德华未被列入。',
    '3月16日，乔治六世的王室年费（Civil List）提交下议院。退位的爱德华八世未被列入名单，结束了外界关于他是否获得政府年金的猜测；他此后的收入由王室家庭内部安排。\n\n王室年费是议会对君主履行公务所需费用的拨款安排，与温莎公爵的个人财产不同。名单提交不等于拨款当天完成，具体金额与表决程序须据议会文件。',
    'marBrMarch',
    '1937年3月事件汇编记3月16日王室年费提交下院、爱德华未列入；议会文件与王室账目未逐条核对。',
    ['marBrWindsor'], ['george']),
  record('austen-chamberlain-death', 17, '政治', '奥斯汀·张伯伦去世', '英国 · 伦敦',
    '前外交大臣、诺贝尔和平奖得主奥斯汀·张伯伦去世。',
    '3月17日，英国政治家奥斯汀·张伯伦去世，享年73岁。他曾任财政大臣、外交大臣，因推动《洛迦诺公约》于1925年获诺贝尔和平奖，是内维尔·张伯伦的兄长。\n\n他的去世发生在欧洲外交格局紧张、英国重整军备的时期。本条只记人物去世与主要政治经历，不把洛迦诺体系的有效性写成当时仍然稳固；具体丧礼与议会悼词未展开。',
    'marBrAusten',
    '1937年3月事件汇编记3月17日奥斯汀·张伯伦去世；诺贝尔奖与任职经历见其人物条目，丧礼记录未核对。',
    ['marBrMarch'], []),
  record('regency-act', 19, '政治', '《1937年摄政法》获御准', '英国 · 伦敦',
    '摄政法正式生效，规定君主未成年或丧失行为能力时的摄政安排。',
    '3月19日，《1937年摄政法》获得御准。该法规定在君主未成年、丧失行为能力或暂时无法履行职务时由谁摄政，并设立国务顾问制度，在君主短期缺席时代行部分职务。\n\n摄政法是在爱德华八世退位危机后对王室继承与君主缺位问题的制度修补。御准是法律生效节点，不等于当天已经任命摄政或国务顾问；具体适用情形须据法案条文。',
    'marBrRegency',
    'Hansard法案页记3月19日御准；法案条文与王室同意程序未逐条核对。',
    ['marBrMarch'], ['george']),
  record('grand-national', 19, '文化', '“皇家邮件”赢得大国民赛马', '英国 · 利物浦 · 安特里',
    '“皇家邮件”赢得1937年大国民赛马。',
    '3月19日，“皇家邮件”（Royal Mail）赢得在利物浦安特里举行的1937年大国民赛马。大国民是英国最受关注的障碍赛马赛事之一，比赛结果在当天通过报纸与广播传播。\n\n赛马结果属于体育与文化记录，与同日摄政法获御准是两件独立事件。参赛马匹、骑师与比赛时间须据赛马会记录；本条不把赛马结果写成政治事件。',
    'marBrMarch',
    '1937年3月事件汇编记3月19日“皇家邮件”赢得大国民赛马；赛马会官方记录与当日报道未逐条核对。',
    [], []),
  record('boat-race', 24, '文化', '牛津赢得第89届赛艇对抗赛', '英国 · 伦敦 · 泰晤士河',
    '牛津击败剑桥，终结剑桥的13连胜。',
    '3月24日，牛津大学在泰晤士河举行的第89届赛艇对抗赛中击败剑桥大学，终结了剑桥此前连续13年的胜利。比赛吸引大量观众沿河观看。\n\n赛艇对抗赛是英国大学体育的传统赛事，比赛结果与当年两校的赛艇阵容、训练条件相关。本条只记比赛结果与连胜终结，不把一场比赛写成两校体育实力的长期转折。',
    'marBrBoatRace',
    '1937年赛艇对抗赛条目记3月24日、牛津获胜与剑桥13连胜终结；比赛成绩与赛艇队员名单未逐项核对。',
    [], []),
]
