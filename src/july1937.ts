import type { HistoryEvent } from './data'
import { britainJulyEvents, britainJulySources } from './britainJuly1937'
import { chinaJulyEvents, chinaJulySources } from './chinaJuly1937'
import { franceJulyEvents, franceJulySources } from './franceJuly1937'
import { germanyJulyEvents, germanyJulySources } from './germanyJuly1937'
import { japanJulyEvents, japanJulySources } from './japanJuly1937'
import { koreaJulyEvents, koreaJulySources } from './koreaJuly1937'
import { usaJulyEvents, usaJulySources } from './usaJuly1937'
import { ussrJulyEvents, ussrJulySources } from './ussrJuly1937'

export const julySources = {
  ...chinaJulySources,
  ...japanJulySources,
  ...koreaJulySources,
  ...usaJulySources,
  ...ussrJulySources,
  ...germanyJulySources,
  ...britainJulySources,
  ...franceJulySources,
}

export const julyEvents: HistoryEvent[] = [
  ...chinaJulyEvents,
  ...japanJulyEvents,
  ...koreaJulyEvents,
  ...usaJulyEvents,
  ...ussrJulyEvents,
  ...germanyJulyEvents,
  ...britainJulyEvents,
  ...franceJulyEvents,
]
