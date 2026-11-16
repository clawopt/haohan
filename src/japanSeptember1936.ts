import type { Category, HistoryEvent } from './data'

// September 1936 in Japan: warships sent over the Beihai incident, cabinet
// reform proposals, and the Imperial Reservists Association ordinance.
export const japanSeptember1936Sources = {
  septJpDec: { name: 'Wikipedia · September 1936', url: 'https://en.wikipedia.org/wiki/September_1936' },
  septJpBeihai: { name: '广西地情网 · 1936年“北海事件”', url: 'http://www.gxdfz.org.cn/flbg/gxzhizui/ls/201612/t20161227_35217.html' },
  septJpJacar: { name: '日本国立公文书馆 · 年表：1936年9月', url: 'https://www.jacar.go.jp/english/exhibition/glossary_en/tochikiko-henten/table/history.html' },
}

type SourceId = keyof typeof japanSeptember1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep36-jp-${id}`, year: 1936, month: 9, country: 'japan', day,
    date: day ? `1936年9月${day}日` : '1936年9月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['japan'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const japanSeptember1936Events: HistoryEvent[] = [
  record('beihai-dispatch', 10, '军事', '日本海军派舰南下北海', '中国 · 北海附近海域',
    '日本以北海事件为由，命驻上海、青岛的驱逐舰南下北海施压。',
    '9月10日，日本海军以北海事件为由，命令驻上海及青岛的多艘驱逐舰南下北海，向中国方面施压。日方要求登岸调查并追究责任，中国驻军与地方当局则展开交涉，局势一度紧张。\n\n派舰是日本借地方事件扩大对华军事压力的一环，不等于日本当天决定发动新的战争；具体舰艇、航迹与交涉经过须据日本海军档案。本条只记派舰。',
    'septJpBeihai',
    '广西地情网记9月10日日本海军命驻上海、青岛驱逐舰南下北海；舰艇名单与航迹未逐条核对。',
    { references: ['septJpDec'] }),
  record('reform-proposal', undefined, '政治', '陆海两相提出行政与议会制度改革案', '日本 · 东京',
    '日本陆相、海相向广田首相提出行政机构与议会制度改革案。',
    '1936年9月，日本陆军大臣、海军大臣向广田弘毅首相提出行政机构与议会制度改革案。改革案涉及政府机构与议会的权限调整，反映军部在内阁决策中的影响进一步上升。\n\n本条依据日本国立公文书馆年表，采用月份级标注；改革案的具体条文、内阁审议与国会讨论须据日本公文档案。本条不把改革案与随后的战争决策直接等同。',
    'septJpJacar',
    '日本国立公文书馆年表记1936年9月陆海两相向广田首相提出行政机构与议会制度改革案；条文与审议记录未逐条核对，故按月份记录。',
  ),
  record('reservists-ordinance', undefined, '军事', '《帝国在乡军人会令》公布', '日本 · 东京',
    '日本公布《帝国在乡军人会令》，在乡军人会成为军队的官方机构。',
    '1936年9月，日本公布《帝国在乡军人会令》，在乡军人会成为受陆军、海军大臣管辖的军队官方机构。该组织此前带有民间退伍军人团体性质，此后更直接地纳入军队动员与地方统制体系。\n\n本条依据日本国立公文书馆年表，采用月份级标注；法令条文、组织规模与地方活动须据日本公文档案。本条只记法令公布。',
    'septJpJacar',
    '日本国立公文书馆年表记1936年9月帝国在乡军人会令公布、该会成为军队官方机构；法令原文与执行记录未逐条核对，故按月份记录。',
  ),
]
