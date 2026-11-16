import type { HistoryEvent } from './data'
import { britainSeptemberEvents, britainSeptemberSources } from './britainSeptember1937'
import { chinaSeptemberEvents, chinaSeptemberSources } from './chinaSeptember1937'
import { franceSeptemberEvents, franceSeptemberSources } from './franceSeptember1937'
import { germanySeptemberEvents, germanySeptemberSources } from './germanySeptember1937'
import { japanSeptemberEvents, japanSeptemberSources } from './japanSeptember1937'
import { koreaSeptemberEvents, koreaSeptemberSources } from './koreaSeptember1937'
import { usaSeptemberEvents, usaSeptemberSources } from './usaSeptember1937'
import { ussrSeptemberEvents, ussrSeptemberSources } from './ussrSeptember1937'

export const septemberSources = {
  ...chinaSeptemberSources,
  ...japanSeptemberSources,
  ...koreaSeptemberSources,
  ...usaSeptemberSources,
  ...ussrSeptemberSources,
  ...germanySeptemberSources,
  ...britainSeptemberSources,
  ...franceSeptemberSources,
}

export const septemberEvents: HistoryEvent[] = [
  ...chinaSeptemberEvents,
  ...japanSeptemberEvents,
  ...koreaSeptemberEvents,
  ...usaSeptemberEvents,
  ...ussrSeptemberEvents,
  ...germanySeptemberEvents,
  ...britainSeptemberEvents,
  ...franceSeptemberEvents,
]
