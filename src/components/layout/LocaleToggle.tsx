'use client'

import { localeLabels, localeCookieName } from '@/i18n/config'
import type { Locale } from '@/i18n/config'
import styles from './LocaleToggle.module.css'

interface LocaleToggleProps {
  currentLocale: Locale
  targetLocale: Locale
  ariaLabel: string
}

export function LocaleToggle({ currentLocale, targetLocale, ariaLabel }: LocaleToggleProps) {
  const rememberChoice = () => {
    document.cookie = `${localeCookieName}=${targetLocale};path=/;max-age=31536000;samesite=lax`
  }

  return (
    <p className={`t-mono-tag ${styles.toggle}`} aria-label={ariaLabel}>
      <span className={styles.current} aria-current="true">
        {localeLabels[currentLocale]}
      </span>
      <span className={styles.divider} aria-hidden="true">
        /
      </span>
      <a
        className={styles.link}
        href={`/${targetLocale}`}
        onClick={rememberChoice}
        lang={targetLocale}
      >
        {localeLabels[targetLocale]}
      </a>
    </p>
  )
}
