import { ProjectCard } from '@/components/ui/ProjectCard'
import { Section } from '@/components/ui/Section'
import type { ProjectsContent } from '@/types/portfolio'
import styles from './Projects.module.css'

interface ProjectsProps {
  content: ProjectsContent
}

export function Projects({ content: projectsContent }: ProjectsProps) {
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
