import type { Category, HistoryEvent } from './data'

// February 1937 in the United States: the court-reorganization fight opens,
// the Flint sit-down strike ends, and science, infrastructure and disaster
// records mark the month.
export const usaFebruarySources = {
  febUsCourtArchives: { name: '美国国家档案馆 · 分权与1937年司法改组计划', url: 'https://www.archives.gov/education/lessons/separation-powers' },
  febUsCourtSsa: { name: '美国社会保障署 · 罗斯福1937年2月5日司法改组咨文', url: 'https://www.ssa.gov/history/court.html' },
  febUsCourtMiller: { name: '米勒中心 · 罗斯福总统任期大事', url: 'https://millercenter.org/president/franklin-d-roosevelt/key-events' },
  febUsFlintMichigan: { name: '密歇根州政府 · 1937年2月11日弗林特静坐罢工协议纪念公告', url: 'https://www.michigan.gov/whitmer/news/proclamations/2023/02/11/february-11-2023-white-shirt-day' },
  febUsFlintVcu: { name: '弗吉尼亚联邦大学社会工作史项目 · 弗林特静坐罢工（1936—1937）', url: 'https://socialwelfare.library.vcu.edu/eras/great-depression/flint-sit-strike-1936-1937/' },
  febUsPatent: { name: 'Google Patents · 卡罗瑟斯尼龙专利US2071250A（1937年2月16日授权）', url: 'https://patents.google.com/patent/US2071250A/en' },
  febUsGoldenGate: { name: '金门大桥公路与交通区 · 大桥建设与1937年2月17日事故', url: 'https://www.goldengate.org/bridge/history-research/bridge-construction/construction/' },
  febUsWyoming: { name: 'Navysite · 美国战列舰“怀俄明”号舰史', url: 'https://www.navysite.de/bb/bb32.htm' },
  febUsWyomingNews: { name: 'Papers Past ·《Nelson Evening Mail》1937年2月22日：怀俄明号爆炸', url: 'https://paperspast.natlib.govt.nz/newspapers/NEM19370222.2.88' },
  febUsChildLabor: { name: '美国政府出版局 ·《1937年各州劳工立法》童工修正案批准统计', url: 'https://www.govinfo.gov/content/pkg/SERIALSET-10213_00_00-005-0448-0000/pdf/SERIALSET-10213_00_00-005-0448-0000.pdf' },
  febUsPauling: { name: '俄勒冈州立大学特藏 · 保林1937年2月2日科研档案', url: 'https://scarc.library.oregonstate.edu/coll/pauling/calendar/1937/02/2.html' },
  febUsEarhart: { name: 'Wikipedia · February 1937（1937年2月11日环球飞行宣布）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febUsEarhartPurdue: { name: '普渡大学 · 阿梅莉亚·埃尔哈特与“飞行实验室”', url: 'https://www.purdue.edu/retirees/history/PURA%20Historic%20Purdue%20Characters%20Project/Amelia%20Earhart%20Historical%20Character%20Project.html' },
}

type SourceId = keyof typeof usaFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `feb37-us-${id}`, year: 1937, month: 2, country: 'usa', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaFebruaryEvents: HistoryEvent[] = [
  record('pauling-manuscript', 2, '文化', '保林提交铁血红蛋白磁性研究稿件', '美国 · 加州帕萨迪纳 → 华盛顿',
    '保林与科里尔、斯蒂特合作的论文稿件提交《美国化学会会志》。',
    '2月2日，林纳斯·保林致信《美国化学会会志》编辑Arthur B. Lamb，提交Coryell、Stitt与保林合著的论文，主题为铁血红蛋白及其部分衍生物的磁性与结构。\n\n这是论文进入发表流程的投稿日，不等于论文当天已经刊出或结论已被学界接受。俄勒冈州立大学保林特藏保存了信件记录与档案号。',
    'febUsPauling',
    '单一馆藏目录：已核对保林日程与信件著录，未复核论文全文与期刊出版日期；投稿、审稿、刊出分开。',
    [], ['us-caltech']),
  record('court-packing', 5, '政治', '罗斯福向国会提出司法改组计划', '美国 · 华盛顿',
    '罗斯福提议在年长法官不退休时增补联邦法官，被反对者称为“填塞法院计划”。',
    '2月5日，罗斯福向国会提交司法改组咨文，建议当联邦法官年满70岁仍不退休时，总统可以增补相应法官；若适用于最高法院，最多可增加六名大法官。\n\n支持者称这是提高司法效率的改革，反对者则认为总统试图通过任命新法官使最高法院接受新政立法，因此称之为“填塞法院计划”。计划引发激烈争论，最终未按原方案通过。本条记录咨文提交，不把后来的国会否决写成当天已经发生。',
    'febUsCourtSsa',
    '社会保障署历史页明确2月5日特别咨文及“年满70岁未退休即增补”条款；国家档案馆与米勒中心用于核对计划性质与结果。具体法案文本与表决日程未逐条展开。',
    ['febUsCourtArchives', 'febUsCourtMiller'], ['roosevelt', 'us-congress', 'us-supreme-court']),
  record('flint-settlement', 11, '经济', '通用汽车承认汽车工人工会，弗林特静坐罢工结束', '美国 · 密歇根州弗林特',
    '持续44天的静坐罢工以通用汽车承认UAW谈判代表权结束。',
    '2月11日，通用汽车与汽车工人工会（UAW）达成协议，承认工会作为其雇员的谈判代表，持续44天的弗林特静坐罢工随之结束。\n\n协议是1936年12月底开始的静坐罢工的直接结果，涉及代表权、工资与工作条件等问题。承认谈判权不等于所有具体诉求当天全部落实；后续合同谈判与工人返厂仍在进行。',
    'febUsFlintMichigan',
    '密歇根州政府公告与弗吉尼亚联邦大学社会工作史项目均记2月11日协议与44天罢工；公告为纪念性文本，具体合同条款未逐条核对。',
    ['febUsFlintVcu'], ['uaw']),
  record('earhart-announcement', 11, '文化', '阿梅莉亚·埃尔哈特宣布环球飞行计划', '美国',
    '埃尔哈特宣布将尝试尽可能沿赤道环球飞行。',
    '2月11日，飞行员阿梅莉亚·埃尔哈特宣布将尝试尽可能沿赤道完成环球飞行。普渡大学此前为她购置了洛克希德“ Electra”飞机作为“飞行实验室”，并支持她的飞行计划。\n\n宣布飞行计划不等于当天已经起飞。埃尔哈特与领航员弗雷德·努南于1937年稍后开始航程，7月2日在太平洋上空失踪。本条只记计划公布。',
    'febUsEarhart',
    '日期取自维基百科1937年2月事件页；普渡大学资料支持飞机与环球飞行背景，但未单独证明2月11日宣布。原始新闻稿未核，保留二手来源说明。',
    ['febUsEarhartPurdue'], []),
  record('nylon-patent', 16, '文化', '卡罗瑟斯获得尼龙专利', '美国 · 华盛顿',
    '杜邦公司的卡罗瑟斯获得合成聚合物纤维专利，后以尼龙之名投产。',
    '2月16日，美国化学家华莱士·卡罗瑟斯代表杜邦公司获得美国专利第2,071,250号，专利名称为“线性缩聚聚合物”，涉及后来以尼龙之名销售的合成纤维。\n\n专利授权是法律与技术人员节点，不等于尼龙当天已经大规模上市。杜邦此后推进中试与生产，尼龙丝袜等产品在1939年后才进入市场。',
    'febUsPatent',
    '美国专利原文页给出专利号、授权日2月16日与发明人；专利内容与商业化时间分别理解。',
    [], []),
  record('golden-gate-collapse', 17, '社会', '金门大桥脚手架坠落，十名工人死亡', '美国 · 加州旧金山',
    '施工脚手架连同安全网坠入海中，十二人中十人遇难。',
    '2月17日，金门大桥施工中的一段脚手架在拆除作业时坠落，连同下方的安全网一起掉入海中。脚手架上的十二名工人随之坠落，两人获救，十人死亡。\n\n金门大桥建设期间共有十一名工人死亡，其中这次事故占十人。事故暴露了大桥高空作业的风险，也成为美国工程安全史的重要案例。',
    'febUsGoldenGate',
    '金门大桥官方建设史列出2月17日事故、十名遇难者姓名与“脚手架穿透安全网”经过；未读当年的工程事故调查报告。',
    [], []),
  record('wyoming-explosion', 18, '军事', '战列舰“怀俄明”号演习中炮弹爆炸', '美国 · 加州圣克莱门特岛附近',
    '一枚五英寸炮弹在装填时提前爆炸，六名海军陆战队员死亡。',
    '2月18日，美国战列舰“怀俄明”号在圣克莱门特岛附近参加多军种演习时，一枚五英寸炮弹在装填过程中提前爆炸，造成六名海军陆战队员死亡、多人受伤。舰只随后驶往圣佩德罗，将伤员转交医疗船。\n\n“怀俄明”号当时已主要用作训练舰。爆炸是训练事故，不属于与外国军队的交战；具体事故原因与责任调查未在所引资料中展开。',
    'febUsWyoming',
    'Navysite舰史记六名陆战队员死亡、十一人受伤；同期《Nelson Evening Mail》报道记六死十伤。伤员数字存在差异，正文不取唯一数。',
    ['febUsWyomingNews'], ['us-navy']),
  record('child-labor-kansas', 25, '政治', '堪萨斯批准联邦童工修正案', '美国 · 堪萨斯州',
    '堪萨斯成为第28个批准童工修正案的州，但批准州数仍未达到生效门槛。',
    '2月25日，堪萨斯州批准1924年提出的联邦童工修正案，成为第28个批准该修正案的州。\n\n该修正案旨在授权国会限制童工劳动，但需要四分之三的州批准才能生效。28个州仍未达到当时48个州中的36州门槛，修正案最终未能生效。本条记录州批准行为，不把批准写成修正案已经施行。',
    'febUsChildLabor',
    '美国劳工部《1937年各州劳工立法》列出堪萨斯等四州在1937年批准及累计28州；批准日期2月25日取自所引文件与同期记录。',
    [], []),
]
