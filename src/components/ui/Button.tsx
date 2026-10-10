import type { ReactNode } from 'react'
import { Icon, type IconName } from './icons'
import styles from './Button.module.css'

export interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  /** Optional icon rendered after the label. */
  icon?: IconName
  children: ReactNode
}

/**
 * Anchor-based button for navigation actions (docs/DESIGN_SYSTEM.md §9.3).
 * Use native anchors for navigation; do not use clickable containers.
 */
export function Button({ href, variant = 'primary', icon, children }: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href}>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={18} /> : null}
    </a>
  )
}
