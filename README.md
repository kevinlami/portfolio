# Portfolio

Personal portfolio website for a Senior Frontend Engineer.

Product scope and requirements live in [`docs/`](docs/PROJECT.md).

## Tech stack

- Next.js (App Router), React, TypeScript (strict mode)
- CSS Modules and CSS custom properties
- Vitest + React Testing Library (unit and component tests)
- Cypress (end-to-end tests)
- ESLint + Prettier
- GitHub Actions (CI)

## Setup

```bash
npm ci
```

## Development

```bash
npm run dev
```

The application runs at `http://localhost:3000`.

## Quality checks

```bash
npm run lint          # ESLint
npm run lint:fix      # ESLint with automatic fixes
npm run format:check  # Prettier formatting check
npm run format        # Prettier write mode
npm run typecheck     # TypeScript type checking
npm run test          # Unit and component tests (Vitest)
npm run test:watch    # Vitest in watch mode
```

## End-to-end tests

Requires a running production server (`npm run build && npm start`) or an
already running dev server on port 3000:

```bash
npm run cypress:open  # Interactive mode
npm run cypress:run   # Headless run
```

## Production build

```bash
npm run build
npm start
```
