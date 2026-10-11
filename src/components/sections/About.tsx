import { Icon } from '@/components/ui/icons'
import { Section } from '@/components/ui/Section'
import type { AboutContent } from '@/types/portfolio'
import styles from './About.module.css'

interface AboutProps {
  content: AboutContent
}

export function About({ content: aboutContent }: AboutProps) {
  return (
    <Section id="about" label={aboutContent.sectionLabel} heading={aboutContent.heading} toned>
      <div className={styles.narrative}>
        {aboutContent.paragraphs.map((paragraph) => (
          <p key={paragraph} className={`t-body-md ${styles.paragraph}`}>
            {paragraph}
          </p>
        ))}
      </div>

      <ul className={styles.highlights}>
        {aboutContent.highlights.map((highlight) => (
          <li key={highlight.label} className={styles.highlight}>
            <span className={styles.highlightIcon} aria-hidden="true">
              <Icon name={highlight.icon} size={18} />
            </span>
            <span className={`t-body-sm ${styles.highlightLabel}`}>{highlight.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
