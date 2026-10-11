import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { BackToTopButton } from '@/components/ui/BackToTopButton'

const ariaLabel = 'Back to top'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

describe('BackToTopButton', () => {
  beforeEach(() => {
    setScrollY(0)
    window.scrollTo = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is hidden before scrolling past one viewport height', () => {
    render(<BackToTopButton ariaLabel={ariaLabel} />)

    const button = screen.getByRole('button', { name: ariaLabel })
    expect(button).toHaveAttribute('data-visible', 'false')
    expect(button).toHaveAttribute('tabindex', '-1')
  })

  it('becomes visible after scrolling past one viewport height', () => {
    render(<BackToTopButton ariaLabel={ariaLabel} />)

    setScrollY(window.innerHeight + 10)
    fireEvent.scroll(window)

    const button = screen.getByRole('button', { name: ariaLabel })
    expect(button).toHaveAttribute('data-visible', 'true')
    expect(button).toHaveAttribute('tabindex', '0')
  })

  it('scrolls smoothly to the top when clicked', () => {
    render(<BackToTopButton ariaLabel={ariaLabel} />)

    fireEvent.click(screen.getByRole('button', { name: ariaLabel }))

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
