import type { Category, HistoryEvent } from './data'

// November 1937 in Japan: Italy joins the Anti-Comintern Pact.
export const japanNovemberSources = {
  novJpNov: { name: 'Wikipedia · November 1937', url: 'https://en.wikipedia.org/wiki/November_1937' },
}

type SourceId = keyof typeof japanNovemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `nov37-jp-${id}`, year: 1937, month: 11, country: 'japan', day,
    date: `1937年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记条约签署或事件的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanNovemberEvents: HistoryEvent[] = [
  record('anti-comintern-italy', 6, '外交', '意大利加入反共产国际协定', '意大利 · 罗马',
    '意大利加入德国与日本签订的反共产国际协定，三国轴心进一步形成。',
    '11月6日，意大利加入德国与日本于1936年签订的反共产国际协定。协定以反对共产国际为名，实际把德、意、日三国在反共与扩张政策上联系起来，形成“柏林—罗马—东京轴心”。\n\n意大利加入是三国轴心正式形成的节点，不等于三国当天签订全面军事同盟；具体协定文本、签字仪式与后续军事合作须据三国外交档案。本条只记加入。',
    [], 'novJpNov', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年11月事件汇编记11月6日意大利加入反共产国际协定；协定文本与三国交涉未逐条核对。',
    }),
]
