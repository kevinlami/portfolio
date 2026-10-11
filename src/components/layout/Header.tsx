import Image from 'next/image'
import Link from 'next/link'
import { LocaleToggle } from '@/components/layout/LocaleToggle'
import { Icon } from '@/components/ui/icons'
import type { Locale } from '@/i18n/config'
import type { NavItem } from '@/types/portfolio'
import { profile } from '@/content/profile'
import styles from './Header.module.css'

interface HeaderProps {
  nav: NavItem[]
  currentLocale: Locale
  targetLocale: Locale
  navAriaLabel: string
  languageToggleAriaLabel: string
}

export function Header({
  nav,
  currentLocale,
  targetLocale,
  navAriaLabel,
  languageToggleAriaLabel,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${currentLocale}`} className={styles.brand}>
          <span className={styles.monogram} aria-hidden="true">
            {profile.monogram}
          </span>
          <span className={styles.brandText}>
            <span className={styles.name}>{profile.fullName}</span>
            <span className={`t-mono-tag ${styles.subtitle}`}>{profile.subtitle}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={navAriaLabel}>
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LocaleToggle
            currentLocale={currentLocale}
            targetLocale={targetLocale}
            ariaLabel={languageToggleAriaLabel}
          />

          {profile.status ? (
            <span className={styles.status}>
              <span className={`animate-pulse ${styles.statusDot}`} aria-hidden="true" />
              <span className="t-mono-tag">{profile.status}</span>
            </span>
          ) : null}

          <div className={styles.socials}>
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                className={styles.iconLink}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>

          <Image className={styles.avatar} src="/avatar.jpg" alt="" width={32} height={32} />
        </div>
      </div>
    </header>
  )
}
