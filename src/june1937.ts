import type { HistoryEvent } from './data'
import { britainJuneEvents, britainJuneSources } from './britainJune1937'
import { chinaJuneEvents, chinaJuneSources } from './chinaJune1937'
import { franceJuneEvents, franceJuneSources } from './franceJune1937'
import { germanyJuneEvents, germanyJuneSources } from './germanyJune1937'
import { japanJuneEvents, japanJuneSources } from './japanJune1937'
import { koreaJuneEvents, koreaJuneSources } from './koreaJune1937'
import { usaJuneEvents, usaJuneSources } from './usaJune1937'
import { ussrJuneEvents, ussrJuneSources } from './ussrJune1937'

export const juneSources = {
  ...chinaJuneSources,
  ...japanJuneSources,
  ...koreaJuneSources,
  ...usaJuneSources,
  ...ussrJuneSources,
  ...germanyJuneSources,
  ...britainJuneSources,
  ...franceJuneSources,
}

export const juneEvents: HistoryEvent[] = [
  ...chinaJuneEvents,
  ...japanJuneEvents,
  ...koreaJuneEvents,
  ...usaJuneEvents,
  ...ussrJuneEvents,
  ...germanyJuneEvents,
  ...britainJuneEvents,
  ...franceJuneEvents,
]
