import type { FooterContent } from '@/types/portfolio'
import { profile } from '@/content/profile'
import styles from './Footer.module.css'

interface FooterProps {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {year} {profile.fullName}. {content.builtWith}
        </p>
        <p className={styles.meta}>
          <span>{content.compliance}</span>
        </p>
        {profile.email ? (
          <p>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        ) : null}
      </div>
    </footer>
  )
}
