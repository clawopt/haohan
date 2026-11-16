import type { HistoryEvent } from './data'
import { britainDecember1936Events, britainDecember1936Sources } from './britainDecember1936'
import { chinaDecember1936Events, chinaDecember1936Sources } from './chinaDecember1936'
import { franceDecember1936Events, franceDecember1936Sources } from './franceDecember1936'
import { germanyDecember1936Events, germanyDecember1936Sources } from './germanyDecember1936'
import { japanDecember1936Events, japanDecember1936Sources } from './japanDecember1936'
import { koreaDecember1936Events, koreaDecember1936Sources } from './koreaDecember1936'
import { usaDecember1936Events, usaDecember1936Sources } from './usaDecember1936'
import { ussrDecember1936Events, ussrDecember1936Sources } from './ussrDecember1936'

export const december1936Sources = {
  ...chinaDecember1936Sources,
  ...japanDecember1936Sources,
  ...koreaDecember1936Sources,
  ...usaDecember1936Sources,
  ...ussrDecember1936Sources,
  ...germanyDecember1936Sources,
  ...britainDecember1936Sources,
  ...franceDecember1936Sources,
}

export const december1936Events: HistoryEvent[] = [
  ...chinaDecember1936Events,
  ...japanDecember1936Events,
  ...koreaDecember1936Events,
  ...usaDecember1936Events,
  ...ussrDecember1936Events,
  ...germanyDecember1936Events,
  ...britainDecember1936Events,
  ...franceDecember1936Events,
]
