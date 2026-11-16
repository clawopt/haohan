import type { Category, HistoryEvent } from './data'

// March 1937: the Western Route Army breaks up in the Qilian Mountains, the
// Xi'an settlement moves to Hangzhou talks, and the Yan'an meeting turns to
// Zhang Guotao's line.
export const chinaMarchSources = {
  marCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  marCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1937年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415986.html' },
  marCnTalks: { name: '人民网 · 国共谈判与全国性抗日战争的准备（三）', url: 'http://dangshi.people.com.cn/n/2015/0526/c396421-27058038-3.html' },
  marCnZhou: { name: '周恩来纪念网 · 周恩来与蒋介石的杭州谈判', url: 'http://zhouenlai.people.cn/n1/2020/0416/c409117-31676430.html' },
  marCnWestStone: { name: '甘肃省红色纪念馆 · 1937年3月14日红西路军军政委员会在石窝山开会', url: 'http://gsds.gov.cn/gsshsjng/gsdssdjt/20190314/1901229928d655.htm' },
  marCnLiyuan: { name: '中国军网 · 梨园口战斗', url: 'http://www.81.cn/yljnt_208627/lsda_208656/16499146.html' },
  marCnZhangWende: { name: '中国军网 · 张文德', url: 'http://www.81.cn/yljnt_208627/ylml/Z_208654/7941238.html' },
  marCnWestRemnant: { name: '中新网 · 西路军余部的悲壮历程', url: 'http://www.chinanews.com.cn/cul/2011/07-15/3186567_2.shtml' },
  marCnZhangGuotao: { name: '人民网 · 1937年3月31日中共中央对张国焘的错误作出决定', url: 'http://m.people.cn/n4/2017/0331/c2771-8671437.html' },
  marCnYanan: { name: '人民网 · 从拥抱到决裂——毛泽东与张国焘（之六）', url: 'http://dangshi.people.com.cn/BIG5/n/2015/0210/c85037-26540135-2.html' },
}

type SourceId = keyof typeof chinaMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `mar37-cn-${id}`, year: 1937, month: 3, country: 'china', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaMarchEvents: HistoryEvent[] = [
  record('sandaoliugou', 5, '军事', '红三十军八十九师转战三道柳沟', '甘肃 · 临泽 · 三道柳沟',
    '西路军余部在倪家营子突围后转至三道柳沟，继续遭到围攻。',
    '3月5日夜晚，红三十军八十九师政治委员张文德率部转战到临泽县三道流沟。此前西路军已从倪家营子突围，部队在连续作战中伤亡严重、补给困难。八十九师在三道柳沟与追兵苦战五昼夜，随后又星夜突围，向梨园口方向前进。\n\n三道柳沟是西路军向祁连山转移过程中的一段苦战，不是一次独立战役的胜利或失败节点。所引人物条目只记该师的行军与苦战，具体每日战况、兵力与伤亡数字未在该条目中展开，本条不补写。',
    [], ['west-red'], 'marCnZhangWende', {
      evidenceNote: '中国军网张文德条目记3月5日夜间转至三道流沟、苦战五昼夜后向梨园口突围；未核对战斗详报，兵力与伤亡不取单一数字。',
    }),
  record('liyuankou', 12, '军事', '梨园口战斗', '甘肃 · 临泽 · 梨园口',
    '西路军余部在梨园口遭骑兵追击，后卫部队损失惨重。',
    '3月11日夜晚，西路军从三道柳沟突围，向祁连山方向前进。3月12日清晨，部队刚抵达梨园口，追击的敌军骑兵便赶到。担任后卫的红九军与妇女独立团为掩护总部和主力撤入祁连山，在梨园口一带顽强阻击，伤亡严重。\n\n梨园口战斗是西路军在河西走廊最后阶段的关键失利之一。它发生在石窝会议前两天，为总部余部争取了转移时间；具体阵亡与被俘人数在不同研究中有差异，本条不作统一统计。',
    [], ['west-red'], 'marCnLiyuan', {
      references: ['marCnWestStone'],
      evidenceNote: '中国军网与张掖史志资料均记3月11日夜突围、12日晨抵达梨园口并遭骑兵追击；后卫部队番号与伤亡数字保留资料表述。',
    }),
  record('shiwo-meeting', 14, '军事', '西路军军政委员会在石窝山召开会议', '甘肃 · 肃南 · 石窝山',
    '西路军决定分散游击，陈昌浩、徐向前离队返回陕北汇报。',
    '3月14日黄昏，西路军总部和红九军余部在肃南县康乐乡石窝山集中，举行西路军军政委员会会议。会议决定：陈昌浩、徐向前离开部队，返回陕北向党中央汇报情况；由李卓然、李先念、曾传六、王树声、程世才、黄超、熊国炳等组成西路军工作委员会统一指挥；余部分为三个支队就地分散游击。\n\n石窝会议是西路军在河西走廊失败后的组织处置节点。会议的决定是突围与保存力量，不等于当天部队已经完成分散或全部脱离追击；后续各支队的行动另见相关记录。',
    [], ['west-red'], 'marCnWestStone', {
      evidenceNote: '甘肃省红色纪念馆条目明确3月14日黄昏、石窝山会议及三项决定；参会名单与支队编成见该条目，具体人员职务异文未展开。',
    }),
  record('west-route-departure', 15, '军事', '陈昌浩、徐向前离队返回陕北', '甘肃 · 肃南 → 陕北',
    '石窝会议后，西路军主要领导人离队，余部由工作委员会指挥。',
    '3月15日，陈昌浩在石窝山干部会上宣布军政委员会的决定，随后与徐向前离开部队，化装返回陕北向党中央汇报。余部分为三个支队就地游击；其中李先念所率支队沿祁连山西进，四十多天后抵达新疆，受到陈云、滕代远等的迎接。\n\n领导人离队与余部分散游击是石窝会议决定的执行，不等于西路军建制当天全部消失。王树声、张荣所率支队后来溃散；各支队的路线、损失与到达时间在资料中分别记载。',
    [], ['west-red'], 'marCnWestRemnant', {
      references: ['marCnWestStone'],
      evidenceNote: '中新网西路军余部报道记3月15日石窝山干部会宣布决定及李先念支队抵新疆；陈昌浩、徐向前离队的具体路线未逐日核对。',
    }),
  record('yanan-meeting', 23, '政治', '中共中央政治局扩大会议在延安开幕', '陕北 · 延安',
    '会议讨论国内政治形势与党的任务，后期转入对张国焘错误的批评。',
    '3月23日至31日，中共中央政治局在延安召开扩大会议。会议前期讨论西安事变和平解决后的国内政治形势和党的任务，后期着重批评张国焘的错误。毛泽东、张闻天、朱德、张国焘、彭德怀、林彪、贺龙、任弼时、博古等参加会议。\n\n延安会议是西安事变善后与红军内部路线整顿相交织的会议。会议对张国焘的批评属于党内路线与组织问题，不能与后来张国焘个人叛党等同；会议期间的发言与结论须按会议记录分别理解。',
    ['mao', 'zhangwentian', 'zhu', 'peng', 'lin', 'bogu'], ['cpc-central'], 'marCnCpc', {
      precision: 'range', endDay: 31, date: '1937年3月23日—31日',
      evidenceNote: '中国共产党大事记记3月23日—31日延安扩大会议及会议议程；会议记录原文未逐字校读，参会名单以大事记与相关研究为准。',
    }),
  record('hangzhou-talks', 24, '政治', '周恩来赴杭州与蒋介石谈判', '浙江 · 杭州',
    '国共双方在杭州继续谈判，讨论合作抗日的具体条件。',
    '3月下旬，周恩来赴杭州与蒋介石谈判。周恩来重申中共关于国共合作的原则立场，并根据中共中央致国民党五届三中全会电文的精神及西安谈判中争论的问题，提出书面要求、保证与口头声明，坚持陕甘宁行政区保持完整。谈判持续到4月初。\n\n杭州谈判是西安、杭州、庐山系列谈判中的一环，发生在国民党五届三中全会之后。不同资料对周恩来到达杭州的日期有3月24日与3月25日两种表述，谈判起止也以“3月下旬至4月初”概括；本条不把某一天写成双方已达成全部协议。',
    ['zhouenlai', 'chiang'], ['cpc-central', 'nanjing-government'], 'marCnZhou', {
      topicIds: ['united-front'], references: ['marCnTalks'],
      precision: 'range', endDay: 31, date: '1937年3月下旬',
      evidenceNote: '周恩来纪念网记3月25日秘密到达杭州；人民网国共谈判研究记3月24日至3月底在杭州谈判；浙江地方资料记3月24日到达柏庐。日期差异保留，谈判延续至4月初。',
    }),
  record('japanese-warships', 24, '军事', '日舰二十艘来华，拟在青岛大演习', '中国 · 青岛外海',
    '日本军舰集结中国沿海，准备以中国为假想敌举行演习。',
    '3月24日，二十艘日本军舰来华，拟在青岛举行大演习，以中国为假想敌。人民网《抗战大事记·1937年》把这一行动记在3月24日。\n\n军舰集结与演习计划发生在七七事变前三个多月，是日本在华军事压力上升的表现之一。大事记只记军舰数量与演习意图，未列舰名、演习科目与结束日期；本条不据后来的全面侵华战争补写演习细节。',
    [], ['japan'], 'marCnChronology', {
      evidenceNote: '单一大事记条目记3月24日日舰二十艘来华及青岛大演习计划；日本海军档案与演习记录未逐条核对。',
    }),
  record('zhang-guotao-phase', 27, '政治', '延安会议转入批评张国焘的第二阶段', '陕北 · 延安',
    '会议从讨论政治形势转入集中批评张国焘的路线错误。',
    '3月27日至31日，延安会议进入第二阶段，集中讨论张国焘的错误。与会者包括毛泽东、张闻天、朱德、张国焘、彭德怀、林彪、贺龙、任弼时、博古等。会议对张国焘在红四方面军时期及长征中的路线、组织问题展开批评。\n\n会议第二阶段是延安会议内部的议程转换，不是另一场独立会议。批评内容涉及红军历史上的分歧，具体发言与责任判断在不同回忆和研究中有差异；本条只记议程与时间，不把会议批评写成已经作出的最终组织结论。',
    ['mao', 'zhangwentian', 'zhu', 'peng', 'lin', 'bogu'], ['cpc-central'], 'marCnYanan', {
      references: ['marCnCpc'],
      evidenceNote: '人民网研究记3月27日至31日为延安会议第二阶段、讨论张国焘错误；会议发言原文未逐条核对。',
    }),
  record('zhang-guotao-decision', 31, '政治', '中共中央作出《关于张国焘同志错误的决定》', '陕北 · 延安',
    '延安会议闭幕当天，中央政治局作出关于张国焘错误的决定。',
    '3月31日，中共中央政治局在延安召开的扩大会议闭幕，并作出《关于张国焘同志错误的决定》。会议号召全党全军在思想上、政治上和组织上达到一致。张国焘在会上表面上承认错误，后来于1938年脱离中共。\n\n该决定是延安会议的结论性文件，针对的是张国焘的路线与组织错误。决定作出不等于相关历史问题当天全部处理完毕；张国焘后来的叛逃是另一性质的事件，不应倒推到3月31日。',
    ['mao', 'zhangwentian'], ['cpc-central'], 'marCnZhangGuotao', {
      references: ['marCnCpc'],
      evidenceNote: '人民网与中国共产党大事记均记3月31日会议闭幕并作出决定；决定全文与会议记录未逐字校读，张国焘后来去向不写入本条。',
    }),
]
