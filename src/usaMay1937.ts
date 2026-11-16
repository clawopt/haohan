import type { Category, HistoryEvent } from './data'

// May 1937 in the United States: neutrality law, the Pulitzer for Margaret
// Mitchell, Earhart's second attempt, the Social Security ruling, the Golden
// Gate opening and the Memorial Day massacre.
export const usaMaySources = {
  mayUsMay: { name: 'Wikipedia · May 1937', url: 'https://en.wikipedia.org/wiki/May_1937' },
  mayUsPulitzer: { name: '美联社 · 历史上的今天：1937年5月3日米切尔获普利策奖', url: 'https://apnews.com/1090f32b0f464b108417b4cf78e94194' },
  mayUsShall: { name: 'Wikipedia · Shall We Dance (1937 film)', url: 'https://en.wikipedia.org/wiki/Shall_We_Dance_(1937_film)' },
  mayUsEarhart: { name: 'Wikipedia · Amelia Earhart', url: 'https://en.wikipedia.org/wiki/Amelia_Earhart' },
  mayUsRockefeller: { name: 'Wikipedia · John D. Rockefeller', url: 'https://en.wikipedia.org/wiki/John_D._Rockefeller' },
  mayUsHelvering: { name: 'Justia · Helvering v. Davis, 301 U.S. 619 (1937)', url: 'https://supreme.justia.com/cases/federal/us/301/619/' },
  mayUsGoldenGate: { name: '金门大桥公路与交通区 · 大桥建设与开放', url: 'https://www.goldengate.org/bridge/history-research/bridge-construction/construction/' },
  mayUsMemorial: { name: '芝加哥历史博物馆 · 1937年阵亡将士纪念日大屠杀', url: 'https://www.chicagohistory.org/memorial-day-massacre-of-1937/' },
}

type SourceId = keyof typeof usaMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [], extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `may37-us-${id}`, year: 1937, month: 5, country: 'usa', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const usaMayEvents: HistoryEvent[] = [
  record('neutrality-act', 1, '外交', '1937年《中立法》对全体美国公民生效', '美国 · 华盛顿',
    '美国中立法生效，限制向交战国出售武器与乘坐交战国船只。',
    '5月1日，1937年《中立法》对全体美国公民生效。该法延续并扩大此前的临时中立安排，禁止向交战国出口武器、弹药与战争物资，限制美国公民乘坐交战国船只，并规定某些商品须“现购自运”。\n\n中立法是孤立主义政策的体现，不等于美国完全停止与交战国的贸易；石油与非军用车辆等被排除在外。具体条款、适用范围与后来修正须据美国国务院与国会记录。',
    'mayUsMay',
    '1937年5月事件汇编记5月1日中立法生效与石油、非军用车辆例外；法案全文与国务院执行记录未逐条核对。',
    ['mayUsMay'], ['roosevelt']),
  record('pulitzer-mitchell', 3, '文化', '米切尔《飘》获普利策小说奖', '美国 · 纽约',
    '玛格丽特·米切尔的《飘》获得普利策小说奖。',
    '5月3日，玛格丽特·米切尔的《飘》（Gone with the Wind）获得普利策小说奖。小说于1936年出版，以美国南北战争与重建时期为背景，出版后销量迅速突破百万册，成为当时最畅销的美国小说之一。\n\n获奖是文学与出版史上的节点，不等于小说对奴隶制与南方历史的描写已被当时或后来所有读者接受。作品评价、争议与电影改编须分别理解。',
    'mayUsPulitzer',
    '美联社“历史上的今天”记5月3日米切尔获普利策小说奖；普利策奖官方档案与小说原版未逐条核对。',
    ['mayUsMay'], []),
  record('shall-we-dance', 7, '文化', '《Shall We Dance》上映', '美国',
    '弗雷德·阿斯泰尔与金杰·罗杰斯主演的音乐片上映。',
    '5月7日，弗雷德·阿斯泰尔与金杰·罗杰斯主演的音乐片《Shall We Dance》上映。影片由乔治·格什温与艾拉·格什温创作歌曲，包含《Let’s Call the Whole Thing Off》《They Can’t Take That Away from Me》等名曲。\n\n影片上映是歌舞片黄金时代的文化节点，不等于这些歌曲当天已经成为流行标准；票房、评论与歌曲传播须据当时资料。',
    'mayUsShall',
    '《Shall We Dance》条目与1937年5月事件汇编记5月7日上映；影片原版与首映记录未逐条核对。',
    ['mayUsMay'], []),
  record('earhart-second-attempt', 21, '文化', '埃尔哈特开始第二次环球飞行尝试', '美国 · 加州奥克兰',
    '埃尔哈特与领航员努南从奥克兰出发，开始第二次环球飞行。',
    '5月21日，阿梅莉亚·埃尔哈特与领航员弗雷德·努南从加州奥克兰出发，开始第二次环球飞行尝试。此前的3月尝试在夏威夷起飞时失败；这次她改为从西向东飞行，经南美、非洲、印度和东南亚前往太平洋。\n\n出发是航程开始，不等于飞行已经成功；埃尔哈特于7月2日在太平洋上空失踪，搜救未果。具体航线、经停与最后通讯须据飞行记录。',
    'mayUsEarhart',
    '埃尔哈特条目记5月21日从奥克兰开始第二次尝试；飞行日志与最后通讯记录未逐条核对，失踪日期另见相关记录。',
    ['mayUsMay'], []),
  record('rockefeller-death', 23, '经济', '约翰·D·洛克菲勒去世', '美国 · 佛罗里达州奥蒙德海滩',
    '石油大亨、慈善家约翰·D·洛克菲勒去世，享年97岁。',
    '5月23日，约翰·D·洛克菲勒在佛罗里达州奥蒙德海滩去世，享年97岁。他创立标准石油公司，晚年以大规模慈善捐赠闻名，资助芝加哥大学、洛克菲勒医学研究所等机构。\n\n洛克菲勒的去世是美国商业与慈善史上的节点，不等于其商业帝国或慈善机构当天停止运作；标准石油已于1911年被拆分，家族财富与基金会继续存在。具体遗产分配须据遗嘱与基金会记录。',
    'mayUsRockefeller',
    '洛克菲勒条目记5月23日去世与主要商业、慈善经历；遗嘱与基金会档案未逐条核对。',
    ['mayUsMay'], []),
  record('helvering-davis', 24, '政治', '最高法院支持社会保障法', '美国 · 华盛顿',
    '最高法院在赫尔弗林诉戴维斯案中支持《社会保障法》的税收与福利条款。',
    '5月24日，美国最高法院对赫尔弗林诉戴维斯案和斯图尔德机器公司诉戴维斯案作出判决，支持1935年《社会保障法》的老年福利与失业补偿条款。判决认定联邦政府有权征税并为普遍福利支出，为社会保障制度奠定宪法基础。\n\n判决解决了社会保障法的合宪性争议，不等于所有工人当天已经纳入制度；当时的覆盖范围与福利水平有限，后续修正案逐步扩大。具体判决理由与适用范围须据判决书。',
    'mayUsHelvering',
    'Justia判决页记5月24日与判决结果；判决全文未逐页校读，社会保障法条款与后续修正未展开。',
    ['mayUsMay'], ['us-supreme-court']),
  record('golden-gate-opens', 27, '社会', '金门大桥向行人开放', '美国 · 加州旧金山',
    '金门大桥首次向行人开放，次日开放车辆通行。',
    '5月27日，金门大桥首次向行人开放。大桥横跨金门海峡，连接旧金山与马林县，是当时世界上最长的悬索桥之一；行人开放日约有数万人步行过桥，次日开放车辆通行。\n\n开放是工程与城市交通节点，不等于大桥所有配套设施当天完成；收费、维护与交通管理在此后逐步建立。具体开放时间、人流与工程数据见大桥官方建设史。',
    'mayUsGoldenGate',
    '金门大桥官方建设史记5月27日行人开放、5月28日车辆通行；开放日人流与工程细节见同一资料，未核对工程总报告。',
    ['mayUsMay'], []),
  record('memorial-day-massacre', 30, '经济', '芝加哥阵亡将士纪念日大屠杀', '美国 · 芝加哥 · 南芝加哥',
    '芝加哥警察向共和钢铁公司罢工者开枪，十名工人死亡、约百人受伤。',
    '5月30日，芝加哥警察在共和钢铁公司南芝加哥工厂外向罢工工人及家属开枪，造成十名工人死亡、约九十人受伤。罢工者当时试图设置纠察线，要求公司承认工会、签订合同、提高工资并改善安全条件。\n\n事件被称为“阵亡将士纪念日大屠杀”，是1937年钢铁工人组织运动中的重大暴力事件。十名死者多为背后或侧面中弹；具体责任与调查结论须据当时听证会与警方记录。本条不把警方说法当作事实。',
    'mayUsMemorial',
    '芝加哥历史博物馆记5月30日事件、十名死者与约百人受伤；具体名单、枪击经过与听证会记录未逐条核对。',
    ['mayUsMay'], []),
]
