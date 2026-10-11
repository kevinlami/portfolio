import Link from 'next/link'

// Rendered for invalid `lang` segments (the localized pages are static, so
// this view stays bilingual instead of resolving a dictionary).
export default function NotFound() {
  return (
    <div style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <h1>Page not found / Página não encontrada</h1>
      <p>The page you are looking for does not exist.</p>
      <p>A página que você procura não existe.</p>
      <Link href="/">kevinlami.dev →</Link>
    </div>
  )
}
