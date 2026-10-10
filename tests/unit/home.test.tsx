import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from '@/app/page'
import { profile } from '@/content/profile'

describe('Home page', () => {
  it('renders the profile name as the main heading', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1, name: profile.fullName })).toBeInTheDocument()
  })

  it('renders every portfolio section with its anchor id', () => {
    render(<Home />)

    for (const id of ['about', 'skills', 'experience', 'projects', 'contact']) {
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it('renders the section headings', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Engineering Philosophy & Approach' })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Technical Arsenal' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Verified Experience & Impact' })
    ).toBeInTheDocument()
  })

  it('omits project links when no valid destinations exist', () => {
    render(<Home />)

    expect(screen.queryByText('GitHub Repo')).not.toBeInTheDocument()
    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument()
  })
})
