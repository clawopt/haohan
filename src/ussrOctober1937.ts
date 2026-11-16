import type { Category, HistoryEvent } from './data'

// October 1937 in the USSR: another batch of executions in the Great Purge.
export const ussrOctoberSources = {
  octSuOct: { name: 'Wikipedia · October 1937', url: 'https://en.wikipedia.org/wiki/October_1937' },
}

type SourceId = keyof typeof ussrOctoberSources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `oct37-su-${id}`, year: 1937, month: 10, country: 'ussr', day,
    date: `1937年10月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['ussr', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const ussrOctoberEvents: HistoryEvent[] = [
  record('purge-executions', 21, '政治', '苏联处决62人', '苏联 · 莫斯科',
    '苏联在大清洗中处决62人，具体名单与指控未公开。',
    '10月21日，苏联在大清洗中处决62人。处决发生在大规模镇压的高峰期，审判与处决程序高度保密，被告的辩护权有限。\n\n“反革命”“间谍”等指控是当时官方提出的，不能当作已经独立证实的犯罪事实。具体名单、审判程序与执行地点须据苏联档案；本条只记处决行为。',
    'octSuOct',
    '1937年10月事件汇编记10月21日苏联处决62人；名单与审判档案未逐条核对，指控不作事实认定。',
    ['octSuOct'], ['stalin']),
]
