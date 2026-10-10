import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from '@/components/layout/Header'
import { navItems, profile } from '@/content/profile'

describe('Header', () => {
  it('renders the profile name and monogram', () => {
    render(<Header />)

    expect(screen.getByText(profile.fullName)).toBeInTheDocument()
    expect(screen.getByText(profile.monogram)).toBeInTheDocument()
  })

  it('renders a navigation landmark with every section link', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Portfolio sections' })
    expect(nav).toBeInTheDocument()

    for (const item of navItems) {
      const link = screen.getByRole('link', { name: item.label })
      expect(link).toHaveAttribute('href', item.href)
    }
  })

  it('renders social links with accessible names and safe rel', () => {
    render(<Header />)

    for (const social of profile.socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the availability status only when configured', () => {
    render(<Header />)

    if (profile.status) {
      expect(screen.getByText(profile.status)).toBeInTheDocument()
    } else {
      expect(screen.queryByText(/Roles/)).not.toBeInTheDocument()
    }
  })
})
