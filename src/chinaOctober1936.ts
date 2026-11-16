import type { Category, HistoryEvent } from './data'

// October 1936 in China: the three Red Armies meet, Lu Xun dies in Shanghai,
// and the Fourth Front Army crosses the Yellow River at Hubokou.
export const chinaOctober1936Sources = {
  oct36CnShih: { name: '共产党员网 · 百年瞬间：红军三大主力胜利会师', url: 'https://www.12371.cn/2021/10/09/VIDE1633740241787329.shtml' },
  oct36CnDsw: { name: '中共中央党史和文献研究院 · 党史百年·天天读：10月9日', url: 'https://www.dswxyjy.org.cn/GB/434461/434471/434551/index.html' },
  oct36CnLuXun: { name: '人民网 · 揭秘鲁迅后事：灵桌上放着笔纸和墨水', url: 'http://culture.people.com.cn/n1/2016/1103/c22219-28831135.html' },
  oct36CnFuneral: { name: '上海市民政局 · 鲁迅先生丧仪一幕', url: 'https://mzj.sh.gov.cn/lnb-wsws/20221027/43b6ad55da214f6e95a41787ee55cd40.html' },
  oct36CnRiver: { name: '靖远县人民政府 · 虎豹口渡河', url: 'https://www.jingyuan.gov.cn/jyhg/gmyz/art/2023/art_2b58ec5cee9647c984b2ba880ee07415.html' },
}

type SourceId = keyof typeof chinaOctober1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], factions: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct36-cn-${id}`, year: 1936, month: 10, country: 'china', day,
    date: `1936年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['china', ...actors, ...factions])], factions, source, topicIds: [],
    evidenceNote: '日期指本条所记活动的发生日；所引资料未给出的时刻、对话与结果不作补写。',
    ...extra,
  }
}

export const chinaOctober1936Events: HistoryEvent[] = [
  record('huining-meeting', 9, '军事', '红一、红四方面军在会宁会师', '甘肃 · 会宁',
    '红军总部和红四方面军总指挥部到达会宁，与红一方面军会师。',
    '10月9日，朱德、张国焘、徐向前、陈昌浩率红军总部和红四方面军总指挥部到达甘肃会宁，与红一方面军会师。此时红二方面军仍在长征途中，三大主力会合的大势已经形成。\n\n会宁会师是红军三大主力会师的第一步，不等于三大主力当天全部会合；红二方面军于10月22日在将台堡与红一方面军会师。具体部队番号、行军路线与会师仪式须据战史档案。本条只记会宁会师。',
    ['zhu'], ['cpc-central'], 'oct36CnShih', {
      references: ['oct36CnDsw'],
      evidenceNote: '共产党员网与中央党史和文献研究院资料记10月9日红军总部和红四方面军总指挥部到会宁、与红一方面军会师；部队番号与行军细节未逐条核对。',
    }),
  record('luxun-dies', 19, '文化', '鲁迅在上海逝世', '上海',
    '文学家、思想家鲁迅在上海病逝，年55岁。',
    '10月19日清晨5时25分，鲁迅在上海大陆新村寓所病逝，年55岁。当天下午遗体移至万国殡仪馆，20日至21日各界民众前往瞻仰遗容，22日安葬于上海万国公墓。\n\n鲁迅逝世是1936年中国文化界的重大事件，葬礼成为各界救亡力量的公开表达。具体病情、临终情形与治丧安排须据日记、书信与报刊；本条只记逝世。',
    [], [], 'oct36CnLuXun', {
      evidenceNote: '人民网与上海市民政局资料记10月19日鲁迅在上海逝世、遗体移至万国殡仪馆；病情与临终记录未逐条核对。',
    }),
  record('jiangtaibao-meeting', 22, '军事', '红一、红二方面军在将台堡会师', '甘肃 · 隆德 · 将台堡（今宁夏西吉）',
    '红二方面军到达将台堡，与红一方面军会师，红军三大主力胜利会师。',
    '10月22日，红二方面军到达甘肃隆德将台堡（今属宁夏西吉），与红一方面军会师。至此，红一、红二、红四方面军三大主力全部会合，红军长征胜利结束。\n\n将台堡会师是三大主力会师的完成节点，不等于长征中的所有部队与人员当天均已集中；后续整编、作战与西路军行动在此后展开。具体部队、路线与会师经过须据战史档案。本条只记将台堡会师。',
    [], ['cpc-central'], 'oct36CnDsw', {
      references: ['oct36CnShih'],
      evidenceNote: '中央党史和文献研究院与共产党员网资料记10月22日红二方面军在将台堡与红一方面军会师、三大主力会师完成；部队与路线细节未逐条核对。',
    }),
  record('luxun-funeral', 22, '社会', '上海各界为鲁迅送葬', '上海',
    '鲁迅葬仪在上海举行，各界民众送葬至万国公墓。',
    '10月22日下午，鲁迅葬仪在上海举行。送葬队伍从胶州路万国殡仪馆出发，前往西郊万国公墓，沿途民众肃立致哀。蔡元培主持追悼会，沈钧儒致悼词，宋庆龄等发表演讲；灵柩上覆盖“民族魂”旗帜。\n\n葬仪是鲁迅逝世的公共环节，也显示1936年上海文化界与救亡运动的广泛动员。具体送葬人数、路线与演讲内容在不同记述中略有差异；本条只记葬仪与安葬。',
    [], [], 'oct36CnFuneral', {
      references: ['oct36CnLuXun'],
      evidenceNote: '上海市民政局与人民网资料记10月22日鲁迅葬仪、送葬至万国公墓及追悼会；送葬人数与路线细节未逐条核对。',
    }),
  record('hubokou-crossing', 24, '军事', '红四方面军强渡黄河', '甘肃 · 靖远 · 虎豹口',
    '红四方面军红三十军在靖远虎豹口强渡黄河，开始执行宁夏战役计划。',
    '10月24日晚，红四方面军红三十军在甘肃靖远虎豹口强渡黄河。政委李先念等指挥部队以木船和筏子渡河，突破对岸守军防线。随后红九军和红四方面军总指挥部等部陆续渡河，共一万七千余人进入河西。\n\n渡河是宁夏战役计划的组成部分，也拉开了红军在河西走廊作战的序幕；西路军军政委员会在11月成立，渡河部队此后称西路军。具体渡河时间、兵力与会战经过须据战史档案。本条只记虎豹口强渡。',
    [], ['cpc-central'], 'oct36CnRiver', {
      evidenceNote: '靖远县人民政府与甘肃省红色纪念馆资料记10月24日晚红三十军在虎豹口强渡黄河、后续一万七千余人渡河；具体战斗细节与兵力数字未逐条核对。',
    }),
]
