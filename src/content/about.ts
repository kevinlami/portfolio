import type { AboutContent } from '@/types/portfolio'

// Real copy based on the actual public projects on GitHub. Employment
// history and credentials live in the Experience section / CV only.
export const aboutContent: AboutContent = {
  sectionLabel: '01 // ABOUT',
  heading: 'About Me',
  paragraphs: [
    'Frontend developer focused on building web applications with React, Vue, and TypeScript — from user interfaces to full-stack features with Node.js and Prisma.',
    'On the side I maintain personal projects: a manga and webtoon reading tracker, a blog with filtering and search, and Python desktop automation tools. I care about clear, typed code and tested features.',
  ],
  indicators: [
    { title: 'STACK', description: 'React · Vue · TypeScript' },
    { title: 'GITHUB', description: '24 Public Repositories' },
  ],
  tenets: [
    {
      icon: 'codeBlocks',
      title: 'Clean, Typed Code',
      description:
        'TypeScript-first projects with strict types and a structure that stays easy to extend.',
    },
    {
      icon: 'check',
      title: 'Tested Features',
      description:
        'Unit and integration tests with Vitest and React Testing Library on my main projects.',
    },
    {
      icon: 'hub',
      title: 'Full-Stack Curiosity',
      description:
        'Comfortable across the stack: Prisma-backed APIs, Express, and Python automation tools.',
    },
  ],
}
