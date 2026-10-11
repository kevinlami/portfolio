import { Fragment } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/icons'
import type { HeroContent } from '@/types/portfolio'
import { profile } from '@/content/profile'
import styles from './Hero.module.css'

interface HeroProps {
  content: HeroContent
}

export function Hero({ content: heroContent }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden="true">
        <div className={styles.glowCircle} />
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={`t-mono-tag ${styles.badge}`}>
          <span className={`animate-pulse ${styles.badgeDot}`} aria-hidden="true" />
          {heroContent.badge}
        </p>

        <div className={styles.titleBlock}>
          <h1 id="hero-heading" className={`t-display-xl ${styles.title}`}>
            {profile.fullName}
          </h1>
          <p className={`t-headline-md ${styles.headline}`}>{heroContent.headline}</p>
        </div>

        <p className={`t-body-lg ${styles.summary}`}>{heroContent.summary}</p>

        <div className={styles.actions}>
          <Button href={heroContent.primaryCta.href} variant="primary" icon="arrowForward">
            {heroContent.primaryCta.label}
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="secondary" icon="mail">
            {heroContent.secondaryCta.label}
          </Button>
        </div>

        <p className={styles.connect}>
          <span className={`t-mono-tag ${styles.connectLabel}`}>CONNECT:</span>
          {profile.socialLinks.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 ? (
                <span className={styles.separator} aria-hidden="true">
                  ·
                </span>
              ) : null}
              <a
                className={`t-mono-tag ${styles.socialLink}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${profile.fullName} on ${link.label}`}
              >
                <Icon name={link.icon} size={16} />
                {link.label}
              </a>
            </Fragment>
          ))}
          {profile.email ? (
            <Fragment>
              <span className={styles.separator} aria-hidden="true">
                ·
              </span>
              <a
                className={`t-mono-tag ${styles.socialLink}`}
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.fullName}`}
              >
                <Icon name="at" size={16} />
                Email
              </a>
            </Fragment>
          ) : null}
        </p>

        {heroContent.metrics.length > 0 ? (
          <ul className={styles.metrics}>
            {heroContent.metrics.map((metric) => (
              <li key={metric.label} className={styles.metric}>
                <span className={`t-mono-metric ${styles.metricValue}`}>
                  {metric.value}
                  {metric.icon ? <Icon name={metric.icon} size={18} /> : null}
                </span>
                <span className={`t-mono-tag ${styles.metricLabel}`}>{metric.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
