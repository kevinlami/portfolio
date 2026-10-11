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
      <div className={styles.split}>
        <div className={styles.narrative}>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className={`t-body-md ${styles.paragraph}`}>
              {paragraph}
            </p>
          ))}
          <div className={styles.indicators}>
            {aboutContent.indicators.map((indicator) => (
              <div key={indicator.title} className={styles.indicator}>
                <span className={`t-mono-tag ${styles.indicatorTitle}`}>{indicator.title}</span>
                <span className={`t-mono-tag ${styles.indicatorDescription}`}>
                  {indicator.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tenets}>
          {aboutContent.tenets.map((tenet) => (
            <div key={tenet.title} className={styles.tenet}>
              <h3 className={`t-headline-sm ${styles.tenetTitle}`}>
                <span className={styles.tenetIcon} aria-hidden="true">
                  <Icon name={tenet.icon} size={22} />
                </span>
                {tenet.title}
              </h3>
              <p className={`t-body-md ${styles.tenetDescription}`}>{tenet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
