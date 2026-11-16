import type { Category, HistoryEvent } from './data'

// September 1936 in Nazi Germany: the Nuremberg Rally, the Four Year Plan
// proclamation, the "Hallelujah" ban, and the largest army maneuvers.
export const germanySeptember1936Sources = {
  septGeDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septGeRally: { name: 'Wikipedia · Nuremberg Rally', url: 'https://en.wikipedia.org/wiki/Nuremberg_Rally' },
  septGePlan: { name: 'Wikipedia · Four Year Plan', url: 'https://en.wikipedia.org/wiki/Four_Year_Plan' },
}

type SourceId = keyof typeof germanySeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [], extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep36-ge-${id}`, year: 1936, month: 9, country: 'germany', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const germanySeptember1936Events: HistoryEvent[] = [
  record('nuremberg-rally', 8, '政治', '第八届纳粹党全国代表大会在纽伦堡举行', '德国 · 纽伦堡',
    '纳粹党在纽伦堡举行第八届全国代表大会，希特勒宣称恢复军备主权。',
    '9月8日至14日，纳粹党第八届全国代表大会在纽伦堡举行。希特勒在开幕演说中宣称德国已“恢复完全的军备主权”；13日，他检阅了107,000名冲锋队与党卫队成员；14日，他观看371架飞机飞过并发表攻击民主制度的演说。\n\n党代会是纳粹政权展示权力与动员能力的重要舞台，不等于德国当天完成新的军事行动；具体日程、演说全文与阅兵规模须据纳粹档案。本条采用9月8日至14日的会期。',
    'septGeRally',
    '纽伦堡党代会条目与1936年9月事件汇编记9月8日至14日大会、希特勒宣称恢复军备主权、检阅107,000人、371架飞机飞过；日程与演说原文未逐条核对。',
    ['septGeDec'], ['hitler'], { precision: 'range', endDay: 14, date: '1936年9月8日—14日' }),
  record('four-year-plan-announce', 9, '经济', '希特勒在纽伦堡宣布四年计划', '德国 · 纽伦堡',
    '希特勒在纳粹党代会上宣布四年计划，要求德国经济在四年内为战争作准备。',
    '9月9日，希特勒在纽伦堡纳粹党代表大会上发表长篇演说，随后发布公告，宣布德国下一阶段的目标是恢复战前殖民地并通过四年计划重建经济。四年计划要求经济自给与军备扩张，戈林在10月18日被正式任命为全权代表。\n\n宣布计划是纳粹经济动员的重要节点，不等于计划当天实施；具体法令、机构与执行在10月以后展开。本条只记宣布。',
    'septGePlan',
    '四年计划条目与1936年9月事件汇编记9月9日希特勒在纽伦堡宣布四年计划、10月18日任命戈林为全权代表；公告原文与计划细节未逐条核对。',
    ['septGeDec'], ['hitler']),
  record('hallelujah-ban', 19, '文化', '纳粹当局要求教会删除“哈利路亚”', '德国 · 柏林',
    '纳粹当局要求德国教会从祈祷中删除“哈利路亚”，称其为“希伯来外来词”。',
    '9月19日，纳粹当局要求德国教会从祈祷与礼仪中删除“哈利路亚”，理由是这个词“属于希伯来语、是外来词”。这一措施是纳粹政权压制基督教教会、以种族主义改造宗教语言的一部分。\n\n禁令是纳粹宗教与文化统制的节点，不等于所有教会当天服从；具体命令、教会反应与执行范围须据教会与宣传部档案。本条只记要求。',
    'septGeDec',
    '1936年9月事件汇编记9月19日纳粹当局要求德国教会删除“哈利路亚”、称其为希伯来外来词；命令原文与教会反应未逐条核对。',
    ['septGeDec'], ['hitler']),
  record('german-maneuvers', 21, '军事', '德国军队开始最大规模演习', '德国',
    '德国军队开始其规模最大的军事演习，展示扩军成果。',
    '9月21日，德国军队开始其规模最大的军事演习。演习发生在纳粹恢复普遍义务兵役、重占莱茵兰与西班牙内战介入之后，被视为德国展示扩军与作战能力的重要活动。\n\n演习是军事动员与威慑的节点，不等于德国当天进入战争状态；具体参演兵力、科目与地点须据德国军事档案。本条只记演习开始。',
    'septGeDec',
    '1936年9月事件汇编记9月21日德国军队开始其规模最大的演习；参演兵力、科目与地点未逐条核对。',
    ['septGeDec'], ['hitler']),
]
