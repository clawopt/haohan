import type { Category, HistoryEvent } from './data'

// May 1937 in colonial Korea: the Pyongyang mission-school crisis continues
// while the Governor-General presses shrine worship and wartime mobilization.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaMaySources = {
  mayKoSungsil: research,
}

type SourceId = keyof typeof koreaMaySources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `may37-korea-${id}`, year: 1937, month: 5, country: 'korea', day,
    date: day ? `1937年5月${day}日` : '1937年5月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaMayEvents: HistoryEvent[] = [
  record('sungsil-crisis', undefined, '社会', '平壤三崇废校危机持续', '朝鲜 · 平壤',
    '崇实专门学校、崇实中学与崇义女校拒绝神社参拜，废校与转让压力未解。',
    '1937年5月，平壤“三崇”——崇实专门学校、崇实中学与崇义女学校——因拒绝神社参拜与殖民当局的冲突仍在持续。日本在1930年代把神社参拜强加给基督教学校，三崇校方与传教机构拒绝参拜，当局则以废校、转让和分离引继相威胁。\n\n三崇危机贯穿1937年，学校最终在1938年前后被废校或改组。校方的拒绝不代表所有师生与家长立场一致；5月的具体交涉、签名与转让方案须据校史与总督府档案，本条只记危机状态。',
    'mayKoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1937年5月的具体交涉日期未在论文中逐日列出，本条只记月份。',
  ),
]
