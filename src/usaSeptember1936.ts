import type { Category, HistoryEvent } from './data'

// September 1936 in the United States: a drought fireside chat, the Yankees
// clinching the pennant, Fred Perry at Forest Hills, and a Cape Hatteras hurricane.
export const usaSeptember1936Sources = {
  septUsDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septUsTennis: { name: 'Wikipedia · 1936 U.S. National Championships – Men\'s Singles', url: 'https://en.wikipedia.org/wiki/1936_U.S._National_Championships_%E2%80%93_Men%27s_Singles' },
  septUsHurricane: { name: 'Wikipedia · 1936 Atlantic hurricane season', url: 'https://en.wikipedia.org/wiki/1936_Atlantic_hurricane_season' },
}

type SourceId = keyof typeof usaSeptember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `sep36-us-${id}`, year: 1936, month: 9, country: 'usa', day,
    date: `1936年9月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaSeptember1936Events: HistoryEvent[] = [
  record('fireside-chat-drought', 6, '政治', '罗斯福就干旱发表炉边谈话', '美国 · 华盛顿',
    '罗斯福通过炉边谈话说明联邦政府应对干旱的措施。',
    '9月6日，罗斯福总统就持续干旱发表炉边谈话，说明联邦政府在救济、农业与水利方面的应对措施。此前9月3日，罗斯福在艾奥瓦州得梅因与包括共和党候选人兰登在内的六位州长会面，讨论旱情。\n\n炉边谈话是罗斯福直接向公众沟通政策的重要方式，不等于旱情当天缓解；具体援助计划、受灾范围与各州执行须据联邦档案。本条只记谈话。',
    'septUsDec',
    '1936年9月事件汇编记9月3日罗斯福与六位州长讨论旱情、9月6日就干旱发表炉边谈话；谈话全文与援助细节未逐条核对。',
    ['septUsDec'], ['roosevelt']),
  record('yankees-pennant', 9, '文化', '纽约洋基队夺得美联冠军', '美国 · 纽约',
    '洋基队横扫克利夫兰印第安人双赛，提前锁定美国联盟冠军。',
    '9月9日，纽约洋基队在双赛中分别以11比3、12比9击败克利夫兰印第安人，提前锁定1936年美国联盟冠军。洋基队随后在10月世界大赛中以4比2击败纽约巨人队夺冠。\n\n夺得美联冠军是1936年棒球赛季的重要节点，不等于世界大赛冠军当天确定；季后赛与系列赛在此后展开。具体战绩、球员数据与观众人数须据棒球档案。本条只记锁定美联冠军。',
    'septUsDec',
    '1936年9月事件汇编与1936年世界大赛资料记9月9日洋基队双赛横扫印第安人、锁定美联冠军；战绩与球员数据未逐条核对。',
    ['septUsDec'], []),
  record('fred-perry', 12, '文化', '弗雷德·佩里赢得美国全国网球锦标赛', '美国 · 纽约 · 森林山',
    '英国选手弗雷德·佩里击败唐·巴奇，成为首位赢得该赛事男单冠军的外国选手。',
    '9月12日，英国选手弗雷德·佩里在美国全国网球锦标赛男单决赛中击败美国选手唐·巴奇，成为首位赢得该赛事男单冠军的外国选手。佩里在此前已多次获得温布尔登冠军。\n\n夺冠是1930年代网球史的重要节点，也反映美国赛事国际化程度的提高；具体比分、赛程与观众人数须据网球档案。本条只记夺冠。',
    'septUsTennis',
    '1936年美国全国网球锦标赛资料与9月事件汇编记9月12日佩里击败巴奇夺冠、为首位外国男单冠军；比分与赛程未逐条核对。',
    ['septUsDec'], []),
  record('hatteras-hurricane', 18, '社会', '飓风袭击哈特拉斯角', '美国 · 北卡罗来纳 · 哈特拉斯角',
    '飓风袭击美国东海岸哈特拉斯角，造成重大破坏。',
    '9月18日，一场热带飓风袭击美国东海岸北卡罗来纳州的哈特拉斯角，造成重大破坏。飓风影响沿海航运、房屋与基础设施，是1936年大西洋飓风季的一次严重灾害。\n\n飓风是1936年美国东海岸的自然灾害节点，具体风速、伤亡与损失须据气象与地方档案。本条只记袭击与破坏。',
    'septUsHurricane',
    '1936年大西洋飓风季资料与9月事件汇编记9月18日飓风袭击哈特拉斯角、造成重大破坏；风速、伤亡与损失数字未逐条核对。',
    ['septUsDec'], []),
]
