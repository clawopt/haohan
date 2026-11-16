import type { HistoryEvent } from './data'
import { britainNovemberEvents, britainNovemberSources } from './britainNovember1937'
import { chinaNovemberEvents, chinaNovemberSources } from './chinaNovember1937'
import { franceNovemberEvents, franceNovemberSources } from './franceNovember1937'
import { germanyNovemberEvents, germanyNovemberSources } from './germanyNovember1937'
import { japanNovemberEvents, japanNovemberSources } from './japanNovember1937'
import { koreaNovemberEvents, koreaNovemberSources } from './koreaNovember1937'
import { usaNovemberEvents, usaNovemberSources } from './usaNovember1937'
import { ussrNovemberEvents, ussrNovemberSources } from './ussrNovember1937'

export const novemberSources = {
  ...chinaNovemberSources,
  ...japanNovemberSources,
  ...koreaNovemberSources,
  ...usaNovemberSources,
  ...ussrNovemberSources,
  ...germanyNovemberSources,
  ...britainNovemberSources,
  ...franceNovemberSources,
}

export const novemberEvents: HistoryEvent[] = [
  ...chinaNovemberEvents,
  ...japanNovemberEvents,
  ...koreaNovemberEvents,
  ...usaNovemberEvents,
  ...ussrNovemberEvents,
  ...germanyNovemberEvents,
  ...britainNovemberEvents,
  ...franceNovemberEvents,
]
