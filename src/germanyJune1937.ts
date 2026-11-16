import type { Category, HistoryEvent } from './data'

// June 1937 in Nazi Germany: rearmament diplomacy, racial exclusion in the
// postal service, a Hamburg rebuilding plan, and the church conflict.
export const germanyJuneSources = {
  junGeJune: { name: 'Wikipedia · June 1937', url: 'https://en.wikipedia.org/wiki/June_1937' },
}

type SourceId = keyof typeof germanyJuneSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `jun37-ge-${id}`, year: 1937, month: 6, country: 'germany', day,
    date: `1937年6月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['germany', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const germanyJuneEvents: HistoryEvent[] = [
  record('blomberg-italy', 2, '外交', '德国战争部长布隆伯格访问意大利', '意大利 · 罗马',
    '德国战争部长布隆伯格开始对意大利的三天访问，讨论两国军事关系。',
    '6月2日，德国战争部长维尔纳·冯·布隆伯格开始对意大利进行三天访问，讨论德意军事合作与欧洲局势。访问发生在德意轴心形成后、西班牙内战持续的背景下。\n\n访问是两国军事协调的节点，不等于当天签署正式同盟条约；具体会谈内容、军事协议与后续行动须据德国国防军与意大利档案。本条只记访问开始。',
    'junGeJune',
    '1937年6月事件汇编记6月2日布隆伯格开始三天访意；会谈记录与协议文本未逐条核对。',
    ['junGeJune'], ['hitler']),
  record('kriegsmarine-maneuvers', 4, '军事', '德国海军在黑尔戈兰岛举行演习', '德国 · 黑尔戈兰岛',
    '德国海军在重新设防的黑尔戈兰岛附近举行首次演习。',
    '6月4日，德国海军在重新设防的黑尔戈兰岛附近举行演习。这是德国公开违反《凡尔赛条约》重新武装该岛后的首次海军演习；由于大量舰艇部署在西班牙，参演舰队规模有限。\n\n演习是德国重整军备与对外示威的节点，不等于德国海军当天已经具备与英国抗衡的实力。参演舰艇、演习科目与英方反应须据海军档案；本条只记演习。',
    'junGeJune',
    '1937年6月事件汇编记6月4日德国海军在黑尔戈兰岛演习、参演舰队规模有限；海军档案与演习记录未逐条核对。',
    ['junGeJune'], ['hitler']),
  record('postal-non-aryans', 8, '政治', '德国邮政部令非雅利安人退休', '德国 · 柏林',
    '德国邮政部下令所有非雅利安人退休，进一步排除犹太人。',
    '6月8日，德国邮政部颁布命令，要求所有非雅利安人退休。这一措施是纳粹政权把犹太人及其他“非雅利安人”逐出公共部门与专业领域的组成部分，与1933年《公务员法》以来的排斥政策相连。\n\n命令是行政性歧视措施，不等于所有非雅利安雇员当天离开岗位；具体执行、豁免与影响须据邮政部档案。本条只记命令与范围。',
    'junGeJune',
    '1937年6月事件汇编记6月8日德国邮政部令非雅利安人退休；命令原文与执行名单未逐条核对。',
    ['junGeJune'], []),
  record('hamburg-plan', 10, '经济', '纳粹德国公布汉堡十五年建设计划', '德国 · 汉堡',
    '德国公布汉堡十五年发展计划，包括摩天大楼与易北河悬索桥。',
    '6月10日，纳粹德国公布汉堡十五年建设计划，内容包括一座六十层摩天大楼和跨越易北河的悬索桥。计划属于纳粹政权对大城市进行纪念性改造与交通建设的一部分。\n\n公布计划不等于工程当天开工或完成；具体设计、预算与战时实施情况须据汉堡市政档案。本条只记计划公布。',
    'junGeJune',
    '1937年6月事件汇编记6月10日汉堡十五年计划、六十层大楼与易北河悬索桥；设计图与预算未逐条核对。',
    ['junGeJune'], ['hitler']),
  record('spanish-patrols-rejoin', 16, '外交', '德国与意大利重新加入西班牙海域巡逻', '西班牙周边海域',
    '德国与意大利在退出后重新加入对西班牙海域的中立巡逻。',
    '6月16日，德国与意大利重新加入对西班牙海域的中立巡逻。此前两国因西班牙共和国攻击德国巡洋舰“莱比锡”号等问题退出巡逻；重新加入是在英法协调下进行的。\n\n重新加入巡逻不等于德意停止援助佛朗哥；两国仍在军事上支持国民党一方。巡逻机制的实际效果有限，具体分工与舰船须据海军档案。本条只记重新加入。',
    'junGeJune',
    '1937年6月事件汇编记6月16日德意重新加入西班牙巡逻；巡逻分工与退出原因见同一资料，未逐条核对。',
    ['junGeJune'], ['hitler']),
  record('bavaria-catholic-schools', 20, '社会', '巴伐利亚关闭所有天主教学校', '德国 · 巴伐利亚',
    '纳粹当局关闭巴伐利亚所有天主教学校，扩大对教会的控制。',
    '6月20日，纳粹当局关闭巴伐利亚所有天主教学校。此举发生在教皇通谕《Mit brennender Sorge》发表后、纳粹政权与天主教会冲突加剧的背景下，是政权削弱教会教育影响的措施。\n\n关闭学校是教育与宗教政策节点，不等于所有教会活动当天停止；具体学校名单、学生去向与教会抗议须据巴伐利亚档案。本条只记关闭。',
    'junGeJune',
    '1937年6月事件汇编记6月20日巴伐利亚关闭所有天主教学校；学校名单与教会抗议记录未逐条核对。',
    ['junGeJune'], ['hitler']),
]
