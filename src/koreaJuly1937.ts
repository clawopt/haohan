import type { Category, HistoryEvent } from './data'

// July 1937 in colonial Korea: the Sino-Japanese war becomes the pretext for
// tighter wartime mobilization and assimilation pressure.
const research = {
  name: '崇实大学 · 平壤三崇的神社参拜拒绝斗争与废校',
  url: 'https://human.ssu.ac.kr/wp-content/uploads/sites/78/2020/08/42%EC%A7%912012_10_%EA%B9%80%EC%8A%B9%ED%83%9C_%ED%8F%89%EC%96%91-%E4%B8%89%E5%B4%87%EC%9D%98-%EC%8B%A0%EC%82%AC%EC%B0%B8%EB%B0%B0-%EA%B1%B0%EB%B6%80%ED%88%AC%EC%9F%81%EA%B3%BC-%ED%8F%90%EA%B5%90.pdf',
}

export const koreaJulySources = {
  julKoSungsil: research,
}

type SourceId = keyof typeof koreaJulySources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `jul37-korea-${id}`, year: 1937, month: 7, country: 'korea', day,
    date: day ? `1937年7月${day}日` : '1937年7月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaJulyEvents: HistoryEvent[] = [
  record('wartime-mobilization', undefined, '政治', '中日战争爆发后朝鲜殖民当局强化战时动员', '朝鲜 · 京城',
    '卢沟桥事变后，朝鲜总督府加紧“皇国臣民”教育与志愿兵制度准备。',
    '1937年7月卢沟桥事变后，朝鲜总督府把中日战争视为强化殖民统治与战争动员的机会，进一步推行“皇国臣民”教育、神社参拜与志愿兵制度准备。总督府学务局在同年12月的机密资料中把“皇道主义、内鲜一体、忍苦锻炼”列为教育方针。\n\n这些措施是1930年代后期朝鲜殖民政策的一部分，7月是战争爆发后的政策加速期，不等于某项具体法令当天颁布。具体文件、执行范围与地方差异须据《朝鲜总督府官报》与总督府档案；本条只记月份与政策方向。',
    'julKoSungsil',
    '崇实大学金胜泰研究引用1937年12月总督府学务局机密资料，说明战争爆发后“皇国臣民”教育与志愿兵制度准备；1937年7月的具体文件未逐条核对。',
  ),
]
