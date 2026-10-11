import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { defaultLocale, isLocale, locales, otherLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import '../globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale)

  return {
    title: 'Kevin Lami — Senior Frontend Engineer',
    description: dict.hero.summary,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = isLocale(lang) ? lang : defaultLocale
  const dict = getDictionary(locale)

  return (
    <html lang={locale} className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">
          {dict.layout.skipToContent}
        </a>
        <Header
          nav={dict.nav}
          currentLocale={locale}
          targetLocale={otherLocale(locale)}
          navAriaLabel={dict.layout.navAriaLabel}
          languageToggleAriaLabel={dict.layout.languageToggleAriaLabel}
        />
        <main id="main-content" className="main">
          {children}
        </main>
        <Footer content={dict.footer} />
      </body>
    </html>
  )
}
