import type { Category, HistoryEvent } from './data'

// September 1936 in colonial Korea: relief continues after the summer floods
// that struck most of the peninsula in July and August.
export const koreaSeptember1936Sources = {
  septKoFlood: { name: '韩国国家记录院 · 1936年水害义捐金关系文书', url: 'https://www.archives.go.kr/theme/next/government/viewGovernmentArchives.do?id=0001564901' },
}

type SourceId = keyof typeof koreaSeptember1936Sources
function record(
  id: string, day: number | undefined, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  extra: Partial<HistoryEvent> = {},
): HistoryEvent {
  return {
    id: `sep36-korea-${id}`, year: 1936, month: 9, country: 'korea', day,
    date: day ? `1936年9月${day}日` : '1936年9月（未定日）',
    precision: day ? 'day' : 'month', archive: true, category, title, location, summary, detail,
    entities: ['korea'], source, topicIds: [], evidenceNote,
    ...extra,
  }
}

export const koreaSeptember1936Events: HistoryEvent[] = [
  record('flood-relief', undefined, '社会', '朝鲜水灾赈济持续', '朝鲜',
    '1936年夏朝鲜大部分地区遭暴雨与台风袭击，9月水灾赈济与义捐仍在继续。',
    '1936年7、8月，朝鲜除平安南道、咸镜南道外的大部分地区连遭暴雨与台风，洪水冲毁农田、房屋与道路，造成严重人员伤亡和财产损失。9月，灾区赈济、义捐募集与善后工作仍在继续，朝鲜总督府与地方团体组织救灾。\n\n本条依据韩国国家记录院所藏1936年水害义捐金关系文书，采用月份级标注；具体灾害统计、赈济金额与地方差异须据总督府与地方档案。',
    'septKoFlood',
    '韩国国家记录院藏1936年水害义捐金文书与江原道地方史料记1936年7—8月洪水、9月赈济持续；具体死亡与损失数字未逐条核对，故按月份记录。',
  ),
]
