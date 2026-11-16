import type { Category, HistoryEvent } from './data'

// June 1937 in the United States: consumer technology, Hollywood, labor
// violence, Joe Louis, and the defeat of Roosevelt's court plan in committee.
export const usaJuneSources = {
  junUsJune: { name: 'Wikipedia · June 1937', url: 'https://en.wikipedia.org/wiki/June_1937' },
  junUsOlds: { name: 'Wikipedia · Oldsmobile', url: 'https://en.wikipedia.org/wiki/Oldsmobile' },
  junUsCart: { name: 'Wikipedia · Shopping cart', url: 'https://en.wikipedia.org/wiki/Shopping_cart' },
  junUsHarlow: { name: 'Wikipedia · Jean Harlow', url: 'https://en.wikipedia.org/wiki/Jean_Harlow' },
  junUsDay: { name: 'Wikipedia · A Day at the Races (film)', url: 'https://en.wikipedia.org/wiki/A_Day_at_the_Races_(film)' },
  junUsCourt: { name: '罗斯福总统图书馆 · 1937年6月14日参议院司法委员会报告', url: 'https://www.fdrlibrary.marist.edu/daybyday/event/june-22-1937/' },
  junUsYoungstown: { name: 'Wikipedia · Women’s day massacre', url: 'https://en.wikipedia.org/wiki/Women%27s_day_massacre' },
  junUsLouis: { name: 'Wikipedia · Joe Louis', url: 'https://en.wikipedia.org/wiki/Joe_Louis' },
}

type SourceId = keyof typeof usaJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [], extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jun37-us-${id}`, year: 1937, month: 6, country: 'usa', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const usaJuneEvents: HistoryEvent[] = [
  record('oldsmobile-automatic', 1, '经济', '奥兹莫比尔推出首款面向公众的自动变速器', '美国 · 密歇根州兰辛',
    '奥兹莫比尔宣布推出首款向公众销售的自动变速器。',
    '6月1日，奥兹莫比尔宣布推出首款面向公众销售的自动变速器（Automatic Safety Transmission）。它仍带有离合器踏板，但换挡由液压系统完成，是自动变速技术进入消费市场的重要一步。\n\n这款变速器不是现代意义上的全自动变速器，驾驶者仍需操作离合器；具体产量、价格与可靠性须据通用汽车档案。本条只记发布。',
    'junUsOlds',
    '奥兹莫比尔条目与1937年6月事件汇编记6月1日推出自动变速器；技术细节与销量未逐条核对。',
    ['junUsJune'], []),
  record('shopping-cart', 4, '经济', '西尔万·戈德曼在超市推出购物车', '美国 · 俄克拉何马城',
    '超市店主戈德曼推出带轮购物车，方便顾客一次购买更多商品。',
    '6月4日，西尔万·戈德曼在他经营的俄克拉何马城“矮胖子”超市推出购物车。最初的购物车是折叠椅加轮子，顾客可以推着篮子购物；这一发明后来成为自助零售的标准设备。\n\n购物车推出是零售业与消费文化的节点，不等于当天已被全行业采用；专利、改进与推广过程须据零售史资料。本条只记首次推出。',
    'junUsCart',
    '购物车条目与1937年6月事件汇编记6月4日戈德曼在俄克拉何马城超市推出购物车；专利与推广记录未逐条核对。',
    ['junUsJune'], []),
  record('jean-harlow-death', 7, '文化', '女演员珍·哈露去世', '美国 · 加州洛杉矶',
    '好莱坞女演员珍·哈露因肾病去世，年仅26岁。',
    '6月7日，好莱坞女演员珍·哈露因肾病去世，年仅26岁。她是1930年代米高梅的当红明星，以《地狱天使》《公共敌人》等影片闻名，被称为“金发炸弹”。\n\n哈露的去世是好莱坞黄金时代的文化事件，不等于其影片当天停止放映；葬礼于6月9日举行，威廉·鲍威尔、克拉克·盖博等出席。具体病史与死因须据医学记录，本条只记去世与葬礼日期。',
    'junUsHarlow',
    '珍·哈露条目与1937年6月事件汇编记6月7日去世、6月9日葬礼；病史与死亡证明未逐条核对。',
    ['junUsJune'], []),
  record('day-at-the-races', 11, '文化', '《A Day at the Races》上映', '美国',
    '马克思兄弟主演的喜剧片《A Day at the Races》上映。',
    '6月11日，马克思兄弟主演的喜剧片《A Day at the Races》上映。影片由山姆·伍德执导，格劳乔、哈珀、奇科与泽波·马克思出演，包含《Tomorrow Is Another Day》等歌曲。\n\n影片上映是马克思兄弟晚期作品与1930年代好莱坞喜剧的节点，不等于其票房或评论当天已经确定；影片制作、发行与观众反应须据米高梅档案。本条只记上映。',
    'junUsDay',
    '《A Day at the Races》条目与1937年6月事件汇编记6月11日上映；影片原版与票房记录未逐条核对。',
    ['junUsJune'], []),
  record('court-plan-committee', 14, '政治', '参议院司法委员会报告否决司法改组计划', '美国 · 华盛顿',
    '参议院司法委员会发表报告，严厉批评罗斯福的司法改组计划。',
    '6月14日，美国参议院司法委员会发表报告，否决罗斯福的司法改组计划，批评总统试图通过增补法官改变最高法院的构成。报告公布后，计划在国会实际上失去通过可能。\n\n委员会报告是国会否决计划的关键节点，不等于罗斯福当天正式撤回提案；白宫在7月才承认计划失败。具体报告内容、表决与政治影响须据国会记录；本条只记报告发表。',
    'junUsCourt',
    '罗斯福图书馆“Day by Day”记6月14日参议院司法委员会报告否决改组计划；报告全文与国会表决记录未逐条核对。',
    ['junUsJune'], ['roosevelt', 'us-congress']),
  record('womens-day-massacre', 19, '经济', '扬斯敦“妇女节大屠杀”', '美国 · 俄亥俄州扬斯敦',
    '警察向共和钢铁公司罢工者及其家属开枪，两名妇女死亡、多人受伤。',
    '6月19日，俄亥俄州扬斯敦的共和钢铁公司罢工者与家属举行抗议，警察向人群开枪，造成两名妇女死亡、多人受伤，被称为“妇女节大屠杀”。罢工是1937年钢铁工人组织运动的一部分，工人要求承认工会与改善条件。\n\n事件与5月30日芝加哥“阵亡将士纪念日大屠杀”相续，显示钢铁业罢工中的暴力冲突。具体开枪经过、责任与调查结论须据当时听证会与警方记录；本条只记事件与伤亡。',
    'junUsYoungstown',
    '“妇女节大屠杀”条目与1937年6月事件汇编记6月19日事件与两名妇女死亡；伤者人数与调查记录未逐条核对。',
    ['junUsJune'], []),
  record('joe-louis-title', 22, '文化', '乔·路易斯夺得世界重量级拳击冠军', '美国 · 芝加哥 · 科米斯基公园',
    '乔·路易斯在第八回合击倒詹姆斯·布拉多克，成为世界重量级拳王。',
    '6月22日，乔·路易斯在芝加哥科米斯基公园第八回合击倒詹姆斯·J·布拉多克，夺得世界重量级拳击冠军。路易斯此前已连胜多场，这场胜利使他成为1930年代最著名的黑人运动员之一。\n\n夺冠是体育与文化节点，不等于种族隔离与种族歧视当天改变；路易斯的公众形象、比赛纪录与后来卫冕须分别理解。具体观众人数与比赛收入须据拳击档案。',
    'junUsLouis',
    '乔·路易斯条目与1937年6月事件汇编记6月22日第八回合击倒布拉多克夺冠；比赛记录与观众人数未逐条核对。',
    ['junUsJune'], []),
]
