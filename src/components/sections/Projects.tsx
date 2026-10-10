import { ProjectCard } from '@/components/ui/ProjectCard'
import { Section } from '@/components/ui/Section'
import { projectsContent } from '@/content/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <Section id="projects" label={projectsContent.sectionLabel} heading={projectsContent.heading}>
      <div className={styles.grid}>
        {projectsContent.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
