import styles from './Badge.module.css'

export interface BadgeProps {
  variant?: 'default' | 'accent' | 'muted'
  children: string
}

/** Compact technology tag (docs/DESIGN_SYSTEM.md §9.6). */
export function Badge({ variant = 'default', children }: BadgeProps) {
  return <span className={`t-mono-tag ${styles.badge} ${styles[variant]}`}>{children}</span>
}
