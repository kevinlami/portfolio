import type { AboutContent } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified professional copy before
// publishing (docs/PROJECT.md §3).
export const aboutContent: AboutContent = {
  sectionLabel: '01 // ABOUT',
  heading: 'Engineering Philosophy & Approach',
  paragraphs: [
    'Bridging technical systems architecture with high-fidelity design execution. With a decade leading front-end initiatives for high-scale platforms, I view the web application layer as a precision product—requiring systematic determinism, measurable performance, and strict accessibility.',
    'My work focuses on eliminating operational friction between cross-functional product design and engineering teams. Through unified token pipelines, zero-runtime overhead styling, and micro-frontend federation, I build architectures that scale gracefully without compromising developer velocity.',
  ],
  indicators: [
    { title: '100% TYPED', description: 'Strict TS Contracts' },
    { title: 'WCAG 2.2 AA', description: 'Accessible Foundation' },
  ],
  tenets: [
    {
      icon: 'category',
      title: 'Design Systems at Scale',
      description:
        'Multi-brand token architectures supporting synchronized theming across web, iOS, and Android. Powered by automated visual regression checks, contract testing, and headless keyboard-navigable components.',
    },
    {
      icon: 'bolt',
      title: 'Performance as a Feature',
      description:
        'Systematic Core Web Vitals optimization, dynamic route-based bundle splitting, stream hydration protocols, and low-allocation rendering loops ensuring instant time-to-interactive on constrained devices.',
    },
    {
      icon: 'security',
      title: 'Resilient Architecture',
      description:
        'Clean TypeScript boundaries and schema-validated API data layers. Monorepo setups powered by Turborepo with deterministic build caches and comprehensive end-to-end integration suites.',
    },
  ],
}
