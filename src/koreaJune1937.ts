import type { Category, HistoryEvent } from './data'

// June 1937 in colonial Korea: the Pochonbo raid and the continuing
// mission-school crisis.
export const koreaJuneSources = {
  junKoPochonbo: { name: '人民网 · 从抗日英雄到金太阳：金日成与朝鲜的半个世纪', url: 'http://m.people.cn/n4/2017/0502/c677-8873259.html' },
  junKoSungsil: { name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校', url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf' },
}

type SourceId = keyof typeof koreaJuneSources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jun37-korea-${id}`, year: 1937, month: 6, country: 'korea', day,
    date: day ? `1937年6月${day}日` : '1937年6月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaJuneEvents: HistoryEvent[] = [
  record('pochonbo-raid', 4, '军事', '普天堡战斗', '朝鲜 · 两江道 · 普天堡',
    '金日成率朝鲜人民革命军袭击普天堡日本警察所，随后撤回中国东北。',
    '6月4日，金日成率朝鲜人民革命军主力越过鸭绿江，袭击朝鲜两江道普天堡的日本警察所。朝鲜方面记载，此役毙敌40余人、伤20余人，缴获机枪2挺、步枪23支和大批军需品；金日成张贴布告后率部迅速撤回中国东北。\n\n普天堡战斗是朝鲜抗日武装在朝鲜境内的一次突袭，戳破日本“朝鲜境内已无抵抗势力”的宣传。战斗经过与战果主要依据朝鲜官方叙述，具体伤亡、缴获与作战细节须与日方记录及研究对照；本条保留资料属性。',
    'junKoPochonbo',
    '人民网文章转述朝鲜官方说法，记1937年6月金日成率部攻打普天堡及战果；日方警察记录与战斗详报未逐条核对，战果数字保留来源限定。',
  ),
  record('sungsil-crisis', undefined, '社会', '平壤三崇废校危机持续', '朝鲜 · 平壤',
    '崇实专门学校、崇实中学与崇义女校拒绝神社参拜，废校压力未解。',
    '1937年6月，平壤“三崇”——崇实专门学校、崇实中学与崇义女学校——因拒绝神社参拜与殖民当局的冲突仍在持续。日本在1930年代把神社参拜强加给基督教学校，三崇校方与传教机构拒绝参拜，当局则以废校、转让和分离引继相威胁。\n\n三崇危机贯穿1937年，学校最终在1938年前后被废校或改组。校方的拒绝不代表所有师生与家长立场一致；6月的具体交涉、签名与转让方案须据校史与总督府档案，本条只记危机状态。',
    'junKoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1937年6月的具体交涉日期未在论文中逐日列出，本条只记月份。',
  ),
]
