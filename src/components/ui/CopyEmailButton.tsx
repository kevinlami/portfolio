'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from './icons'
import styles from './CopyEmailButton.module.css'

export interface CopyEmailButtonProps {
  email: string
}

/**
 * Copy-to-clipboard control for the contact email. Falls back to opening the
 * mail client when the clipboard API is unavailable.
 */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      timerRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className={styles.wrap}>
      <a className={`t-mono-code ${styles.email}`} href={`mailto:${email}`}>
        {email}
      </a>
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopy}
        aria-label={copied ? 'Email copied' : 'Copy email address'}
      >
        <Icon name={copied ? 'check' : 'copy'} size={18} />
      </button>
    </div>
  )
}
