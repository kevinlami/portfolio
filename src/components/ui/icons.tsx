import type { ReactElement } from 'react'

/**
 * Small inline SVG icon set (docs/DESIGN_SYSTEM.md §13).
 *
 * All icons share a 24x24 grid, use `currentColor`, and are rendered with a
 * uniform stroke style. Icons are decorative by default and hidden from
 * assistive technologies; interactive parents must provide accessible names.
 */

export type IconName =
  | 'github'
  | 'linkedin'
  | 'code'
  | 'terminal'
  | 'mail'
  | 'at'
  | 'arrowForward'
  | 'arrowUp'
  | 'arrowOutward'
  | 'openInNew'
  | 'copy'
  | 'check'
  | 'location'
  | 'download'
  | 'person'
  | 'badge'
  | 'category'
  | 'bolt'
  | 'security'
  | 'palette'
  | 'hub'
  | 'tune'
  | 'codeBlocks'
  | 'layers'
  | 'monitoring'
  | 'gridView'
  | 'shoppingBag'
  | 'accountTree'
  | 'speed'

type StrokeIconName = Exclude<IconName, 'github' | 'linkedin'>

const paths: Record<StrokeIconName, ReactElement> = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  terminal: (
    <>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </>
  ),
  at: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>
  ),
  arrowForward: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  arrowUp: (
    <>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </>
  ),
  arrowOutward: (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  openInNew: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  person: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  badge: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M5.5 17a3.5 3.5 0 0 1 7 0" />
      <line x1="15" y1="9" x2="19" y2="9" />
      <line x1="15" y1="13" x2="19" y2="13" />
    </>
  ),
  category: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v7" />
      <path d="M14 17.5h7" />
    </>
  ),
  bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  security: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />,
  palette: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="8.5" cy="9" r="1.2" />
      <circle cx="12" cy="7.5" r="1.2" />
      <circle cx="15.5" cy="9" r="1.2" />
      <path d="M12 21a4 4 0 0 0 0-8 3 3 0 0 1-3-3" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v4" />
      <path d="M12 11.5 6.5 16.8" />
      <path d="M12 11.5 17.5 16.8" />
    </>
  ),
  tune: (
    <>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </>
  ),
  codeBlocks: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <path d="M7 15v4a2 2 0 0 0 2 2h4" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  monitoring: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  gridView: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </>
  ),
  shoppingBag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  accountTree: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v4a2 2 0 0 0 2 2h5" />
      <path d="M18 15v-4a2 2 0 0 0-2-2h-5" />
    </>
  ),
  speed: (
    <>
      <path d="M12 15 16.5 10.5" />
      <path d="M3.5 18a10 10 0 1 1 17 0" />
    </>
  ),
}

/** Brand glyphs rendered as solid shapes (CC0 simple-icons paths). */
const filledPaths: Partial<Record<IconName, ReactElement>> = {
  github: (
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0.001z" />
  ),
}

export interface IconProps {
  name: IconName
  /** Rendered size in pixels. */
  size?: number
  className?: string
}

export function Icon({ name, size = 18, className }: IconProps) {
  const filled = filledPaths[name]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? undefined : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {filled ?? paths[name as StrokeIconName]}
    </svg>
  )
}
