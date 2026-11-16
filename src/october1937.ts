import type { HistoryEvent } from './data'
import { britainOctoberEvents, britainOctoberSources } from './britainOctober1937'
import { chinaOctoberEvents, chinaOctoberSources } from './chinaOctober1937'
import { franceOctoberEvents, franceOctoberSources } from './franceOctober1937'
import { germanyOctoberEvents, germanyOctoberSources } from './germanyOctober1937'
import { japanOctoberEvents, japanOctoberSources } from './japanOctober1937'
import { koreaOctoberEvents, koreaOctoberSources } from './koreaOctober1937'
import { usaOctoberEvents, usaOctoberSources } from './usaOctober1937'
import { ussrOctoberEvents, ussrOctoberSources } from './ussrOctober1937'

export const octoberSources = {
  ...chinaOctoberSources,
  ...japanOctoberSources,
  ...koreaOctoberSources,
  ...usaOctoberSources,
  ...ussrOctoberSources,
  ...germanyOctoberSources,
  ...britainOctoberSources,
  ...franceOctoberSources,
}

export const octoberEvents: HistoryEvent[] = [
  ...chinaOctoberEvents,
  ...japanOctoberEvents,
  ...koreaOctoberEvents,
  ...usaOctoberEvents,
  ...ussrOctoberEvents,
  ...germanyOctoberEvents,
  ...britainOctoberEvents,
  ...franceOctoberEvents,
]
