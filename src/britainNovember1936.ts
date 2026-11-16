import type { Category, HistoryEvent } from './data'

// November 1936 in Britain: the BBC television service, Churchill's rearmament
// speech, the abdication crisis reaching Baldwin, and the Crystal Palace fire.
export const britainNovember1936Sources = {
  nov36BrDec: { name: 'Wikipedia · November 1936', url: 'https://en.wikipedia.org/wiki/November_1936' },
  nov36BrTv: { name: 'Wikipedia · BBC Television Service', url: 'https://en.wikipedia.org/wiki/BBC_Television_Service' },
  nov36BrCrystal: { name: 'Wikipedia · Crystal Palace', url: 'https://en.wikipedia.org/wiki/Crystal_Palace' },
  nov36BrAbdication: { name: 'Wikipedia · Abdication of Edward VIII', url: 'https://en.wikipedia.org/wiki/Abdication_of_Edward_VIII' },
}

type SourceId = keyof typeof britainNovember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `nov36-br-${id}`, year: 1936, month: 11, country: 'britain', day,
    date: `1936年11月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainNovember1936Events: HistoryEvent[] = [
  record('bbc-tv-launch', 2, '文化', 'BBC电视服务开播', '英国 · 伦敦',
    'BBC在伦敦亚历山大宫开始播出世界上第一个定期高清晰度电视服务。',
    '11月2日，英国广播公司（BBC）在伦敦北部的亚历山大宫开始播出电视节目，这是世界上第一个定期的高清晰度电视服务。初期每天播出有限时段，覆盖伦敦地区。\n\n开播是广播与大众文化的重要节点，不等于电视当天进入普通家庭；电视机数量、节目内容与覆盖范围须据BBC档案。本条只记开播。',
    'nov36BrTv',
    'BBC电视服务条目与1936年11月事件汇编记11月2日亚历山大宫电视服务开播；节目表、覆盖范围与收视设备未逐条核对。',
    ['nov36BrDec'], []),
  record('churchill-rearmament', 12, '政治', '丘吉尔在议会批评政府对德重整军备反应迟缓', '英国 · 伦敦',
    '丘吉尔在下议院警告德国重整军备的危险，批评政府拖延。',
    '11月12日，温斯顿·丘吉尔在英国下议院发表演说，批评鲍德温政府对德国重整军备这一“不受欢迎的事实”反应迟缓，警告英国正进入“后果的时期”。演说延续了他在1930年代对空军与防务不足的持续警告。\n\n演说是对政府防务政策的议会批评，不等于英国当天改变军备政策；具体军费、内阁讨论与后续重整军备计划须据议会档案。本条只记演说。',
    'nov36BrDec',
    '1936年11月事件汇编记11月12日丘吉尔在下议院批评政府对德重整军备反应迟缓；演说全文与议会辩论未逐条核对。',
    ['nov36BrDec'], ['churchill', 'baldwin']),
  record('edward-baldwin', 16, '政治', '爱德华八世向鲍德温表示要与辛普森结婚', '英国 · 伦敦',
    '爱德华八世召见首相鲍德温，表示希望与沃利斯·辛普森结婚。',
    '11月16日，英国国王爱德华八世召见首相斯坦利·鲍德温，表示自己希望与沃利斯·辛普森结婚。鲍德温答复说，英国公众不会接受辛普森作为王后。退位危机由此进入政府层面的直接交涉。\n\n这次会面是退位危机的关键节点，不等于国王当天决定退位；此后的宪法磋商、报界解禁与退位程序在12月完成。具体谈话记录与内阁讨论须据王室与内阁档案。本条只记会面与表态。',
    'nov36BrAbdication',
    '退位危机资料与1936年11月事件汇编记11月16日爱德华八世召见鲍德温、表示要与辛普森结婚；谈话记录与内阁档案未逐条核对。',
    ['nov36BrDec'], ['baldwin']),
  record('crystal-palace-fire', 30, '社会', '伦敦水晶宫发生大火', '英国 · 伦敦',
    '伦敦南部的“水晶宫”发生大火，主体建筑严重损毁。',
    '11月30日晚，伦敦南部锡德纳姆的“水晶宫”发生大火。这座1851年万国工业博览会建造的玻璃与铁结构建筑火势迅速蔓延，主体建筑严重损毁，仅两座水塔幸存。火灾成为伦敦城市记忆中的重大事件。\n\n水晶宫自1936年起已由私人企业经营，火灾原因与损失须据消防与保险档案；本条只记火灾与建筑损毁。',
    'nov36BrCrystal',
    '水晶宫条目与1936年11月事件汇编记11月30日大火、主体建筑损毁；火灾原因、损失与后续处置未逐条核对。',
    ['nov36BrDec'], []),
]
