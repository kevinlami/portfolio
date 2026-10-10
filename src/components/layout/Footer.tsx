import { profile } from '@/content/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {year} {profile.fullName}. Built with Next.js &amp; CSS Modules.
        </p>
        <p className={styles.meta}>
          <span>WCAG AA Compliant</span>
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
