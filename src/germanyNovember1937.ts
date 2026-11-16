import type { Category, HistoryEvent } from './data'

// November 1937 in Nazi Germany: the Hossbach Memorandum, the Poland minorities
// declaration, the Eternal Jew exhibition, and a new conscription call-up.
export const germanyNovemberSources = {
  novGeNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
}

type SourceId = keyof typeof germanyNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov37-ge-${id}`, year: 1937, month: 11, country: 'germany', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyNovemberEvents: HistoryEvent[] = [
  record('hossbach', 5, '军事', '希特勒在秘密会议上阐述扩张计划', '德国 · 柏林',
    '希特勒在总理府秘密会议上说明以武力获取“生存空间”的计划，即《霍斯巴赫备忘录》。',
    '11月5日，希特勒在柏林总理府召开秘密会议，向军方与外交高层说明以武力获取“生存空间”的计划，包括吞并奥地利、捷克斯洛伐克等内容。会议记录由副官霍斯巴赫整理，史称《霍斯巴赫备忘录》。\n\n备忘录是纳粹德国扩张政策的重要证据，不等于当天已经作出具体军事命令；会议内容与记录真实性在史学界有讨论，但被广泛视为侵略计划的关键文件。具体文本与参会者须据档案。本条只记会议。',
    'novGeNov',
    '1937年11月事件汇编记11月5日霍斯巴赫会议；备忘录原文与史学讨论未逐条核对。',
    ['novGeNov'], ['hitler']),
  record('poland-minorities', 5, '外交', '德国与波兰签署少数民族联合声明', '德国 · 柏林',
    '德国与波兰签署少数民族联合声明，承诺保护彼此境内的少数民族。',
    '11月5日，德国与波兰签署关于少数民族的联合声明，承诺对德国境内的波兰少数民族与波兰境内的德意志少数民族给予公正待遇与保护。声明发生在德波关系表面缓和、但但泽与走廊问题仍紧张的背景下。\n\n声明是外交文件，不等于两国矛盾解决；1939年德国入侵波兰。具体条款、执行与后续交涉须据两国外交档案。本条只记签署。',
    'novGeNov',
    '1937年11月事件汇编记11月5日德波少数民族联合声明；声明文本与执行记录未逐条核对。',
    ['novGeNov'], ['hitler']),
  record('eternal-jew', 8, '文化', '“永恒的犹太人”展览在慕尼黑开幕', '德国 · 慕尼黑',
    '纳粹政权在慕尼黑举办“永恒的犹太人”展览，传播反犹主义。',
    '11月8日，纳粹政权在慕尼黑举办“永恒的犹太人”（Der ewige Jude）展览，以漫画、照片与所谓“人种研究”把犹太人描绘成危险与异质群体。展览与“堕落艺术展”相配合，是纳粹反犹宣传的重要工具。\n\n展览是纳粹文化政策与反犹主义的表现，不等于所有参观者接受其宣传；具体展品、参观人数与后续政策须据档案。本条只记开幕。',
    'novGeNov',
    '1937年11月事件汇编记11月8日“永恒的犹太人”展览在慕尼黑开幕；展品与宣传材料未逐条核对。',
    ['novGeNov'], ['hitler']),
  record('conscription-callup', 10, '军事', '德国征召1893—1900年出生男性体检', '德国 · 柏林',
    '德国宣布征召1893年至1900年出生的男性进行体检，评估兵役资格。',
    '11月10日，德国宣布征召1893年至1900年出生的男性进行医学检查，以评估其服兵役的适合性。此举扩大兵员基础，与纳粹德国重整军备、准备战争的政策相连。\n\n征召体检是军事动员节点，不等于所有被检查者当天入伍；具体征召人数、兵役法与实施进度须据德国国防军档案。本条只记宣布。',
    'novGeNov',
    '1937年11月事件汇编记11月10日德国征召1893—1900年出生男性体检；兵役档案与征召统计未逐条核对。',
    ['novGeNov'], ['hitler']),
]
