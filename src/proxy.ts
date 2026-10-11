import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isLocale, localeCookieName, locales, resolveLocaleFromHeader } from '@/i18n/config'

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(localeCookieName)?.value
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale

  return resolveLocaleFromHeader(request.headers.get('accept-language'))
}

// First visit without a locale prefix: redirect to the locale saved in the
// cookie (manual language choice), else the browser's Accept-Language locale.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameHasLocale) return

  const locale = getPreferredLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: '/((?!_next|api|favicon.ico|.*\\..*).*)',
}
