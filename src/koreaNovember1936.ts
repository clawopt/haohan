import type { Category, HistoryEvent } from './data'

// November 1936 in colonial Korea: the Governor-General keeps pressing schools
// on shrine worship and "imperial subject" education.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaNovember1936Sources = {
  nov36KoSungsil: research,
}

type SourceId = keyof typeof koreaNovember1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `nov36-korea-${id}`, year: 1936, month: 11, country: 'korea', day,
    date: day ? `1936年11月${day}日` : '1936年11月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaNovember1936Events: HistoryEvent[] = [
  record('school-shrine-pressure', undefined, '政治', '朝鲜总督府加紧对学校的参拜与同化要求', '朝鲜 · 平壤',
    '朝鲜殖民当局在1936年11月继续要求学校参与神社参拜，平壤三崇等校的抵制压力加重。',
    '1936年11月，朝鲜总督府在“皇国臣民”教育方针下继续要求各级学校参与神社参拜与天皇崇拜，并对拒绝或拖延的基督教学校施加压力。平壤三崇学校等校的抵制与殖民当局的冲突在年底进一步加深。\n\n本期记录依据的是1930年代神社参拜强制的研究梳理，11月为政策延续与压力加深的月份，不等于某项具体法令在本月颁布。具体文件、执行范围与各校应对须据《朝鲜总督府官报》与校史档案；本条只记月份与政策方向。',
    'nov36KoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1936年11月的具体文件未逐条核对，故按月份记录。',
  ),
]
