import type { Category, HistoryEvent } from './data'

// October 1936 in Japan: a typhoon, the cabinet's electricity nationalization
// outline, and the Hokkaido army manoeuvres.
export const japanOctober1936Sources = {
  oct36JpDec: { name: 'Wikipedia · October 1936', url: 'https://en.wikipedia.org/wiki/October_1936' },
  oct36JpPower: { name: '日本国立公文书馆 · 年表：1936年10月阁议决定电力国家管理要纲', url: 'https://www.jacar.go.jp/english/exhibition/glossary_en/tochikiko-henten/table/history.html' },
  oct36JpManeuvers: { name: '北海道文书馆 · 战前北海道关系电影与陆军特别大演习', url: 'https://www.pref.hokkaido.lg.jp/sm/mnj/d/guide/b/d/kizoufilm2.html' },
}

type SourceId = keyof typeof japanOctober1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `oct36-jp-${id}`, year: 1936, month: 10, country: 'japan', day,
    date: day ? `1936年10月${day}日` : '1936年10月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['japan'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const japanOctober1936Events: HistoryEvent[] = [
  record('typhoon', 3, '社会', '台风袭击日本，约70人死亡', '日本',
    '台风袭击日本，造成约70人死亡。',
    '10月3日，台风袭击日本，造成约70人死亡。灾害发生在日本对外扩张与军备扩张加速的时期，地方救灾与基础设施损失构成当年社会史的一部分。\n\n具体受灾地区、死亡与失踪人数在不同资料中略有差异；本条只记台风与约70人死亡。',
    'oct36JpDec',
    '1936年10月事件汇编记10月3日台风袭击日本、约70人死亡；受灾地区与详细损失未逐条核对。',
  ),
  record('power-control-outline', 20, '经济', '日本内阁决定《电力国家管理要纲》', '日本 · 东京',
    '广田内阁决定电力国家管理要纲，推动电力事业国有化。',
    '10月20日，日本广田内阁在阁议中决定《电力国家管理要纲》，推动电力事业的国家管理。该方针此后发展为1938年电力管理法公布与日本发送电株式会社成立。\n\n阁议决定是政策方针，不等于电力国有化当天完成；法案审议、企业整合与实施在1938年推进。具体条文、阁议记录与反对意见须据日本公文档案。本条只记阁议决定。',
    'oct36JpPower',
    '日本国立公文书馆年表记1936年10月20日阁议决定电力国家管理要纲；阁议记录与法案条文未逐条核对。',
  ),
  record('hokkaido-maneuvers', undefined, '军事', '日本陆军在北海道举行特别大演习', '日本 · 北海道',
    '日本陆军在北海道举行大规模特别演习，天皇到场检阅。',
    '1936年秋，日本陆军在北海道举行特别大演习，裕仁天皇到场检阅。演习在石狩平原、千岁川一带进行，规模较大，被视为日本在全面侵华前展示陆军战力与动员能力的重要活动。\n\n本条依据北海道文书馆所藏当时影片与记录，采用月份级标注；演习的具体起止日、参演部队与科目须据日本军事档案。本条不把演习与后来的战争行动直接等同。',
    'oct36JpManeuvers',
    '北海道文书馆记1936年秋北海道陆军特别大演习与天皇行幸；具体日期、参演部队与演习科目未逐条核对，故按月份记录。',
  ),
]
