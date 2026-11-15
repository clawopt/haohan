import type { Category, HistoryEvent } from './data'

// February 1937 in France: the Popular Front government pauses social reform,
// closes the Spanish border, and continues rearmament and industrial
// reorganization.
export const franceFebruarySources = {
  febFrSncase: { name: 'Gérard Hartmann · SNCASE的成立与早期生产（2005）', url: 'http://www.hydroretro.net/etudegh/sncase.pdf' },
  febFrMarch: { name: 'Wikipedia · February 1937（2月7日巴黎左翼游行）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febFrPause: { name: '南特遗产 · 1937年2月13日布鲁姆广播“暂停”与2月21日南特之行', url: 'https://patrimonia.nantes.fr/fiches-encyclopediques/21-fevrier-1937-visite-de-leon-blum-a-nantes/' },
  febFrAnouilh: { name: 'Wikipedia · February 1937（《无行李的旅人》首演）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febFrBorder: { name: 'Wikipedia · February 1937（法国关闭西班牙边境）', url: 'https://en.wikipedia.org/wiki/February_1937' },
  febFrMaginot: { name: 'Wikipedia · February 1937（法国新防务计划延长马奇诺防线）', url: 'https://en.wikipedia.org/wiki/February_1937' },
}

type SourceId = keyof typeof franceFebruarySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `feb37-fr-${id}`, year: 1937, month: 2, country: 'france', day,
    date: `1937年2月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceFebruaryEvents: HistoryEvent[] = [
  record('sncase', 1, '经济', 'SNCASE在法国东南部成立', '法国 · 马赛、巴黎',
    '法国飞机制造业国有化重组，东南航空制造公司正式成立。',
    '2月1日，法国东南航空制造公司（SNCASE）通过国有化与合并正式成立，整合了Lioré et Olivier、Potez、CAMS、Romano与SPCA等公司。\n\n这是1936—1937年法国航空工业国有化重组的组成部分。公司成立是法律与组织节点，不等于所有工厂、人员和生产线当天完成移交；各厂接管在此前此后分批进行。',
    'febFrSncase',
    'Hartmann研究明确SNCASE于1937年2月1日正式成立；法国航空工业的国有化法令与各厂移交日期另见1月条目，不合并。',
    [], []),
  record('paris-march', 7, '政治', '巴黎左翼四万人游行纪念1934年2月6日', '法国 · 巴黎',
    '左翼团体举行大规模游行，布鲁姆在雨中检阅队伍。',
    '2月7日，约四万名左翼人士在巴黎游行，纪念1934年2月6日右翼示威引发的政治危机。法国总理莱昂·布鲁姆站在雨中检阅游行队伍。\n\n游行展示人民阵线支持者的动员能力，也发生在政府面临经济与外交压力的时期。人数为当时报道的估计，不能当作精确统计。',
    'febFrMarch',
    '日期、人数与布鲁姆检阅见1937年2月事件汇编及所引报纸；人数为估计值，未核对警方统计。',
    [], ['blum']),
  record('blum-pause', 13, '政治', '布鲁姆广播宣布社会改革“暂停”', '法国 · 巴黎',
    '布鲁姆在广播中宣布暂停部分社会改革，以应对军备与财政压力。',
    '2月13日，法国总理莱昂·布鲁姆通过广播宣布社会改革的“暂停”（la pause）。政府面对重整军备的巨额开支与经济压力，难以同时继续推进人民阵线此前的社会改革。\n\n“暂停”是政策方向的调整，不等于所有改革当天停止或全部取消；具体措施随后在预算与议会审议中逐步体现。',
    'febFrPause',
    '南特遗产专题明确2月13日广播“暂停”及其与军备、财政压力的关系；广播全文与政府公报未逐字核对。',
    [], ['blum']),
  record('anouilh-premiere', 16, '文化', '《无行李的旅人》在巴黎首演', '法国 · 巴黎 · 马图兰剧院',
    '让·阿努伊的剧作《无行李的旅人》在巴黎马图兰剧院首演。',
    '2月16日，让·阿努伊的剧作《无行李的旅人》（Le Voyageur sans bagage）在巴黎马图兰剧院首演。\n\n剧作讲述一名失忆的第一次世界大战老兵寻找身份、面对多个家庭争夺的故事，涉及记忆、身份与战后社会。本条记录首演，不把后来的剧作评价当作首演当晚的反应。',
    'febFrAnouilh',
    '日期、剧院与剧名见1937年2月事件汇编；首演节目单与剧评未逐条核对。',
    [], []),
  record('spain-border', 21, '外交', '法国关闭与西班牙的边境', '法国 · 比利牛斯边境',
    '法国政府关闭边境，以阻止外国战斗人员和武器进入西班牙内战。',
    '2月21日，法国政府关闭与西班牙的边境，以阻止外国战斗人员和武器进入西班牙内战。\n\n这一措施与法国此前支持“不干涉”政策的立场一致，但边境关闭的执行程度与对难民的影响在不同地区并不相同。本条记录政府决定，不把关闭边境写成对西班牙内战的全面封锁。',
    'febFrBorder',
    '日期与措施见1937年2月事件汇编；法国内政部与外交部执行通令未核对，边境实际执行情况未展开。',
    [], ['blum']),
  record('blum-nantes', 21, '政治', '布鲁姆访问南特', '法国 · 南特',
    '布鲁姆在南特就政府政策与社会改革发表讲话。',
    '2月21日，法国总理莱昂·布鲁姆访问南特。此前一周，他已在广播中宣布社会改革的“暂停”；南特之行发生在政府调整政策、面对军备与财政压力的背景下。\n\n访问是政治沟通活动，具体讲话内容与地方接待情况须据当时的报道；本条不把访问写成新的政策决定。',
    'febFrPause',
    '南特遗产专题记2月21日访问；讲话全文与地方报道未逐条核对。',
    [], ['blum']),
  record('maginot-extension', 27, '军事', '法国通过新防务计划，延长马奇诺防线', '法国',
    '法国政府通过新的防务计划，扩大马奇诺防线及相关防御建设。',
    '2月27日，法国政府通过新的防务计划，延长马奇诺防线。计划发生在欧洲局势紧张、法国重整军备的背景下，与政府此前的国防开支授权和航空工业重组相联系。\n\n防务计划的通过不等于防线工程当天完成；具体路线、预算与施工进度须据工程档案。本条记录计划通过。',
    'febFrMaginot',
    '日期与计划方向见1937年2月事件汇编；法国国防部档案与工程预算未核对，正文不写具体延长段落。',
    [], ['blum']),
]
