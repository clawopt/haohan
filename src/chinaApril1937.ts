import type { Category, HistoryEvent } from './data'

// April 1937: the Seven Gentlemen are indicted, the CCP issues its
// "Letter to All Comrades", and the Western Route Army's survivors reach
// Xingxingxia.
export const chinaAprilSources = {
  aprCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  aprCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1937年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415986.html' },
  aprCn12371: { name: '共产党员网 · 党史百年·天天读：1937年4月15日', url: 'https://www.12371.cn/2021/04/12/ARTI1618211964499886.shtml' },
  aprCnQi: { name: '中新网 · 特殊起诉书解密“七君子事件”真相', url: 'http://www.chinanews.com.cn/cul/news/2008/03-24/1200458.shtml' },
  aprCnZhou: { name: '周恩来纪念网 · 周恩来与蒋介石为何越走越远', url: 'http://zhouenlai.people.cn/BIG5/n1/2020/0319/c409117-31639554-3.html' },
  aprCnStars: { name: '中共中央党史和文献研究院 · 三大主力红军会师（西路军余部到星星峡）', url: 'https://www.dswxyjy.org.cn/n/2013/1127/c244520-23670123.html' },
  aprCnXj: { name: '新疆统一战线 · 滕代远：八路军驻新疆办事处首任主任', url: 'https://www.xjtzb.gov.cn/static/content/tzbk/2024-08-01/1268547546343809024.html' },
  aprCnDecl: { name: '中共中央党史和文献研究院 · 西安事变后的“统一救国运动”初探（引1937年4月12日宣言）', url: 'https://www.dswxyjy.org.cn/n1/2016/0511/c219021-28342051.html' },
}

type SourceId = keyof typeof chinaAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `apr37-cn-${id}`, year: 1937, month: 4, country: 'china', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaAprilEvents: HistoryEvent[] = [
  record('seven-gentlemen-indictment', 3, '政治', '江苏高等法院对“七君子”提起公诉', '江苏 · 苏州',
    '沈钧儒、章乃器等七位救国会领袖被以“危害民国”罪名起诉。',
    '4月3日，江苏省高等法院检察处对沈钧儒、章乃器、邹韬奋、李公朴、沙千里、史良、王造时七人提起公诉，指控他们“以危害民国为目的而组织团体，宣传与三民主义不相容之主义”。七人于1936年11月被国民政府逮捕，史称“七君子事件”。\n\n公诉是国民党当局对救国会运动的司法压制，不是法院已经作出有罪判决。案件在6月11日和25日两次开庭审理；全国各界与中共随后展开营救和抗议。本条只记公诉这一诉讼节点。',
    [], ['press-world'], 'aprCnQi', {
      topicIds: ['united-front'],
      evidenceNote: '中新网与CCTV报道均记4月3日提起公诉；起诉书原文与后续庭审记录未逐页核对，罪名表述保留原文限定。',
    }),
  record('zhou-returns-yanan', 4, '政治', '周恩来结束杭州谈判返回延安', '浙江 · 杭州 → 陕北 · 延安',
    '杭州谈判结束后，周恩来途经西安返回延安，向中央汇报谈判情况。',
    '4月初，周恩来结束在杭州与蒋介石的谈判，带着与蒋联系所用的密码，途经西安返回延安，向中共中央汇报谈判情况。杭州谈判从3月下旬持续到4月初，双方讨论了红军改编、边区政权与国共合作条件。\n\n“4月初返回”在不同资料中只给到月份和上旬，未注明具体日期；本条以4月4日作为返回时间，须与杭州谈判的实际结束日区分。返回延安不等于谈判结束，6月至8月双方又在庐山、南京继续会谈。',
    ['zhouenlai', 'chiang'], ['cpc-central', 'nanjing-government'], 'aprCnZhou', {
      topicIds: ['united-front'],
      evidenceNote: '周恩来纪念网记“途经西安，于4月初返回延安”；具体日期未给出，本条取4月4日为约略定位，不作为已核实的确切返回日。',
    }),
  record('seven-gentlemen-declaration', 12, '政治', '中共中央发表《对沈章诸氏被起诉宣言》', '陕北 · 延安',
    '中共中央公开声援“七君子”，谴责国民党制造“爱国有罪”之狱。',
    '4月12日，中共中央发表《对沈章诸氏被起诉宣言》，驳斥起诉书的指控，赞扬沈钧儒等“以坦白之襟怀、热烈之情感、光明磊落之态度，提倡全国团结、共赴国难、停止内战、一致抗日”，称其为“中华男女之应尽责任与光荣模范”。\n\n宣言是中共对“七君子”案的公开政治声援，属于统一战线与救亡运动的一部分。宣言不能代替法院判决，也不能据此推断国民党当局当天已改变对救国会的政策；案件仍在此后继续审理。',
    ['mao'], ['cpc-central', 'press-world'], 'aprCnDecl', {
      topicIds: ['united-front'],
      evidenceNote: '中央党史和文献研究院文章引1937年4月12日宣言及《中共中央文件选集》第11册；宣言全文未逐字校读。',
    }),
  record('letter-to-comrades', 15, '政治', '中共中央发出《告全党同志书》', '陕北 · 延安',
    '中共中央号召全党为巩固国内和平、争取民主权利、实现对日抗战而斗争。',
    '4月15日，中共中央发出《告全党同志书》，号召全党“为巩固国内和平，争取民主权利，实现对日抗战而斗争”，指出“在目前新阶段内，我党工作中心的一环，应该是抗日的民主运动的发展”。\n\n这份文件是西安事变善后与国共谈判进入新阶段后的政治动员，要求党员转变斗争方式、发动群众抗日救亡。文件中的方针是中共当时的政治路线，不等于国民党方面已经接受全部主张；两党谈判仍在继续。',
    ['mao', 'zhangwentian'], ['cpc-central'], 'aprCn12371', {
      topicIds: ['united-front'],
      references: ['aprCnCpc'],
      evidenceNote: '共产党员网“党史百年·天天读”与中国共产党大事记均记4月15日发出《告全党同志书》并列引原文；文件全文未逐字校读。',
    }),
  record('north-china-drills', 25, '军事', '华北日本驻军开始在津郊、平郊及通县附近演习', '中国 · 天津、北平、通县',
    '日本华北驻军开始大规模演习，同时策动伪军进犯绥远。',
    '4月25日，华北日本驻军开始在天津郊区、北平郊区及通县附近举行演习。人民网《抗战大事记·1937年》同时记载，日本方面策动伪军进犯绥远。\n\n演习发生在七七事变前两个多月，是日本在华北扩大军事压力、扶植伪政权的一部分。大事记只记演习开始与策动伪军，未列参演兵力、科目与演习结束日期；本条不据后来的全面侵华战争补写细节。',
    [], ['japan'], 'aprCnChronology', {
      evidenceNote: '单一大事记条目记4月25日华北日军演习及策动伪军进犯绥远；日本华北驻军档案与演习记录未逐条核对。',
    }),
  record('xingxingxia', 28, '军事', '西路军左支队抵达星星峡', '甘肃、新疆交界 · 星星峡',
    '李先念等率领的西路军左支队余部抵达星星峡，陈云、滕代远前往接应。',
    '4月底，李先念等率领的西路军左支队余部历尽艰险，抵达甘肃、新疆交界的星星峡，仅存400余人。中共中央代表陈云、滕代远等从苏联进入新疆，带着汽车和物资前往接应；5月1日前后与左支队会合。\n\n左支队到达星星峡是西路军在河西走廊失败后保存下来的一部分力量，不等于西路军整体已经恢复建制。具体到达日有“4月底”“4月28日”等表述；本条取4月28日，迎接与进入新疆的时间另见相关记录。',
    [], ['west-red'], 'aprCnStars', {
      references: ['aprCnXj'],
      evidenceNote: '中央党史和文献研究院记左支队1937年4月底到达星星峡、陈云滕代远接应；新疆统战部资料记4月28日陈云等带汽车前往，具体到达日未完全统一。',
    }),
  record('yang-hucheng-dismissed', 30, '政治', '杨虎城被蒋介石革职', '中国 · 南京',
    '西安事变善后中，杨虎城被革职，随后被迫出国考察。',
    '4月30日，杨虎城被蒋介石革职，此后被迫以“出国考察军事”的名义离开中国。杨虎城是西安事变的主要发动者之一，事变和平解决后，他与东北军、十七路军的善后安排一直受到南京方面压力。\n\n革职是西安事变善后的政治处理，不等于杨虎城当天已经离开中国；其出国与后来回国被囚的经历须分别记录。本条只记革职这一人事节点，不把后来遇害写入1937年4月。',
    ['yanghucheng', 'chiang'], ['nanjing-government'], 'aprCnChronology', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网抗战大事记记4月30日杨虎城被革职、后被迫出国考察；革职令原文与出国日期未逐条核对。',
    }),
]
