import type { HistoryEvent } from './data'
import { britainNovember1936Events, britainNovember1936Sources } from './britainNovember1936'
import { chinaNovember1936Events, chinaNovember1936Sources } from './chinaNovember1936'
import { franceNovember1936Events, franceNovember1936Sources } from './franceNovember1936'
import { germanyNovember1936Events, germanyNovember1936Sources } from './germanyNovember1936'
import { japanNovember1936Events, japanNovember1936Sources } from './japanNovember1936'
import { koreaNovember1936Events, koreaNovember1936Sources } from './koreaNovember1936'
import { usaNovember1936Events, usaNovember1936Sources } from './usaNovember1936'
import { ussrNovember1936Events, ussrNovember1936Sources } from './ussrNovember1936'

export const november1936Sources = {
  ...chinaNovember1936Sources,
  ...japanNovember1936Sources,
  ...koreaNovember1936Sources,
  ...usaNovember1936Sources,
  ...ussrNovember1936Sources,
  ...germanyNovember1936Sources,
  ...britainNovember1936Sources,
  ...franceNovember1936Sources,
}

export const november1936Events: HistoryEvent[] = [
  ...chinaNovember1936Events,
  ...japanNovember1936Events,
  ...koreaNovember1936Events,
  ...usaNovember1936Events,
  ...ussrNovember1936Events,
  ...germanyNovember1936Events,
  ...britainNovember1936Events,
  ...franceNovember1936Events,
]
