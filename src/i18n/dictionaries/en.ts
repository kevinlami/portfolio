import type {
  AboutContent,
  ContactContent,
  ExperienceContent,
  FooterContent,
  HeroContent,
  NavItem,
  ProjectsContent,
  SkillsContent,
} from '@/types/portfolio'

// English dictionary. This object defines the Dictionary shape; `pt-BR.ts`
// must stay structurally identical.
export const en = {
  layout: {
    skipToContent: 'Skip to main content',
    navAriaLabel: 'Portfolio sections',
    languageToggleAriaLabel: 'Switch language',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],
  hero: {
    badge: 'Senior Frontend Engineer · React & TypeScript',
    headline: 'Senior Frontend Engineer building fast, scalable React & TypeScript products',
    summary:
      'Nearly a decade building Front-End applications with React, Vue, and TypeScript across e-commerce, public sector, and enterprise systems. Explore my projects below, read the code on GitHub, or reach out on LinkedIn.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Get in Touch', href: '#contact' },
    connectLabel: 'CONNECT:',
    metrics: [],
  } satisfies HeroContent,
  about: {
    sectionLabel: '01 // ABOUT',
    heading: 'About Me',
    paragraphs: [
      'Senior Frontend Engineer with a professional path since 2017, building React, Vue, and TypeScript applications for e-commerce, public sector, and enterprise systems — from componentization and design systems to REST API integrations.',
      'On the side I maintain personal projects: a manga and webtoon reading tracker, a blog with filtering and search, and Python desktop automation tools. I care about clear, typed code and tested features.',
    ],
    indicators: [
      { title: 'STACK', description: 'React · Vue · TypeScript' },
      { title: 'EXPERIENCE', description: 'Professional since 2017' },
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
  } satisfies AboutContent,
  skills: {
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
          'Redux',
          'HTML5',
          'CSS3 / SCSS',
          'Material UI',
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
        skills: [
          'Node.js',
          'Prisma',
          'Express',
          'PHP',
          'Zend Framework',
          'MySQL',
          'Python',
          'PySide6',
          'OpenCV',
        ],
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
          'CircleCI',
          'SonarQube',
          'ESLint',
          'Prettier',
        ],
      },
      {
        title: 'Process & Collaboration',
        icon: 'hub',
        skills: ['Scrum', 'Kanban', 'Jira', 'Asana', 'Redmine', 'Code Review'],
      },
    ],
  } satisfies SkillsContent,
  experience: {
    sectionLabel: '03 // EXPERIENCE',
    heading: 'Experience',
    emptyText: 'My full work and education history is available on my LinkedIn profile.',
    entries: [
      {
        role: 'Senior Frontend Developer',
        company: 'Solutis Tecnologias',
        period: 'Sep 2026 — Present · Curitiba, PR, Brazil',
        description:
          "Consulting firm allocated to the Ministério Público da Bahia (Bahia State Public Prosecutor's Office): development, maintenance, and evolution of Front-End applications with React, TypeScript, and Material UI, applying Hooks, componentization, and Design System. Focus on performance, unit testing, SonarQube, and ESLint, with Scrum/Kanban task management via Redmine.",
        metrics: [],
      },
      {
        role: 'Senior Frontend Developer',
        company: 'Qintess',
        period: 'Apr 2026 — Sep 2026 (6 months)',
        description:
          "Allocated to the Ministério Público da Bahia (Bahia State Public Prosecutor's Office): development and evolution of Front-End applications with React, TypeScript, and Material UI, integrating REST APIs, with unit testing and quality analysis via SonarQube and ESLint. Collaboration with Backend, UX/UI, and Product teams in Scrum/Kanban.",
        metrics: [],
      },
      {
        role: 'Mid-Level Frontend Developer',
        company: 'Qintess',
        period: 'Jun 2025 — Apr 2026 (11 months)',
        description:
          'Implementation of new features and evolutionary maintenance of Ministério Público da Bahia production applications, with React, TypeScript, and Material UI, applying componentization, state management, and Front-End architecture best practices.',
        metrics: [],
      },
      {
        role: 'Mid-Level Developer',
        company: 'Linx (Grupo Stone)',
        period: 'Aug 2021 — Jun 2025 (3 yrs 11 mos) · Florianópolis, SC, Brazil',
        description:
          'Maintenance and evolution of e-commerce applications with React, Vue.js, and JavaScript, integrated with REST APIs and the VTEX platform. CI/CD implementation with GitHub Actions and CircleCI, demand management in Jira and Asana, plus code review and continuous delivery.',
        metrics: [],
      },
      {
        role: 'Junior Developer',
        company: 'Celula4',
        period: 'Jun 2017 — Jan 2021 (3 yrs 8 mos) · Florianópolis, Brazil',
        description:
          'Development and maintenance of corporate systems for public-sector organizations with Vue.js, JavaScript, jQuery, and Bootstrap, integrated with a PHP REST API (Zend Framework, Doctrine ORM) and MySQL, following MVC architecture.',
        metrics: [],
      },
      {
        role: 'Intern',
        company: 'Labtrans',
        period: '2014 — 2016 (2 yrs) · Florianópolis, Brazil',
        description:
          'Development and maintenance of MVC-architecture web systems with C#, ASP.NET MVC, and SQL Server, including database modeling and responsive interfaces with Bootstrap.',
        metrics: [],
      },
    ],
  } satisfies ExperienceContent,
  projects: {
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
  } satisfies ProjectsContent,
  contact: {
    sectionLabel: '05 // CONTACT',
    heading: 'Get in Touch',
    statement:
      "I'm open to new opportunities. Reach out by email, connect on LinkedIn, or browse my code on GitHub.",
  } satisfies ContactContent,
  footer: {
    builtWith: 'Built with Next.js & CSS Modules.',
    compliance: 'WCAG AA Compliant',
  } satisfies FooterContent,
}

export type Dictionary = typeof en
