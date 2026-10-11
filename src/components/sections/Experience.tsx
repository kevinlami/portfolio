import { Icon } from '@/components/ui/icons'
import { Section } from '@/components/ui/Section'
import type { ExperienceContent } from '@/types/portfolio'
import { profile } from '@/content/profile'
import styles from './Experience.module.css'

const linkedin = profile.socialLinks.find((link) => link.label === 'LinkedIn')

interface ExperienceProps {
  content: ExperienceContent
}

export function Experience({ content: experienceContent }: ExperienceProps) {
  return (
    <Section
      id="experience"
      label={experienceContent.sectionLabel}
      heading={experienceContent.heading}
      toned
    >
      {experienceContent.entries.length === 0 ? (
        <div className={styles.empty}>
          <p className={`t-body-md ${styles.emptyText}`}>{experienceContent.emptyText}</p>
          {linkedin ? (
            <a className={styles.linkedinCta} href={linkedin.href} target="_blank" rel="noreferrer">
              <span>View LinkedIn Profile</span>
              <Icon name="arrowOutward" size={14} />
            </a>
          ) : null}
        </div>
      ) : (
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
      )}
    </Section>
  )
}
