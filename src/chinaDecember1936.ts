import type { Category, HistoryEvent } from './data'

// December 1936: after the Xi'an Incident, the CCP delegation arrives, the
// Song siblings mediate, and Chiang is released.
export const chinaDecember1936Sources = {
  dec36CnZhou: { name: '中共中央党史和文献研究院 · 西安事变', url: 'https://www.dswxyjy.org.cn/n/2014/0107/c244520-24045602.html' },
  dec36CnSong: { name: '人民网 · 解密：张学良到底为什么送蒋介石回南京', url: 'http://dangshi.people.com.cn/n/2013/0315/c85037-20802800.html' },
  dec36CnTalks: { name: '中国共产党新闻网 · 西安事变及其和平解决', url: 'https://cpc.people.com.cn/GB/64107/65708/65722/4445224.html' },
  dec36CnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1936年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415984.html' },
  dec36CnJapan: { name: '人民网 · 日本对西安事变的“迅速反应”', url: 'http://dangshi.people.com.cn/n/2014/0605/c85037-25108728.html' },
}

type SourceId = keyof typeof chinaDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `dec36-cn-${id}`, year: 1936, month: 12, country: 'china', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaDecember1936Events: HistoryEvent[] = [
  record('zhou-arrives-xian', 17, '政治', '周恩来等飞抵西安', '陕西 · 西安',
    '中共中央代表周恩来、秦邦宪、叶剑英等飞抵西安，与张学良、杨虎城会商和平解决。',
    '12月17日，周恩来、秦邦宪、叶剑英等作为中共中央代表乘张学良专机飞抵西安。周恩来到达后分别与张学良、杨虎城会谈，分析处置蒋介石的两种前途，力促事变和平解决。\n\n中共代表团的到达是西安事变转向和平解决的关键节点。周恩来的斡旋不等于南京与西安当天达成协议；三方谈判、宋子文宋美龄到西安与蒋介石获释在此后数日。具体会谈内容与军事部署须据档案。',
    ['zhouenlai', 'bogu', 'yejianying'], ['cpc-central'], 'dec36CnZhou', {
      topicIds: ['xian-incident'],
      references: ['dec36CnTalks'],
      evidenceNote: '中央党史和文献研究院与人民网资料记12月17日周恩来等飞抵西安、与张杨会谈；会谈记录与专机行程未逐条核对。',
    }),
  record('song-siblings-xian', 22, '政治', '宋子文、宋美龄到达西安', '陕西 · 西安',
    '南京方面宋子文、宋美龄到达西安，参与营救蒋介石的谈判。',
    '12月22日，宋子文、宋美龄从南京到达西安。两人作为蒋介石的亲属与南京方面的代表，与张学良、杨虎城及中共代表周恩来等接触，推动和平解决。\n\n宋氏兄妹到西安是南京与西安直接谈判的节点，不等于蒋介石当天已获释；谈判在12月23日至24日进行，达成六项协议后蒋介石才被释放。具体会谈、协议与各方让步须据档案。',
    ['chiang'], ['nanjing-government'], 'dec36CnSong', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网文章记12月22日宋子文、宋美龄到达西安并参与谈判；会谈记录与协议文本未逐条核对。',
    }),
  record('six-agreements', 24, '政治', '西安三方谈判达成六项协议', '陕西 · 西安',
    '张学良、杨虎城与南京方面及中共代表谈判，达成停止内战、一致抗日等六项协议。',
    '12月23日至24日，张学良、杨虎城与南京方面代表宋子文、宋美龄及中共代表周恩来在西安谈判，达成六项协议，内容包括停止内战、一致抗日、释放政治犯、保障民主权利等。蒋介石口头承诺“决不打内战”“一定要抗日”。\n\n六项协议是西安事变和平解决的核心成果，但协议主要是口头与政治承诺，不是正式签署的条约；具体条款、执行与后续国共谈判须据档案。本条以12月24日作为协议达成的节点。',
    ['zhouenlai', 'chiang', 'yanghucheng'], ['cpc-central', 'nanjing-government'], 'dec36CnSong', {
      topicIds: ['xian-incident', 'united-front'],
      precision: 'range', endDay: 24, date: '1936年12月23日—24日',
      evidenceNote: '人民网与党史资料记12月23日至24日谈判、六项协议及蒋介石口头承诺；协议原文与谈判记录未逐条核对。',
    }),
  record('chiang-released', 25, '政治', '蒋介石获释，张学良送其回南京', '陕西 · 西安 → 河南 · 洛阳',
    '西安各方释放蒋介石，张学良陪同蒋介石飞离西安前往南京。',
    '12月25日，在蒋介石承诺停止内战、一致抗日后，西安各方同意释放蒋介石。张学良陪同蒋介石乘飞机离开西安，经洛阳前往南京。\n\n蒋介石获释是西安事变和平解决的标志性节点，但张学良到南京后即被扣留，东北军与十七路军的善后仍在继续。具体起飞时间、随行人员与南京方面的接待须据档案；本条只记获释与离西安。',
    ['chiang', 'zhangxueliang', 'yanghucheng'], ['nanjing-government', 'northeast-army'], 'dec36CnSong', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网文章记12月25日蒋介石获释、张学良送其回南京；起飞时间与随行人员未逐条核对。',
    }),
  record('zhang-detained', 26, '政治', '张学良在南京被扣留', '江苏 · 南京',
    '张学良送蒋介石到南京后被扣留，随后受军事审判。',
    '12月26日，张学良送蒋介石抵达南京后即被扣留。南京方面随后组织高等军法会审，以“首谋伙党，对于上官为暴行胁迫”等罪名判处张学良有期徒刑十年。\n\n张学良被扣是西安事变善后的重要转折，表明蒋介石并未真正兑现全部承诺；东北军与十七路军的善后、国共谈判在此后继续。具体审判、特赦与长期软禁须据档案；本条只记抵达南京后被扣。',
    ['zhangxueliang', 'chiang'], ['nanjing-government'], 'dec36CnSong', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网与党史资料记12月26日张学良抵南京后被扣、随后受审；审判记录与特赦文件未逐条核对。',
    }),
  record('japan-reaction', 15, '外交', '日本关东军要求南京政府“反共防共”', '中国 · 北平 / 日本 · 东京',
    '日本关东军公开要求南京政府实行反共防共，并表示不惜给予援助。',
    '12月15日，日本关东军公开要求南京国民政府实行“反共防共”，并表示日本方面将“不惜给予援助”。日本驻华使馆助理武官今井武夫在北平对记者称，日本愿在“扑灭容共主义”上给予支援。\n\n日本的态度是西安事变国际反应的一部分：日本反对张杨联共抗日，希望南京继续内战。日本的外交表态不等于南京政府接受其要求；具体交涉与日本军部会议须据日本档案。本条只记关东军公开表态。',
    [], ['japan'], 'dec36CnJapan', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网《日本对西安事变的“迅速反应”》记12月15日关东军公开要求反共防共；日本档案与军部会议记录未逐条核对。',
    }),
]
