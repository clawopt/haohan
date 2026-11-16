import type { Category, HistoryEvent } from './data'

// October 1936 in colonial Korea: the Dong-A Ilbo remains suspended after the
// flag-erasure incident, and the press is under tight control.
export const koreaOctober1936Sources = {
  oct36KoDonga: { name: '东亚日报 · 东亚遗产 30000：日章旗抹消事件与无限期停刊', url: 'https://www.donga.com/donga30000' },
  oct36KoMerit: { name: '韩国国家报勋处 · 独立有功者史料馆：日帝的言论弹压', url: 'https://e-gonghun.mpva.go.kr/user/IndepCrusaderDetail.do?goTocode=20003&indepMeritSeq=1408' },
}

type SourceId = keyof typeof koreaOctober1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct36-korea-${id}`, year: 1936, month: 10, country: 'korea', day,
    date: day ? `1936年10月${day}日` : '1936年10月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaOctober1936Events: HistoryEvent[] = [
  record('donga-suspension', undefined, '政治', '《东亚日报》停刊处分持续', '朝鲜 · 京城',
    '因日章旗抹消事件，朝鲜总督府对《东亚日报》的无限期停刊处分在10月仍在执行。',
    '1936年8月25日，《东亚日报》在报道柏林奥运会马拉松冠军孙基祯时抹去其制服上的日章旗，朝鲜总督府随即禁止销售与发行，并于8月29日起实施无限期停刊。1936年10月，停刊处分仍在执行，报社主要人员相继被迫去职。停刊持续至1937年5月底至6月初才解除。\n\n本条记录的是10月仍持续的停刊状态，不是10月新发生的处分；具体禁令、复刊条件与人事变动须据总督府文书与报社史。',
    'oct36KoDonga',
    '东亚日报社史与韩国国家报勋处资料记1936年8月29日起无限期停刊、持续至1937年5—6月；10月仍处停刊状态，具体日期未逐条核对，故按月份记录。',
    { references: ['oct36KoMerit'] },
  ),
]
