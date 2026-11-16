import type { HistoryEvent } from './data'
import { britainAugustEvents, britainAugustSources } from './britainAugust1937'
import { chinaAugustEvents, chinaAugustSources } from './chinaAugust1937'
import { franceAugustEvents, franceAugustSources } from './franceAugust1937'
import { germanyAugustEvents, germanyAugustSources } from './germanyAugust1937'
import { japanAugustEvents, japanAugustSources } from './japanAugust1937'
import { koreaAugustEvents, koreaAugustSources } from './koreaAugust1937'
import { usaAugustEvents, usaAugustSources } from './usaAugust1937'
import { ussrAugustEvents, ussrAugustSources } from './ussrAugust1937'

export const augustSources = {
  ...chinaAugustSources,
  ...japanAugustSources,
  ...koreaAugustSources,
  ...usaAugustSources,
  ...ussrAugustSources,
  ...germanyAugustSources,
  ...britainAugustSources,
  ...franceAugustSources,
}

export const augustEvents: HistoryEvent[] = [
  ...chinaAugustEvents,
  ...japanAugustEvents,
  ...koreaAugustEvents,
  ...usaAugustEvents,
  ...ussrAugustEvents,
  ...germanyAugustEvents,
  ...britainAugustEvents,
  ...franceAugustEvents,
]
