import type { HistoryEvent } from './data'
import { britainMarchEvents, britainMarchSources } from './britainMarch1937'
import { chinaMarchEvents, chinaMarchSources } from './chinaMarch1937'
import { franceMarchEvents, franceMarchSources } from './franceMarch1937'
import { germanyMarchEvents, germanyMarchSources } from './germanyMarch1937'
import { japanMarchEvents, japanMarchSources } from './japanMarch1937'
import { koreaMarchEvents, koreaMarchSources } from './koreaMarch1937'
import { usaMarchEvents, usaMarchSources } from './usaMarch1937'
import { ussrMarchEvents, ussrMarchSources } from './ussrMarch1937'

export const marchSources = {
  ...chinaMarchSources,
  ...japanMarchSources,
  ...koreaMarchSources,
  ...usaMarchSources,
  ...ussrMarchSources,
  ...germanyMarchSources,
  ...britainMarchSources,
  ...franceMarchSources,
}

export const marchEvents: HistoryEvent[] = [
  ...chinaMarchEvents,
  ...japanMarchEvents,
  ...koreaMarchEvents,
  ...usaMarchEvents,
  ...ussrMarchEvents,
  ...germanyMarchEvents,
  ...britainMarchEvents,
  ...franceMarchEvents,
]
