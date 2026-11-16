import type { Category, HistoryEvent } from './data'

// July 1937 in France: a Paris hotel and café strike and the Spanish pavilion
// at the Paris exposition, where Picasso's Guernica went on display.
export const franceJulySources = {
  julFrJuly: { name: 'Wikipedia · July 1937', url: 'https://en.wikipedia.org/wiki/July_1937' },
  julFrGuernica: { name: 'Wikipedia · Guernica (Picasso)', url: 'https://en.wikipedia.org/wiki/Guernica_(Picasso)' },
}

type SourceId = keyof typeof franceJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jul37-fr-${id}`, year: 1937, month: 7, country: 'france', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceJulyEvents: HistoryEvent[] = [
  record('paris-hotel-strike', 9, '经济', '巴黎旅馆与咖啡馆工人罢工要求五天工作制', '法国 · 巴黎',
    '巴黎旅馆与咖啡馆工人罢工，要求实行五天工作制。',
    '7月9日，巴黎旅馆与咖啡馆工人开始罢工，要求实行五天工作制。罢工发生在人民阵线政府执政、1936年马提尼翁协议后劳工运动高涨的背景下。\n\n罢工是服务业劳工争取工时与待遇的行动，不等于五天工作制当天已经全面实施；具体行业、参与人数与谈判结果须据工会与政府档案。本条只记罢工开始。',
    'julFrJuly',
    '1937年7月事件汇编记7月9日巴黎旅馆与咖啡馆工人罢工、要求五天工作制；参与人数与结束日期未逐条核对。',
    ['julFrJuly'], ['blum']),
  record('spanish-pavilion', 12, '文化', '巴黎世博会西班牙馆开幕，《格尔尼卡》展出', '法国 · 巴黎',
    '西班牙共和国馆在巴黎世博会上开幕，毕加索的《格尔尼卡》悬挂在入口大厅。',
    '7月12日，巴黎国际艺术与技术博览会的西班牙共和国馆开幕，毕加索的大型壁画《格尔尼卡》悬挂在入口大厅。作品以4月26日德军轰炸格尔尼卡为题材，用立体主义手法表现平民的苦难。\n\n《格尔尼卡》展出是艺术与政治结合的标志性事件，不等于西班牙内战的国际干预当天改变；作品后来在世界各地巡展，成为反战象征。具体展陈、观众反应与作品尺寸须据展览档案；本条只记开幕与展出。',
    'julFrGuernica',
    '《格尔尼卡》条目与1937年7月事件汇编记7月12日西班牙馆开幕、画作悬挂入口大厅；展览档案与观众记录未逐条核对。',
    ['julFrJuly'], []),
]
