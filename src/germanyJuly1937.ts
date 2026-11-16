import type { Category, HistoryEvent } from './data'

// July 1937 in Nazi Germany: Buchenwald opens, Niemöller is arrested, and the
// regime stages its campaign against "degenerate art" in Munich.
export const germanyJulySources = {
  julGeJuly: { name: 'Wikipedia · July 1937', url: 'https://en.wikipedia.org/wiki/July_1937' },
  julGeBuchenwald: { name: '布痕瓦尔德纪念馆 · 集中营建立', url: 'https://www.buchenwald.de/en/geschichte/chronologie/konzentrationslager/lagergruendung' },
  julGeNiemoller: { name: 'Wikipedia · Martin Niemöller', url: 'https://en.wikipedia.org/wiki/Martin_Niem%C3%B6ller' },
  julGeDegenerate: { name: 'Wikipedia · Degenerate Art Exhibition', url: 'https://en.wikipedia.org/wiki/Degenerate_Art_Exhibition' },
  julGeHaus: { name: 'Wikipedia · Haus der Kunst', url: 'https://en.wikipedia.org/wiki/Haus_der_Kunst' },
}

type SourceId = keyof typeof germanyJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jul37-ge-${id}`, year: 1937, month: 7, country: 'germany', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyJulyEvents: HistoryEvent[] = [
  record('niemoller-arrest', 1, '政治', '马丁·尼默勒被捕', '德国 · 柏林',
    '德国牧师马丁·尼默勒被纳粹当局逮捕，随后被送入集中营。',
    '7月1日，德国新教牧师马丁·尼默勒被纳粹当局逮捕。尼默勒是“认信教会”的代表人物，公开批评纳粹政权对教会的控制与国家崇拜，此前已多次被审讯与限制。\n\n尼默勒被捕是纳粹政权压制教会反对派的标志性事件，不等于所有教会抵抗当天停止。他先被关押在萨克森豪森，后转到达豪，直到1945年才获释；具体逮捕令与审判记录须据档案。本条只记逮捕。',
    'julGeNiemoller',
    '尼默勒条目与1937年7月事件汇编记7月1日逮捕；逮捕令与集中营记录未逐条核对，后续关押不写入当日。',
    ['julGeJuly'], []),
  record('buchenwald-opened', 15, '政治', '布痕瓦尔德集中营建立', '德国 · 魏玛 · 埃特斯山',
    '党卫队在魏玛附近的埃特斯山建立布痕瓦尔德集中营。',
    '7月15日，党卫队在魏玛附近的埃特斯山开始建立布痕瓦尔德集中营，用以取代利希滕堡、萨克森堡和巴德苏尔察等较小的集中营。首批囚犯在此后被送入营地参与建设。\n\n布痕瓦尔德是纳粹德国最大的集中营之一，战争期间关押了来自30个国家的约23.9万人，约4.3万人死亡。建立集中营是纳粹迫害体系扩张的节点，不等于所有设施当天完工；具体人数、囚犯类别与死亡统计须据纪念馆档案。',
    'julGeBuchenwald',
    '布痕瓦尔德纪念馆记7月15日建立与取代小型集中营；囚犯人数与死亡统计见纪念馆资料，未逐条核对。',
    ['julGeJuly'], ['hitler']),
  record('degenerate-art-preview', 16, '文化', '希特勒参观“堕落艺术展”', '德国 · 慕尼黑',
    '希特勒为慕尼黑艺术节揭幕，并参观“堕落艺术展”预展。',
    '7月16日，希特勒在慕尼黑为“德国艺术之家”艺术节揭幕，并参观“堕落艺术展”（Entartete Kunst）预展。展览把现代主义、抽象与犹太艺术家作品标为“堕落”，与官方推崇的“德意志艺术”形成对照。\n\n“堕落艺术展”是纳粹文化政策的宣传工具，不等于所有被展作品当天已被销毁；许多作品后来被出售或毁坏。具体展品、观众人数与文化清洗措施须据展览档案；本条只记预展参观。',
    'julGeDegenerate',
    '堕落艺术展条目与1937年7月事件汇编记7月16日希特勒参观预展；展品清单与观众记录未逐条核对。',
    ['julGeJuly'], ['hitler']),
  record('haus-der-kunst', 18, '文化', '慕尼黑“德国艺术之家”开幕', '德国 · 慕尼黑',
    '纳粹政权在慕尼黑开放“德国艺术之家”，展示官方认可的艺术。',
    '7月18日，慕尼黑“德国艺术之家”（Haus der Kunst）开幕。这座建筑用于展示纳粹政权认可的“德意志艺术”，与同期的“堕落艺术展”形成官方文化政策的两面。\n\n“德国艺术之家”开幕是纳粹文化宣传的节点，不等于所有德国艺术家都接受官方标准；具体展览、建筑师与战后用途须据艺术史资料。本条只记开幕。',
    'julGeHaus',
    'Haus der Kunst条目与1937年7月事件汇编记7月18日开幕；建筑与展览档案未逐条核对。',
    ['julGeJuly'], ['hitler']),
]
