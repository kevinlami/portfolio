import type { HeroContent } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified professional copy before
// publishing. Metrics must be real and defensible (docs/PROJECT.md §3).
export const heroContent: HeroContent = {
  badge: 'Senior Frontend Engineer & Design Systems Specialist',
  headline: 'Senior Frontend Engineer · Web Performance & Architecture',
  summary:
    'Specializing in building scalable enterprise web applications, resilient design systems, and micro-frontends with high craft, rigorous accessibility (WCAG AA), and sub-second performance.',
  primaryCta: { label: 'Explore Featured Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
  metrics: [
    { value: '10+', label: 'Years Production Experience' },
    { value: '99+', label: 'Lighthouse Median Score', icon: 'speed' },
    { value: '14', label: 'Squads Empowered via DS' },
  ],
}
