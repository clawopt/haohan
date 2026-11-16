import type { HistoryEvent } from './data'
import { britainDecemberEvents, britainDecemberSources } from './britainDecember1937'
import { chinaDecemberEvents, chinaDecemberSources } from './chinaDecember1937'
import { franceDecemberEvents, franceDecemberSources } from './franceDecember1937'
import { germanyDecemberEvents, germanyDecemberSources } from './germanyDecember1937'
import { japanDecemberEvents, japanDecemberSources } from './japanDecember1937'
import { koreaDecemberEvents, koreaDecemberSources } from './koreaDecember1937'
import { usaDecemberEvents, usaDecemberSources } from './usaDecember1937'
import { ussrDecemberEvents, ussrDecemberSources } from './ussrDecember1937'

export const decemberSources = {
  ...chinaDecemberSources,
  ...japanDecemberSources,
  ...koreaDecemberSources,
  ...usaDecemberSources,
  ...ussrDecemberSources,
  ...germanyDecemberSources,
  ...britainDecemberSources,
  ...franceDecemberSources,
}

export const decemberEvents: HistoryEvent[] = [
  ...chinaDecemberEvents,
  ...japanDecemberEvents,
  ...koreaDecemberEvents,
  ...usaDecemberEvents,
  ...ussrDecemberEvents,
  ...germanyDecemberEvents,
  ...britainDecemberEvents,
  ...franceDecemberEvents,
]
