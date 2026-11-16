import type { Category, HistoryEvent } from './data'

// September 1936 in France: a Paris march against the Spanish arms embargo,
// the Franco-Syrian treaty, and the devaluation of the franc.
export const franceSeptember1936Sources = {
  septFrDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septFrSyria: { name: 'Wikipedia · Franco-Syrian Treaty of Independence', url: 'https://en.wikipedia.org/wiki/Franco-Syrian_Treaty_of_Independence' },
  septFrFranc: { name: 'Wikipedia · French franc', url: 'https://en.wikipedia.org/wiki/French_franc' },
}

type SourceId = keyof typeof franceSeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep36-fr-${id}`, year: 1936, month: 9, country: 'france', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceSeptember1936Events: HistoryEvent[] = [
  record('paris-arms-embargo-demo', 4, '政治', '巴黎十万人游行要求解除对西班牙武器禁运', '法国 · 巴黎',
    '十万名支持西班牙共和国的示威者在巴黎游行，要求法国政府解除武器禁运。',
    '9月4日，约十万名支持西班牙共和国的示威者在巴黎游行，要求法国政府解除对西班牙的武器禁运。游行发生在西班牙内战扩大、法国国内左右翼对立加剧的背景下，给人民阵线政府带来更大压力。\n\n游行是社会动员的节点，不等于法国政府当天改变不干涉政策；具体组织者、路线与政府回应须据警方与报刊档案。本条只记游行。',
    'septFrDec',
    '1936年9月事件汇编记9月4日巴黎十万人游行要求解除对西班牙武器禁运；组织者与政府回应未逐条核对。',
    ['septFrDec'], ['blum']),
  record('franco-syrian-treaty', 9, '外交', '法国与叙利亚签署独立条约', '法国 · 巴黎',
    '法国与叙利亚签署友好同盟条约，规定三年内结束法国对叙利亚的委任统治。',
    '9月9日，法国与叙利亚签署友好同盟条约。条约规定法国对叙利亚的委任统治在三年内结束，叙利亚将加入国际联盟。条约是法国在中东殖民体系调整的一部分，但未立即结束委任统治，后续批准与执行因战争而受阻。\n\n签约是法叙关系的重要节点，不等于叙利亚当天独立；具体条款、议会批准与民族主义反应须据法国与叙利亚档案。本条只记签署。',
    'septFrSyria',
    '法叙独立条约资料与1936年9月事件汇编记9月9日签署条约、规定三年内结束委任统治；条约文本与批准过程未逐条核对。',
    ['septFrDec'], []),
  record('franc-devaluation', 26, '经济', '法国政府决定法郎贬值', '法国 · 巴黎',
    '法国政府决定将法郎贬值约30%，以应对经济与财政压力。',
    '9月26日，法国政府决定将法郎贬值，幅度约30%，以应对经济停滞、财政压力与国际资本流动。贬值决定引发法国舆论激烈争论，相关法律在10月2日通过。\n\n贬值是人民阵线政府经济政策的重要节点，不等于经济问题当天解决；具体汇率、黄金比价与后续政策须据法国财政档案。本条只记政府决定。',
    'septFrFranc',
    '法郎资料与1936年9月事件汇编记9月26日法国政府决定法郎贬值约30%、相关法律10月2日通过；汇率与财政数据未逐条核对。',
    ['septFrDec'], ['blum']),
]
