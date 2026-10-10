import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '@/app/page'
import { aboutContent } from '@/content/about'
import { experienceContent } from '@/content/experience'
import { heroContent } from '@/content/hero'
import { profile } from '@/content/profile'
import { projectsContent } from '@/content/projects'
import { skillsContent } from '@/content/skills'

describe('Home page', () => {
  it('renders the real profile name as the main heading', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1, name: profile.fullName })).toBeInTheDocument()
  })

  it('renders every portfolio section with its anchor id', () => {
    render(<Home />)

    for (const id of ['about', 'skills', 'experience', 'projects', 'contact']) {
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it('renders the real section headings', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { level: 2, name: aboutContent.heading })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: skillsContent.heading })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: experienceContent.heading })
    ).toBeInTheDocument()
  })

  it('renders metric pills only when real metrics exist', () => {
    render(<Home />)

    const hero = screen
      .getByRole('heading', { level: 1, name: profile.fullName })
      .closest('section')

    if (heroContent.metrics.length === 0) {
      expect(hero?.querySelector('ul')).toBeNull()
    } else {
      expect(hero?.querySelector('ul')).not.toBeNull()
    }
  })

  it('points to the LinkedIn profile while experience entries are pending', () => {
    render(<Home />)

    const experience = document.getElementById('experience')
    expect(experience).not.toBeNull()

    if (experienceContent.entries.length === 0) {
      const linkedin = profile.socialLinks.find((link) => link.label === 'LinkedIn')
      const cta = within(experience as HTMLElement).getByRole('link', {
        name: /LinkedIn Profile/,
      })
      expect(cta).toHaveAttribute('href', linkedin?.href)
    }
  })

  it('links every project card to its real repository', () => {
    render(<Home />)

    for (const project of projectsContent.projects) {
      const heading = screen.getByRole('heading', { level: 3, name: project.title })
      const card = heading.closest('article')
      expect(card).not.toBeNull()

      for (const link of project.links) {
        const anchor = within(card as HTMLElement).getByRole('link', {
          name: link.label,
        })
        expect(anchor).toHaveAttribute('href', link.href)
      }
    }
  })

  it('omits email actions while no email is configured', () => {
    render(<Home />)

    if (!profile.email) {
      expect(screen.queryByRole('button', { name: 'Copy email address' })).not.toBeInTheDocument()
      expect(document.querySelector('a[href^="mailto:"]')).toBeNull()
    }
  })
})
