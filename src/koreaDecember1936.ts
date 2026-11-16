import type { Category, HistoryEvent } from './data'

// December 1936 in colonial Korea: the Governor-General continues assimilation
// and wartime preparation policies.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaDecember1936Sources = {
  dec36KoSungsil: research,
}

type SourceId = keyof typeof koreaDecember1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `dec36-korea-${id}`, year: 1936, month: 12, country: 'korea', day,
    date: day ? `1936年12月${day}日` : '1936年12月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaDecember1936Events: HistoryEvent[] = [
  record('assimilation-pressure', undefined, '政治', '朝鲜总督府继续推行同化与神社参拜政策', '朝鲜 · 京城',
    '朝鲜殖民当局在1936年底继续推行“皇国臣民”教育与神社参拜，压制基督教学校。',
    '1936年12月，朝鲜总督府继续推行“皇国臣民”教育与神社参拜政策，要求学校参与神社参拜和天皇崇拜，压制基督教学校的抵制。平壤三崇等校与殖民当局的冲突在此后一年持续升级。\n\n这些措施是1930年代后期殖民同化政策的一部分，12月是政策延续期，不等于某项具体法令当天颁布。具体文件、执行范围与地方差异须据《朝鲜总督府官报》与总督府档案；本条只记月份与政策方向。',
    'dec36KoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1936年12月的具体文件未逐条核对。',
  ),
]
