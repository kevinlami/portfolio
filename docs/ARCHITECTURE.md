# Architecture — Senior Frontend Portfolio

## 1. Overview

This project is a personal portfolio website built with Next.js, React, and TypeScript.

The application is a frontend-only project with predominantly static content. It must be easy to maintain, performant, accessible, testable, and deployable without recurring costs.

The architecture should remain intentionally simple. Introduce additional abstractions, dependencies, or infrastructure only when justified by a concrete requirement.

Refer to `docs/PROJECT.md` for product requirements and scope.

## 2. Technology Stack

### Core

- **Next.js:** App Router and static-friendly rendering.
- **React:** UI composition and reusable components.
- **TypeScript:** Strict type checking.
- **Node.js:** Local development and build environment.
- **npm:** Dependency management and reproducible installations.

### Styling

- CSS Modules for component-scoped styles.
- CSS custom properties for design tokens.
- Global CSS limited to resets, typography defaults, theme tokens, and global styles.
- No mandatory UI component library.

### Testing

- **Vitest:** Unit tests.
- **React Testing Library:** Component behavior and accessible rendering.
- **Cypress:** End-to-end browser tests.

### Quality and Delivery

- ESLint for static analysis.
- Prettier for code formatting.
- TypeScript compiler for type checking.
- GitHub Actions for continuous integration.
- Vercel Hobby for deployment, subject to current plan eligibility and limits.

Use compatible, stable package versions. Keep the package manager and lockfile consistent.

## 3. Architectural Style

Use a component-based frontend architecture with clear separation of responsibilities.

The application consists of:

1. Application routes and layouts.
2. Page sections.
3. Reusable UI components.
4. Static portfolio content.
5. Types and pure utility functions.
6. Automated tests and delivery configuration.

Do not introduce backend services, databases, authentication, global state management libraries, or microfrontend infrastructure in the MVP.

## 4. Rendering Strategy

### 4.1 Server Components by Default

Use React Server Components through the Next.js App Router whenever possible.

Static portfolio content should be rendered without requiring unnecessary client-side JavaScript.

### 4.2 Client Components

Use the `'use client'` directive only when a component requires client-side capabilities, such as:

- React state or effects.
- Browser APIs.
- Interactive mobile navigation.
- Interactive project filtering, if implemented.
- Other behavior that requires client-side event handlers.

Keep client boundaries as narrow as practical. Do not convert entire page sections into Client Components when only a small child component requires interactivity.

### 4.3 Static Content and Rendering

The portfolio should favor statically renderable pages.

- Store content in TypeScript modules.
- Avoid request-time data fetching when the content is already available locally.
- Use static generation where appropriate.
- Do not force static export unless the deployment requirements justify it.

Vercel can host the normal Next.js application without requiring a custom server or a separate backend.

## 5. Project Structure

Use the following structure as the initial organizational convention:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── ProjectCard.tsx
├── content/
│   ├── profile.ts
│   ├── projects.ts
│   └── experience.ts
├── lib/
│   └── projects.ts
└── types/
    └── portfolio.ts

tests/
└── unit/

cypress/
├── e2e/
├── fixtures/
└── support/
```

This is a target structure, not a requirement to create every file immediately.

Only add project detail routes when they are justified by actual content. Keep tests organized consistently with the selected Vitest configuration.

## 6. Module Responsibilities

### `src/app/`

Contains Next.js routes, root layout, page metadata, global CSS imports, and route-level error or not-found handling.

Route components should compose sections and coordinate page-level behavior rather than implement all presentation details inline.

### `src/components/layout/`

Contains shared site layout elements, such as the header and footer.

### `src/components/sections/`

Contains major page sections.

Sections coordinate content and reusable UI components. They should not duplicate generic button, badge, or card implementations.

### `src/components/ui/`

Contains reusable, presentation-focused UI components.

Examples include buttons, technology badges, links, and project cards.

Do not create abstractions for components that are unlikely to be reused or that have no meaningful shared behavior.

### `src/content/`

Contains typed, local portfolio data.

Examples include profile information, professional experience, technical skills, and project descriptions.

Keep content independent of the visual representation.

### `src/types/`

Contains shared domain types used across modules.

Avoid duplicating type definitions and avoid using `any` when a specific type can be defined.

### `src/lib/`

Contains pure utility functions and small domain-specific operations.

Examples include project filtering, slug lookup, and date formatting when required.

Do not create generic utility abstractions without a demonstrated need.

### Test directories

- `tests/unit/`: unit and component tests.
- `cypress/e2e/`: end-to-end scenarios.
- `cypress/fixtures/`: test data when fixtures are needed.
- `cypress/support/`: reusable Cypress commands and setup.

## 7. Data Modeling

Model portfolio content with explicit TypeScript types.

Expected domain concepts include:

- Profile.
- Project.
- Experience.
- SocialLink.
- Technology or Skill, if a dedicated type is useful.

Use optional fields only when the content is genuinely optional.

For example, a project may have a repository URL and a live demo URL, but neither should be rendered as a link when its value is missing.

Do not introduce runtime schema-validation libraries for static, compile-time-checked content unless a real need emerges.

All professional details and project outcomes must be accurate and approved for publication.

## 8. State Management

Do not introduce Redux, Zustand, or another global state management library for the MVP.

Prefer:

- Static content for portfolio information.
- Local component state for isolated interactions.
- URL parameters for shareable filters only if project filtering is implemented and needs shareable state.

Avoid duplicating static content in React state.

## 9. Styling Architecture

Use CSS Modules for component-specific styling and CSS custom properties for shared design tokens.

Global styles should be limited to:

- CSS reset and sensible defaults.
- Base typography.
- Global theme variables.
- Document-level styles.
- Accessibility-related global rules.

Design tokens should cover:

- Background and surface colors.
- Text and muted text colors.
- Accent colors.
- Borders and focus indicators.
- Spacing.
- Typography.
- Content widths.
- Border radii.
- Transition durations.

Use responsive CSS and mobile-first principles.

Support keyboard navigation and visible focus states. Respect `prefers-reduced-motion` when adding animations.

Do not introduce a second styling system without explicit justification.

## 10. Testing Strategy

### 10.1 Unit Tests

Use Vitest to test pure functions and domain logic.

Examples:

- Filtering featured projects.
- Looking up a project by slug.
- Formatting dates.
- Handling missing optional data.

Unit tests should be deterministic and should not require a browser or network connection.

### 10.2 Component Tests

Use React Testing Library to validate component behavior through user-observable outcomes.

Examples:

- Rendering project information.
- Showing or hiding optional links.
- Keyboard-accessible interactions.
- Opening and closing the mobile navigation.

Prefer accessible queries such as roles and labels over implementation-specific selectors.

### 10.3 End-to-End Tests

Use Cypress to validate critical browser workflows.

Initial scenarios should cover:

- Loading the home page.
- Navigating between page sections.
- Following external profile links.
- Opening project detail pages, if implemented.
- Handling unknown project routes.
- Using the mobile navigation.
- Basic responsive behavior.

Use stable `data-cy` attributes when semantic selectors are insufficient.

Avoid duplicating every unit test in Cypress.

### 10.4 Test Quality

Prioritize meaningful behavior over arbitrary coverage targets.

Tests must be deterministic, maintainable, and independent of third-party services wherever possible.

## 11. Quality Gates

Before considering an implementation task complete, run the applicable checks:

1. ESLint.
2. TypeScript type checking.
3. Unit and component tests.
4. Production build.
5. Cypress E2E tests for changes affecting critical browser flows.

Do not claim a command passed unless it was executed and its result was checked.

Document any checks that could not run and explain why.

## 12. Performance, Accessibility, and SEO

### Performance

- Minimize unnecessary client-side JavaScript.
- Avoid heavy dependencies for simple functionality.
- Optimize images and use appropriate image dimensions.
- Prefer system fonts or locally bundled fonts when practical.
- Avoid layout shifts and unnecessary animations.
- Validate performance using Lighthouse and browser tools.

### Accessibility

- Use semantic HTML.
- Provide meaningful link text and alternative text for informative images.
- Ensure keyboard accessibility.
- Maintain sufficient color contrast.
- Preserve visible focus indicators.
- Use ARIA only when native HTML semantics are insufficient.

### SEO

- Configure page titles and descriptions.
- Add Open Graph metadata.
- Provide a favicon and appropriate social sharing image.
- Configure canonical URLs and sitemap metadata when appropriate for the final deployment URL.
- Avoid publishing placeholder content or incorrect professional claims.

## 13. Deployment Architecture

The GitHub repository is the source of truth.

Vercel should connect to the repository and deploy the application automatically.

The CI workflow should validate code quality and tests. Deployment previews should be used to inspect changes before they reach the production URL when practical.

The application must not require paid APIs, a database, or a custom backend.

Keep the project within the applicable free-plan limits. Do not add paid services or approve paid upgrades without explicit authorization.

## 14. Architectural Decision Rules

When introducing or changing architecture:

1. Prefer the simplest solution that satisfies the requirement.
2. Follow established Next.js and React conventions.
3. Avoid premature abstraction.
4. Avoid unnecessary dependencies.
5. Keep data, presentation, and application routing responsibilities separate.
6. Make client-side code opt-in rather than the default.
7. Update this document when a significant architectural decision changes.
8. Ask for clarification when a decision would materially affect scope, cost, privacy, or maintainability.

The architecture must support a polished professional portfolio without becoming more complex than the product requires.
