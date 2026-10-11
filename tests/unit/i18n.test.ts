import { describe, expect, it } from 'vitest'
import { defaultLocale, isLocale, otherLocale, resolveLocaleFromHeader } from '@/i18n/config'

describe('i18n config', () => {
  it('resolves the exact locale from Accept-Language', () => {
    expect(resolveLocaleFromHeader('pt-BR,pt;q=0.9,en;q=0.8')).toBe('pt-BR')
    expect(resolveLocaleFromHeader('en-US,en;q=0.5')).toBe('en')
  })

  it('resolves by prefix when only the language is sent', () => {
    expect(resolveLocaleFromHeader('pt;q=0.9,en;q=0.8')).toBe('pt-BR')
    expect(resolveLocaleFromHeader('en-GB,en;q=0.9')).toBe('en')
  })

  it('honors quality values when picking between candidates', () => {
    expect(resolveLocaleFromHeader('en;q=0.3,pt-BR;q=0.9')).toBe('pt-BR')
    expect(resolveLocaleFromHeader('pt-BR;q=0.3,en;q=0.9')).toBe('en')
  })

  it('falls back to the default locale for unsupported or absent headers', () => {
    expect(resolveLocaleFromHeader('fr-FR,fr;q=0.9')).toBe(defaultLocale)
    expect(resolveLocaleFromHeader(null)).toBe(defaultLocale)
    expect(resolveLocaleFromHeader('')).toBe(defaultLocale)
  })

  it('validates locale segments', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('pt-BR')).toBe(true)
    expect(isLocale('fr')).toBe(false)
    expect(isLocale('')).toBe(false)
  })

  it('returns the other supported locale for the header toggle', () => {
    expect(otherLocale('en')).toBe('pt-BR')
    expect(otherLocale('pt-BR')).toBe('en')
  })
})
