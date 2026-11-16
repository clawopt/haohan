import type { Category, HistoryEvent } from './data'

// June 1937 in Japan: the first Konoe cabinet takes office.
export const japanJuneSources = {
  junJpKonoe: { name: '日本首相官邸 · 第34代近卫文麿内阁', url: 'https://www.kantei.go.jp/jp/rekidainaikaku/034.html' },
  junJpJacar: { name: 'JACAR · 近卫文麿', url: 'https://www.jacar.archives.go.jp/das/term/00000384' },
}

type SourceId = keyof typeof japanJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jun37-jp-${id}`, year: 1937, month: 6, country: 'japan', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记组阁或内阁成立的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanJuneEvents: HistoryEvent[] = [
  record('konoe-cabinet', 4, '政治', '第一次近卫内阁成立', '日本 · 东京',
    '近卫文麿接替林铣十郎组阁，成立第一次近卫内阁。',
    '6月4日，近卫文麿接替5月31日辞职的林铣十郎，成立第一次近卫内阁，时年46岁。广田弘毅任外相。近卫在组阁时提出“平衡物资供求、平衡国际收支和发展生产力”的财政经济原则，但在军部压力与政党政治之间处境困难。\n\n近卫内阁成立一个月后，卢沟桥事变爆发，日本进入全面侵华战争。近卫本人后来发表“不以国民政府为对手”的声明；本条只记6月4日组阁，不把后来的战争决策提前到当天。',
    ['hirohito'], 'junJpKonoe', {
      references: ['junJpJacar'], topicIds: ['japanese-cabinets'],
      evidenceNote: '首相官邸历任内阁页与JACAR记6月4日第一次近卫内阁成立、广田弘毅任外相；内阁施政方针与后续战争决策未逐条核对。',
    }),
]
