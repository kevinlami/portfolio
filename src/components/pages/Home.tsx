import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

interface HomeProps {
  locale: Locale
}

export function Home({ locale }: HomeProps) {
  const dict = getDictionary(locale)

  return (
    <>
      <Hero content={dict.hero} />
      <About content={dict.about} />
      <Skills content={dict.skills} />
      <Experience content={dict.experience} />
      <Projects content={dict.projects} />
      <Contact content={dict.contact} />
    </>
  )
}
