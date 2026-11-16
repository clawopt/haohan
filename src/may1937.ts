import type { HistoryEvent } from './data'
import { britainMayEvents, britainMaySources } from './britainMay1937'
import { chinaMayEvents, chinaMaySources } from './chinaMay1937'
import { franceMayEvents, franceMaySources } from './franceMay1937'
import { germanyMayEvents, germanyMaySources } from './germanyMay1937'
import { japanMayEvents, japanMaySources } from './japanMay1937'
import { koreaMayEvents, koreaMaySources } from './koreaMay1937'
import { usaMayEvents, usaMaySources } from './usaMay1937'
import { ussrMayEvents, ussrMaySources } from './ussrMay1937'

export const maySources = {
  ...chinaMaySources,
  ...japanMaySources,
  ...koreaMaySources,
  ...usaMaySources,
  ...ussrMaySources,
  ...germanyMaySources,
  ...britainMaySources,
  ...franceMaySources,
}

export const mayEvents: HistoryEvent[] = [
  ...chinaMayEvents,
  ...japanMayEvents,
  ...koreaMayEvents,
  ...usaMayEvents,
  ...ussrMayEvents,
  ...germanyMayEvents,
  ...britainMayEvents,
  ...franceMayEvents,
]
