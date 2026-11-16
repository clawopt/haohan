import type { Category, HistoryEvent } from './data'

// November 1936 in Japan: the Miyagi earthquake, the Akita dike disaster, and
// the Anti-Comintern Pact with Germany.
export const japanNovember1936Sources = {
  nov36JpDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36JpQuake: { name: 'Wikipedia · 1936 Miyagi earthquake', url: 'https://en.wikipedia.org/wiki/1936_Miyagi_earthquake' },
  nov36JpPact: { name: 'Wikipedia · Anti-Comintern Pact', url: 'https://en.wikipedia.org/wiki/Anti-Comintern_Pact' },
}

type SourceId = keyof typeof japanNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-jp-${id}`, year: 1936, month: 11, country: 'japan', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const japanNovember1936Events: HistoryEvent[] = [
  record('miyagi-earthquake', 3, '社会', '宫城县近海地震', '日本 · 宫城',
    '宫城县近海发生强烈地震，仙台等地受灾，28人死亡。',
    '11月3日，日本宫城县近海发生强烈地震，仙台等地观测到强烈震动并遭受破坏。地震造成28人死亡，是1930年代日本东北地区的一次严重灾害。\n\n地震发生在日本加速扩军与对外扩张的时期，灾害应对与地方重建构成当年社会史的一部分。具体震级、震源与各地受灾数字在不同资料中略有差异；本条只记地震与死亡人数。',
    'nov36JpQuake',
    '日本地震调查资料与1936年11月事件汇编记11月3日宫城县近海地震、28人死亡；震级与各地受灾细节未逐条核对。',
    ['nov36JpDec'], []),
  record('akita-dike', 20, '社会', '秋田县堤坝决口', '日本 · 秋田',
    '秋田县北部因暴雨导致堤坝决口，362人死亡。',
    '11月20日，日本秋田县北部因连日暴雨导致堤坝决口，洪水冲毁村庄与农田，造成362人死亡。灾害暴露出当地防洪设施与应急能力的不足。\n\n决口是1936年日本国内最严重的自然灾害之一，与同月的宫城地震共同构成当年灾害史。具体降雨量、决口位置与救灾经过须据地方档案；本条只记决口与死亡人数。',
    'nov36JpDec',
    '1936年11月事件汇编记11月20日秋田县北部堤坝决口、362人死亡；地方档案与救灾记录未逐条核对。',
    [], []),
  record('anti-comintern-pact', 25, '外交', '日本与德国签署《反共产国际协定》', '德国 · 柏林',
    '日本与纳粹德国在柏林签署《反共产国际协定》，以苏联为对象。',
    '11月25日，日本与纳粹德国在柏林签署《反共产国际协定》，公开部分以反对共产国际为名，另附秘密协定，实际针对苏联。意大利于1937年加入，三国轴心由此逐步形成。\n\n协定是日本与德国在退出国联后相互靠拢的重要节点，也加剧了苏联的安全忧虑与欧洲阵营分化。协定签字不等于立即形成军事同盟；具体条款、秘密附件与后续加入程序须据外交档案。本条只记签署。',
    'nov36JpPact',
    '《反共产国际协定》条目与1936年11月事件汇编记11月25日德日在柏林签署协定；秘密附件与谈判记录未逐条核对。',
    ['nov36JpDec'], ['hirohito']),
]
