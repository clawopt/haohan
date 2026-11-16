import type { Category, HistoryEvent } from './data'

// March 1937 in the USSR: the February–March Central Committee plenum closes,
// Stalin frames the case for mass repression, and the Red Army reports on
// German rearmament.
export const ussrMarchSources = {
  marSuStalin: { name: 'J. Stalin · Mastering Bolshevism（1937年3月3日报告与3月5日结论）', url: 'https://dai.mun.ca/PDFs/radical/MasteringBolshevism.pdf' },
  marSuPlenum: { name: '1000 Dokumente · 斯大林在1937年2月23日—3月5日中央全会上的报告', url: 'https://www.1000dokumente.de/Dokumente/I._V._Stalin,_%C3%9Cber_die_M%C3%A4ngel_der_Parteiarbeit_und_die_Ma%C3%9Fnahmen_zur_Liquidierung_der_trotzkistischen_und_sonstigen_Doppelz%C3%BCngler' },
  marSuChronicle: { name: '«Большой террор»: 1937–1938. Краткая хроника', url: 'http://history.org.ua/LiberUA/BTer1937_1938/BTer1937_1938.pdf' },
  marSuPrlib: { name: '俄罗斯总统图书馆 · 1937年3月22日红军情报局报告', url: 'https://www.prlib.ru/en/section/1298149?page=4' },
}

type SourceId = keyof typeof ussrMarchSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `mar37-su-${id}`, year: 1937, month: 3, country: 'ussr', day,
    date: `1937年3月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrMarchEvents: HistoryEvent[] = [
  record('stalin-report', 3, '政治', '斯大林在中央全会作“论党的工作缺点”报告', '苏联 · 莫斯科',
    '斯大林在2—3月中央全会上作报告，要求清除“托洛茨基分子”和“两面派”。',
    '3月3日，斯大林在联共（布）中央全会上作报告《论党的工作缺点和消灭托洛茨基及其他两面派分子的办法》。报告把党内分歧与“间谍”“破坏”联系起来，要求加强党内清洗与警惕。\n\n报告为1937—1938年的大规模镇压提供政治与意识形态依据。报告中的指控不能当作已证实的犯罪事实；全会讨论、决议与后来的抓捕行动须分别理解。',
    'marSuStalin',
    '报告英文版标明1937年3月3日报告、3月5日结论；俄文会议文献与1000 Dokumente用于核对会议性质，报告全文未逐字对照俄文原件。',
    ['marSuPlenum'], ['stalin']),
  record('plenum-closes', 5, '政治', '联共（布）中央全会闭幕', '苏联 · 莫斯科',
    '持续十一天的中央全会闭幕，会议把肃清“托洛茨基分子”列为中心议题。',
    '3月5日，联共（布）中央全会闭幕。全会于2月23日开幕，原定2月19日开会，因政治局委员奥尔忠尼启泽去世推迟。会议讨论党的工作、布哈林与李可夫问题，并把肃清“托洛茨基分子”和“两面派”作为中心议题之一。\n\n全会闭幕标志着大规模肃反的政治准备进入新阶段，但具体抓捕、审判与名单形成在此后数月才全面展开。奥尔忠尼启泽的死因在官方公告与后来的研究中有不同说法，本条不展开。',
    'marSuPlenum',
    '1000 Dokumente与俄文编年史记2月23日—3月5日全会；奥尔忠尼启泽去世与开幕推迟见相关研究，死因存在争议。',
    ['marSuChronicle'], ['stalin']),
  record('red-army-report', 22, '军事', '红军情报局报告德国新建部队情况', '苏联 · 莫斯科',
    '红军情报局局长乌里茨基向国防人民委员伏罗希洛夫报告德国新编军事单位。',
    '3月22日，苏联红军情报局局长谢苗·乌里茨基向国防人民委员克利门特·伏罗希洛夫提交报告，汇报德国新编军事单位的情况。报告属于苏联对德国重整军备的情报评估，保存在俄罗斯国家军事档案馆。\n\n这份报告是苏联军方掌握德国扩军动态的证据之一，不等于苏联当天已经决定某项军事对策。报告的具体内容、来源与准确性须据档案原文；本条只记文件日期与主题。',
    'marSuPrlib',
    '俄罗斯总统图书馆“1937年”档案展览页记3月22日乌里茨基报告与馆藏来源；报告全文与德军编制数据未逐页核对。',
    ['marSuChronicle'], ['stalin']),
]
