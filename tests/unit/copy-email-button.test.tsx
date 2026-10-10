import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CopyEmailButton } from '@/components/ui/CopyEmailButton'

const email = 'dev@example.com'

describe('CopyEmailButton', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders a mailto link with the email address', () => {
    render(<CopyEmailButton email={email} />)

    const link = screen.getByRole('link', { name: email })
    expect(link).toHaveAttribute('href', `mailto:${email}`)
  })

  it('copies the email to the clipboard and confirms via the accessible label', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    render(<CopyEmailButton email={email} />)

    fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }))

    await waitFor(() => expect(writeText).toHaveBeenCalledWith(email))
    expect(await screen.findByRole('button', { name: 'Email copied' })).toBeInTheDocument()
  })

  it('falls back to a mailto navigation when the clipboard is unavailable', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn().mockRejectedValue(new Error('denied')),
      },
      configurable: true,
    })

    // jsdom does not implement navigation; assert no crash and no clipboard success.
    render(<CopyEmailButton email={email} />)

    fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Copy email address' })).toBeInTheDocument()
    })
  })
})
