import type { Category, HistoryEvent } from './data'

// December 1936 in the United States: the Buenos Aires peace conference, the
// Nobel Prize for O'Neill, the NFL championship, and the Heisman Trophy.
export const usaDecember1936Sources = {
  dec36UsDec: { name: 'Wikipedia · December 1936', url: 'https://en.wikipedia.org/wiki/December_1936' },
}

type SourceId = keyof typeof usaDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec36-us-${id}`, year: 1936, month: 12, country: 'usa', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaDecember1936Events: HistoryEvent[] = [
  record('buenos-aires-conference', 1, '外交', '罗斯福在布宜诺斯艾利斯和平会议发表演说', '阿根廷 · 布宜诺斯艾利斯',
    '罗斯福在美洲国家维持和平会议上发表演说，提出“更丰富的生活”。',
    '12月1日，罗斯福总统在阿根廷布宜诺斯艾利斯举行的美洲国家维持和平会议上发表演说，提出“更丰富的生活”（The More Abundant Life）理念，强调西半球合作与和平解决争端。\n\n演说是罗斯福“睦邻政策”的一部分，不等于美国当天承担新的军事义务；会议成果与后续条约须据美国国务院档案。本条只记演说与会议开幕。',
    'dec36UsDec',
    '1936年12月事件汇编记12月1日布宜诺斯艾利斯会议开幕、罗斯福演说；演说原文与会议记录未逐条核对。',
    ['dec36UsDec'], ['roosevelt']),
  record('oneill-nobel', 10, '文化', '尤金·奥尼尔获诺贝尔文学奖', '瑞典 · 斯德哥尔摩',
    '美国剧作家尤金·奥尼尔获得1936年诺贝尔文学奖。',
    '12月10日，美国剧作家尤金·奥尼尔获得1936年诺贝尔文学奖。他是美国现代戏剧的代表人物，作品包括《天边外》《毛猿》《长夜漫漫路迢迢》等，以实验性的舞台手法与深刻的心理描写著称。\n\n获奖是美国文学与国际声誉的节点，不等于作品当天被所有观众接受；颁奖词、剧作评价与后续影响须据诺贝尔档案。本条只记获奖。',
    'dec36UsDec',
    '1936年诺贝尔奖资料与12月事件汇编记12月10日奥尼尔获文学奖；颁奖词与剧作评价未逐条核对。',
    ['dec36UsDec'], []),
  record('nfl-championship', 13, '文化', '绿湾包装工赢得NFL冠军', '美国 · 纽约 · 马球 grounds',
    '绿湾包装工以21比6击败波士顿红皮，赢得1936年NFL冠军。',
    '12月13日，绿湾包装工在纽约马球场地以21比6击败波士顿红皮，赢得1936年NFL冠军。包装工是NFL早期强队，这场比赛是职业橄榄球冠军赛发展的重要节点。\n\n冠军赛结果是体育文化节点，不等于NFL当天成为美国最受欢迎的体育联盟；具体比赛记录、球员与观众人数须据NFL档案。本条只记夺冠。',
    'dec36UsDec',
    '1936年NFL冠军赛条目与12月事件汇编记12月13日包装工21比6获胜；比赛记录与观众人数未逐条核对。',
    ['dec36UsDec'], []),
  record('heisman-kelley', 16, '文化', '拉里·凯利获海斯曼奖', '美国 · 纽约',
    '耶鲁大学球员拉里·凯利获得1936年海斯曼奖。',
    '12月16日，耶鲁大学的拉里·凯利获得1936年海斯曼奖，成为该奖得主。凯利是耶鲁的端锋与后卫，以接球与防守能力闻名。\n\n获奖是美国大学橄榄球文化节点，不等于凯利职业生涯当天确定；评选记录、球员数据与后续经历须据海斯曼档案。本条只记得奖。',
    'dec36UsDec',
    '1936年海斯曼奖资料与12月事件汇编记12月16日凯利获奖；评选记录与球员数据未逐条核对。',
    ['dec36UsDec'], []),
]
