import type { Category, HistoryEvent } from './data'

// December 1936 in France: Wallis Simpson arrives in France during the
// abdication crisis.
export const franceDecember1936Sources = {
  dec36FrDec: { name: 'Wikipedia · December 1936', url: 'https://en.wikipedia.org/wiki/December_1936' },
}

type SourceId = keyof typeof franceDecember1936Sources
function record(
  id: string, day: number, category: Category, title: string, location: string,
  summary: string, detail: string, source: SourceId, evidenceNote: string,
  references: SourceId[] = [], actors: string[] = [],
): HistoryEvent {
  return {
    id: `dec36-fr-${id}`, year: 1936, month: 12, country: 'france', day,
    date: `1936年12月${day}日`, precision: 'day', archive: true, category, title, location, summary, detail,
    entities: [...new Set(['france', ...actors])], source, references, topicIds: [], evidenceNote,
  }
}

export const franceDecember1936Events: HistoryEvent[] = [
  record('wallis-france', 3, '社会', '沃利斯·辛普森离开英国前往法国', '法国 · 戛纳',
    '沃利斯·辛普森在退位危机中离开英国，前往法国戛纳躲避媒体。',
    '12月3日，沃利斯·辛普森离开英国，乘船前往法国，随后在随从陪同下驱车前往戛纳，沿途躲避记者。她离开英国是为了减轻对爱德华八世的政治压力。\n\n辛普森到法国是英国退位危机的一部分，不等于她当天与爱德华断绝关系；两人此后仍在法国结婚。具体行程、住所与媒体追逐须据当时报道与档案。本条只记抵达法国。',
    'dec36FrDec',
    '1936年12月事件汇编记12月3日辛普森离开英国、前往法国戛纳；行程与媒体报道未逐条核对。',
    ['dec36FrDec'], []),
]
