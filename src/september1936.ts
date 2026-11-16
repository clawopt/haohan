import type { HistoryEvent } from './data'
import { britainSeptember1936Events, britainSeptember1936Sources } from './britainSeptember1936'
import { chinaSeptember1936Events, chinaSeptember1936Sources } from './chinaSeptember1936'
import { franceSeptember1936Events, franceSeptember1936Sources } from './franceSeptember1936'
import { germanySeptember1936Events, germanySeptember1936Sources } from './germanySeptember1936'
import { japanSeptember1936Events, japanSeptember1936Sources } from './japanSeptember1936'
import { koreaSeptember1936Events, koreaSeptember1936Sources } from './koreaSeptember1936'
import { usaSeptember1936Events, usaSeptember1936Sources } from './usaSeptember1936'
import { ussrSeptember1936Events, ussrSeptember1936Sources } from './ussrSeptember1936'

export const september1936Sources = {
  ...chinaSeptember1936Sources,
  ...japanSeptember1936Sources,
  ...koreaSeptember1936Sources,
  ...usaSeptember1936Sources,
  ...ussrSeptember1936Sources,
  ...germanySeptember1936Sources,
  ...britainSeptember1936Sources,
  ...franceSeptember1936Sources,
}

export const september1936Events: HistoryEvent[] = [
  ...chinaSeptember1936Events,
  ...japanSeptember1936Events,
  ...koreaSeptember1936Events,
  ...usaSeptember1936Events,
  ...ussrSeptember1936Events,
  ...germanySeptember1936Events,
  ...britainSeptember1936Events,
  ...franceSeptember1936Events,
]
