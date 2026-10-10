import type { ExperienceContent } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified employment history before
// publishing. Do not invent companies, roles, dates, or metrics
// (docs/PROJECT.md §3).
export const experienceContent: ExperienceContent = {
  sectionLabel: '03 // CAREER TRAJECTORY',
  heading: 'Verified Experience & Impact',
  entries: [
    {
      role: 'Lead Frontend Engineer',
      company: 'FinTech Global Platform',
      period: '2022 — Present',
      description:
        'Spearheading company-wide core design system adoption across 14 product squads while architecting a modern micro-frontend migration from legacy SPAs. Direct technical mentorship and governance for 25+ frontend engineers.',
      metrics: [
        { value: '-48%', label: 'Initial Bundle Size' },
        { value: '99.8%', label: 'Lighthouse a11y Rate' },
        { value: '35% Faster', label: 'UI Feature Shipping' },
      ],
    },
    {
      role: 'Senior Frontend Engineer',
      company: 'Scale-up Cloud SaaS',
      period: '2019 — 2022',
      description:
        'Engineered collaborative real-time analytics dashboards powered by streaming WebSockets and hardware-accelerated canvas chart renders. Standardized the organization’s shared component ecosystem.',
      metrics: [
        { value: '450k+ DAU', label: 'Scaled with Zero Outages' },
        { value: '40+ Devs', label: 'Using Shared UI Suite' },
        { value: '60 FPS', label: 'Continuous Canvas Render' },
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Digital Engineering Studio',
      period: '2016 — 2019',
      description:
        'Delivered bespoke headless commerce web applications and progressive web apps for top-tier international consumer retail clients. Implemented high-performance checkout flows and localized user journeys.',
      metrics: [
        { value: '+14% Uplift', label: 'Checkout Conversion' },
        { value: '<1.2s', label: 'Average Mobile TTI' },
        { value: '8 Global', label: 'Enterprise Deployments' },
      ],
    },
  ],
}
