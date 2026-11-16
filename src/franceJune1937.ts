import type { Category, HistoryEvent } from './data'

// June 1937 in France: the Windsor wedding on French soil, La Grande Illusion,
// and the fall of the Blum government.
export const franceJuneSources = {
  junFrJune: { name: 'Wikipedia · June 1937', url: 'https://en.wikipedia.org/wiki/June_1937' },
  junFrWindsor: { name: 'Wikipedia · Edward VIII', url: 'https://en.wikipedia.org/wiki/Edward_VIII' },
  junFrGrand: { name: 'Wikipedia · La Grande Illusion', url: 'https://en.wikipedia.org/wiki/La_Grande_Illusion' },
  junFrDoumergue: { name: 'Wikipedia · Gaston Doumergue', url: 'https://en.wikipedia.org/wiki/Gaston_Doumergue' },
  junFrBlum: { name: 'Wikipedia · Léon Blum', url: 'https://en.wikipedia.org/wiki/L%C3%A9on_Blum' },
  junFrChautemps: { name: 'Wikipedia · Camille Chautemps', url: 'https://en.wikipedia.org/wiki/Camille_Chautemps' },
}

type SourceId = keyof typeof franceJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jun37-fr-${id}`, year: 1937, month: 6, country: 'france', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceJuneEvents: HistoryEvent[] = [
  record('windsor-wedding-france', 3, '社会', '温莎公爵婚礼在法国康代城堡举行', '法国 · 蒙斯 · 康代城堡',
    '英国退位国王爱德华八世与沃利斯·辛普森在法国举行婚礼。',
    '6月3日，英国退位国王爱德华八世与沃利斯·辛普森在法国蒙斯的康代城堡举行婚礼。婚礼在法国私人宅邸举行，规模很小，英国王室成员未出席；法国地方当局与媒体对婚礼进行了安排与报道。\n\n婚礼地点在法国，不等于法国政府赋予这场婚姻外交或王室地位；婚礼是英国退位危机的私人后续。具体宾客、法国警方安排与媒体报道须据当地档案；本条只记婚礼。',
    'junFrWindsor',
    '爱德华八世条目与1937年6月事件汇编记6月3日康代城堡婚礼；法国地方档案与婚礼宾客未逐条核对。',
    ['junFrJune'], []),
  record('grand-illusion', 8, '文化', '《大幻影》在法国上映', '法国',
    '让·雷诺阿执导的《大幻影》上映，以一战战俘营探讨阶级与战争。',
    '6月8日，让·雷诺阿执导的《大幻影》（La Grande Illusion）在法国上映。影片以第一次世界大战期间的德国战俘营为背景，通过法国军官、贵族、犹太军官与德国军官的关系，探讨阶级、民族与战争的意义。\n\n影片上映是法国电影史上的重要节点，不等于其反战信息当天被所有观众接受；影片在德国被禁，具体票房与评论须据电影档案。本条只记上映。',
    'junFrGrand',
    '《大幻影》条目与1937年6月事件汇编记6月8日法国上映；影片原版、票房与审查记录未逐条核对。',
    ['junFrJune'], []),
  record('doumergue-death', 18, '政治', '前总统杜梅格去世', '法国 · 奥德省',
    '法国前总统加斯东·杜梅格去世，享年73岁。',
    '6月18日，法国前总统加斯东·杜梅格去世，享年73岁。他曾于1924—1931年任法国总统，1934年2月危机后出任总理并组建国民联合政府。\n\n杜梅格的去世是第三共和国政治人物的历史节点，不等于其政治路线当天终结；葬礼与政治评价须据当时报道。本条只记去世。',
    'junFrDoumergue',
    '杜梅格条目与1937年6月事件汇编记6月18日去世；葬礼与政治评价未逐条核对。',
    ['junFrJune'], []),
  record('blum-resigns', 21, '政治', '布鲁姆因参议院拒绝特别权力辞职', '法国 · 巴黎',
    '法国参议院拒绝授予布鲁姆政府特别财政权力，布鲁姆辞职。',
    '6月21日，法国总理莱昂·布鲁姆因参议院拒绝授予政府处理财政危机的特别权力而辞职。人民阵线政府面对财政赤字、资本外流与重整军备压力，参议院的否决使布鲁姆无法继续执政。\n\n布鲁姆辞职是人民阵线由盛转衰的关键节点，不等于人民阵线当天解体；肖当随后组阁，社会党与激进党继续合作但内部矛盾加深。具体参议院表决与财政方案须据议会记录。',
    'junFrBlum',
    '布鲁姆条目与1937年6月事件汇编记6月21日因参议院拒绝特别权力辞职；参议院表决记录与财政方案未逐条核对。',
    ['junFrJune'], ['blum']),
  record('chautemps-pm', 22, '政治', '卡米耶·肖当出任法国总理', '法国 · 巴黎',
    '布鲁姆辞职后，卡米耶·肖当接任总理并组建新政府。',
    '6月22日，卡米耶·肖当接替布鲁姆出任法国总理，第三次领导政府。新政府继续由人民阵线各党组成，但面临财政危机、西班牙内战与劳工冲突等压力。\n\n肖当就任是人民阵线内部权力交接，不等于政策方向完全改变；其政府后来在1938年3月辞职。具体内阁组成、财政政策与议会支持须据法国议会档案。本条只记就任。',
    'junFrChautemps',
    '肖当条目与1937年6月事件汇编记6月22日就任总理；内阁名单与政策文件未逐条核对。',
    ['junFrJune'], []),
]
