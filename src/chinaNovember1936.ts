import type { Category, HistoryEvent } from './data'

// November 1936 in China: the Suiyuan campaign, the battle of Shanchengbao,
// the arrest of the "Seven Gentlemen", and the Shanghai mill strike.
export const chinaNovember1936Sources = {
  nov36CnChronology: { name: '中国共产党新闻网 · 中国共产党大事记·1936年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415984.html' },
  nov36CnShanchengbao: { name: '中国共产党新闻网 · 红军长征的最后一战：山城堡战役', url: 'https://cpc.people.com.cn/n1/2023/0306/c443712-32637598.html' },
  nov36CnSuijiang: { name: '人民网 · “全国抗战之先声”——纪念绥远抗战80周年', url: 'http://dangshi.people.com.cn/n1/2016/1201/c85037-28918020.html' },
  nov36CnDong: { name: '中国共产党新闻网 · 董其武将军的抗日岁月', url: 'http://cpc.people.com.cn/n1/2025/0910/c443712-40560621.html' },
  nov36CnQi: { name: '人民网 · 资料中心：11月23日“七君子事件”', url: 'http://cpc.people.com.cn/BIG5/64162/64165/72301/72328/index.html' },
  nov36CnStrike: { name: '上海市普陀区人民政府 · 怒潮澎湃昌化桥（上海日商纱厂工人反日大罢工纪念地）', url: 'https://www.shpt.gov.cn/xfdt-bmshsjpz/20230918/914804.html' },
}

type SourceId = keyof typeof chinaNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `nov36-cn-${id}`, year: 1936, month: 11, country: 'china', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaNovember1936Events: HistoryEvent[] = [
  record('mill-strike', 8, '社会', '上海日商纱厂工人举行反日大罢工', '上海',
    '上海沪东、沪西日商纱厂工人相继罢工，参加者达四万余人。',
    '11月，在中共纱厂工作委员会的领导下，上海沪东、沪西日商纱厂工人先后罢工。11月8日，内外棉等七家纱厂约一万五千名工人率先罢工，随后大康、上海、公大等厂工人陆续加入，全市参加罢工人数达四万余人，是五卅运动以来日商纱厂规模最大的一次反日大罢工。\n\n罢工把工人经济诉求与抗日救亡联系起来，形成年底上海抗日救亡运动的重要一环。各厂罢工并非同日开始，结束时间与具体协议须据工运档案；本条以11月8日作为大规模罢工展开的节点。',
    [], [], 'nov36CnStrike', {
      evidenceNote: '上海市普陀区政府纪念地资料与工运史料记1936年11月上海日商纱厂四万余人罢工、11月8日七厂一万五千人先行罢工；各厂起止与协议未逐条核对。',
    }),
  record('honggeertu-battle', 13, '战役', '红格尔图战役', '绥远 · 红格尔图',
    '傅作义部在红格尔图击退日伪军进攻，取得绥远抗战首胜。',
    '11月13日起，日伪军向绥远红格尔图发动进攻。傅作义部署彭毓斌、董其武等部坚守并反击，至18日凌晨发起总攻，击退日伪军。红格尔图之战是绥远抗战的首战，为随后收复百灵庙创造了条件。\n\n战斗属于绥远抗战的一部分，具体兵力、伤亡与日伪军番号在不同记述中略有差异；本条采用11月13日至18日的作战范围。',
    [], [], 'nov36CnSuijiang', {
      references: ['nov36CnDong'],
      precision: 'range', endDay: 18, date: '1936年11月13日—18日',
      evidenceNote: '人民网纪念绥远抗战80周年文章与董其武传记资料记11月13日起红格尔图作战、18日凌晨总攻；兵力与伤亡数字未逐条核对。',
    }),
  record('shanchengbao-battle', 21, '军事', '山城堡战役', '甘肃 · 环县 · 山城堡',
    '红军三大主力会师后联合作战，在山城堡歼灭国民党军胡宗南部一部。',
    '11月21日下午至22日中午，红一、红二、红四方面军三大主力在甘肃环县山城堡地区联合作战，对国民党军胡宗南部实施歼灭性打击，全歼其一个多旅。战役由彭德怀等指挥，是红军会师后的首次重大军事胜利，也被视为长征的最后一战。\n\n山城堡战役发生在西安事变前不到一个月，军事上的胜利与随后停止内战、共同抗日的政治转折相互衔接。具体参战部队、伤亡与缴获数字在不同战史中略有差异；本条采用11月21日至22日的作战范围。',
    ['peng'], ['cpc-central'], 'nov36CnShanchengbao', {
      precision: 'range', endDay: 22, date: '1936年11月21日—22日',
      references: ['nov36CnChronology'],
      evidenceNote: '中国共产党新闻网与新华网资料记11月21日下午至22日中午山城堡战役、歼灭胡宗南部一个多旅；参战部队与伤亡数字未逐条核对。',
    }),
  record('seven-gentlemen-arrest', 23, '政治', '“七君子”在上海被捕', '上海',
    '全国各界救国联合会领导人沈钧儒、章乃器等七人被国民党当局逮捕。',
    '11月23日凌晨，国民党当局以“危害民国”等罪名在上海逮捕全国各界救国联合会领导人沈钧儒、章乃器、邹韬奋、李公朴、王造时、沙千里、史良七人，时称“七君子事件”。七人随后被押往江苏高等法院第二分院，1937年4月被正式起诉。\n\n逮捕发生在抗日救亡运动高涨与国共谈判并行的背景下，激起全国舆论抗议，也成为1937年救国会与国民党当局冲突的焦点。具体罪名、审讯与保释交涉须据司法档案；本条只记逮捕。',
    [], ['nanjing-government'], 'nov36CnQi', {
      topicIds: ['united-front'],
      evidenceNote: '人民网资料中心“11月23日”条目记1936年11月23日七君子在上海被捕；起诉书与审讯记录未逐条核对。',
    }),
  record('bailingmiao-victory', 24, '战役', '百灵庙大捷', '绥远 · 百灵庙',
    '傅作义部收复百灵庙，歼灭日伪军一部。',
    '11月23日夜，傅作义部冒着严寒秘密向百灵庙进发，24日零时发起总攻，激战至上午收复百灵庙，毙伤俘日伪军一千三百余人，缴获枪炮、电台与物资。百灵庙是绥北交通、宗教与军事要地，收复后挫败了日军西侵绥远的计划。\n\n百灵庙大捷是绥远抗战的关键胜利，与红格尔图之战共同构成“全国抗战之先声”。具体参战部队、伤亡与缴获数字在不同记述中略有差异；本条只记收复日期与结果。',
    [], [], 'nov36CnSuijiang', {
      references: ['nov36CnDong'],
      evidenceNote: '人民网纪念绥远抗战80周年文章与中国军网资料记11月24日收复百灵庙、毙伤俘日伪军一千三百余人；具体数字与作战细节未逐条核对。',
    }),
]
