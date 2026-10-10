# Project Instructions

## Project

Personal portfolio for a Senior Frontend Engineer targeting Brazilian and international opportunities.

## Technology Stack

- Next.js with App Router
- React and TypeScript with strict mode
- CSS Modules and CSS custom properties
- Vitest and React Testing Library
- Cypress for end-to-end tests
- ESLint and Prettier
- npm as the package manager
- GitHub Actions for CI
- Vercel Hobby for deployment, subject to its current terms

## Architecture Rules

- Prefer Server Components by default.
- Use Client Components only when browser-side interactivity is required.
- Keep portfolio content separate from presentation components.
- Avoid unnecessary global state, backend services and external dependencies.
- Keep components small, cohesive and reusable when reuse is justified.
- Follow the existing project structure and conventions.

## Code Quality

- Avoid `any`; prefer explicit, safe types.
- Use semantic HTML and accessible interactions.
- Do not suppress lint or TypeScript errors without justification.
- Avoid unnecessary abstractions and premature optimization.
- Do not add dependencies without explaining why they are needed.

## Testing

- Write unit and component tests for relevant behavior.
- Use Cypress for critical user journeys.
- Run the relevant tests after changes.
- Run lint, typecheck and production build before considering a task complete.
- Report any checks that could not be executed.

## Workflow

- Inspect existing files before modifying them.
- For substantial changes, propose a plan before implementation.
- Implement one coherent step at a time.
- Do not overwrite existing work without inspecting it.
- Do not claim a test or build passed unless it was actually executed.

## Project Documentation

- Product scope: docs/PROJECT.md
- Architecture: docs/ARCHITECTURE.md
- Implementation plan: docs/IMPLEMENTATION_PLAN.md
- Visual guidelines: docs/DESIGN_SYSTEM.md
