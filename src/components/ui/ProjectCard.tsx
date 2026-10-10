import type { Project } from '@/types/portfolio'
import { Badge } from './Badge'
import { Icon } from './icons'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
  project: Project
}

/**
 * Project card emphasizing the problem solved and technical contribution
 * (docs/DESIGN_SYSTEM.md §9.4). Links render only when a valid destination
 * exists; optional content never breaks the card.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <span className={`t-mono-tag ${styles.category}`}>{project.category}</span>
          <Icon name={project.icon} size={20} className={styles.categoryIcon} />
        </div>
        <h3 className={`t-headline-sm ${styles.title}`}>{project.title}</h3>
        <p className={`t-body-md ${styles.description}`}>{project.description}</p>
        {project.snippet ? (
          <p className={`t-mono-code ${styles.snippet}`}>{project.snippet}</p>
        ) : null}
      </div>

      <div className={styles.footer}>
        <ul className={styles.techList}>
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge variant="muted">{technology}</Badge>
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className={styles.links}>
            {project.links.map((link, index) => (
              <a
                key={link.label}
                className={index === 0 ? styles.primaryLink : styles.secondaryLink}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span>
                <Icon name="openInNew" size={14} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
