import type { Category, HistoryEvent } from './data'

// September 1936 in China: the shift to "press Chiang to resist Japan", the
// Beihai incident, the end of the Liangguang incident, and the Fengtai clash.
export const chinaSeptember1936Sources = {
  octSeptCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1936年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415984.html' },
  septCnBeihai: { name: '广西地情网 · 1936年“北海事件”', url: 'http://www.gxdfz.org.cn/flbg/gxzhizui/ls/201612/t20161227_35217.html' },
  septCnLiangguang: { name: '人民网 · 七、西安事变及其和平解决（两广事变）', url: 'http://dangshi.people.com.cn/n/2015/0526/c396421-27057784.html' },
  septCnFengtai: { name: '人民网 · 日军挑起两次“丰台事件”', url: 'http://dangshi.people.com.cn/n/2014/0710/c85037-25265606.html' },
  septCnXimen: { name: '人民网 · 共产党人与抗日民族统一战线（牺盟会）', url: 'http://dangshi.people.com.cn/n/2015/0617/c396365-27168758-3.html' },
}

type SourceId = keyof typeof chinaSeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep36-cn-${id}`, year: 1936, month: 9, country: 'china', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaSeptember1936Events: HistoryEvent[] = [
  record('bi-chiang-resist', 1, '政治', '中共中央发出《关于逼蒋抗日问题的指示》', '陕北 · 保安',
    '中共中央放弃“抗日反蒋”口号，确定“逼蒋抗日”的总方针。',
    '9月1日，中共中央向党内发出《关于逼蒋抗日问题的指示》，指出在日本继续进攻、全国民族革命运动继续发展的条件下，蒋军全部或大部有参加抗日的可能，“我们的总方针应是逼蒋抗日”。9月17日，中共中央又发出相关指示，进一步说明放弃反蒋口号的必要性。\n\n方针转变是中共统一战线政策的重要节点，不等于国共合作当天形成；此后的谈判、西安事变与1937年合作在后续展开。具体文件文本、党内传达与谈判安排须据党史档案。本条只记9月1日指示。',
    [], ['cpc-central'], 'octSeptCnCpc', {
      topicIds: ['united-front'],
      evidenceNote: '中国共产党新闻网大事记与人民网资料记9月1日中共中央发出《关于逼蒋抗日问题的指示》、总方针改为“逼蒋抗日”；文件全文与传达记录未逐条核对。',
    }),
  record('beihai-incident', 3, '外交', '北海事件发生', '广东 · 北海（今广西）',
    '日本间谍中野顺三在北海被刺杀，日本借机派舰施压。',
    '9月3日，在北海以“丸一药行”老板身份活动的日本间谍中野顺三被当地抗日力量刺杀，时称“北海事件”或“九三事件”。事件发生后，日本政府向南京国民政府提出交涉，并于9月10日命驻上海、青岛的驱逐舰南下北海，形成军事压力。中方将事件作为治安案件处理，展开外交交涉。\n\n北海事件是1936年中日冲突加剧的节点，具体策划、交涉与日舰行动须据中日双方档案。本条只记事件发生。',
    [], ['nanjing-government'], 'septCnBeihai', {
      evidenceNote: '广西地情网与中新网资料记9月3日北海事件、9月10日日本海军派舰南下；刺杀策划与交涉细节未逐条核对。',
    }),
  record('liangguang-settled', 14, '政治', '两广事变平息', '广西 · 南宁',
    '李宗仁、白崇禧通电服从中央，两广事变和平解决。',
    '9月14日，李宗仁、白崇禧通电服从中央，两广事变平息。此前蒋介石调集军队围困广西，经居正、程潜等调停，国民政府于9月6日收回原任命，改任李宗仁为广西绥靖公署主任、白崇禧为军事委员会委员；李、白随后通电服从中央。\n\n两广事变以和平方式结束，避免了国民党内部大规模内战，也为抗日统一战线的形成减少了一重障碍。具体谈判、任命与通电文本须据档案。本条只记事变平息。',
    [], ['nanjing-government'], 'septCnLiangguang', {
      topicIds: ['united-front'],
      evidenceNote: '人民网党史资料记9月6日国民政府收回成命、14日李宗仁白崇禧通电服从中央、事变平息；谈判与通电原文未逐条核对。',
    }),
  record('fengtai-incident', 18, '军事', '第二次丰台事件', '北平 · 丰台',
    '日军包围第二十九军驻丰台兵营，迫使中国军队移防。',
    '9月18日，日军外出演习部队在丰台正阳街与中国第二十九军第三十七师孙香亭连相遇，双方发生冲突，连长孙香亭被日军扣留。日军随后包围第二十九军驻丰台兵营，双方对峙一夜。最终第二十九军高层妥协，将驻军移防至丰台东南的赵王庄、新林庄，此次冲突被称为“第二次丰台事件”。\n\n丰台事件是卢沟桥事变前日军在华北步步进逼的重要节点，具体兵力、交涉与移防命令须据战史档案。本条只记事件与移防结果。',
    [], ['nanjing-government'], 'septCnFengtai', {
      evidenceNote: '人民网与央视资料记9月18日第二次丰台事件、日军包围第二十九军兵营、中国军队移防；交涉细节与部队番号未逐条核对。',
    }),
  record('ximen-founded', 18, '政治', '山西牺牲救国同盟会在太原成立', '山西 · 太原',
    '山西牺牲救国同盟会成立，阎锡山任会长，成为山西抗日统一战线的重要组织。',
    '9月18日，山西牺牲救国同盟会（简称牺盟会）在太原成立，阎锡山任会长。牺盟会由山西地方当局与进步青年、中共地下党员合作推动，以抗日救亡为宗旨，此后举办训练班并组建山西新军。11月，薄一波等到太原接办并改组牺盟会。\n\n牺盟会是山西特殊形式的统一战线组织，不等于山西政权当天完全转向抗日；其发展、与阎锡山的关系及新军建设须据山西党史档案。本条只记成立。',
    [], [], 'septCnXimen', {
      topicIds: ['united-front'],
      evidenceNote: '人民网与太原市党史资料记9月18日牺盟会在太原成立、阎锡山任会长；成立文件与组织细节未逐条核对。',
    }),
]
