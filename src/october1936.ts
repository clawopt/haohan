import type { HistoryEvent } from './data'
import { britainOctober1936Events, britainOctober1936Sources } from './britainOctober1936'
import { chinaOctober1936Events, chinaOctober1936Sources } from './chinaOctober1936'
import { franceOctober1936Events, franceOctober1936Sources } from './franceOctober1936'
import { germanyOctober1936Events, germanyOctober1936Sources } from './germanyOctober1936'
import { japanOctober1936Events, japanOctober1936Sources } from './japanOctober1936'
import { koreaOctober1936Events, koreaOctober1936Sources } from './koreaOctober1936'
import { usaOctober1936Events, usaOctober1936Sources } from './usaOctober1936'
import { ussrOctober1936Events, ussrOctober1936Sources } from './ussrOctober1936'

export const october1936Sources = {
  ...chinaOctober1936Sources,
  ...japanOctober1936Sources,
  ...koreaOctober1936Sources,
  ...usaOctober1936Sources,
  ...ussrOctober1936Sources,
  ...germanyOctober1936Sources,
  ...britainOctober1936Sources,
  ...franceOctober1936Sources,
}

export const october1936Events: HistoryEvent[] = [
  ...chinaOctober1936Events,
  ...japanOctober1936Events,
  ...koreaOctober1936Events,
  ...usaOctober1936Events,
  ...ussrOctober1936Events,
  ...germanyOctober1936Events,
  ...britainOctober1936Events,
  ...franceOctober1936Events,
]
