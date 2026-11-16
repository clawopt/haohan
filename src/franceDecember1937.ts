import type { Category, HistoryEvent } from './data'

// December 1937 in France: the Nobel Prize for Martin du Gard, the banning of
// the French Social Party, Ravel's death, and a one-day public strike.
export const franceDecemberSources = {
  decFrDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof franceDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec37-fr-${id}`, year: 1937, month: 12, country: 'france', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceDecemberEvents: HistoryEvent[] = [
  record('martin-du-gard-nobel', 10, '文化', '罗杰·马丁·杜加尔获诺贝尔文学奖', '瑞典 · 斯德哥尔摩',
    '法国作家罗杰·马丁·杜加尔获得1937年诺贝尔文学奖。',
    '12月10日，法国作家罗杰·马丁·杜加尔获得1937年诺贝尔文学奖，代表作是长篇小说《蒂博一家》。他的作品以现实主义手法描写家庭、宗教与社会变迁。\n\n获奖是法国文学与国际声誉的节点，不等于作品当天被所有读者接受；颁奖词、作品评价与后续影响须据诺贝尔档案。本条只记获奖。',
    'decFrDec',
    '1937年诺贝尔奖资料与12月事件汇编记12月10日马丁·杜加尔获文学奖；颁奖词与作品评价未逐条核对。',
    ['decFrDec'], []),
  record('french-social-party-ban', 22, '政治', '法国社会党被禁止', '法国 · 巴黎',
    '法国政府禁止法兰西社会党，领导人被法院判处罚款。',
    '12月22日，法国政府禁止法兰西社会党（Parti social français），领导人弗朗索瓦·德·拉罗克等被法院判处罚款，理由是该党实际上重建了已被解散的政治联盟。\n\n禁令是法国人民阵线时期对极右组织的打压，不等于极右运动当天消失；该党后来改组并继续活动。具体判决、组织规模与后续演变须据法国法院与警察档案。本条只记禁令。',
    'decFrDec',
    '1937年12月事件汇编记12月22日法兰西社会党被禁、领导人被判罚款；法院判决与组织档案未逐条核对。',
    ['decFrDec'], ['blum']),
  record('ravel-death', 28, '文化', '作曲家拉威尔去世', '法国 · 巴黎',
    '法国作曲家莫里斯·拉威尔去世，享年62岁。',
    '12月28日，法国作曲家莫里斯·拉威尔在巴黎去世，享年62岁。他以《波莱罗》《达夫尼与克罗埃》《G大调钢琴协奏曲》等作品闻名，是20世纪初法国音乐的重要人物。\n\n拉威尔的去世是音乐史节点，不等于其作品当天停止演出；病史、葬礼与作品评价须据音乐史资料。本条只记去世。',
    'decFrDec',
    '拉威尔条目与1937年12月事件汇编记12月28日去世、享年62岁；病史与葬礼记录未逐条核对。',
    ['decFrDec'], []),
  record('public-strike', 29, '经济', '法国十二万公职人员罢工', '法国 · 全国',
    '法国约12万名公职人员举行为期一天的罢工，随后达成和解。',
    '12月29日，法国约12万名公职人员举行总罢工，要求改善工资与工作条件。罢工持续一天后达成和解；此时人民阵线政府面临财政危机与劳工不满。\n\n罢工是法国劳工运动的节点，不等于公职人员诉求当天全部解决；具体工会、诉求与和解条款须据工会与政府档案。本条只记罢工与结束。',
    'decFrDec',
    '1937年12月事件汇编记12月29日约12万公职人员罢工、一天后和解；工会档案与和解条款未逐条核对。',
    ['decFrDec'], ['blum']),
]
