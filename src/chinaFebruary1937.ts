import type { Category, HistoryEvent } from './data'

// February 1937: the Xi'an settlement moves from military standoff to formal
// negotiations, while the Western Route Army's position in Gansu collapses.
export const chinaFebruarySources = {
  febCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
  febCnCpc: { name: '中共中央党史和文献研究院 · 党史百年·天天读：1937年2月10日', url: 'https://www.dswxyjy.org.cn/GB/434461/434463/434798/index.html' },
  febCnTalks: { name: '人民网 · 国共谈判与全国性抗日战争的准备（三）', url: 'http://dangshi.people.com.cn/n/2015/0526/c396421-27058038-3.html' },
  febCnZhou: { name: '周恩来纪念网 · 周恩来与张冲的五次会谈', url: 'https://zhouenlai.people.cn/n1/2018/0814/c409117-30228466-2.html' },
  febCnCctv: { name: 'CCTV · 西安事变后周恩来与蒋介石的五次谈判始末', url: 'https://news.cctv.com/society/20080417/103225.shtml' },
  febCnErer: { name: '程中原《转折关头：张闻天在1935—1943》节选 · 光明网', url: 'https://epaper.gmw.cn/sz/html/2012-11/01/nw.D110000sz_20121101_2-05.htm' },
  febCnWest: { name: '甘肃省红色纪念馆 · 红西路军最艰苦的征战', url: 'http://www.gsds.gov.cn/gsshsjng/gansudangshizhizui/20211217/1815358274f67af59be.htm' },
  febCnWestBreak: { name: '甘肃党史网 · 红西路军三进三出倪家营子', url: 'http://gsds.gov.cn/dangshixuanchuan/longyuanhonggushi/20240122/16031549488e0b29044.htm' },
  febCnSong: { name: '新浪娱乐 · 马徐维邦之孙谈《夜半歌声》', url: 'http://ent.sina.com.cn/x/2005-11-29/0944911177.html' },
}

type SourceId = keyof typeof chinaFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `feb37-cn-${id}`, year: 1937, month: 2, country: 'china', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaFebruaryEvents: HistoryEvent[] = [
  record('north-salvation', 1, '社会', '华北各界救国联合会成立', '华北',
    '抗日救亡团体在华北建立联合组织。',
    '人民网《抗战大事记·1937年》记载，2月1日华北各界救国联合会成立。\n\n大事记只记组织成立，未列发起团体、成立城市与具体纲领，本条不据后来的救亡运动补写这些内容。',
    [], [], 'febCnChronology', {
      evidenceNote: '单一大事记条目，仅支持成立日期与组织名称；成立地点、发起人与组织章程未由该条说明。',
    }),
  record('erer-incident', 2, '政治', '东北军少壮派枪杀王以哲', '陕西 · 西安',
    '西安善后中，主和将领王以哲遇害，局势一度濒临失控。',
    '西安事变善后期间，东北军内部主和与主战的分歧激化。2月2日上午，少数少壮派军官将力主和平解决的东北军将领王以哲枪杀。周恩来在极端困难的情况下处理善后，努力维持和平局面。\n\n这一事件通常称为“二二事件”。它发生在张学良被扣、中央军西进的压力之下，不等于东北军整体放弃和平解决；具体策划与参与者责任在不同回忆中仍有差别。',
    ['wangyizhe', 'zhouenlai', 'yanghucheng'], ['northeast-army', 'northeast-young'], 'febCnErer', {
      topicIds: ['xian-incident', 'united-front'],
      references: ['febCnZhou'],
      evidenceNote: '书摘明确记载2月2日上午王以哲被枪杀及周恩来善后；未逐条核对当时的原始文电，也不把回忆中的责任判断写成法庭结论。',
    }),
  record('central-army-entry', 8, '政治', '国民党中央军进驻西安', '陕西 · 西安',
    '顾祝同率中央军进入西安，并出任西安行营主任。',
    '2月8日，国民党军事委员会西安行营主任顾祝同率中央军进驻西安。蒋介石委派顾祝同为与中共谈判的全权代表，后又增派张冲、贺衷寒参加；中共方面后来增派叶剑英。\n\n中央军进驻是西安善后的军事安排，与随后在西安举行的国共谈判相互关联。不同资料对谈判起始日有2月8日、9日与12日等表述，本条只记进驻与人事，谈判另条处理。',
    ['guzhutong', 'chiang', 'zhouenlai'], ['nanjing-government', 'central-army'], 'febCnChronology', {
      topicIds: ['xian-incident', 'united-front'],
      references: ['febCnCctv'],
      evidenceNote: '人民网大事记与CCTV报道均记2月8日进驻；顾祝同任行营主任见同期报道。谈判起始日存在异说，未合并到本条。',
    }),
  record('first-meeting', 9, '政治', '顾祝同与周恩来在西安首次会面', '陕西 · 西安',
    '顾祝同转达蒋介石杭州谈判推迟，先与周恩来在西安接触。',
    '2月9日，顾祝同到达西安当天即与周恩来会面。顾祝同告知，蒋介石原定2月10日与周恩来的杭州谈判推迟，要他先与周恩来谈判。此后以顾祝同、张冲、贺衷寒为一方，周恩来、叶剑英等为另一方的接触逐步展开。\n\n这次会面是西安谈判的开端之一。另有资料把2月9日直接称为第一次正式会谈，也有资料以2月12日为正式谈判开始；本条将会面与正式谈判分开记录。',
    ['guzhutong', 'zhouenlai', 'yejianying'], ['nanjing-government', 'cpc-central'], 'febCnZhou', {
      topicIds: ['xian-incident', 'united-front'],
      references: ['febCnTalks'],
      evidenceNote: '周恩来纪念网明确记2月9日会面及杭州谈判推迟；人民网党史另记2月12日开始正式谈判。两种表述指向不同节点，未强行统一。',
    }),
  record('ccp-telegram', 10, '政治', '中共中央致电国民党五届三中全会', '陕北 · 延安 → 南京',
    '中共提出五项要求与四项保证，推动国共合作。',
    '2月10日，中共中央致电即将召开的国民党五届三中全会，提出五项要求：停止内战、集中国力一致对外；保障言论、集会、结社自由并释放政治犯；召开各党各派各界各军代表会议；迅速完成对日作战准备；改善人民生活。\n\n电文同时提出四项保证：停止武装推翻国民党政府的方针；苏维埃政府改名为中华民国特区政府；红军改编为国民革命军；停止没收地主土地的政策。这些表述是推动合作的政治条件，不等于国民党方面已全部接受。',
    ['mao', 'zhangwentian', 'zhouenlai'], ['cpc-central'], 'febCnCpc', {
      topicIds: ['united-front'],
      evidenceNote: '中央党史和文献研究院逐日条目列出五项要求与四项保证；电文全文与国民党全会决议分别阅读，不把中共提议写成双方已签署的协议。',
    }),
  record('xian-formal-talks', 12, '政治', '国共西安正式谈判开始', '陕西 · 西安',
    '双方就红军改编、边区政权与停止内战等具体问题开始正式谈判。',
    '2月12日，中共代表周恩来、秦邦宪、叶剑英与国民党代表顾祝同、贺衷寒、张冲在西安开始就国共合作的具体问题正式谈判。谈判涉及红军改编、陕甘宁边区政权、停止内战与释放政治犯等事项。\n\n谈判持续到3月，双方在部分问题上趋于一致，但仍有分歧；3月下旬转入杭州会谈。本条只记西安正式谈判的开始，不把后来达成的口头谅解写成2月12日已经全部签字。',
    ['zhouenlai', 'bogu', 'yejianying', 'guzhutong'], ['cpc-central', 'nanjing-government'], 'febCnTalks', {
      topicIds: ['xian-incident', 'united-front'],
      references: ['febCnCctv'],
      evidenceNote: '人民网党史明确2月12日开始正式谈判并列出双方代表；CCTV对2月8日谈判开始另有表述，已在前条区分进驻、会面与正式谈判。',
    }),
  record('plenum', 15, '政治', '国民党五届三中全会在南京召开', '南京',
    '全会通过实际上接受国共合作的决议，抗日民族统一战线初步形成。',
    '2月15日至22日，国民党五届三中全会在南京召开。全会通过实际上接受国共合作的决议，抗日民族统一战线初步形成。\n\n全会是在西安事变和平解决、中共致电提出五项要求与四项保证之后举行的。会议决议与中共提议之间仍有措辞和条件差异；本条只记会议时间与“实际上接受合作”这一结果，不把全会写成双方已成立正式联合政府。',
    ['chiang'], ['nanjing-government'], 'febCnChronology', {
      topicIds: ['united-front'],
      precision: 'range', endDay: 22, date: '1937年2月15日—22日',
      evidenceNote: '人民网大事记给出2月15日开会、22日结束及“实际上接受国共合作的决议”；全会文件原文与各派发言未逐条校读。',
    }),
  record('nijiayingzi-attack', 1, '军事', '马步芳部向倪家营子西路军发动进攻', '甘肃 · 临泽 · 倪家营子',
    '马元海集中五万余兵力进攻固守倪家营子的西路军。',
    '西路军在高台失守后集中于倪家营子。2月1日，马元海集中五万余兵力向固守倪家营子的西路军发动进攻，战斗持续二十多天。西路军在极端困难条件下防守，伤亡严重。\n\n倪家营子战斗是西路军在河西走廊最艰苦的阶段之一。兵力数字与战斗持续时间来自甘肃党史资料，具体每日战况与伤亡统计在不同研究中有差异。',
    ['west-red'], ['west-red'], 'febCnWest', {
      evidenceNote: '甘肃省红色纪念馆资料给出2月1日进攻、五万余兵力与二十多天激战；未逐日核对战斗详报，兵力与伤亡数字保留资料表述。',
    }),
  record('nijiayingzi-breakout', 27, '军事', '西路军被迫撤离倪家营子', '甘肃 · 临泽 → 祁连山方向',
    '在连续围攻和补给困难下，西路军于2月底被迫突围。',
    '倪家营子被围期间，西路军曾于2月21日晚突围向东转移，22日又因地形与敌情不利返回。此后部队弹尽粮绝、伤亡严重，于2月27日被迫再次突围，向祁连山方向转移。\n\n不同研究对突围日期有2月21日、27日等不同侧重：21日是第一次突围，27日是最终撤离。本条记最终撤离，不把两次行动合并为一次。',
    ['west-red'], ['west-red'], 'febCnWestBreak', {
      references: ['febCnWest'],
      evidenceNote: '甘肃党史网记21日晚突围、22日返回、27日被迫突围；另有研究以21日为突围日。正文保留两次行动的差别。',
    }),
  record('midnight-song', 20, '文化', '《夜半歌声》在上海金城大戏院上映', '上海 · 金城大戏院',
    '马徐维邦编导的新华影业影片上映，连映三十余天。',
    '2月20日，马徐维邦编导、新华影业公司出品的《夜半歌声》在上海金城大戏院上映。影片以恐怖片形式讲述革命青年在军阀统治下遭受迫害的悲剧，田汉参与剧本修改并撰写歌词。\n\n据马徐维邦之孙的回忆文章，影片在金城大戏院连映34天，卖座打破该影院纪录。本条记录上映日与当时放映情况，不把后来的“中国第一部恐怖片”评价当作1937年已经形成的定论。',
    [], ['press-world'], 'febCnSong', {
      evidenceNote: '单一回忆文章给出2月20日、金城大戏院与连映34天；未核对当日广告与放映账目，“第一部恐怖片”为后来的评价性说法。',
    }),
]
