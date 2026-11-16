import type { Category, HistoryEvent } from './data'

// December 1937 in Nazi Germany: passport restrictions for Jews, new Autobahn
// sections, and Ludendorff's death.
export const germanyDecemberSources = {
  decGeDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof germanyDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec37-ge-${id}`, year: 1937, month: 12, country: 'germany', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyDecemberEvents: HistoryEvent[] = [
  record('jewish-passports', 16, '政治', '纳粹德国限制向犹太人发放护照', '德国 · 柏林',
    '纳粹当局把向犹太人发放护照限制在移民、经济需要、重病或死亡等例外情形。',
    '12月16日，纳粹德国限制向犹太人发放护照，只允许移民、符合德国经济利益、重病或死亡等例外情形。此举进一步限制犹太人离开德国的渠道，是纳粹反犹政策的一部分。\n\n限制护照是行政性迫害措施，不等于所有犹太人当天被禁止离境；具体执行、例外与后果须据德国警察与外交部档案。本条只记限制。',
    'decGeDec',
    '1937年12月事件汇编记12月16日纳粹限制向犹太人发放护照；命令原文与执行记录未逐条核对。',
    ['decGeDec'], ['hitler']),
  record('autobahn-sections', 17, '经济', '德国开通218公里高速公路新路段', '德国',
    '纳粹德国开通六段共218公里的高速公路，宣传交通建设成就。',
    '12月17日，纳粹德国开通六段共218公里的高速公路（Autobahn）新路段。高速公路建设是纳粹政权创造就业、展示现代化与准备军事运输的重要工程。\n\n开通路段是基础设施节点，不等于德国高速公路网当天建成或全部用于民用；具体路线、造价与军事用途须据德国交通档案。本条只记开通。',
    'decGeDec',
    '1937年12月事件汇编记12月17日六段共218公里高速公路开通；工程档案与宣传材料未逐条核对。',
    ['decGeDec'], ['hitler']),
  record('ludendorff-death', 20, '政治', '鲁登道夫去世', '德国 · 慕尼黑',
    '第一次世界大战德军将领埃里希·鲁登道夫去世，享年72岁。',
    '12月20日，德国将军埃里希·鲁登道夫在慕尼黑去世，享年72岁。他在第一次世界大战中曾任德军最高统帅部军需总监，战后参与1923年慕尼黑啤酒馆政变，后来与纳粹运动保持距离。\n\n鲁登道夫的去世是德国军事史节点，不等于纳粹政权与其关系当天改变；葬礼与政治评价须据传记与档案。本条只记去世。',
    'decGeDec',
    '鲁登道夫条目与1937年12月事件汇编记12月20日去世、享年72岁；病史与葬礼记录未逐条核对。',
    ['decGeDec'], ['hitler']),
]
