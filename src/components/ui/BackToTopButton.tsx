'use client'

import { useCallback, useEffect, useState } from 'react'
import { Icon } from './icons'
import styles from './BackToTopButton.module.css'

export interface BackToTopButtonProps {
  ariaLabel: string
}

/**
 * Floating control that scrolls the page back to the top. It stays hidden
 * until the user has scrolled past one viewport height.
 */
export function BackToTopButton({ ariaLabel }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <button
      type="button"
      className={styles.button}
      data-visible={visible}
      onClick={handleClick}
      aria-label={ariaLabel}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrowUp" size={22} />
    </button>
  )
}
