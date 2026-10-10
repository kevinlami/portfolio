import type { SkillsContent } from '@/types/portfolio'

// Real stack, evidenced by the public repositories and their READMEs
// (DWS-Blog, comic-tracker, k-recorder, macro, desafio-mb, this portfolio).
export const skillsContent: SkillsContent = {
  sectionLabel: '02 // CAPABILITIES & STACK',
  heading: 'Skills & Tools',
  categories: [
    {
      title: 'Frontend Core',
      icon: 'codeBlocks',
      highlight: ['TypeScript', 'React'],
      skills: [
        'TypeScript',
        'JavaScript',
        'React',
        'Vue',
        'HTML5',
        'CSS3 / SCSS',
        'styled-components',
      ],
    },
    {
      title: 'Frameworks & Build',
      icon: 'layers',
      highlight: ['Next.js'],
      skills: ['Next.js', 'Vite', 'React Router', 'Axios', 'pnpm', 'npm'],
    },
    {
      title: 'Backend & Automation',
      icon: 'terminal',
      skills: ['Node.js', 'Prisma', 'Express', 'Python', 'PySide6', 'OpenCV'],
    },
    {
      title: 'Quality & Tooling',
      icon: 'tune',
      highlight: ['Vitest'],
      skills: [
        'Vitest',
        'React Testing Library',
        'Git / GitHub',
        'GitHub Actions',
        'ESLint',
        'Prettier',
      ],
    },
  ],
}
