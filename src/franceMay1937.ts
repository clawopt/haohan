import type { Category, HistoryEvent } from './data'

// May 1937 in France: the Paris world's fair opens, Toulouse erupts in
// political violence, and the Duke of Windsor prepares to marry in France.
export const franceMaySources = {
  mayFrMay: { name: 'Wikipedia · May 1937', url: 'https://en.wikipedia.org/wiki/May_1937' },
  mayFrExpo: { name: '国际展览局 · 1937年巴黎世界博览会', url: 'https://support.bie-paris.org/site/en/1937-paris' },
  mayFrWindsor: { name: 'Wikipedia · Edward VIII', url: 'https://en.wikipedia.org/wiki/Edward_VIII' },
}

type SourceId = keyof typeof franceMaySources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `may37-fr-${id}`, year: 1937, month: 5, country: 'france', day,
    date: `1937年5月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceMayEvents: HistoryEvent[] = [
  record('windsor-engagement', 4, '社会', '温莎公爵与沃利斯在法国重逢并订婚', '法国',
    '退位后的爱德华八世与沃利斯·辛普森在法国重逢，宣布订婚。',
    '5月4日，退位后的英国前国王爱德华八世（温莎公爵）与沃利斯·辛普森在法国重逢，并宣布订婚。两人分别六个月后见面，婚礼预定于6月3日在法国蒙斯的康代城堡举行。\n\n订婚是王室社会新闻与英国退位危机的后续，不等于英国政府或王室已经接纳这段婚姻；爱德华退位后失去王位，婚礼也未获英国王室正式承认。具体婚礼安排与家族反应须据当时报道与王室档案。',
    'mayFrWindsor',
    '1937年5月事件汇编记5月4日两人在法国重逢并订婚、婚礼预定6月3日；爱德华八世条目用于核对退位背景，婚礼细节未逐条核对。',
    ['mayFrMay'], []),
  record('toulouse-riot', 9, '政治', '图卢兹政治冲突引发骚乱', '法国 · 图卢兹',
    '右翼游行与左翼对抗，图卢兹骚乱造成五十余人受伤。',
    '5月9日，法国图卢兹发生政治骚乱。右翼团体在圣女贞德雕像前游行，高呼“法国人的法国”，攻击人民阵线政府“听命于莫斯科”；左翼团体与之对抗，冲突造成五十余人受伤。\n\n图卢兹骚乱是人民阵线时期政治极化的表现，与克利希枪击等事件共同加剧社会紧张。伤者数字为当时报道估计，具体责任与警方处置须据地方档案；本条只记骚乱与伤者规模。',
    'mayFrMay',
    '1937年5月事件汇编记5月9日图卢兹右翼游行与骚乱、50余人受伤；伤者数字为估计值，警方记录未逐条核对。',
    ['mayFrMay'], ['blum']),
  record('paris-expo', 25, '文化', '巴黎国际艺术与技术博览会开幕', '法国 · 巴黎',
    '1937年巴黎世界博览会向公众开放，主题为艺术与技术。',
    '5月25日，1937年巴黎国际艺术与技术博览会（Exposition Internationale des Arts et Techniques）向公众开放。博览会于5月24日由法国总统勒布伦宣布开幕，展期持续到11月25日；德国与苏联展馆在开幕时已基本完工，许多其他国家展馆仍在收尾。\n\n博览会是法国人民阵线时期规模最大的国际文化活动，也成为各国展示工业、艺术与意识形态的舞台。参观人数、展馆评价与财政结果须据博览会档案；本条只记开放。',
    'mayFrExpo',
    '国际展览局资料记5月25日对公众开放、5月24日总统宣布开幕与11月25日闭幕；展馆完工情况见同一资料，未逐条核对。',
    ['mayFrMay'], ['blum']),
]
