import type { Category, HistoryEvent } from './data'

// November 1937 in colonial Korea: wartime mobilization continues.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaNovemberSources = {
  novKoSungsil: research,
}

type SourceId = keyof typeof koreaNovemberSources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `nov37-korea-${id}`, year: 1937, month: 11, country: 'korea', day,
    date: day ? `1937年11月${day}日` : '1937年11月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaNovemberEvents: HistoryEvent[] = [
  record('wartime-mobilization', undefined, '政治', '朝鲜总督府继续强化战时动员与同化', '朝鲜 · 京城',
    '随着侵华战争扩大，朝鲜殖民当局继续推进“皇国臣民”教育与战争动员。',
    '1937年11月，随着日本侵华战争扩大，朝鲜总督府继续推进“皇国臣民”教育、神社参拜与志愿兵制度准备，把朝鲜社会纳入日本的战争体制。殖民当局加强对学校、宗教团体与言论的控制。\n\n这些措施是1930年代后期殖民政策的一部分，11月是战争扩大后的政策延续，不等于某项具体法令当天颁布。具体文件、执行范围与地方差异须据《朝鲜总督府官报》与总督府档案；本条只记月份与政策方向。',
    'novKoSungsil',
    '崇实大学金胜泰研究引用1937年12月总督府学务局机密资料，说明战争扩大后的“皇国臣民”教育与动员；1937年11月的具体文件未逐条核对。',
  ),
]
