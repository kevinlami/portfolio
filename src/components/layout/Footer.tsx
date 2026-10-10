import { profile } from '@/content/profile'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {year} {profile.fullName}. Engineered for precision and performance.
        </p>
        <p className={styles.meta}>
          <span>Next.js &amp; CSS Modules</span>
          <span className={styles.dot} aria-hidden="true" />
          <span>WCAG AA Compliant</span>
        </p>
        <p>
          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
