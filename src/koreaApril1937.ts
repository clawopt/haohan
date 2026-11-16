import type { Category, HistoryEvent } from './data'

// April 1937 in colonial Korea: the Governor-General prepares the volunteer
// soldier system while the Pyongyang mission-school crisis continues.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaAprilSources = {
  aprKoSungsil: research,
}

type SourceId = keyof typeof koreaAprilSources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `apr37-korea-${id}`, year: 1937, month: 4, country: 'korea', day,
    date: day ? `1937年4月${day}日` : '1937年4月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaAprilEvents: HistoryEvent[] = [
  record('volunteer-system-prep', undefined, '政治', '朝鲜总督府为朝鲜人志愿兵制度做准备', '朝鲜 · 京城',
    '殖民当局在1937年推进朝鲜人志愿兵制度的准备，把军事动员纳入殖民统治。',
    '1937年，朝鲜总督府为实施朝鲜人“志愿兵”制度展开准备。总督府学务局在同年12月整理的机密资料《朝鲜に於ける教育に關する方策》把“皇道主义、内鲜一体、忍苦锻炼”列为教育方针，并把这些方针与志愿兵制度的采用联系起来。\n\n志愿兵制度在1938年正式实施，1937年的准备属于制度铺陈阶段，不等于当年已经开始大规模征募。具体文件、开始日期与实施范围须据总督府官报与朝鲜军档案；本条只记1937年4月的政策准备状态。',
    'aprKoSungsil',
    '崇实大学金胜泰研究引用1937年12月总督府学务局机密资料，说明志愿兵制度准备与教育方针的关系；1937年4月的具体准备文件未逐条核对。',
  ),
  record('sungsil-crisis', undefined, '社会', '平壤三崇废校危机持续', '朝鲜 · 平壤',
    '崇实专门学校、崇实中学与崇义女校因拒绝神社参拜，继续面临废校与分离引继压力。',
    '1937年，平壤“三崇”——崇实专门学校、崇实中学与崇义女学校——因拒绝神社参拜与殖民当局的冲突持续。日本在1930年代把神社参拜强加给基督教学校，三崇校方与传教机构拒绝参拜，当局则以废校、转让和分离引继相威胁。\n\n三崇危机在1937年春季仍未解决，学校最终在1938年前后被废校或改组。校方的拒绝不代表所有师生与家长立场一致；具体交涉、签名与转让方案须据校史与总督府档案，本条只记1937年4月的危机状态。',
    'aprKoSungsil',
    '崇实大学金胜泰研究梳理1930年代神社参拜强制与三崇废校危机；1937年4月的具体交涉日期未在论文中逐日列出，本条只记月份。',
  ),
]
