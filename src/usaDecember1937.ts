import type { Category, HistoryEvent } from './data'

// December 1937 in the United States: Kennedy's London appointment, the Panay
// crisis, Snow White, and the closing of the Panay incident.
export const usaDecemberSources = {
  decUsDec: { name: 'Wikipedia · December 1937', url: 'https://en.wikipedia.org/wiki/December_1937' },
}

type SourceId = keyof typeof usaDecemberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec37-us-${id}`, year: 1937, month: 12, country: 'usa', day,
    date: `1937年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['usa', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const usaDecemberEvents: HistoryEvent[] = [
  record('kennedy-ambassador', 9, '外交', '约瑟夫·肯尼迪接受驻英大使任命', '美国 · 华盛顿',
    '约瑟夫·P·肯尼迪接受出任美国驻英国大使的任命。',
    '12月9日，约瑟夫·P·肯尼迪接受出任美国驻英国大使的任命。他是一位富有的商人、民主党政治捐款人，后来在伦敦任内处理英德关系与战时外交。\n\n任命是外交人事节点，不等于美国对英政策当天改变；肯尼迪的立场与后续辞职须据国务院档案。本条只记接受任命。',
    'decUsDec',
    '1937年12月事件汇编记12月9日肯尼迪接受驻英大使任命；国务院档案与任命程序未逐条核对。',
    ['decUsDec'], ['roosevelt']),
  record('panay-demands', 13, '外交', '罗斯福要求日本为帕奈号事件道歉赔偿', '美国 · 华盛顿',
    '罗斯福要求日本就击沉“帕奈号”道歉、赔偿并保证不再发生。',
    '12月13日，罗斯福总统要求日本就12月12日击沉美国炮舰“帕奈号”事件正式道歉、赔偿损失，并保证不再发生类似事件。事件发生时，“帕奈号”正在长江上撤离美国侨民。\n\n要求是外交交涉，不等于美日当天断交或美国采取军事报复；日本随后道歉并赔偿，事件于12月25日了结。具体照会、赔偿金额与日本回应须据美国国务院档案。本条只记要求。',
    'decUsDec',
    '1937年12月事件汇编记12月13日罗斯福要求道歉赔偿；照会原文与日本回应未逐条核对。',
    ['decUsDec'], ['roosevelt']),
  record('snow-white', 21, '文化', '《白雪公主与七个小矮人》首映', '美国 · 加州好莱坞',
    '迪士尼首部彩色动画长片《白雪公主与七个小矮人》首映。',
    '12月21日，沃尔特·迪士尼的《白雪公主与七个小矮人》在好莱坞首映。这是美国首部彩色动画长片，采用手绘动画与多平面摄影技术，后来成为动画电影史上的里程碑。\n\n首映是电影史节点，不等于影片当天已在全国大规模上映；票房、发行与动画技术影响须据迪士尼档案。本条只记首映。',
    'decUsDec',
    '《白雪公主》条目与1937年12月事件汇编记12月21日首映；影片制作与发行记录未逐条核对。',
    ['decUsDec'], []),
  record('panay-closed', 25, '外交', '帕奈号事件了结', '美国 · 华盛顿',
    '美国接受日本道歉与赔偿，帕奈号事件正式了结。',
    '12月25日，美国正式接受日本就“帕奈号”事件作出的道歉与赔偿，事件了结。日本承认攻击是“严重错误”，同意赔偿并惩处相关人员；美国未采取进一步制裁。\n\n事件了结是外交结果，不等于美国公众对日本侵略的担忧消失；帕奈号事件加深了美国对日本扩张的警惕。具体赔偿金额、惩处与舆论反应须据美国国务院档案。本条只记了结。',
    'decUsDec',
    '1937年12月事件汇编记12月25日美国接受日本道歉、事件了结；赔偿与外交文件未逐条核对。',
    ['decUsDec'], ['roosevelt']),
]
