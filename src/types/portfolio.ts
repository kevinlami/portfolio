import type { IconName } from '@/components/ui/icons'

/**
 * PLACEHOLDER CONTENT NOTICE
 *
 * All data structures in `src/content/` currently hold placeholder content
 * extracted from the approved layout mockup. Replace every value with
 * verified professional data before publishing. Do not publish invented
 * metrics, companies, projects, or claims (docs/PROJECT.md §3).
 */

export interface SocialLink {
  /** Accessible label for the link, e.g. "GitHub". */
  label: string
  /** Valid destination URL. Render only when present. */
  href: string
  /** Icon rendered before the label. */
  icon: IconName
}

export interface Profile {
  fullName: string
  /** Two-letter monogram shown next to the name. */
  monogram: string
  title: string
  /** Short subtitle shown under the name in the header. */
  subtitle: string
  /** Availability badge text. Render only when present. */
  status?: string
  email: string
  /** Location or availability statement. */
  location: string
  socialLinks: SocialLink[]
}

export interface NavItem {
  label: string
  /** In-page anchor, e.g. "#about". */
  href: string
}

export interface HeroMetric {
  value: string
  label: string
  /** Optional decorative icon rendered next to the value. */
  icon?: IconName
}

export interface HeroContent {
  badge: string
  headline: string
  summary: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  metrics: HeroMetric[]
}

export interface AboutIndicator {
  title: string
  description: string
}

export interface AboutTenet {
  icon: IconName
  title: string
  description: string
}

export interface AboutContent {
  sectionLabel: string
  heading: string
  paragraphs: string[]
  indicators: AboutIndicator[]
  tenets: AboutTenet[]
}

export interface SkillCategory {
  title: string
  icon: IconName
  skills: string[]
  /** Skill names highlighted with the accent color. */
  highlight?: string[]
}

export interface SkillsContent {
  sectionLabel: string
  heading: string
  categories: SkillCategory[]
}

export interface ExperienceMetric {
  value: string
  label: string
}

export interface ExperienceEntry {
  role: string
  company: string
  period: string
  description: string
  metrics: ExperienceMetric[]
}

export interface ExperienceContent {
  sectionLabel: string
  heading: string
  entries: ExperienceEntry[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  category: string
  icon: IconName
  title: string
  description: string
  /** Short technical highlight rendered in a code-like block. */
  snippet?: string
  technologies: string[]
  /** Render only links with valid destinations; omit empty arrays. */
  links: ProjectLink[]
}

export interface ProjectsContent {
  sectionLabel: string
  heading: string
  projects: Project[]
}

export interface ContactContent {
  sectionLabel: string
  heading: string
  statement: string
}
