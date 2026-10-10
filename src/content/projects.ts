import type { ProjectsContent } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified projects before publishing.
// Project links stay empty until real repository/live-demo URLs exist; the
// UI omits them when absent (docs/ARCHITECTURE.md §7).
export const projectsContent: ProjectsContent = {
  sectionLabel: '04 // SELECTED WORKS',
  heading: 'Production Architecture & Systems',
  projects: [
    {
      id: 'aether-design-system',
      category: 'SYSTEM // 01',
      icon: 'layers',
      title: 'Aether Design System',
      description:
        'Multi-brand accessible design token engine and UI library with 45+ headless components and strict WCAG AA adherence.',
      snippet:
        'Automated Figma-to-code token sync via GitHub Actions; zero-runtime CSS bundle strategy.',
      technologies: ['TypeScript', 'Radix UI', 'Tailwind', 'Storybook'],
      links: [],
    },
    {
      id: 'pulse-telemetry',
      category: 'TELEMETRY // 02',
      icon: 'monitoring',
      title: 'Pulse Telemetry Dashboard',
      description:
        'High-throughput metrics dashboard rendering 100k+ data points with continuous 60 FPS hardware-accelerated canvas.',
      snippet:
        'Offloaded intensive data serialization to Web Workers, eliminating main-thread drops.',
      technologies: ['Next.js 14', 'WebSockets', 'WebGL', 'TanStack'],
      links: [],
    },
    {
      id: 'meridian-micro-frontend',
      category: 'CONTAINER // 03',
      icon: 'gridView',
      title: 'Meridian Micro-Frontend',
      description:
        'Enterprise multi-application host container leveraging Module Federation with shared authentication and state.',
      snippet:
        'Created runtime dependency deduplication pipeline saving ~1.2MB per federated route.',
      technologies: ['Module Fed', 'React 18', 'Zustand', 'Turborepo'],
      links: [],
    },
    {
      id: 'hyperion-headless',
      category: 'STOREFRONT // 04',
      icon: 'shoppingBag',
      title: 'Hyperion Headless',
      description:
        'Sub-second global eCommerce storefront utilizing Next.js incremental static regeneration and edge routing.',
      snippet: 'Achieved 99+ Core Web Vitals on mobile (LCP 1.1s, CLS 0.00, INP 42ms).',
      technologies: ['Next.js App', 'GraphQL', 'Edge Cache', 'TypeScript'],
      links: [],
    },
    {
      id: 'devaudit-cli',
      category: 'TOOLING // 05',
      icon: 'terminal',
      title: 'DevAudit Performance CLI',
      description:
        'Developer tooling CLI and GitHub Action validating accessibility standards and bundle budgets in PR checks.',
      snippet: 'Automated budget guardrails blocking size regressions across monorepo deployments.',
      technologies: ['Node.js', 'Lighthouse CI', 'AST Parsing', 'TypeScript'],
      links: [],
    },
    {
      id: 'canvasflow-editor',
      category: 'GRAPH // 06',
      icon: 'accountTree',
      title: 'CanvasFlow Node Editor',
      description:
        'Interactive visual workflow builder with drag-and-drop node graph routing and deep undo/redo states.',
      snippet:
        'Custom vector bezier path calculation with quadtree spatial partitioning for hit-testing.',
      technologies: ['SVG Engine', 'TypeScript', 'Zustand', 'Tailwind'],
      links: [],
    },
  ],
}
