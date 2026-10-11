import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from '@/components/layout/Header'
import { profile } from '@/content/profile'
import { getDictionary } from '@/i18n/dictionaries'

const dict = getDictionary('en')

describe('Header', () => {
  it('renders the profile name and monogram', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    expect(screen.getByText(profile.fullName)).toBeInTheDocument()
    expect(screen.getByText(profile.monogram)).toBeInTheDocument()
  })

  it('renders a navigation landmark with every section link', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    const nav = screen.getByRole('navigation', { name: dict.layout.navAriaLabel })
    expect(nav).toBeInTheDocument()

    for (const item of dict.nav) {
      const link = screen.getByRole('link', { name: item.label })
      expect(link).toHaveAttribute('href', item.href)
    }
  })

  it('renders the language toggle pointing at the other locale', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    const target = screen.getByRole('link', { name: 'PT' })
    expect(target).toHaveAttribute('href', '/pt-BR')
    expect(target).toHaveAttribute('lang', 'pt-BR')
  })

  it('renders social links with accessible names and safe rel', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    for (const social of profile.socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the availability status only when configured', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    if (profile.status) {
      expect(screen.getByText(profile.status)).toBeInTheDocument()
    } else {
      expect(screen.queryByText(/Roles/)).not.toBeInTheDocument()
    }
  })

  it('opens and closes the mobile navigation panel', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    const toggle = screen.getByRole('button', { name: dict.layout.openMenuAriaLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)

    const closeButton = screen
      .getAllByRole('button', { name: dict.layout.closeMenuAriaLabel })
      .find((button) => button.hasAttribute('aria-expanded'))!
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')

    for (const item of dict.nav) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }

    fireEvent.click(closeButton)

    expect(screen.getByRole('button', { name: dict.layout.openMenuAriaLabel })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('closes the mobile navigation panel after selecting a link', () => {
    render(
      <Header
        nav={dict.nav}
        currentLocale="en"
        targetLocale="pt-BR"
        navAriaLabel={dict.layout.navAriaLabel}
        languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        openMenuAriaLabel={dict.layout.openMenuAriaLabel}
        closeMenuAriaLabel={dict.layout.closeMenuAriaLabel}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: dict.layout.openMenuAriaLabel }))

    const panel = document.getElementById('mobile-nav-panel')
    expect(panel).not.toBeNull()
    const [firstLink] = dict.nav
    fireEvent.click(
      Array.from(panel!.querySelectorAll('a')).find((link) => link.textContent === firstLink.label)!
    )

    expect(screen.getByRole('button', { name: dict.layout.openMenuAriaLabel })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })
})
