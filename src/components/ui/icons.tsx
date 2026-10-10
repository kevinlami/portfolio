import type { ReactElement } from 'react'

/**
 * Small inline SVG icon set (docs/DESIGN_SYSTEM.md §13).
 *
 * All icons share a 24x24 grid, use `currentColor`, and are rendered with a
 * uniform stroke style. Icons are decorative by default and hidden from
 * assistive technologies; interactive parents must provide accessible names.
 */

export type IconName =
  | 'code'
  | 'terminal'
  | 'mail'
  | 'at'
  | 'arrowForward'
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

const paths: Record<IconName, ReactElement> = {
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

export interface IconProps {
  name: IconName
  /** Rendered size in pixels. */
  size?: number
  className?: string
}

export function Icon({ name, size = 18, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
