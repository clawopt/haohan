import type { Category, HistoryEvent } from './data'

// April 1937 in the USSR: the second five-year plan is declared complete and
// Soviet literature loses Ilya Ilf.
export const ussrAprilSources = {
  aprSuApril: { name: 'Wikipedia · April 1937', url: 'https://en.wikipedia.org/wiki/April_1937' },
  aprSuIlf: { name: 'Wikipedia · Ilya Ilf', url: 'https://en.wikipedia.org/wiki/Ilya_Ilf' },
  aprSuPlan: { name: 'Wikipedia · Five-year plans for the national economy of the Soviet Union', url: 'https://en.wikipedia.org/wiki/Five-year_plans_for_the_national_economy_of_the_Soviet_Union' },
}

type SourceId = keyof typeof ussrAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `apr37-su-${id}`, year: 1937, month: 4, country: 'ussr', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrAprilEvents: HistoryEvent[] = [
  record('ilf-death', 13, '文化', '作家伊利亚·伊尔夫去世', '苏联 · 莫斯科',
    '《十二把椅子》合著者伊利亚·伊尔夫病逝，年仅39岁。',
    '4月13日，苏联作家伊利亚·伊尔夫在莫斯科去世，年仅39岁。他与叶夫根尼·彼得罗夫合著《十二把椅子》《金牛犊》等讽刺小说，以流浪汉冒险与对社会弊病的讽刺著称。\n\n伊尔夫的去世是苏联文学史的节点，不等于其作品当天停止传播；他与彼得罗夫的合著关系、作品版本与文学评价须分别理解。具体死因与葬礼记录未在所引资料中展开。',
    'aprSuIlf',
    '维基百科伊尔夫条目记4月13日去世与代表作；苏联文学史研究与作品原文未逐条核对。',
    ['aprSuApril'], []),
  record('five-year-plan-complete', 25, '经济', '苏联宣布第二个五年计划主要目标提前完成', '苏联 · 莫斯科',
    '苏联政府宣布第二个五年计划的目标提前完成，尽管部分工业部门仍然落后。',
    '4月25日，苏联宣布第二个五年计划的主要目标已提前完成，时间比原计划提前九个月到一年。官方宣传把这一结果视为社会主义工业化与集体化的胜利。\n\n“提前完成”是官方宣布，不等于所有工业部门都达到计划指标；当时国家控制的报刊也曾报道部分行业落后。计划目标、统计口径与实际产量须据苏联经济档案与研究，本条只记宣布行为。',
    'aprSuApril',
    '1937年4月事件汇编记4月25日苏联宣布五年计划目标提前完成；具体指标、统计口径与行业差异未逐项核对。',
    ['aprSuPlan'], ['stalin']),
]
