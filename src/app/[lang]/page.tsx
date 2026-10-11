import { notFound } from 'next/navigation'
import { Home } from '@/components/pages/Home'
import { isLocale } from '@/i18n/config'

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params

  if (!isLocale(lang)) notFound()

  return <Home locale={lang} />
}
