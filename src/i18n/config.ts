export const locales = ['en', 'pt-BR'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt-BR'

export const localeCookieName = 'NEXT_LOCALE'

/** Short labels rendered in the header language toggle. */
export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  'pt-BR': 'PT',
}

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}

/** Returns the other supported locale (the site currently has exactly two). */
export function otherLocale(locale: Locale): Locale {
  return locales.find((candidate) => candidate !== locale) ?? defaultLocale
}

/** Maps a BCP 47 language tag to a supported locale via prefix matching. */
function mapLanguageTag(tag: string): Locale | undefined {
  const normalized = tag.trim().toLowerCase()
  if (!normalized) return undefined
  return (
    locales.find((locale) => locale.toLowerCase() === normalized) ??
    // "en-us" -> "en": the tag is more specific than the locale.
    locales.find((locale) => normalized.startsWith(`${locale.toLowerCase()}-`)) ??
    // "pt" -> "pt-BR": the locale is more specific than the tag.
    locales.find((locale) => `${locale.toLowerCase()}-`.startsWith(normalized))
  )
}

/**
 * Resolves the initial locale from the `Accept-Language` header
 * (e.g. "pt-BR,pt;q=0.9,en;q=0.8"), falling back to `defaultLocale`.
 */
export function resolveLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale

  const candidates = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const quality = params.map((param) => param.trim().split('=')).find(([key]) => key === 'q')
      return { tag, quality: quality ? Number(quality[1]) : 1 }
    })
    .sort((a, b) => b.quality - a.quality)

  for (const { tag } of candidates) {
    const locale = mapLanguageTag(tag)
    if (locale) return locale
  }

  return defaultLocale
}
