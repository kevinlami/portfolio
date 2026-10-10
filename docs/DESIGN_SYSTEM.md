# Design System

## 1. Purpose

This document defines the visual language, design tokens, layout rules, component styles, and interaction patterns for the personal portfolio website.

The design must communicate:

- Senior-level frontend engineering expertise.
- Technical precision and attention to detail.
- Professionalism and credibility.
- Modern web development practices.
- Strong readability and usability across devices.

The website should feel like a carefully crafted personal portfolio, not a generic developer template or a product dashboard.

This document complements:

- `docs/PROJECT.md` — product goals and requirements.
- `docs/ARCHITECTURE.md` — application structure and engineering conventions.
- `docs/IMPLEMENTATION_PLAN.md` — implementation phases and acceptance criteria.

When implementing visual components, follow this document unless an explicit project requirement takes precedence.

## 2. Design Direction

### 2.1 Visual Concept

Use a modern, minimalist dark interface with subtle technical character.

The visual direction should combine:

- Dark graphite surfaces.
- High-contrast typography.
- A restrained violet-blue accent.
- Generous whitespace.
- Fine borders and subtle surface differentiation.
- Carefully controlled visual hierarchy.
- Small, purposeful interactions.

The design should feel sophisticated and confident rather than flashy.

### 2.2 Design Principles

**Clarity first**

Content and professional experience must remain the primary focus. Visual effects must never compete with important information.

**Restraint**

Use accent colors, gradients, shadows, and animations sparingly. Avoid excessive glow effects, decorative grids, and unnecessary visual noise.

**Consistency**

Shared components must use common tokens for colors, spacing, typography, borders, and interaction states.

**Responsive by design**

Layouts must adapt naturally to mobile, tablet, and desktop screens.

**Accessibility**

Readable contrast, keyboard navigation, visible focus states, and reduced-motion support are mandatory design considerations.

**Content-driven layouts**

Components must accommodate different text lengths without relying on fixed heights or fragile positioning.

## 3. Color Palette

Define the palette as CSS custom properties in the global stylesheet.

The following values are the initial design tokens. Keep the palette centralized so that it can be adjusted without rewriting component styles.

### 3.1 Core Colors

| Token                    | Value     | Purpose                         |
| ------------------------ | --------- | ------------------------------- |
| `--color-bg`             | `#0B0D12` | Main page background            |
| `--color-surface`        | `#121620` | Cards and elevated surfaces     |
| `--color-surface-hover`  | `#191F2C` | Hovered surfaces                |
| `--color-surface-subtle` | `#0F131B` | Subtle secondary surfaces       |
| `--color-border`         | `#252C3A` | Default borders                 |
| `--color-border-strong`  | `#374154` | Emphasized borders              |
| `--color-text`           | `#F3F5F9` | Primary text                    |
| `--color-text-secondary` | `#B2BBCB` | Secondary text                  |
| `--color-text-muted`     | `#8994A8` | Muted supporting text           |
| `--color-accent`         | `#8B7CFF` | Primary accent                  |
| `--color-accent-hover`   | `#A397FF` | Accent hover state              |
| `--color-accent-subtle`  | `#211E3B` | Subtle accent backgrounds       |
| `--color-on-accent`      | `#FFFFFF` | Text on accent-colored controls |

### 3.2 Color Usage

- Use `--color-bg` for the primary page background.
- Use `--color-surface` for project cards, content panels, and other distinct surfaces.
- Use `--color-surface-hover` for interactive surface hover states.
- Use `--color-border` for subtle separation.
- Use `--color-text` for headings and important information.
- Use `--color-text-secondary` for paragraphs and descriptions.
- Use `--color-text-muted` for metadata only when contrast remains sufficient.
- Use `--color-accent` for important links, selected states, and primary actions.
- Use `--color-accent-subtle` for restrained emphasis.

Do not use the accent color for every link, heading, icon, or decorative element. Establish a clear hierarchy.

Do not communicate meaning through color alone.

Verify text and interactive-state contrast against the actual rendered backgrounds. Adjust individual tokens when necessary to satisfy WCAG 2.2 AA contrast requirements.

## 4. Typography

### 4.1 Font Direction

Use a clean sans-serif typeface for general content.

Preferred approach:

- Primary font: `Inter`, if it can be loaded reliably without unnecessary third-party dependencies.
- Fallback: `system-ui`, followed by standard sans-serif fallbacks.
- Monospace: system monospace stack for code-like labels or technical details, when useful.

Avoid requiring a remote font service at runtime. Prefer a reliable system stack or self-hosted font assets when legally and technically appropriate.

### 4.2 Typography Tokens

Use responsive typography with CSS `clamp()` where appropriate.

| Token              | Suggested size                | Usage                |
| ------------------ | ----------------------------- | -------------------- |
| `--font-size-xs`   | `0.75rem`                     | Small metadata       |
| `--font-size-sm`   | `0.875rem`                    | Supporting labels    |
| `--font-size-base` | `1rem`                        | Body text            |
| `--font-size-lg`   | `1.125rem`                    | Emphasized body text |
| `--font-size-xl`   | `1.25rem`                     | Small headings       |
| `--font-size-2xl`  | `1.5rem`                      | Section subheadings  |
| `--font-size-3xl`  | `2rem`                        | Section headings     |
| `--font-size-hero` | `clamp(2.5rem, 7vw, 4.75rem)` | Main hero heading    |

### 4.3 Typography Rules

- Use a strong, clear hierarchy between the hero heading, section headings, card titles, and body text.
- Keep paragraph line length comfortable for reading.
- Use line heights of approximately `1.5` to `1.75` for body copy.
- Use tighter line heights for large headings when appropriate.
- Avoid excessively thin font weights on dark backgrounds.
- Use font weight and size before relying on color to distinguish importance.
- Avoid long passages in uppercase.
- Do not use monospace typography for the entire interface.

## 5. Spacing and Layout

### 5.1 Spacing Scale

Use a consistent spacing scale based on multiples of four pixels.

| Token        | Value     |
| ------------ | --------- |
| `--space-1`  | `0.25rem` |
| `--space-2`  | `0.5rem`  |
| `--space-3`  | `0.75rem` |
| `--space-4`  | `1rem`    |
| `--space-5`  | `1.25rem` |
| `--space-6`  | `1.5rem`  |
| `--space-8`  | `2rem`    |
| `--space-10` | `2.5rem`  |
| `--space-12` | `3rem`    |
| `--space-16` | `4rem`    |
| `--space-20` | `5rem`    |
| `--space-24` | `6rem`    |

Intermediate values may be introduced when there is a clear design need. Do not create arbitrary spacing values throughout individual components.

### 5.2 Content Width

Define reusable layout tokens:

- Main content maximum width: approximately `72rem`.
- Reading-oriented content width: approximately `48rem`.
- Horizontal page gutters: responsive, with a comfortable minimum of `1.25rem` on small screens.
- Section spacing: generous on desktop and reduced proportionally on mobile.

Use centered containers and consistent horizontal alignment across sections.

Avoid stretching long paragraphs or dense text across the full desktop viewport.

### 5.3 Section Layout

- Give each major portfolio section a clear visual beginning.
- Use consistent vertical spacing between sections.
- Prefer simple layouts over unnecessary nested panels.
- Use grids for project cards or skill groups when they improve scanning.
- Allow cards to grow naturally with their content.
- Avoid fixed heights for text-heavy sections.
- Do not force every section into a card.

## 6. Responsive Design

Design for mobile first.

Use these initial breakpoints unless implementation reveals a strong reason to adjust them:

| Token             | Width   | Typical use                     |
| ----------------- | ------- | ------------------------------- |
| `--breakpoint-sm` | `40rem` | Larger phones and small tablets |
| `--breakpoint-md` | `48rem` | Tablet layouts                  |
| `--breakpoint-lg` | `64rem` | Desktop layouts                 |
| `--breakpoint-xl` | `80rem` | Wide desktop containers         |

CSS custom properties cannot be used directly as media-query breakpoint values in standard CSS media queries. Keep breakpoint values consistent in the relevant CSS Modules rather than assuming these tokens can be interpolated into media queries.

Responsive requirements:

- Hero typography must scale without overflowing.
- Navigation must remain usable on narrow screens.
- Multi-column layouts must collapse naturally.
- Project cards must retain readable spacing and proportions.
- Buttons and links must remain easy to activate on touch screens.
- Long URLs and technical labels must not break the layout.
- The page must work at a viewport width of `320px`.
- Do not hide essential professional content on mobile.

## 7. Surface Treatments and Effects

### 7.1 Borders

Use subtle borders to distinguish surfaces and establish structure.

- Default border: `1px solid var(--color-border)`.
- Emphasized border: `1px solid var(--color-border-strong)`.
- Accent borders should be reserved for selected or intentionally emphasized elements.

Avoid thick outlines on every card.

### 7.2 Shadows

Keep shadows subtle and purposeful.

The dark background and border system should provide most of the visual separation.

Do not apply large shadows or strong colored glows to every element.

### 7.3 Gradients

Gradients are optional and should be used sparingly.

A subtle accent gradient may be used for the hero or a small decorative element if it improves visual hierarchy.

Do not use gradients as a substitute for good typography, spacing, or contrast.

### 7.4 Background Decorations

Subtle radial gradients or very restrained technical patterns may be used in the hero area.

Decorations must:

- Remain behind the content.
- Avoid reducing text contrast.
- Avoid large images or assets that provide little functional value.
- Never create horizontal overflow.
- Be hidden from assistive technologies when purely decorative.

Do not use animated backgrounds or prominent glowing grids as a default visual treatment.

## 8. Border Radius and Component Geometry

Define the following tokens:

| Token           | Value      | Usage                             |
| --------------- | ---------- | --------------------------------- |
| `--radius-sm`   | `0.375rem` | Small labels and compact elements |
| `--radius-md`   | `0.625rem` | Buttons and standard controls     |
| `--radius-lg`   | `0.875rem` | Cards and panels                  |
| `--radius-xl`   | `1.25rem`  | Larger feature surfaces           |
| `--radius-full` | `9999px`   | Pills and circular elements       |

Use consistent corner radii.

Avoid combining many unrelated radius styles within the same visual context.

## 9. Component Guidelines

### 9.1 Header and Navigation

- Keep the navigation visually lightweight.
- Use clear labels and consistent spacing.
- Make the active or current navigation state understandable.
- Ensure keyboard access and visible focus indicators.
- Avoid a large header that competes with the hero.
- If the header is sticky, ensure it does not obscure anchored section headings.
- Use a mobile navigation menu only if the number of links requires it.

### 9.2 Hero Section

The hero should communicate professional positioning immediately.

It should include:

- The developer's name.
- A clear professional title, such as `Senior Frontend Engineer`.
- A concise introduction focused on frontend engineering, architecture, performance, and scalable interfaces.
- A primary action to explore projects or experience.
- A secondary action to contact the developer or view a verified professional profile.

Visual guidelines:

- Make the heading the strongest typographic element on the page.
- Keep supporting copy concise and readable.
- Use accent color to emphasize a small portion of the content when appropriate.
- Avoid excessive badges, technology chips, and decorative elements.
- Do not include fabricated statistics or unsupported claims.

### 9.3 Buttons and Links

Support clear visual variants:

**Primary**

- Accent background.
- High-contrast text.
- Clear hover, focus, and active states.

**Secondary**

- Transparent or surface background.
- Subtle border.
- Strong readable text.

**Text link**

- No unnecessary container.
- Clear hover and focus treatment.
- Underline where useful for discoverability and accessibility.

All interactive elements must have visible keyboard focus.

Use native anchors for navigation and native buttons for actions. Do not use clickable generic containers when a semantic element is appropriate.

### 9.4 Project Cards

Project cards should emphasize the problem solved and the developer's contribution.

Recommended content:

- Project name.
- Short description.
- Relevant technologies.
- Specific contribution or technical challenge.
- Links to a live project or source repository, when available.

Visual guidelines:

- Use consistent padding and border treatment.
- Use hover effects sparingly.
- Maintain readable contrast.
- Allow descriptions to wrap naturally.
- Do not require a fixed card height.
- Do not make an entire card clickable if it contains multiple independent links.

Only present projects and outcomes that can be substantiated.

### 9.5 Experience Section

The experience section must prioritize clarity and credibility.

- Use a clear hierarchy for role, employer, dates, and responsibilities.
- Group related information logically.
- Keep body text readable.
- Use spacing or subtle borders to separate entries.
- Avoid overly elaborate timeline decorations.
- Ensure the layout remains understandable without decorative elements.

Do not imply that a responsibility or achievement belongs to an employer or project unless the content supports that relationship.

### 9.6 Skills

- Group skills by meaningful categories.
- Use compact labels or simple lists.
- Keep spacing consistent.
- Avoid visual ratings, proficiency percentages, or progress bars unless they have a defensible meaning.
- Do not give every technology the same visual prominence.
- Prioritize skills relevant to the intended Senior Frontend Engineer positioning.

### 9.7 Footer

- Keep the footer simple and consistent with the overall layout.
- Include relevant professional links and contact information.
- Use muted styling without compromising readability.
- Avoid redundant content that already dominates the page.

## 10. Motion and Interaction

Motion must be subtle, short, and purposeful.

Recommended patterns:

- Small color transitions on links and buttons.
- Subtle border changes on cards.
- Short opacity or transform transitions when they improve feedback.
- Smooth anchor navigation only when reduced-motion preferences are respected.

Guidelines:

- Prefer durations around `150ms` to `250ms` for small UI transitions.
- Avoid large movement, continuous animation, and distracting parallax.
- Do not delay access to important content.
- Avoid introducing an animation library for simple CSS transitions.
- Honor `prefers-reduced-motion: reduce`.
- Ensure all interactions remain usable when animations are disabled.

## 11. Accessibility Requirements

Target WCAG 2.2 Level AA as the accessibility baseline.

Requirements:

- Maintain sufficient text and interface contrast.
- Use semantic HTML and a logical heading hierarchy.
- Provide visible keyboard focus.
- Ensure every interactive element is keyboard accessible.
- Use descriptive link text.
- Provide appropriate alternative text for informative images.
- Avoid using color as the only means of conveying information.
- Ensure focus is not hidden behind sticky elements.
- Keep interactive targets comfortably usable on touch devices.
- Respect reduced-motion preferences.
- Use accessible names for icon-only controls.
- Avoid unnecessary ARIA when native HTML semantics are sufficient.

Accessibility must be checked in the rendered application, not inferred from CSS alone.

## 12. CSS Implementation Rules

The design system must be implemented with CSS Modules and global CSS custom properties.

Global styles should contain:

- Design tokens.
- CSS reset or normalization rules.
- Base typography.
- Body and page defaults.
- Shared accessibility utilities when required.

CSS Modules should contain:

- Component-specific layout.
- Component-specific styling.
- Responsive rules.
- Component-specific interactive states.

Rules:

- Avoid introducing Tailwind CSS, styled-components, Sass, or another styling system unless explicitly approved.
- Avoid inline styles for ordinary component styling.
- Avoid duplicating global token values across components.
- Avoid deeply nested selectors.
- Avoid styling based on fragile DOM structure.
- Prefer explicit component classes and readable selectors.
- Use CSS custom properties for repeated design values.
- Use `:focus-visible` for keyboard focus styling.
- Use `prefers-reduced-motion` for motion-sensitive users.
- Use `min-width: 0` where necessary to prevent flex and grid children from overflowing.
- Do not add CSS abstractions that make simple styles harder to understand.

## 13. Iconography and Assets

- Prefer simple, consistent icons.
- Do not mix multiple unrelated icon styles.
- Use icons only when they improve comprehension.
- Give icon-only interactive elements accessible names.
- Decorative icons should not create redundant screen-reader announcements.
- Avoid emoji as a substitute for interface icons.
- Avoid unnecessary external image requests.
- Optimize any raster or vector assets included in the repository.
- Ensure all fonts, icons, and other assets have appropriate licensing.

Do not introduce an icon library unless the project actually needs it.

## 14. Design Validation

Before considering the interface complete, verify:

- [ ] The overall visual hierarchy is clear.
- [ ] The page looks intentional rather than template-generated.
- [ ] The hero communicates the developer's professional positioning.
- [ ] Colors are consistent and centralized.
- [ ] Typography is readable on dark backgrounds.
- [ ] Spacing and alignment are consistent.
- [ ] Cards and sections adapt to their content.
- [ ] The layout works at `320px`, tablet widths, and desktop widths.
- [ ] No unintended horizontal overflow exists.
- [ ] Interactive states are visible.
- [ ] Keyboard navigation works.
- [ ] Contrast has been checked.
- [ ] Reduced-motion preferences are respected.
- [ ] Decorative effects do not distract from content.
- [ ] The browser console has no relevant errors.
- [ ] No unsupported professional claims have been added.

## 15. Design Decision Rule

When multiple visual approaches are possible, prefer the option that:

1. Improves content clarity.
2. Reinforces a credible Senior Frontend Engineer identity.
3. Maintains accessibility and responsive behavior.
4. Reuses existing design tokens and components.
5. Introduces the least unnecessary complexity.

The design system should evolve only when a concrete requirement or a verified usability issue justifies the change.
