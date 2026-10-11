import { CopyEmailButton } from '@/components/ui/CopyEmailButton'
import { Icon } from '@/components/ui/icons'
import { Section } from '@/components/ui/Section'
import type { ContactContent } from '@/types/portfolio'
import { profile } from '@/content/profile'
import styles from './Contact.module.css'

interface ContactProps {
  content: ContactContent
}

export function Contact({ content: contactContent }: ContactProps) {
  return (
    <Section
      id="contact"
      label={contactContent.sectionLabel}
      heading={contactContent.heading}
      toned
    >
      <div className={styles.cta}>
        <div className={styles.copy}>
          <p className={`t-body-lg ${styles.statement}`}>{contactContent.statement}</p>
          {profile.location ? (
            <p className={`t-mono-tag ${styles.location}`}>
              <span className={styles.locationIcon} aria-hidden="true">
                <Icon name="location" size={16} />
              </span>
              {profile.location}
            </p>
          ) : null}
        </div>

        <div className={styles.actions}>
          {profile.email ? <CopyEmailButton email={profile.email} /> : null}
          <div className={styles.networkLinks}>
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                className={styles.networkLink}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span>
                <Icon name="arrowOutward" size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
