import type { ProjectsContent } from '@/types/portfolio'

// Real personal projects from https://github.com/kevinlami. Descriptions are
// faithful to each repository's README. Links point to the real repositories.
export const projectsContent: ProjectsContent = {
  sectionLabel: '04 // PROJECTS',
  heading: 'Selected Projects',
  projects: [
    {
      id: 'comic-tracker',
      category: 'FULL-STACK // 01',
      icon: 'layers',
      title: 'Comic Tracker',
      description:
        'Web app for tracking manga, manhwa, manhua, webtoons, and comics — register titles and reading sites, keep every link in one place, and follow reading progress and history.',
      snippet: 'pnpm monorepo with a typed frontend and a Prisma-backed API.',
      technologies: ['TypeScript', 'Prisma', 'pnpm'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/kevinlami/comic-tracker' }],
    },
    {
      id: 'dws-blog',
      category: 'FRONTEND // 02',
      icon: 'codeBlocks',
      title: 'DWS Blog',
      description:
        'Feature-based React blog with post listing and detail pages, filtering, sorting, search, and a responsive layout.',
      snippet: 'Unit and integration tests with Vitest and React Testing Library.',
      technologies: ['React 19', 'TypeScript', 'Vite', 'styled-components'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/kevinlami/DWS-Blog' }],
    },
    {
      id: 'k-recorder',
      category: 'AUTOMATION // 03',
      icon: 'terminal',
      title: 'K-Recorder',
      description:
        'Desktop macro recorder built with Python and PySide6 — capture keyboard and mouse sequences and replay them to automate repetitive tasks.',
      technologies: ['Python', 'PySide6', 'Qt'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/kevinlami/k-recorder' }],
    },
    {
      id: 'desafio-mb',
      category: 'CHALLENGE // 04',
      icon: 'category',
      title: 'Registration Form (MB)',
      description:
        'Registration form for individuals and legal entities driven by a dynamic form schema, with a small Express API behind it.',
      technologies: ['Vue', 'Vite', 'SCSS', 'Express'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/kevinlami/desafio-mb' }],
    },
    {
      id: 'portfolio',
      category: 'THIS SITE // 05',
      icon: 'speed',
      title: 'Portfolio',
      description:
        'This site — a personal portfolio built with Next.js App Router, strict TypeScript, CSS Modules, and a full test setup.',
      snippet: 'Unit tests in Vitest, end-to-end journeys in Cypress, CI with GitHub Actions.',
      technologies: ['Next.js', 'TypeScript', 'CSS Modules', 'Vitest', 'Cypress'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/kevinlami/portfolio' }],
    },
  ],
}
