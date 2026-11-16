import type { Category, HistoryEvent } from './data'

// August 1937 in Nazi Germany: a press war with Britain and tighter
// restrictions on Jewish booksellers.
export const germanyAugustSources = {
  augGeAugust: { name: 'Wikipedia · August 1937', url: 'https://en.wikipedia.org/wiki/August_1937' },
}

type SourceId = keyof typeof germanyAugustSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `aug37-ge-${id}`, year: 1937, month: 8, country: 'germany', day,
    date: `1937年8月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyAugustEvents: HistoryEvent[] = [
  record('ebbott-expelled', 9, '外交', '德国要求英国《泰晤士报》记者离境', '德国 · 柏林',
    '德国要求英国《泰晤士报》驻柏林记者埃布特离境，作为对英国驱逐德国记者的报复。',
    '8月9日，柏林宣布英国《泰晤士报》驻德记者诺曼·埃布特被要求离开德国。此举是对英国以间谍嫌疑驱逐三名德国记者的报复，反映纳粹政权与英国新闻界的紧张关系。\n\n记者驱逐是外交与新闻自由事件，不等于两国断交或战争临近；具体驱逐令、记者名单与后续交涉须据德国外交部与英国档案。本条只记宣布。',
    'augGeAugust',
    '1937年8月事件汇编记8月9日埃布特被要求离德、作为对英国驱逐德国记者的报复；外交档案未逐条核对。',
    ['augGeAugust'], ['hitler']),
  record('jewish-booksellers', 19, '政治', '纳粹德国限制犹太书商售书', '德国 · 柏林',
    '纳粹当局规定犹太书商只能向犹太顾客出售犹太作者的书籍。',
    '8月19日，纳粹德国限制犹太书商，规定他们只能向犹太顾客出售犹太作者的书籍。这是纳粹政权把犹太人逐出公共文化生活、限制其经济活动的又一步。\n\n限制书商是反犹政策的一部分，不等于所有犹太书店当天关闭；具体执行、罚则与书商命运须据德国经济部与宣传部档案。本条只记限制措施。',
    'augGeAugust',
    '1937年8月事件汇编记8月19日限制犹太书商售书；命令原文与执行记录未逐条核对。',
    ['augGeAugust'], []),
]
