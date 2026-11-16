import type { Category, HistoryEvent } from './data'

// October 1936 in Britain: Cable Street, the Jarrow March, early BBC
// television, the press blackout, and Wallis Simpson's divorce.
export const britainOctober1936Sources = {
  oct36BrDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36BrCable: { name: 'Wikipedia · Battle of Cable Street', url: 'https://en.wikipedia.org/wiki/Battle_of_Cable_Street' },
  oct36BrJarrow: { name: 'Wikipedia · Jarrow March', url: 'https://en.wikipedia.org/wiki/Jarrow_March' },
  oct36BrTV: { name: 'Wikipedia · Picture Page', url: 'https://en.wikipedia.org/wiki/Picture_Page' },
  oct36BrAbdication: { name: 'Wikipedia · Abdication of Edward VIII', url: 'https://en.wikipedia.org/wiki/Abdication_of_Edward_VIII' },
}

type SourceId = keyof typeof britainOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [], extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct36-br-${id}`, year: 1936, month: 10, country: 'britain', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const britainOctober1936Events: HistoryEvent[] = [
  record('cable-street', 4, '社会', '伦敦东区“卡布尔街之战”', '英国 · 伦敦',
    '反法西斯群众在伦敦东区设置路障，阻止法西斯游行。',
    '10月4日，奥斯瓦尔德·莫斯利领导的英国法西斯联盟计划穿行伦敦东区，遭到反法西斯群众、犹太居民与工党支持者的阻拦。示威者在卡布尔街设置路障，与警察和法西斯成员发生冲突，游行最终被阻止。\n\n卡布尔街之战是1930年代英国反法西斯运动的重要事件，也暴露了东区社会与治安的紧张；具体人数、伤亡与逮捕情况须据警方与报纸档案。本条只记冲突与游行被阻。',
    'oct36BrCable',
    '卡布尔街之战条目与1936年10月事件汇编记10月4日反法西斯群众阻止法西斯游行；人数、伤亡与逮捕记录未逐条核对。',
    ['oct36BrDec'], []),
  record('jarrow-march', 5, '社会', '贾罗远征队向伦敦进发', '英国 · 贾罗 → 伦敦',
    '贾罗失业工人开始徒步前往伦敦，递交请愿书。',
    '10月5日，约200名贾罗失业工人从英格兰东北部出发，徒步前往伦敦，携带约11,572人签名的请愿书，要求政府关注当地高达68%的失业率。远征队于10月31日抵达伦敦，但政府未正式接见其代表。\n\n贾罗远征是1930年代英国失业与贫困问题的象征性行动，不等于政府当天改变失业政策；具体路线、沿途接待与请愿结果须据地方与议会档案。本条采用10月5日至31日的行程范围。',
    'oct36BrJarrow',
    '贾罗远征条目与1936年10月事件汇编记10月5日出发、10月31日抵达伦敦、请愿书签名数；沿途细节与政府回应未逐条核对。',
    ['oct36BrDec'], [], { precision: 'range', endDay: 31, date: '1936年10月5日—31日' }),
  record('picture-page', 8, '文化', 'BBC电视节目《Picture Page》首播', '英国 · 伦敦',
    'BBC电视节目《Picture Page》首次播出，成为早期电视杂志节目。',
    '10月8日，BBC电视节目《Picture Page》首次播出。节目以演播室访谈与短片形式介绍人物与事件，是英国电视草创时期的重要杂志型节目。BBC电视服务在11月2日于亚历山大宫正式开播。\n\n首播是英国电视史节点，不等于电视当天进入普通家庭；节目内容、制作条件与观众规模须据BBC档案。本条只记首播。',
    'oct36BrTV',
    '《Picture Page》条目与1936年10月事件汇编记10月8日首播；节目内容与BBC档案未逐条核对。',
    ['oct36BrDec'], []),
  record('press-blackout', 16, '政治', '比弗布鲁克承诺协助封锁爱德华恋情报道', '英国 · 伦敦',
    '报业巨头比弗布鲁克拜访爱德华八世，承诺协助维持媒体报道封锁。',
    '10月16日，报业巨头比弗布鲁克勋爵拜访爱德华八世，表示愿意协助对国王与沃利斯·辛普森的恋情实行自愿性的媒体封锁。英国报界在此期间基本保持沉默，而美国与法国报刊已公开报道。\n\n媒体封锁是退位危机中的舆论安排，不等于所有报纸完全停止议论；具体约定、报社反应与解禁过程须据报刊与王室档案。本条只记拜访与承诺。',
    'oct36BrAbdication',
    '退位危机资料与1936年10月事件汇编记10月16日比弗布鲁克拜访爱德华八世、协助媒体封锁；具体约定与报刊反应未逐条核对。',
    ['oct36BrDec'], []),
  record('simpson-divorce', 27, '社会', '沃利斯·辛普森离婚案获暂准判决', '英国 · 伦敦',
    '沃利斯·辛普森与欧内斯特·辛普森的离婚案获暂准判决。',
    '10月27日，沃利斯·辛普森与丈夫欧内斯特·辛普森的离婚案在法院获暂准判决（decree nisi）。案件无人抗辩，但按英国法律须经过一定期限后才能转为最终判决。\n\n离婚判决是退位危机的法律前提之一，不等于辛普森当天恢复自由身，也不等于爱德华八世已决定退位；最终判决与退位程序在1937年完成。具体庭审、判决书与后续程序须据法院档案。本条只记暂准判决。',
    'oct36BrAbdication',
    '退位危机资料与1936年10月事件汇编记10月27日辛普森离婚案获暂准判决；庭审记录与判决书未逐条核对。',
    ['oct36BrDec'], []),
]
