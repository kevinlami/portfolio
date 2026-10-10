import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/types/portfolio'

const baseProject: Project = {
  id: 'sample',
  category: 'SYSTEM // 01',
  icon: 'layers',
  title: 'Sample Project',
  description: 'A sample project description.',
  technologies: ['TypeScript', 'React'],
  links: [],
}

describe('ProjectCard', () => {
  it('renders title, description, and technologies', () => {
    render(<ProjectCard project={baseProject} />)

    expect(screen.getByRole('heading', { level: 3, name: 'Sample Project' })).toBeInTheDocument()
    expect(screen.getByText('A sample project description.')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('hides the optional snippet when absent', () => {
    render(<ProjectCard project={baseProject} />)

    expect(screen.queryByText('highlight')).not.toBeInTheDocument()
  })

  it('renders links only when destinations are provided', () => {
    const { rerender } = render(<ProjectCard project={baseProject} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()

    rerender(
      <ProjectCard
        project={{
          ...baseProject,
          links: [{ label: 'Live Demo', href: 'https://example.com' }],
        }}
      />
    )

    const link = screen.getByRole('link', { name: /Live Demo/ })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders the snippet when provided', () => {
    render(<ProjectCard project={{ ...baseProject, snippet: 'Built with care.' }} />)

    expect(screen.getByText('Built with care.')).toBeInTheDocument()
  })
})
