import type { Category, HistoryEvent } from './data'

// December 1937: the Battle of Nanking, the retreat order, the fall of
// Hangzhou, and Japanese forces crossing the Yellow River.
export const chinaDecemberSources = {
  decCnNanjing: { name: '国家档案局 · 浴血奋战——档案里的中国抗战：南京保卫战', url: 'http://politics.people.com.cn/n/2014/0901/c70731-25581771.html' },
  decCnDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
  decCnChronology: { name: '人民网 · 抗战大事记·1937年', url: 'http://dangshi.people.com.cn/n/2015/0429/c85037-26926310.html' },
}

type SourceId = keyof typeof chinaDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `dec37-cn-${id}`, year: 1937, month: 12, country: 'china', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaDecemberEvents: HistoryEvent[] = [
  record('nanjing-battle', 1, '军事', '南京保卫战开始', '江苏 · 南京',
    '日军大本营下令攻占南京，中国军队展开南京保卫战。',
    '12月1日，日军大本营下达“大陆第8号令”，命令华中方面军与海军协同，兵分三路攻占中国首都南京。蒋介石任命唐生智为首都卫戍部队司令长官，部署南京保卫战；守军多为从上海战场撤退的残部。\n\n南京保卫战是淞沪会战后的首都防御战，中国军队在装备、兵力与士气上均处劣势。会战开始不等于南京当天失守；具体防御部署、外围战斗与撤退决定须据战史档案。本条只记会战开始。',
    ['chiang'], ['nanjing-government'], 'decCnNanjing', {
      topicIds: ['full-resistance'],
      evidenceNote: '国家档案局与人民网资料记12月1日日军大本营命令、唐生智任卫戍司令；具体部署与战斗经过未逐条核对。',
    }),
  record('nanjing-retreat', 12, '军事', '南京守军奉命撤退', '江苏 · 南京',
    '唐生智下达撤退命令，南京守军突围，撤退过程混乱。',
    '12月12日，南京卫戍司令长官唐生智下达撤退命令，南京守军试图突围。此前日军已攻破南京外围阵地并进入城区，守军指挥系统混乱，部分部队未接到撤退命令，撤退演变为溃退。\n\n撤退命令是南京保卫战失败的直接节点，不等于所有守军当天停止抵抗；部分部队继续战斗或被俘。撤退后的南京于12月13日沦陷，随后发生南京大屠杀。具体命令、突围路线与损失须据战史档案。',
    ['chiang'], ['nanjing-government'], 'decCnNanjing', {
      topicIds: ['full-resistance'],
      evidenceNote: '国家档案局与南京地方史料记12月12日唐生智下达撤退命令；命令原文与撤退过程未逐条核对。',
    }),
  record('hangzhou-falls', 24, '军事', '杭州沦陷', '浙江 · 杭州',
    '日军占领杭州，浙北主要城市落入日军控制。',
    '12月24日，日军占领杭州。此前日军在淞沪会战后沿沪杭铁路推进，中国军队在杭州外围进行了抵抗，但未能阻止日军占领杭州。\n\n杭州沦陷使浙北主要城市落入日军控制，但浙江抗战并未停止；国民政府与中共武装继续在浙西、浙南活动。具体战斗经过、守军番号与撤退路线须据战史档案。本条只记沦陷。',
    [], [], 'decCnDec', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年12月事件汇编记12月24日日军占领杭州；中国守军部署与战斗经过未逐条核对。',
    }),
  record('yellow-river-crossing', 27, '军事', '日军渡过黄河进入山东', '山东 · 黄河',
    '日军渡过黄河，进入山东境内，华北战局进一步扩大。',
    '12月27日，日军渡过黄河，进入山东境内。此前日军已占领济南周边地区，韩复榘部未作有效抵抗即撤退；日军渡河后继续向山东腹地推进。\n\n日军渡河是华北战场南下的节点，不等于山东全境当天沦陷；中国军队在鲁南、鲁中继续抵抗。具体渡河地点、部队番号与作战经过须据战史档案。本条只记渡河。',
    [], [], 'decCnDec', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年12月事件汇编记12月27日日军渡过黄河进入山东；渡河地点与守军部署未逐条核对。',
    }),
  record('provisional-government', 14, '政治', '伪中华民国临时政府在北平成立', '北平',
    '日本在北平扶植“中华民国临时政府”，作为华北傀儡政权。',
    '12月14日，日本在北平扶植成立“中华民国临时政府”，由王克敏等出面，设议政、行政、司法三委员会，名义上统治华北。该政权是日本在华北推行“分治”与傀儡统治的工具。\n\n伪政权成立是日本侵略政策的一部分，不等于中国政府和民众承认其合法性；重庆国民政府与中共均继续抗战。具体政权架构、日本控制方式与国际反应须据档案。本条只记成立。',
    [], ['nanjing-government'], 'decCnDec', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年12月事件汇编记12月14日伪中华民国临时政府在北平成立；政权档案与日本控制记录未逐条核对。',
    }),
]
