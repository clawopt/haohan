import type { HistoryEvent } from './data'
import { britainAprilEvents, britainAprilSources } from './britainApril1937'
import { chinaAprilEvents, chinaAprilSources } from './chinaApril1937'
import { franceAprilEvents, franceAprilSources } from './franceApril1937'
import { germanyAprilEvents, germanyAprilSources } from './germanyApril1937'
import { japanAprilEvents, japanAprilSources } from './japanApril1937'
import { koreaAprilEvents, koreaAprilSources } from './koreaApril1937'
import { usaAprilEvents, usaAprilSources } from './usaApril1937'
import { ussrAprilEvents, ussrAprilSources } from './ussrApril1937'

export const aprilSources = {
  ...chinaAprilSources,
  ...japanAprilSources,
  ...koreaAprilSources,
  ...usaAprilSources,
  ...ussrAprilSources,
  ...germanyAprilSources,
  ...britainAprilSources,
  ...franceAprilSources,
}

export const aprilEvents: HistoryEvent[] = [
  ...chinaAprilEvents,
  ...japanAprilEvents,
  ...koreaAprilEvents,
  ...usaAprilEvents,
  ...ussrAprilEvents,
  ...germanyAprilEvents,
  ...britainAprilEvents,
  ...franceAprilEvents,
]
