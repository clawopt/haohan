import type { Category, HistoryEvent } from './data'

// November 1937: Hangzhou Bay landing, the fall of Taiyuan and Shanghai, the
// Nine-Power Conference, and the government's move to Chongqing.
export const chinaNovemberSources = {
  novCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  novCnSihang: { name: 'Wikipedia · November 1937（四行仓库保卫战结束）', url: 'https://en.wikipedia.org/wiki/November_1937' },
  novCnNinePower: { name: '新华网 · 南京大屠杀，为什么会发生（布鲁塞尔会议）', url: 'http://news.xinhuanet.com/politics/2017-12/15/c_1122113728.htm' },
  novCnCapital: { name: '人民网 · 国民政府迁都重庆始末', url: 'http://dangshi.people.com.cn/n1/2017/1113/c85037-29642035.html' },
}

type SourceId = keyof typeof chinaNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `nov37-cn-${id}`, year: 1937, month: 11, country: 'china', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaNovemberEvents: HistoryEvent[] = [
  record('sihang-ends', 1, '军事', '四行仓库保卫战结束', '上海 · 四行仓库',
    '坚守四行仓库的“八百壮士”撤入租界，保卫战结束。',
    '11月1日，坚守上海四行仓库的“八百壮士”在完成掩护任务后撤入租界，四行仓库保卫战结束。守军自10月27日进驻仓库，孤军奋战四昼夜，击退日军多次进攻。\n\n撤退是奉命行动，不等于守军放弃抵抗；撤入租界后，他们被租界当局解除武装并长期羁押。具体伤亡、撤退交涉与后续遭遇须据战史档案；本条只记保卫战结束。',
    [], [], 'novCnSihang', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '1937年11月事件汇编记11月1日四行仓库保卫战结束、守军撤入租界；撤退交涉与伤亡数字未逐条核对。',
    }),
  record('hangzhou-bay-landing', 5, '军事', '日军在杭州湾登陆', '浙江 · 杭州湾 · 金山卫',
    '日军第十军在杭州湾金山卫、全公亭登陆，迂回包抄上海。',
    '11月5日拂晓，日军第十军利用大雾与大潮，在杭州湾金山卫、全公亭一带登陆，对淞沪中国军队实施迂回包围。中国守军沿海部队此前多被抽调支援市区，猝不及防，阵地相继失守。\n\n杭州湾登陆是淞沪会战后期战局逆转的关键节点，迫使中国军队全线撤退。登陆成功不等于上海当天失守；具体登陆兵力、战斗经过与撤退命令须据战史档案。本条只记登陆。',
    [], [], 'novCnChronology', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '人民网抗战大事记与上海淞沪抗战纪念馆资料记11月5日杭州湾登陆；登陆部队与战斗细节未逐条核对。',
    }),
  record('taiyuan-falls', 8, '军事', '太原失守', '山西 · 太原',
    '日军占领太原，太原会战以中国军队撤退告终。',
    '11月8日，日军占领山西太原。此前中国军队在忻口、娘子关等地与日军激战，伤亡严重；日军突破防线后，太原于11月8日失守。\n\n太原失守标志着太原会战的结束，华北正面战场大规模防御作战告一段落。失守不等于山西抗战停止；八路军随后在敌后开展游击战争。具体战斗经过、守军部署与撤退路线须据战史档案。',
    [], [], 'novCnChronology', {
      topicIds: ['full-resistance'],
      evidenceNote: '人民网抗战大事记记11月8日日军占领太原；会战经过与守军部署未逐条核对。',
    }),
  record('shanghai-falls', 12, '军事', '上海沦陷，淞沪会战结束', '上海',
    '日军占领上海，持续三个月的淞沪会战结束。',
    '11月12日，日军占领上海，淞沪会战结束。会战自8月13日开始，中国军队在上海及周边与日军激战三个月，付出重大伤亡，最终因杭州湾登陆与全线撤退而失利。\n\n上海沦陷使国民政府首都南京直接暴露在日军威胁之下，也促使国民政府迁都重庆。会战结束不等于长江三角洲抵抗停止；具体撤退、伤亡与日军入城情况须据战史档案。',
    [], [], 'novCnChronology', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '人民网与上海淞沪抗战纪念馆资料记11月12日上海沦陷、淞沪会战结束；部分资料记11月9日或11日，日期差异保留。',
    }),
  record('nine-power-declaration', 15, '外交', '九国公约会议通过谴责日本宣言', '比利时 · 布鲁塞尔',
    '九国公约会议通过宣言谴责日本，意大利投反对票。',
    '11月15日，九国公约会议在布鲁塞尔通过宣言，谴责日本违反九国公约，只有意大利投反对票。会议此前于11月3日开幕，中国要求制裁日本，但各国不愿采取实质行动。\n\n宣言是国际舆论对日本侵略的批评，不等于会议对日本实施制裁或援助中国；会议在11月24日通过报告书后无限期休会。具体宣言文本与表决须据会议档案。本条只记通过宣言。',
    [], ['nanjing-government'], 'novCnNinePower', {
      topicIds: ['full-resistance'],
      evidenceNote: '新华网与布鲁塞尔会议资料记11月15日通过谴责宣言、意大利反对；宣言全文与表决记录未逐条核对。',
    }),
  record('capital-move', 20, '政治', '国民政府宣布迁都重庆', '中国 · 南京 → 重庆',
    '国民政府发表迁都宣言，决定移驻重庆，坚持长期抗战。',
    '11月20日，国民政府发表迁都宣言，宣布为适应战况、统筹全局、长期抗战，国民政府移驻重庆。此前11月16日国防最高会议已决定迁都，国民政府主席林森于当晚乘舰西上，五院随迁。\n\n迁都是国民政府应对首都危机的战略决定，不等于重庆当天成为所有政府机构的实际办公地；迁驻过程持续数月。宣言全文与迁驻安排须据国民政府档案；本条只记宣言发表。',
    ['chiang'], ['nanjing-government'], 'novCnCapital', {
      topicIds: ['full-resistance'],
      evidenceNote: '人民网与光明网资料记11月16日国防最高会议决定迁都、11月20日发表迁都宣言；宣言全文与迁驻过程未逐条核对。',
    }),
  record('brussels-adjourns', 24, '外交', '布鲁塞尔会议无限期休会', '比利时 · 布鲁塞尔',
    '九国公约会议通过报告书后无限期休会，未制裁日本。',
    '11月24日，九国公约会议在通过《九国公约会议报告书》后宣布无限期休会。报告书重申九国公约原则，要求中日停止敌对行动、采取和平程序，但拒绝中国关于制裁日本的请求。\n\n会议休会是中国外交的一次挫折，说明国际社会未能有效制止日本侵略；中国转而寻求苏联、美国等国的个别援助。具体报告书文本与各国立场须据会议档案。本条只记休会。',
    [], ['nanjing-government'], 'novCnNinePower', {
      topicIds: ['full-resistance'],
      evidenceNote: '新华网与中国历史研究院资料记11月24日通过报告书、无限期休会；报告书全文与各国立场未逐条核对。',
    }),
]
