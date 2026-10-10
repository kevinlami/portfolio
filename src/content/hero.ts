import type { HeroContent } from '@/types/portfolio'

// Real copy derived from the actual GitHub projects. Numeric metrics are
// intentionally empty until verified professional data is provided; the
// Hero hides the metric pills while the list is empty.
export const heroContent: HeroContent = {
  badge: 'Frontend Developer · React & TypeScript',
  headline: 'Frontend Development with React, Vue & TypeScript',
  summary:
    'I build web applications end to end — from React and Vue interfaces to Node.js APIs and Python automation tools. Explore my projects below, read the code on GitHub, or reach out on LinkedIn.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
  metrics: [],
}
