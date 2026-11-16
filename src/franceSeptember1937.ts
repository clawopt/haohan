import type { Category, HistoryEvent } from './data'

// September 1937 in France: the death of Pierre de Coubertin and the Nyon
// agreement on Mediterranean patrols.
export const franceSeptemberSources = {
  sepFrSept: { name: 'Wikipedia · September 1937', url: 'https://en.wikipedia.org/wiki/September_1937' },
}

type SourceId = keyof typeof franceSeptemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep37-fr-${id}`, year: 1937, month: 9, country: 'france', day,
    date: `1937年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceSeptemberEvents: HistoryEvent[] = [
  record('coubertin-death', 2, '文化', '顾拜旦去世', '瑞士 · 日内瓦',
    '现代奥林匹克运动创始人皮埃尔·德·顾拜旦去世，享年74岁。',
    '9月2日，现代奥林匹克运动创始人皮埃尔·德·顾拜旦在瑞士日内瓦去世，享年74岁。他主张以体育促进国际理解，1896年促成第一届现代奥运会在雅典举行，并设计了奥林匹克五环旗。\n\n顾拜旦的去世是体育史节点，不等于奥林匹克运动当天停止；其思想、争议与奥运会的后续发展须据奥林匹克档案。本条只记去世。',
    'sepFrSept',
    '顾拜旦条目与1937年9月事件汇编记9月2日去世、享年74岁；病史与葬礼记录未逐条核对。',
    ['sepFrSept'], []),
  record('nyon-agreement', 14, '外交', '法国参与达成尼尔荣协议', '瑞士 · 尼尔荣',
    '法国与英国等国达成尼尔荣协议，建立地中海反潜艇巡逻机制。',
    '9月14日，法国与英国等国在瑞士尼尔荣达成协议，建立地中海巡逻区，授权巡逻舰艇对袭击商船的潜艇进行反击；法国与英国承担主要巡逻责任。协议针对西班牙内战期间“不明潜艇”袭击中立国商船的问题。\n\n协议是欧洲海军合作应对地中海危机的节点，不等于袭击当天停止或西班牙内战外溢结束。具体巡逻分区、舰艇与协议文本须据法国海军与外交部档案。本条只记协议达成。',
    'sepFrSept',
    '1937年9月事件汇编记9月14日尼尔荣协议；法国海军巡逻记录与协议文本未逐条核对。',
    ['sepFrSept'], ['blum']),
]
