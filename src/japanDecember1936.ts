import type { Category, HistoryEvent } from './data'

// December 1936 in Japan: the military watches the Xi'an Incident and keeps to
// a non-intervention line while opposing a pro-communist settlement.
export const japanDecember1936Sources = {
  dec36JpXian: { name: '人民网 · 日本对西安事变的“迅速反应”', url: 'http://dangshi.people.com.cn/n/2014/0605/c85037-25108728.html' },
}

type SourceId = keyof typeof japanDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, actors: string[], source: SourceId,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `dec36-jp-${id}`, year: 1936, month: 12, country: 'japan', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['japan', ...actors])], source, topicIds: [],
    evidenceNote: '日期指本条所记会议或表态的发生日；未由资料支持的政策结果不作补写。',
    ...extra,
  }
}

export const japanDecember1936Events: HistoryEvent[] = [
  record('xian-policy', 14, '外交', '日本确定对西安事变“不干涉”方针', '日本 · 东京',
    '日本政要与军部连续开会，确定对西安事变采取“不干涉”方针，但反对以容共为妥协条件。',
    '西安事变爆发后，日本政要与军方连续召开会议研讨中国局势，确定“对西安事变采取不干涉方针。倘国府与张学良以容共为妥协条件，日本则断然抨击”。日本关东军随后公开要求南京政府“反共防共”。\n\n日本所谓“不干涉”并非真正中立，而是反对张杨联共抗日、希望南京继续内战。日本的态度是西安事变国际反应的一部分，不等于南京政府接受其要求；具体会议日期与文件须据日本档案。本条以12月14日作为方针确定的约略节点。',
    [], 'dec36JpXian', {
      topicIds: ['xian-incident'],
      evidenceNote: '人民网文章记日本政要军方连续开会、确定“不干涉”方针及对容共妥协的反对；具体会议日期与文件未逐条核对。',
    }),
]
