# Project Overview — Senior Frontend Portfolio

## 1. Project Purpose

Build a personal developer portfolio website to showcase my professional experience, technical skills, software projects, and frontend engineering expertise.

The primary goal is to support my application for Senior Frontend Engineer positions in Brazil and internationally.

The portfolio must demonstrate not only my professional background but also my ability to build maintainable, accessible, performant, and well-tested frontend applications.

## 2. Target Audience

- Technical recruiters and talent acquisition teams.
- Engineering managers and technical leads.
- Frontend engineers evaluating technical skills and code quality.
- Companies hiring Senior Frontend Engineers, particularly for React and TypeScript roles.

## 3. Professional Positioning

The portfolio should present me as a Senior Frontend Engineer with extensive software development experience and a focus on modern frontend engineering.

Key areas of expertise to highlight:

- React, TypeScript, and JavaScript.
- Frontend architecture and component design.
- Design Systems and reusable UI components.
- State management and API integration.
- Web performance and scalability.
- Automated testing and code quality.
- Accessibility and responsive design.
- Collaboration with backend, product, design, and QA teams.

All professional claims, experience details, and project outcomes must be accurate and verifiable. Do not invent achievements, metrics, employment history, or technical experience.

## 4. Language

- English is the primary language for the initial release.
- Use clear, natural, professional English suitable for international recruiters.
- Avoid exaggerated marketing language and unnecessary jargon.
- Keep content concise and easy to scan.
- Internationalization and a Portuguese version are outside the initial MVP unless explicitly requested.

## 5. Visual Identity

The website should use a modern, dark, technology-oriented visual style.

Design principles:

- Dark charcoal backgrounds rather than pure black everywhere.
- A restrained accent color for important actions and highlights.
- Strong typography and clear visual hierarchy.
- Generous spacing and readable line lengths.
- Consistent design tokens for colors, spacing, typography, and borders.
- Subtle transitions and animations only when they improve usability.
- Responsive layouts for mobile, tablet, and desktop.
- Accessible contrast, visible focus states, and keyboard navigation.

Avoid generic dashboard layouts, excessive gradients, unnecessary animations, and decorative elements that distract from the content.

## 6. MVP Features

### 6.1 Home Page

Create a single-page portfolio with the following sections:

1. Hero / Professional Introduction
   - Name and professional title.
   - Short professional summary.
   - Primary call to action.
   - Links to GitHub, LinkedIn, and email.

2. Technical Skills
   - Relevant frontend technologies and engineering specialties.
   - Group skills into meaningful categories.
   - Avoid skill ratings or proficiency percentages without a clear basis.

3. Featured Projects
   - Project title and concise description.
   - Technologies used.
   - Problem, approach, and relevant technical decisions.
   - Repository and live demo links when available.

4. Professional Experience
   - Company, role, and dates.
   - Responsibilities and verified achievements.
   - Relevant technologies and engineering contributions.

5. Contact
   - Email and professional profile links.
   - Clear and accessible contact actions.
   - No custom backend or database-dependent contact form.

### 6.2 Project Detail Pages

Project detail pages may be implemented when there is enough substantive content to justify them.

Each page should explain:

- Project context and goals.
- Technical challenges.
- Architecture and implementation decisions.
- Testing and quality strategy.
- Outcomes, supported by verifiable evidence.
- Repository and live demo links, when available.

Do not create empty or repetitive project pages merely to increase the number of routes.

## 7. Technical Constraints

- Use Next.js with the App Router.
- Use React and TypeScript with strict type checking.
- Use CSS Modules and CSS custom properties for styling.
- Prefer Server Components by default.
- Use Client Components only when browser-side interactivity is required.
- Keep content data separate from presentation components.
- Avoid unnecessary global state and external dependencies.
- Do not create a custom backend, database, authentication system, or API for the MVP.
- Do not introduce Redux unless a demonstrated requirement justifies it.

## 8. Testing and Quality

The project must include:

- Vitest for unit tests.
- React Testing Library for component tests.
- Cypress for end-to-end tests.
- ESLint for static analysis.
- TypeScript type checking.
- Production build validation.
- GitHub Actions for automated quality checks.

Prioritize tests for meaningful behavior, navigation, project rendering, links, responsive interactions, and accessibility-related behavior.

Do not optimize for test coverage percentages at the expense of useful assertions.

## 9. Deployment and Cost

- Host the application on Vercel using the Hobby plan, subject to its current eligibility and usage terms.
- Store the source code in a GitHub repository.
- Use the free deployment subdomain initially.
- Keep the recurring project cost at zero.
- Do not purchase a custom domain or introduce paid services without explicit approval.
- Avoid dependencies on paid APIs, databases, or external services.
- Document any feature that would require a paid service.

## 10. Non-Goals

The initial release does not include:

- A content management system.
- Authentication or user accounts.
- A custom backend.
- A database.
- A blog administration interface.
- Complex animations or 3D experiences.
- Microfrontend architecture.
- Unnecessary state management libraries.
- Paid analytics or third-party services that require a subscription.

Future additions must be justified by a real product need.

## 11. Acceptance Criteria

The MVP is complete when:

- The home page presents all required sections.
- The interface is responsive and usable on mobile and desktop.
- The visual design follows the defined dark theme.
- All displayed professional information is accurate.
- Navigation and external links work correctly.
- Semantic HTML and accessible interaction patterns are used.
- Unit, component, and end-to-end tests cover critical behavior.
- Linting, type checking, tests, and production build pass.
- GitHub Actions runs the required automated checks.
- The application is deployed and publicly accessible on Vercel.
- The README documents setup, development, testing, and build commands.

## 12. Implementation Principles

- Prefer simple, maintainable solutions over unnecessary abstraction.
- Implement features incrementally.
- Inspect the existing code before making changes.
- Follow the architecture and design documentation.
- Explain significant technical decisions.
- Never invent professional information or claim unverified test results.
- Update documentation when an approved architectural decision changes.
- Ask for clarification before making consequential product decisions that are not covered by the project documentation.
