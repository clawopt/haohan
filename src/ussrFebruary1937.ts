import type { Category, HistoryEvent } from './data'

// February 1937 in the USSR: the second Moscow trial's sentences are carried
// out, Pushkin's centenary is staged nationwide, and the February–March
// Central Committee plenum opens the way to mass repression.
export const ussrFebruarySources = {
  febSuTrials: { name: 'Wikipedia · Moscow trials（第二次莫斯科审判与1937年2月1日执行）', url: 'https://en.wikipedia.org/wiki/Moscow_trials' },
  febSuPushkin: { name: 'ФЭБ · 1937年苏联普希金逝世百年纪念活动记录', url: 'http://feb-web.ru/feben/pushkin/serial/v37/v372492-.htm?cmd=2' },
  febSuPushkinCity: { name: 'Wikipedia · February 1937（儿童村改名普希金市）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febSuPlenum: { name: '1000 Dokumente · 斯大林在1937年2月23日—3月5日中央全会上的报告', url: 'https://www.1000dokumente.de/Dokumente/I._V._Stalin,_%C3%9Cber_die_M%C3%A4ngel_der_Parteiarbeit_und_die_Ma%C3%9Fnahmen_zur_Liquidierung_der_trotzkistischen_und_sonstigen_Doppelz%C3%BCngler' },
  febSuBukharin: { name: 'Wikipedia · Nikolai Bukharin（1937年2月27日被捕）', url: 'https://en.wikipedia.org/wiki/Nikolai_Bukharin' },
}

type SourceId = keyof typeof ussrFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `feb37-su-${id}`, year: 1937, month: 2, country: 'ussr', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: ['ussr'], source, topicIds: [], evidenceNote, ...extra,
  }
}

export const ussrFebruaryEvents: HistoryEvent[] = [
  record('executions', 1, '政治', '第二次莫斯科审判死刑判决执行', '苏联 · 莫斯科',
    '“反苏托洛茨基中心”案十三名被告被执行死刑。',
    '1月23日至30日，苏联最高法院军事审判庭审理“反苏托洛茨基中心”案，17名被告被控破坏、间谍与阴谋推翻苏维埃政权。1月30日宣判13人死刑、4人监禁，死刑于2月1日执行。\n\n被执行者包括谢列布里亚科夫、穆拉洛夫等老布尔什维克。审判中的指控与供述是在大清洗背景下取得的，不能当作已证实的犯罪事实；本条只记判决执行这一司法与政治镇压节点。',
    'febSuTrials',
    '二次审判的起止、判决与2月1日执行见莫斯科审判研究综述；具体执行地点与名单细节未逐项核对原始档案。',
    { references: [], entities: ['ussr', 'stalin'] }),
  record('pushkin-centenary', 10, '文化', '普希金逝世百年纪念大会在莫斯科大剧院举行', '苏联 · 莫斯科 · 大剧院',
    '苏联党政高层出席普希金逝世一百周年纪念大会，纪念活动在全国展开。',
    '2月10日，苏联在莫斯科大剧院举行亚历山大·普希金逝世一百周年纪念大会，斯大林等党政高层出席。纪念活动包括群众集会、纪念碑碑文更新、展览、出版与广播，普希金被塑造为民族文化的象征。\n\n百年纪念是苏联文化政治的重要事件：国家以空前的规模推广经典文学，同时把诗人形象纳入统一的文化叙事。本条记录纪念大会，不把官方塑造的形象等同于当时的全部文学评价。',
    'febSuPushkin',
    'ФЭБ专题文献记2月10日晚大剧院纪念大会及全国活动；俄文资料与中文转述对细节有差异，正文只取大会日期与基本性质。',
    { references: ['febSuPushkinCity'] }),
  record('pushkin-rename', 10, '文化', '儿童村正式改名普希金市', '苏联 · 列宁格勒州',
    '原沙皇村/儿童村在普希金百年纪念日更名为普希金市。',
    '2月10日，列宁格勒郊区的儿童村（原沙皇村）在普希金逝世一百周年纪念活动中正式更名为普希金市。\n\n更名把诗人纪念与地方行政身份结合起来。本条记录更名行为，不把更名写成城市建立或所有居民生活当天发生变化。',
    'febSuPushkinCity',
    '日期与更名见1937年2月事件汇编；苏联最高苏维埃或地方行政命令原文未逐字校读。',
    { references: ['febSuPushkin'] }),
  record('plenum', 23, '政治', '联共（布）中央全会开幕', '苏联 · 莫斯科',
    '中央全会讨论党的工作与“托洛茨基分子”问题，为大规模肃反提供政治依据。',
    '2月23日，联共（布）中央全会开幕，会议持续至3月5日。斯大林作《论党的工作缺点和消灭托洛茨基及其他两面派分子的办法》报告，会议把肃清“托洛茨基分子”和“两面派”作为中心议题之一。\n\n全会为此后的大规模镇压提供意识形态与政治依据。会议原定2月19日开幕，因政治局委员奥尔忠尼启泽去世推迟。本条记录全会开幕，不把全会期间的讨论与3月以后的全部镇压行动混为一天。',
    'febSuPlenum',
    '1000 Dokumente与俄文会议文献均记2月23日—3月5日；奥尔忠尼启泽去世与开幕推迟见相关研究，具体死因存在争议，正文不展开。',
    ),
  record('bukharin-arrest', 27, '政治', '布哈林与李可夫被捕', '苏联 · 莫斯科',
    '中央全会期间，布哈林与李可夫被开除出党并逮捕。',
    '2月27日，在联共（布）中央全会期间，尼古拉·布哈林与阿列克谢·李可夫被开除出党并逮捕。两人都是老布尔什维克，此前已被排除在党和政府的重要职务之外。\n\n布哈林与李可夫后来在1938年的“二十一人审判”中被判死刑。本条记录1937年2月27日的逮捕，不把后来的审判与处决提前到当天，也不把审判中的指控当作已证实的事实。',
    'febSuBukharin',
    '维基百科布哈林条目记2月27日在中央全会后被捕；俄文资料与《The Nation》文章支持同一日期。逮捕令与审讯档案未逐页核对。',
    { references: [] }),
]
