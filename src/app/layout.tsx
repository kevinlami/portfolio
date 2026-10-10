import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import './globals.css'

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

// PLACEHOLDER metadata — update with verified professional details.
export const metadata: Metadata = {
  title: 'Alexandre Ramos — Senior Frontend Engineer',
  description:
    'Personal portfolio of a Senior Frontend Engineer focused on web performance, design systems, and scalable frontend architecture.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
