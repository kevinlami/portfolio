import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/icons'
import { Section } from '@/components/ui/Section'
import type { SkillsContent } from '@/types/portfolio'
import styles from './Skills.module.css'

interface SkillsProps {
  content: SkillsContent
}

export function Skills({ content: skillsContent }: SkillsProps) {
  return (
    <Section id="skills" label={skillsContent.sectionLabel} heading={skillsContent.heading}>
      <div className={styles.grid}>
        {skillsContent.categories.map((category) => (
          <div key={category.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={`t-headline-sm ${styles.cardTitle}`}>{category.title}</h3>
              <span className={styles.cardIcon} aria-hidden="true">
                <Icon name={category.icon} size={20} />
              </span>
            </div>
            <ul className={styles.skillList}>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge variant={category.highlight?.includes(skill) ? 'accent' : 'default'}>
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
