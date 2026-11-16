import type { Category, HistoryEvent } from './data'

// September 1937: the Battle of Taiyuan and Xinkou, the Pingxingguan victory,
// the fall of Baoding, and China's appeal to the League of Nations.
export const chinaSeptemberSources = {
  sepCnSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
  sepCnPingxing: { name: '中共中央党史和文献研究院 · 为什么说平型关大捷打破了日军不可战胜的神话', url: 'https://www.dswxyjy.org.cn/n/2014/0824/c244514-25527530.html' },
  sepCnLeague: { name: '侵华日军南京大屠杀遇难同胞纪念馆 · 国际联盟对日本空袭的谴责议案', url: 'http://www.19371213.org.cn/information/news/202107/t20210722_3082111.html' },
  sepCnCpc: { name: '中国共产党新闻网 · 中国共产党大事记·1937年', url: 'https://cpc.people.com.cn/GB/64162/64164/4415986.html' },
}

type SourceId = keyof typeof chinaSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep37-cn-${id}`, year: 1937, month: 9, country: 'china', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaSeptemberEvents: HistoryEvent[] = [
  record('taiyuan-battle', 1, '军事', '太原会战开始', '山西 · 太原',
    '日军向山西太原发动进攻，中国军队组织太原会战。',
    '9月1日，日军开始向山西太原发动进攻，中国第二战区部队组织太原会战。会战包括平型关、忻口、娘子关等战斗，持续到11月8日太原失守。\n\n太原会战是华北抗战初期规模最大的战役之一，中国军队在忻口等地进行了顽强抵抗。会战开始不等于太原当天失守；具体作战部署、兵力与伤亡须据战史档案。本条只记会战开始。',
    [], [], 'sepCnSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月1日太原会战开始；会战起止与作战经过见战史资料，未逐条核对。',
    }),
  record('xinkou-battle', 13, '军事', '忻口会战开始', '山西 · 忻口',
    '日军进攻忻口，中国军队展开忻口会战。',
    '9月13日，日军开始进攻山西忻口，中国第二战区部队展开忻口会战。忻口是太原以北的重要防线，中国军队在八路军配合下与日军激战，会战持续到11月初。\n\n忻口会战是太原会战的核心战役之一，中国军队付出重大伤亡，迟滞了日军进攻。会战开始不等于忻口当天失守；具体阵地、部队番号与伤亡须据战史档案。本条只记会战开始。',
    [], [], 'sepCnSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月13日忻口会战开始；会战经过与伤亡数字未逐条核对。',
    }),
  record('league-appeal', 13, '外交', '中国向国际联盟正式申诉日本侵略', '瑞士 · 日内瓦',
    '中国政府正式向国际联盟申诉，要求对日本侵略采取行动。',
    '9月13日，中国政府正式向国际联盟申诉，要求对日本侵略中国采取行动。此前日军进攻上海、轰炸南京等城市，中国希望国联依据盟约制止日本侵略。\n\n申诉是外交行动，不等于国联当天作出制裁或军事干预；国联随后通过谴责日本空袭的决议，但未能采取有效制止措施。具体申诉文件、国联讨论与决议须据国联档案。本条只记申诉。',
    ['chiang'], ['nanjing-government'], 'sepCnSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月13日中国正式向国联申诉；申诉全文与国联讨论记录未逐条核对。',
    }),
  record('pingxingguan', 25, '军事', '平型关战斗', '山西 · 灵丘 · 平型关',
    '八路军第一一五师在平型关伏击日军，取得全国抗战以来第一个大胜利。',
    '9月25日，八路军第一一五师在山西灵丘平型关东北的狭窄谷道伏击日军第五师团第二十一旅团一部，经一天激战，歼灭日军1000余人，击毁汽车100余辆、马车近200辆，缴获一批武器辎重。\n\n平型关战斗是八路军出师华北抗日前线的第一个胜仗，打破了日军“不可战胜”的神话，鼓舞了全国军民的抗战信心。战果数字在不同资料中略有差异；战斗胜利不等于华北战局根本好转，日军仍继续进攻太原。',
    ['lin', 'peng'], ['cpc-central'], 'sepCnPingxing', {
      topicIds: ['full-resistance'],
      references: ['sepCnCpc'],
      evidenceNote: '中央党史和文献研究院、人民网与中国军网资料记9月25日平型关战斗与歼敌1000余人；具体战果与双方伤亡数字存在差异，未取单一统计。',
    }),
  record('baoding-falls', 24, '军事', '保定失守', '河北 · 保定',
    '日军占领保定，平汉铁路北段防线被突破。',
    '9月24日，日军占领河北保定。此前日军沿平汉铁路南下，中国守军进行了抵抗，但未能阻止日军推进；保定失守使平汉铁路北段防线被突破。\n\n保定失守是华北战场国民党军队后退的节点之一，与沧州失守、石家庄告急相连。具体战斗经过、守军番号与伤亡须据战史档案；本条只记失守日期。',
    [], [], 'sepCnSept', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年9月事件汇编记9月24日日军占领保定；中国守军部署与战斗经过未逐条核对。',
    }),
  record('league-condemnation', 28, '外交', '国际联盟谴责日本空袭中国城市', '瑞士 · 日内瓦',
    '国际联盟大会通过决议，谴责日本飞机空袭中国不设防城市。',
    '9月28日，国际联盟大会通过决议，谴责日本飞机空袭中国不设防城市，指出空袭导致包括妇女儿童在内的无辜平民死亡，没有任何辩解的余地。决议此前由国联咨询委员会紧急商议。\n\n国联谴责是国际舆论与外交压力，不等于国联对日本实施制裁或军事制止；日本继续空袭中国城市。决议内容与表决须据国联档案；本条只记通过谴责决议。',
    [], ['nanjing-government'], 'sepCnLeague', {
      topicIds: ['full-resistance'],
      evidenceNote: '侵华日军南京大屠杀遇难同胞纪念馆资料记9月28日国联大会通过谴责决议；决议全文与表决记录未逐条核对。',
    }),
]
