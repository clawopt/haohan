import type { Category, HistoryEvent } from './data'

// October 1937: the League of Nations finds Japan in breach, the New Fourth
// Army is formed, North China cities fall, and the Sihang Warehouse defense
// begins in Shanghai.
export const chinaOctoberSources = {
  octCnOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
  octCnLeague: { name: '中国社会科学院近代史研究所 · 1938年英国远东政策演变的动力机制（引1937年10月6日国联决议）', url: 'http://jds.cass.cn/xscg/xslw/202308/t20230812_5678476.shtml' },
  octCnNew4: { name: '中国军网 · 军史今日10月12日：新四军正式组建', url: 'http://www.81.cn/js_208592/9916823.html' },
  octCnSihang: { name: '中华人民共和国国防部 · 谢晋元等“八百壮士”：孤军血战四行', url: 'http://www.mod.gov.cn/gfbw/zt/gfbwzt/2018_213791/mhyxlsp/4832662.html' },
}

type SourceId = keyof typeof chinaOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct37-cn-${id}`, year: 1937, month: 10, country: 'china', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaOctoberEvents: HistoryEvent[] = [
  record('league-resolution', 6, '外交', '国际联盟大会判定日本违反条约', '瑞士 · 日内瓦',
    '国联大会通过决议，判定日本对华军事行动违反《九国公约》与《巴黎非战公约》。',
    '10月6日，国际联盟大会通过决议，判定日本对中国的军事行动违反《九国公约》与《巴黎非战公约》，并要求成员国避免采取削弱中国抗战能力的措施，同时考虑向中国提供个别援助。决议还建议召开九国公约签字国会议讨论中日冲突。\n\n国联决议是国际社会对日本侵略的正式定性，不等于国联对日本实施制裁或军事制止；九国公约会议后来在布鲁塞尔召开，未取得实质结果。具体决议文本与表决须据国联档案。本条只记决议通过。',
    [], ['nanjing-government'], 'octCnLeague', {
      topicIds: ['full-resistance'],
      evidenceNote: '中国社科院文章引1937年10月6日国联决议内容；决议全文与国联表决记录未逐条核对。',
    }),
  record('zhengding-falls', 8, '军事', '正定失守', '河北 · 正定',
    '日军占领平汉铁路沿线正定，河北战局继续恶化。',
    '10月8日，日军报告占领河北正定。正定位于平汉铁路沿线，是石家庄以北的重要城镇；日军占领正定后继续向石家庄推进。\n\n正定失守是华北战场国民党军队后退的节点之一，与保定失守、石家庄告急相连。具体战斗经过、守军番号与伤亡须据战史档案；本条只记失守日期。',
    [], [], 'octCnOct', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年10月事件汇编记10月8日日军占领正定；中国守军部署与战斗经过未逐条核对。',
    }),
  record('new-fourth-army', 12, '政治', '南方红军游击队改编为新四军', '中国 · 南方八省',
    '国民政府军事委员会宣布南方八省红军和游击队改编为国民革命军陆军新编第四军。',
    '10月12日，国民政府军事委员会正式宣布：南方八省十四个地区的红军和游击队改编为国民革命军陆军新编第四军（简称新四军），任命叶挺为军长，项英为副军长，张云逸为参谋长，袁国平为政治部主任。\n\n新四军成立是第二次国共合作与抗日民族统一战线的成果，使南方红军游击队取得合法番号并开赴华中抗日前线。军部于1938年1月在南昌正式成立；具体改编过程、部队集中与编制须据双方档案。本条只记10月12日改编命令。',
    ['yet'], ['cpc-central', 'nanjing-government'], 'octCnNew4', {
      topicIds: ['full-resistance', 'united-front'],
      evidenceNote: '中国军网与人民网资料记10月12日国民政府军委会宣布新四军改编、叶挺任军长；命令原文与部队编制未逐条核对。',
    }),
  record('baotou-falls', 17, '军事', '包头失守', '绥远 · 包头',
    '日军占领包头，绥远局势恶化。',
    '10月17日，日军占领绥远包头。此前日军已占领张家口、大同、归绥等地，继续向绥远西部推进；包头失守使绥远大部分地区落入日军控制。\n\n包头失守是华北、绥远战场的节点，不等于中国在绥远的抵抗当天停止；傅作义等部在此前后继续作战。具体战斗经过、守军部署与撤退路线须据战史档案。本条只记失守。',
    [], [], 'octCnOct', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年10月事件汇编记10月17日日军占领包头；中国守军部署与战斗经过未逐条核对。',
    }),
  record('sihang-warehouse', 26, '军事', '四行仓库保卫战开始', '上海 · 苏州河北岸',
    '谢晋元率“八百壮士”坚守四行仓库，掩护中国军队撤退。',
    '10月26日，日军突破大场防线，中国军队从闸北撤退。第88师262旅524团团附谢晋元受命率官兵420余人留守苏州河北岸的四行仓库，掩护大部队撤退。守军于10月27日凌晨进驻仓库，对外称八百人，故被称为“八百壮士”。\n\n四行仓库保卫战持续四天四夜，守军击退日军多次进攻，直到10月31日凌晨撤入租界。战斗是淞沪会战末期的重要节点，振奋了全国军民的抗战信心；具体战果、伤亡与撤入租界后的遭遇须据战史档案。',
    [], [], 'octCnSihang', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '国防部与中国军网资料记10月26日受命、27日凌晨进驻、420余人、对外称八百人；战果与伤亡数字存在差异，未取单一统计。',
    }),
  record('guisui-falls', 14, '军事', '归绥失守', '绥远 · 归绥',
    '日军占领归绥（今呼和浩特），绥远省会成为日军控制。',
    '10月14日，日军占领绥远省归绥（今呼和浩特）。此前日军已占领张家口、大同，沿平绥铁路向西推进；归绥失守使绥远省大部落入日军控制。\n\n归绥失守是绥远抗战的挫折，不等于中国在绥远的抵抗停止；傅作义等部在此前后继续作战。具体战斗经过、守军番号与撤退路线须据战史档案。本条只记失守。',
    [], [], 'octCnOct', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年10月事件汇编记10月14日日军占领归绥；战斗经过与守军部署未逐条核对。',
    }),
]
