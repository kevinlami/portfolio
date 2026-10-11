import { en, type Dictionary } from './dictionaries/en'
import { ptBR } from './dictionaries/pt-BR'
import type { Locale } from './config'

const dictionaries: Record<Locale, Dictionary> = { en, 'pt-BR': ptBR }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary }
