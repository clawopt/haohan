import type { Category, HistoryEvent } from './data'

// November 1937 in the United States: La Guardia's re-election, the NBC
// Symphony, Roosevelt's unemployment census chat, and a Sun Yat-sen statue.
export const usaNovemberSources = {
  novUsNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
}

type SourceId = keyof typeof usaNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov37-us-${id}`, year: 1937, month: 11, country: 'usa', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaNovemberEvents: HistoryEvent[] = [
  record('laguardia-reelected', 2, '政治', '拉瓜迪亚再次当选纽约市长', '美国 · 纽约',
    '菲奥雷洛·拉瓜迪亚以明显优势再次当选纽约市长。',
    '11月2日，菲奥雷洛·拉瓜迪亚以明显优势再次当选纽约市长。他是1930年代美国城市改革派政治的代表人物，以反纳粹言论、公共工程与市政改革闻名。\n\n选举结果是地方政治节点，不等于拉瓜迪亚的政策当天全部延续；具体得票、对手与市政议程须据纽约选举档案。本条只记当选。',
    'novUsNov',
    '1937年11月事件汇编记11月2日拉瓜迪亚连任纽约市长；得票数据与市政记录未逐条核对。',
    ['novUsNov'], []),
  record('nbc-symphony', 13, '文化', 'NBC交响乐团首次广播演出', '美国 · 纽约',
    '托斯卡尼尼指挥的NBC交响乐团进行首次 radio 广播演出。',
    '11月13日，阿尔图罗·托斯卡尼尼指挥的NBC交响乐团通过NBC广播网进行首次演出。乐团由广播公司组建，托斯卡尼尼的广播音乐会成为1930年代美国古典音乐大众化的重要途径。\n\n首次广播是音乐与广播史节点，不等于乐团当天完成全部演出计划；具体曲目、听众与后续合同须据NBC与乐团档案。本条只记首次广播。',
    'novUsNov',
    '1937年11月事件汇编记11月13日NBC交响乐团首次广播演出；曲目与广播记录未逐条核对。',
    ['novUsNov'], []),
  record('fdr-unemployment-chat', 14, '政治', '罗斯福就失业普查发表炉边谈话', '美国 · 华盛顿',
    '罗斯福通过炉边谈话说明失业普查的意义，呼吁公众配合。',
    '11月14日，罗斯福总统发表炉边谈话，主题是失业普查。他说明普查将帮助政府了解失业规模、制定就业政策，并呼吁公众配合登记。\n\n炉边谈话是总统动员公众的广播活动，不等于普查当天完成或就业政策已经确定；具体普查结果与后续立法须据罗斯福图书馆档案。本条只记谈话。',
    'novUsNov',
    '1937年11月事件汇编记11月14日罗斯福炉边谈话、主题为失业普查；谈话全文与普查记录未逐条核对。',
    ['novUsNov'], ['roosevelt']),
  record('sun-yatsen-statue', 15, '文化', '旧金山孙中山雕像揭幕', '美国 · 旧金山 · 圣玛丽广场',
    '孙中山雕像在旧金山圣玛丽广场揭幕。',
    '11月15日，孙中山雕像在美国旧金山圣玛丽广场揭幕。孙中山曾多次在旧金山活动，当地华侨与华人社区长期支持中国革命；雕像揭幕是华人在美国公共空间中的纪念活动。\n\n雕像揭幕是华侨史与文化纪念节点，不等于美国政府对中日战争立场当天改变；具体捐赠者、设计者与仪式须据旧金山档案。本条只记揭幕。',
    'novUsNov',
    '1937年11月事件汇编记11月15日旧金山孙中山雕像揭幕；捐赠与仪式记录未逐条核对。',
    ['novUsNov'], []),
]
