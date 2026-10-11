'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/icons'
import type { NavItem } from '@/types/portfolio'
import styles from './MobileNav.module.css'

interface MobileNavProps {
  nav: NavItem[]
  navAriaLabel: string
  openMenuAriaLabel: string
  closeMenuAriaLabel: string
}

/**
 * Mobile-only navigation disclosure. Below the `lg` breakpoint the header's
 * inline nav list is hidden (docs/DESIGN_SYSTEM.md §9.1) and replaced by this
 * toggle, which reveals the same section links in a full-width panel.
 */
export function MobileNav({ nav, navAriaLabel, openMenuAriaLabel, closeMenuAriaLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? closeMenuAriaLabel : openMenuAriaLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'menu'} size={22} />
      </button>

      {open ? (
        <>
          <button
            type="button"
            className={styles.overlay}
            aria-label={closeMenuAriaLabel}
            onClick={() => setOpen(false)}
          />
          <nav id="mobile-nav-panel" className={styles.panel} aria-label={navAriaLabel}>
            <ul className={styles.list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <a className={styles.link} href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  )
}
