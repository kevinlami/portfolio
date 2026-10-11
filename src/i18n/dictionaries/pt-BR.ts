import type { Dictionary } from './en'

// Brazilian Portuguese dictionary. Must stay structurally identical to `en`.
export const ptBR: Dictionary = {
  layout: {
    skipToContent: 'Pular para o conteúdo principal',
    navAriaLabel: 'Seções do portfólio',
    languageToggleAriaLabel: 'Mudar idioma',
  },
  nav: [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ],
  hero: {
    badge: 'Engenheiro Front-End Sênior · React & TypeScript',
    headline:
      'Engenheiro Front-End Sênior construindo produtos rápidos e escaláveis com React & TypeScript',
    summary:
      'Quase uma década construindo aplicações Front-End com React, Vue e TypeScript para e-commerce, setor público e sistemas corporativos. Explore meus projetos abaixo, veja o código no GitHub ou entre em contato pelo LinkedIn.',
    primaryCta: { label: 'Ver Projetos', href: '#projects' },
    secondaryCta: { label: 'Fale Comigo', href: '#contact' },
    connectLabel: 'CONECTE-SE:',
    metrics: [],
  },
  about: {
    sectionLabel: '01 // SOBRE',
    heading: 'Sobre Mim',
    paragraphs: [
      'Engenheiro Front-End Sênior com trajetória profissional desde 2017, construindo aplicações em React, Vue e TypeScript para e-commerce, setor público e sistemas corporativos — da componentização e design systems a integrações com APIs REST.',
      'Nas horas livres mantenho projetos pessoais: um gerenciador de leitura de mangás e webtoons, um blog com filtros e busca e ferramentas de automação em Python para desktop. Gosto de código claro, tipado e com features testadas.',
    ],
    indicators: [
      { title: 'STACK', description: 'React · Vue · TypeScript' },
      { title: 'EXPERIÊNCIA', description: 'Na profissão desde 2017' },
    ],
    tenets: [
      {
        icon: 'codeBlocks',
        title: 'Código Limpo e Tipado',
        description:
          'Projetos TypeScript-first com tipos estritos e uma estrutura que continua fácil de estender.',
      },
      {
        icon: 'check',
        title: 'Features Testadas',
        description:
          'Testes unitários e de integração com Vitest e React Testing Library nos meus principais projetos.',
      },
      {
        icon: 'hub',
        title: 'Curiosidade Full-Stack',
        description:
          'Confortável em toda a stack: APIs com Prisma, Express e ferramentas de automação em Python.',
      },
    ],
  },
  skills: {
    sectionLabel: '02 // CAPACIDADES & STACK',
    heading: 'Habilidades & Ferramentas',
    categories: [
      {
        title: 'Front-End Essencial',
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
        title: 'Back-End & Automação',
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
        title: 'Qualidade & Ferramentas',
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
        title: 'Processo & Colaboração',
        icon: 'hub',
        skills: ['Scrum', 'Kanban', 'Jira', 'Asana', 'Redmine', 'Code Review'],
      },
    ],
  },
  experience: {
    sectionLabel: '03 // EXPERIÊNCIA',
    heading: 'Experiência',
    emptyText:
      'Meu histórico completo de trabalho e formação está disponível no meu perfil do LinkedIn.',
    entries: [
      {
        role: 'Desenvolvedor Front-End Sênior',
        company: 'Solutis Tecnologias',
        period: 'set. 2026 — Atual · Curitiba, PR',
        description:
          'Consultoria alocada no Ministério Público da Bahia: desenvolvimento, sustentação e evolução de aplicações Front-End com React, TypeScript e Material UI, aplicando Hooks, componentização e Design System. Foco em performance, testes unitários, SonarQube e ESLint, com gestão de tarefas em Scrum/Kanban via Redmine.',
        metrics: [],
      },
      {
        role: 'Desenvolvedor Front-End Sênior',
        company: 'Qintess',
        period: 'abr. 2026 — set. 2026 (6 meses)',
        description:
          'Alocado no Ministério Público da Bahia: desenvolvimento e evolução de aplicações Front-End com React, TypeScript e Material UI, com integração a APIs REST, testes unitários e qualidade via SonarQube e ESLint. Colaboração com Backend, UX/UI e Produto em Scrum/Kanban.',
        metrics: [],
      },
      {
        role: 'Desenvolvedor Front-End Pleno',
        company: 'Qintess',
        period: 'jun. 2025 — abr. 2026 (11 meses)',
        description:
          'Implementação de novas funcionalidades e manutenção evolutiva de aplicações do Ministério Público da Bahia, com React, TypeScript e Material UI, aplicando componentização, gerenciamento de estado e boas práticas de arquitetura Front-End.',
        metrics: [],
      },
      {
        role: 'Desenvolvedor Pleno',
        company: 'Linx (Grupo Stone)',
        period: 'ago. 2021 — jun. 2025 (3 anos 11 meses) · Florianópolis, SC',
        description:
          'Sustentação e evolução de aplicações de e-commerce com React, Vue.js e JavaScript, integradas a APIs REST e à plataforma VTEX. Implementação de CI/CD com GitHub Actions e CircleCI, gestão de demandas em Jira e Asana, e participação em code review e entregas contínuas.',
        metrics: [],
      },
      {
        role: 'Desenvolvedor Júnior',
        company: 'Celula4',
        period: 'jun. 2017 — jan. 2021 (3 anos 8 meses) · Florianópolis',
        description:
          'Desenvolvimento e manutenção de sistemas corporativos para órgãos públicos com Vue.js, JavaScript, jQuery e Bootstrap, integrados a uma API REST em PHP (Zend Framework, Doctrine ORM) e MySQL, seguindo arquitetura MVC.',
        metrics: [],
      },
      {
        role: 'Estagiário',
        company: 'Labtrans',
        period: '2014 — 2016 (2 anos) · Florianópolis',
        description:
          'Desenvolvimento e manutenção de sistemas web em arquitetura MVC com C#, ASP.NET MVC e SQL Server, incluindo modelagem de banco de dados e interfaces responsivas com Bootstrap.',
        metrics: [],
      },
    ],
  },
  projects: {
    sectionLabel: '04 // PROJETOS',
    heading: 'Projetos em Destaque',
    projects: [
      {
        id: 'comic-tracker',
        category: 'FULL-STACK // 01',
        icon: 'layers',
        title: 'Comic Tracker',
        description:
          'Aplicação web para acompanhar mangás, manhwas, manhuas, webtoons e quadrinhos — cadastre títulos e sites de leitura, mantenha todos os links em um só lugar e acompanhe o progresso e o histórico de leitura.',
        snippet: 'Monorepo com pnpm, front-end tipado e API com Prisma.',
        technologies: ['TypeScript', 'Prisma', 'pnpm'],
        links: [
          { label: 'Repositório no GitHub', href: 'https://github.com/kevinlami/comic-tracker' },
        ],
      },
      {
        id: 'dws-blog',
        category: 'FRONT-END // 02',
        icon: 'codeBlocks',
        title: 'DWS Blog',
        description:
          'Blog em React organizado por features, com listagem e página de detalhes de posts, filtros, ordenação, busca e layout responsivo.',
        snippet: 'Testes unitários e de integração com Vitest e React Testing Library.',
        technologies: ['React 19', 'TypeScript', 'Vite', 'styled-components'],
        links: [{ label: 'Repositório no GitHub', href: 'https://github.com/kevinlami/DWS-Blog' }],
      },
      {
        id: 'k-recorder',
        category: 'AUTOMAÇÃO // 03',
        icon: 'terminal',
        title: 'K-Recorder',
        description:
          'Gravador de macros para desktop feito com Python e PySide6 — captura sequências de teclado e mouse e as reproduz para automatizar tarefas repetitivas.',
        technologies: ['Python', 'PySide6', 'Qt'],
        links: [
          { label: 'Repositório no GitHub', href: 'https://github.com/kevinlami/k-recorder' },
        ],
      },
      {
        id: 'desafio-mb',
        category: 'DESAFIO // 04',
        icon: 'category',
        title: 'Formulário de Cadastro (MB)',
        description:
          'Formulário de cadastro para pessoas físicas e jurídicas dirigido por um schema dinâmico de formulário, com uma pequena API em Express por trás.',
        technologies: ['Vue', 'Vite', 'SCSS', 'Express'],
        links: [
          { label: 'Repositório no GitHub', href: 'https://github.com/kevinlami/desafio-mb' },
        ],
      },
      {
        id: 'portfolio',
        category: 'ESTE SITE // 05',
        icon: 'speed',
        title: 'Portfólio',
        description:
          'Este site — um portfólio pessoal construído com Next.js App Router, TypeScript estrito, CSS Modules e uma suíte completa de testes.',
        snippet: 'Testes unitários em Vitest, jornadas e2e em Cypress, CI com GitHub Actions.',
        technologies: ['Next.js', 'TypeScript', 'CSS Modules', 'Vitest', 'Cypress'],
        links: [{ label: 'Repositório no GitHub', href: 'https://github.com/kevinlami/portfolio' }],
      },
    ],
  },
  contact: {
    sectionLabel: '05 // CONTATO',
    heading: 'Fale Comigo',
    statement:
      'Estou aberto a novas oportunidades. Fale comigo por e-mail, conecte-se no LinkedIn ou confira meu código no GitHub.',
  },
  footer: {
    builtWith: 'Construído com Next.js e CSS Modules.',
    compliance: 'Em conformidade com WCAG AA',
  },
}
