import type { Category, HistoryEvent } from './data'

// December 1937 in Japan: recognition of Franco and a new commander for the
// Shanghai Expeditionary Army.
export const japanDecemberSources = {
  decJpDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof japanDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `dec37-jp-${id}`, year: 1937, month: 12, country: 'japan', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记承认或任命的实际发生日期；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanDecemberEvents: HistoryEvent[] = [
  record('franco-recognition', 1, '外交', '日本承认佛朗哥政权', '日本 · 东京',
    '日本正式承认西班牙佛朗哥政权。',
    '12月1日，日本正式承认西班牙佛朗哥政权。此前德国、意大利已承认佛朗哥方面，日本此举与三国轴心及反共产国际立场一致。\n\n承认是外交姿态，不等于日本直接参加西班牙内战；具体承认文件与后续关系须据日本外务省档案。本条只记承认。',
    [], 'decJpDec', {
      evidenceNote: '1937年12月事件汇编记12月1日日本承认佛朗哥政权；承认文件与外交档案未逐条核对。',
    }),
  record('asaka-command', 5, '军事', '朝香宫鸠彦王接任上海派遣军司令', '中国 · 上海',
    '昭和天皇的叔父朝香宫鸠彦王接任上海派遣军司令，指挥围攻南京的部队。',
    '12月5日，朝香宫鸠彦王接任日本上海派遣军司令，指挥围攻南京的部队。此前上海派遣军由松井石根指挥；朝香宫到任后，日军继续向南京推进。\n\n朝香宫的任命是南京作战指挥链的节点，不等于他当天作出所有作战决定；日军在南京的暴行与指挥责任须据战后审判与档案。本条只记任命。',
    ['hirohito'], 'decJpDec', {
      evidenceNote: '1937年12月事件汇编记12月5日朝香宫鸠彦王接任上海派遣军司令；任命文件与作战记录未逐条核对。',
    }),
]
