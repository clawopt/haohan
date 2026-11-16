import type { Category, HistoryEvent } from './data'

// April 1937 in Britain: rearmament, the Spanish shipping crisis, the first
// jet engine test, and the end of the Baldwin era.
export const britainAprilSources = {
  aprBrApril: { name: 'Wikipedia · April 1937', url: 'https://en.wikipedia.org/wiki/April_1937' },
  aprBrIndia: { name: 'Wikipedia · Government of India Act 1935', url: 'https://en.wikipedia.org/wiki/Government_of_India_Act_1935' },
  aprBrWhittle: { name: 'Wikipedia · Frank Whittle', url: 'https://en.wikipedia.org/wiki/Frank_Whittle' },
  aprBrArk: { name: 'Wikipedia · HMS Ark Royal (91)', url: 'https://en.wikipedia.org/wiki/HMS_Ark_Royal_(91)' },
  aprBrBudget: { name: 'Wikipedia · Budget of the United Kingdom', url: 'https://en.wikipedia.org/wiki/Budget_of_the_United_Kingdom' },
}

type SourceId = keyof typeof britainAprilSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `apr37-br-${id}`, year: 1937, month: 4, country: 'britain', day,
    date: `1937年4月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['britain', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const britainAprilEvents: HistoryEvent[] = [
  record('india-act', 1, '政治', '《1935年印度政府法》生效', '英属印度',
    '英国在印度推行省自治与新宪制安排，但未给予完全独立。',
    '4月1日，《1935年印度政府法》正式生效。该法在英属印度实行省自治，扩大印度人参与的立法机构，并计划建立全印联邦。\n\n法案是英国殖民宪制改革的一步，不等于印度已经获得独立；全印联邦部分因土邦与国大党的抵制未能按计划实施。具体选举、省内阁与联邦谈判须据印度宪政史。',
    'aprBrIndia',
    '印度政府法条目记4月1日生效与省自治安排；法案全文与印度各党反应未逐条核对。',
    ['aprBrApril'], []),
  record('baldwin-retirement', 10, '政治', '鲍德温宣布即将退休', '英国 · 伦敦',
    '英国首相斯坦利·鲍德温宣布将很快退休，由张伯伦接任。',
    '4月10日，英国首相斯坦利·鲍德温宣布将很快退休。鲍德温在1935年大选后领导联合政府，处理了爱德华八世退位危机；他退休后由财政大臣内维尔·张伯伦接任首相，张伯伦于5月28日就职。\n\n宣布退休是政治交接的开始，不等于鲍德温当天已经卸任；具体辞职与继任日期须分别记录。本条只记宣布。',
    'aprBrApril',
    '1937年4月事件汇编引《芝加哥论坛报》4月11日报道，记鲍德温宣布退休；辞职与张伯伦就职日期见英国政治年表。',
    ['aprBrApril'], []),
  record('spanish-shipping-order', 11, '军事', '英国内阁决定保护西班牙北部英国航运', '英国 · 伦敦',
    '内阁召开星期日会议，授权皇家海军对干扰英国商船的西班牙舰船开火。',
    '4月11日，英国内阁举行罕见的星期日会议，决定对西班牙北部三海里以外的英国航运提供“最充分的保护”。这一决定被理解为授权皇家海军对干扰英国货船的西班牙舰船开火。\n\n决定发生在西班牙内战外溢、英国商船屡遭袭击的背景下，是英国从“不干涉”向有限护航的调整。授权不等于当天已经发生交火；具体护航海域、舰船与交战规则须据海军部档案。',
    'aprBrApril',
    '1937年4月事件汇编引《芝加哥论坛报》4月12日报道，记4月11日内阁决定与开火授权；内阁会议记录与海军命令未逐条核对。',
    ['aprBrApril'], []),
  record('whittle-jet-test', 12, '文化', '弗兰克·惠特尔团队成功测试喷气发动机', '英国 · 拉格比',
    '惠特尔团队测试喷气发动机原型，为英国喷气航空奠定基础。',
    '4月12日，英国工程师弗兰克·惠特尔及其团队成功测试了一台喷气发动机原型。惠特尔自1930年代起研究涡轮喷气推进，测试成功使英国成为最早开展喷气发动机实验的国家之一。\n\n地面测试成功是技术节点，不等于喷气飞机当天已经试飞或服役；后续的飞行测试、经费与机型发展须据航空史资料。本条只记测试成功。',
    'aprBrWhittle',
    '惠特尔条目与1937年4月事件汇编记4月12日测试成功；测试数据与发动机型号未逐条核对。',
    ['aprBrApril'], []),
  record('ark-royal-launch', 13, '军事', '“皇家方舟”号航空母舰下水', '英国 · 伯肯黑德',
    '英国皇家海军“皇家方舟”号航空母舰下水，成为二战前英国海军的重要舰只。',
    '4月13日，英国皇家海军“皇家方舟”号航空母舰在伯肯黑德下水。该舰采用装甲飞行甲板与机库设计，后来在第二次世界大战中参加多次作战，1941年被鱼雷击沉。\n\n下水是舰体建造节点，不等于当天已经服役；舾装、海试与服役日期须分别记录。本条只记下水。',
    'aprBrArk',
    '“皇家方舟”号条目记4月13日下水与后来服役经历；建造合同与下水仪式记录未逐条核对。',
    ['aprBrApril'], []),
  record('eden-poison-gas', 19, '外交', '艾登称将调查德国向西班牙运送毒气', '英国 · 伦敦 · 下议院',
    '外交大臣艾登在下院表示，政府将调查有关德国向西班牙运送毒气的报道。',
    '4月19日，英国外交大臣安东尼·艾登在下议院表示，政府将调查有关德国向西班牙运送毒气的报道。报道涉及西班牙内战中使用化学武器的指控，英国政府承诺核查相关情报。\n\n“将调查”是议会承诺，不等于报道已经被证实或英国当天已经采取制裁。调查结果、情报来源与后续外交行动须据英国外交部档案；本条只记议会表态。',
    'aprBrApril',
    '1937年4月事件汇编记4月19日艾登在下院的表态；议会辩论原文与外交部调查文件未逐条核对。',
    ['aprBrApril'], []),
  record('budget-day', 20, '经济', '张伯伦提出1937年预算', '英国 · 伦敦 · 下议院',
    '财政大臣张伯伦提高所得税与营业税，预计实现小额盈余。',
    '4月20日，英国财政大臣内维尔·张伯伦在下议院提出1937年预算。他提高所得税与营业税，以支付重整军备与社会支出，并预计实现约28.2万英镑的小额盈余。\n\n预算案是财政政策节点，不等于税率当天已经生效或盈余已经实现；预算辩论、财政法案与年度执行结果须分别理解。具体税率与支出项目见预算文件。',
    'aprBrBudget',
    '1937年4月事件汇编记4月20日预算日、增税与约28.2万英镑预计盈余；预算全文与财政法案未逐条核对。',
    ['aprBrApril'], []),
  record('belgium-locarno', 24, '外交', '英法允许比利时退出洛迦诺安全义务', '英国 · 伦敦 / 法国 · 巴黎',
    '英国与法国同意比利时解除《洛迦诺条约》中的相互安全义务。',
    '4月24日，英国与法国允许比利时退出《洛迦诺条约》所规定的安全义务。比利时此前寻求恢复中立地位，避免被卷入法德冲突；英法同意解除对比利时的军事义务，比利时则重申独立与中立。\n\n这一安排改变了1925年洛迦诺体系下的西欧安全结构，不等于比利时已经获得可靠的安全保障。具体换文、条约文本与后续影响须据外交档案；本条只记英法同意这一外交决定。',
    'aprBrApril',
    '1937年4月事件汇编记4月24日英法允许比利时退出洛迦诺安全义务；换文与条约文本未逐条核对。',
    ['aprBrApril'], []),
]
