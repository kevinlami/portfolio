import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '@/components/layout/Footer'
import { profile } from '@/content/profile'

describe('Footer', () => {
  it('renders the profile name in the copyright notice', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(profile.fullName))).toBeInTheDocument()
  })

  it('renders a mailto link with the profile email', () => {
    render(<Footer />)

    const emailLink = screen.getByRole('link', { name: profile.email })
    expect(emailLink).toHaveAttribute('href', `mailto:${profile.email}`)
  })
})
