import type { Category, HistoryEvent } from './data'

// July 1937 in Japan: the cabinet decides to send troops to North China and
// the Tungchow mutiny exposes tensions in the Japanese puppet regime.
export const japanJulySources = {
  julJpMarco: { name: 'Wikipedia · Marco Polo Bridge Incident', url: 'https://en.wikipedia.org/wiki/Marco_Polo_Bridge_Incident' },
  julJpTungchow: { name: 'Wikipedia · Tungchow mutiny', url: 'https://en.wikipedia.org/wiki/Tungchow_mutiny' },
}

type SourceId = keyof typeof japanJulySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jul37-jp-${id}`, year: 1937, month: 7, country: 'japan', day,
    date: `1937年7月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记内阁决定或事件的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanJulyEvents: HistoryEvent[] = [
  record('troop-decision', 11, '政治', '日本内阁决定向华北增兵', '日本 · 东京',
    '日本内阁会议决定向华北派遣军队，并发表关于派兵的政府声明。',
    '7月11日，日本内阁会议决定向华北派遣军队，并发表关于向华北派兵的政府声明。卢沟桥事变后，日本政府内部围绕“不扩大”与“增兵”展开争论，最终选择增兵，把局部冲突扩大为对华北的军事进攻。\n\n内阁决定是日本战争升级的关键节点，不等于当天已经完成大规模动员；具体派兵规模、部队番号与后续作战须据日本陆军与内阁档案。本条只记内阁决定。',
    [], 'julJpMarco', {
      topicIds: ['full-resistance'],
      evidenceNote: 'Marco Polo Bridge Incident条目记7月11日内阁决定派兵与政府声明；日本内阁会议记录与陆军动员文件未逐条核对。',
    }),
  record('tungchow-mutiny', 29, '军事', '通州事件', '中国 · 河北 · 通州',
    '伪冀东防共自治政府保安队反正，袭击通州日军与日本侨民。',
    '7月29日，伪冀东防共自治政府所属保安队在通州反正，袭击通州的日本守军、特务机关与日本侨民，造成包括平民在内的大量死亡。事件发生在日军进攻北平、平津局势崩溃之际。\n\n通州事件是日本扶植的伪政权内部矛盾与华北抗战交织的结果。日本方面后来把事件作为宣传材料，强调侨民受害；中方与研究者则关注保安队反正的抗日性质。具体伤亡与责任须据中日双方档案，本条不采用单方宣传结论。',
    [], 'julJpTungchow', {
      topicIds: ['full-resistance'],
      evidenceNote: 'Tungchow mutiny条目记7月29日保安队反正与袭击；中日双方档案与伤亡统计存在差异，未取单一数字。',
    }),
]
