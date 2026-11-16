import type { Category, HistoryEvent } from './data'

// October 1937 in Japan: a North Shanxi puppet government and the Tenth Army.
export const japanOctoberSources = {
  octJpOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof japanOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct37-jp-${id}`, year: 1937, month: 10, country: 'japan', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记政权成立或部队编成的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanOctoberEvents: HistoryEvent[] = [
  record('north-shanxi-government', 15, '政治', '伪晋北自治政府在大同成立', '山西 · 大同',
    '日本在大同扶植“晋北自治政府”，作为华北傀儡政权的一部分。',
    '10月15日，日本在大同扶植成立“晋北自治政府”，作为继伪冀东防共自治政府、伪察南自治政府之后的华北傀儡政权之一。政权名义上由当地人管理，实际受日本特务机关与驻军控制。\n\n伪政权成立是日本“分而治之”侵略政策的一部分，不等于当地中国军民停止抵抗；八路军与国民党军队继续在晋北作战。具体政权架构、官员与统治范围须据日本与华北档案。本条只记成立。',
    [], 'octJpOct', {
      topicIds: ['full-resistance'],
      evidenceNote: '1937年10月事件汇编记10月15日伪晋北自治政府在大同成立；政权档案与日本特务机关记录未逐条核对。',
    }),
  record('tenth-army', 20, '军事', '日本编成第十军', '日本 · 东京',
    '日本组建第十军，准备投入上海方向的作战。',
    '10月20日，日本组建第十军，准备投入上海方向的作战。第十军后来在杭州湾登陆，与上海派遣军配合，迫使中国军队从淞沪战场撤退。\n\n第十军编成是淞沪会战后期日军扩大攻势的节点，不等于当天已完成登陆；具体编成、登陆时间与作战经过须据日本陆军档案。本条只记编成。',
    [], 'octJpOct', {
      topicIds: ['full-resistance', 'shanghai-war'],
      evidenceNote: '1937年10月事件汇编记10月20日日本第十军编成；编成命令与登陆记录未逐条核对。',
    }),
]
