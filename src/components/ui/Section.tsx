import type { ReactNode } from 'react'
import styles from './Section.module.css'

export interface SectionProps {
  id: string
  /** Technical section label, e.g. "01 // ABOUT". */
  label: string
  heading: string
  /** Alternate section background (`surface-container-lowest`). */
  toned?: boolean
  children: ReactNode
}

export function Section({ id, label, heading, toned = false, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${toned ? styles.toned : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className={`t-mono-tag ${styles.label}`}>{label}</p>
          <h2 className={`t-headline-lg ${styles.heading}`}>{heading}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
