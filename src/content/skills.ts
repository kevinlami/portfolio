import type { SkillsContent } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified skills before publishing.
export const skillsContent: SkillsContent = {
  sectionLabel: '02 // CAPABILITIES & STACK',
  heading: 'Technical Arsenal',
  categories: [
    {
      title: 'Frontend Core',
      icon: 'codeBlocks',
      highlight: ['TypeScript'],
      skills: [
        'TypeScript',
        'React 19',
        'Next.js (App Router)',
        'Vue.js',
        'Web Components',
        'HTML5 Semantics',
        'Modern ECMAScript',
      ],
    },
    {
      title: 'Design Systems & UI',
      icon: 'palette',
      highlight: ['Tailwind CSS'],
      skills: [
        'Tailwind CSS',
        'Design Token Engines',
        'Radix UI',
        'Storybook',
        'WCAG 2.2 AA/AAA',
        'Figma API Integration',
        'CSS Architecture',
      ],
    },
    {
      title: 'Architecture & State',
      icon: 'hub',
      highlight: ['Module Federation'],
      skills: [
        'Module Federation',
        'Micro-Frontends',
        'TanStack Query',
        'Zustand',
        'Redux Toolkit',
        'Web Workers',
        'GraphQL & REST',
      ],
    },
    {
      title: 'Performance & Tooling',
      icon: 'tune',
      highlight: ['Web Vitals Auditing'],
      skills: [
        'Web Vitals Auditing',
        'Vite & Turbopack',
        'Turborepo',
        'Playwright',
        'Vitest & Jest',
        'CI/CD GitHub Actions',
        'Webpack Internals',
      ],
    },
  ],
}
