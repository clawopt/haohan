import type { HistoryEvent } from './data'
import { britainFebruaryEvents, britainFebruarySources } from './britainFebruary1937'
import { chinaFebruaryEvents, chinaFebruarySources } from './chinaFebruary1937'
import { franceFebruaryEvents, franceFebruarySources } from './franceFebruary1937'
import { germanyFebruaryEvents, germanyFebruarySources } from './germanyFebruary1937'
import { japanFebruaryEvents, japanFebruarySources } from './japanFebruary1937'
import { koreaFebruaryEvents, koreaFebruarySources } from './koreaFebruary1937'
import { usaFebruaryEvents, usaFebruarySources } from './usaFebruary1937'
import { ussrFebruaryEvents, ussrFebruarySources } from './ussrFebruary1937'

export const februarySources = {
  ...chinaFebruarySources,
  ...japanFebruarySources,
  ...koreaFebruarySources,
  ...usaFebruarySources,
  ...ussrFebruarySources,
  ...germanyFebruarySources,
  ...britainFebruarySources,
  ...franceFebruarySources,
}

export const februaryEvents: HistoryEvent[] = [
  ...chinaFebruaryEvents,
  ...japanFebruaryEvents,
  ...koreaFebruaryEvents,
  ...usaFebruaryEvents,
  ...ussrFebruaryEvents,
  ...germanyFebruaryEvents,
  ...britainFebruaryEvents,
  ...franceFebruaryEvents,
]
