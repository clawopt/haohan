import type { Category, HistoryEvent } from './data'

// May 1937: the Western Route Army survivors meet the CCP delegation at
// Xingxingxia, the Party holds its national conference, and a KMT mission
// visits Yan'an.
export const chinaMaySources = {
  mayCnStars: { name: '中共中央党史和文献研究院 · 三大主力红军会师（西路军余部到星星峡）', url: 'https://www.dswxyjy.org.cn/n/2013/1127/c244520-23670123.html' },
  mayCn12371: { name: '共产党员网 · 党史百年·天天读：1937年5月2日', url: 'https://www.12371.cn/2021/04/29/ARTI1619703307147817.shtml' },
  mayCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1937年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415986.html' },
  mayCnDsw: { name: '中共中央党史和文献研究院 · 迎接全国抗日高潮的到来', url: 'https://www.dswxyjy.org.cn/n/2014/0121/c244520-24181561.html' },
  mayCnYang: { name: '西安市档案网 · 西安事变后杨虎城被逼出国的艰难历程', url: 'https://www.xadaj.gov.cn/gczy/zdhc/1803618904851038209.html' },
  mayCnThepaper: { name: '澎湃新闻 · 延安故事：朱德、林伯渠、叶剑英同国民党中央考察团', url: 'https://m.thepaper.cn/newsDetail_forward_2303772' },
}

type SourceId = keyof typeof chinaMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `may37-cn-${id}`, year: 1937, month: 5, country: 'china', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaMayEvents: HistoryEvent[] = [
  record('xingxingxia-meeting', 1, '军事', '西路军余部与陈云、滕代远在星星峡会合', '甘肃、新疆交界 · 星星峡',
    '李先念等率领的西路军左支队余部与中共中央代表会合，随后进入新疆。',
    '5月1日前后，李先念等率领的西路军左支队余部与中共中央代表陈云、滕代远在星星峡会合。陈云等带着四十多辆汽车和服装、食品、药品等物资前来接应；左支队余部约400余人随后进入新疆。\n\n星星峡会合是西路军余部保存下来的重要节点，不等于西路军整体恢复建制。会合后部队在新疆整训，并在全面抗战爆发后分批返回延安；具体到达、会合与进疆日期在资料中略有差异。',
    [], ['west-red'], 'mayCnStars', {
      references: ['mayCnCpc'],
      evidenceNote: '中央党史和文献研究院记5月1日陈云、滕代远到星星峡迎接；左支队“4月底”到达，具体会合日与进疆安排见同一资料。',
    }),
  record('national-conference', 2, '政治', '中国共产党全国代表会议在延安开幕', '陕北 · 延安',
    '来自苏区、白区和红军的代表在延安开会，讨论抗日时期的任务。',
    '5月2日至14日，中共中央在延安召开有苏区、白区和红军代表参加的党的全国代表会议（当时称苏区代表会议）。出席会议的正式代表218人，列席64人。张闻天致开幕词，毛泽东作《中国共产党在抗日时期的任务》的报告。\n\n会议批准了遵义会议以来的政治路线，为全面抗战爆发前的统一战线与政治动员做准备。会议名称、代表人数与议程见党史资料；会议期间的讨论与决议须与报告文本分别理解。',
    ['mao', 'zhangwentian', 'zhu', 'bogu'], ['cpc-central'], 'mayCn12371', {
      precision: 'range', endDay: 14, date: '1937年5月2日—14日', topicIds: ['united-front'],
      references: ['mayCnCpc'],
      evidenceNote: '共产党员网与中国共产党大事记均记5月2日—14日全国代表会议、218名正式代表与毛泽东报告；会议记录原文未逐字校读。',
    }),
  record('mao-report', 3, '政治', '毛泽东作《中国共产党在抗日时期的任务》报告', '陕北 · 延安',
    '毛泽东在党的全国代表会议上系统阐述抗日时期的任务与统一战线政策。',
    '5月3日前后，毛泽东在延安召开的党的全国代表会议上作《中国共产党在抗日时期的任务》的报告。报告分析中日民族矛盾上升后的国内形势，提出争取民主、巩固和平、实现抗战的任务，并强调在统一战线中坚持无产阶级领导权。\n\n报告是会议的核心政治文件，后来与《为争取千百万群众进入抗日民族统一战线而斗争》的结论一起收入《毛泽东选集》。报告日期在会议期间的5月3日，具体报告次数与修改过程须据会议记录。',
    ['mao'], ['cpc-central'], 'mayCn12371', {
      topicIds: ['united-front'],
      evidenceNote: '党史资料记毛泽东在5月2日—14日会议期间作报告；报告具体日期与文本版本未逐条核对，本条取5月3日为会议前期定位。',
    }),
  record('white-area-conference', 17, '政治', '中共中央白区工作会议在延安开幕', '陕北 · 延安',
    '会议总结白区工作经验，批评关门主义与冒险主义，讨论新阶段的斗争策略。',
    '5月17日至6月10日，中共中央在延安召开白区工作会议。出席会议的有北方局及其所属北平、天津、河北、山西、河南、山东、绥远等地党组织负责人，张闻天、刘少奇主持会议。刘少奇作《关于白区的党和群众工作》的报告，系统批评过去十年白区工作中的“左”倾冒险主义和关门主义。\n\n白区工作会议与党的全国代表会议相继举行，是全面抗战前中共调整国民党统治区工作方式的重要会议。会议跨月持续到6月10日，本条只记开幕；具体争论、决议与组织调整须据会议记录。',
    ['zhangwentian'], ['cpc-central'], 'mayCnDsw', {
      references: ['mayCnCpc'],
      evidenceNote: '中央党史和文献研究院记5月17日—6月10日白区工作会议、张闻天刘少奇主持与刘少奇报告；会议记录原文未逐字校读。',
    }),
  record('yang-hucheng-shanghai', 27, '政治', '杨虎城离开西安前往上海准备出国', '陕西 · 西安 → 上海',
    '被革职后的杨虎城离开西安赴上海，等待以“考察军事”名义出国。',
    '5月27日，杨虎城从西安乘飞机前往上海，准备出国。此前南京国民政府于5月7日撤销西安绥靖公署和十七路军总部，任命杨虎城为“欧美考察军事专员”，实际是逼令他离开军队和国内政治。\n\n杨虎城此行是西安事变善后的延续，不等于他当天已经离开中国；他在上海停留约一个月，6月29日乘船出国。本条只记5月27日离西安赴上海，出国与后来回国被囚的经历另见相关记录。',
    ['yanghucheng', 'chiang'], ['nanjing-government'], 'mayCnYang', {
      topicIds: ['xian-incident'],
      evidenceNote: '西安市档案网与渭南新闻网记5月27日杨虎城离西安赴上海、6月29日乘船出国；具体航班与送行人员见回忆资料，未逐条核对。',
    }),
  record('kmt-mission-yanan', 29, '政治', '国民党中央考察团到达延安', '陕北 · 延安',
    '国民党中央考察团一行到达延安，考察红军与陕甘宁特区。',
    '5月29日下午，国民党中央考察团一行17人（一说18人），在团长涂思宗、副团长萧致平（萧淑萱）率领下到达延安。考察团由国民政府军事委员会委员长西安行营派出，此前于5月25日从西安出发，途中考察了云阳镇红军总指挥部、庄里镇及附近红军部队。\n\n考察团访问是国共合作谈判中的一次公开接触，团员考察了抗日军政大学、中共中央党校和各武装部队。访问不等于国民党已经承认陕甘宁边区政权，也不等于双方谈判已经完成；具体会谈与报告须据双方档案。',
    ['zhouenlai', 'zhu'], ['cpc-central', 'nanjing-government'], 'mayCnThepaper', {
      references: ['mayCnDsw'], topicIds: ['united-front'],
      evidenceNote: '澎湃与中央党史资料记5月25日从西安出发、5月29日下午到达延安及考察团人数；人数有17人与18人两种表述，未强行统一。',
    }),
  record('yanan-may30-rally', 30, '社会', '延安纪念“五卅”并欢迎国民党中央考察团', '陕北 · 延安',
    '延安各界举行大会，纪念五卅运动并欢迎国民党中央考察团。',
    '5月30日，延安各机关、团体、武装部队举行纪念“五卅”与欢迎国民党中央考察团大会，五六千人参加。毛泽东、朱德、林伯渠先后致欢迎词，考察团成员萧致平等人讲话。\n\n大会把纪念五卅运动与国共合作抗战的公开活动结合在一起，是延安当时最大规模的群众集会之一。参加人数为当时报道的估计；大会具体程序与讲话全文须据当时报刊与档案。',
    ['mao', 'zhu'], ['cpc-central'], 'mayCnThepaper', {
      topicIds: ['united-front'],
      evidenceNote: '澎湃“学党史”文章记5月30日延安纪念五卅与欢迎考察团大会、五六千人参加及毛泽东朱德林伯渠致词；人数为估计值。',
    }),
]
