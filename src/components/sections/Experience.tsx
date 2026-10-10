import { Section } from '@/components/ui/Section'
import { experienceContent } from '@/content/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section
      id="experience"
      label={experienceContent.sectionLabel}
      heading={experienceContent.heading}
      toned
    >
      <div className={styles.list}>
        {experienceContent.entries.map((entry) => (
          <article key={entry.role + entry.company} className={styles.entry}>
            <div className={styles.header}>
              <div>
                <h3 className={`t-headline-sm ${styles.role}`}>{entry.role}</h3>
                <p className={`t-label-ui ${styles.company}`}>{entry.company}</p>
              </div>
              <p className={`t-mono-tag ${styles.period}`}>{entry.period}</p>
            </div>
            <p className={`t-body-md ${styles.description}`}>{entry.description}</p>
            <ul className={styles.metrics}>
              {entry.metrics.map((metric) => (
                <li key={metric.label} className={styles.metric}>
                  <span className={`t-mono-code ${styles.metricValue}`}>{metric.value}</span>
                  <span className={`t-mono-tag ${styles.metricLabel}`}>{metric.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
