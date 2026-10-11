import type { Profile } from '@/types/portfolio'

// Locale-independent profile data.
// GitHub: https://github.com/kevinlami (24 public repos, verified via API)
// LinkedIn: https://www.linkedin.com/in/kevin-lami-613019117/
// Title, email and location verified from the LinkedIn PDF export
// (Profile-3.pdf). Localized content lives in `src/i18n/dictionaries/`.
export const profile: Profile = {
  fullName: 'Kevin Lami',
  monogram: 'KL',
  title: 'Senior Frontend Engineer',
  subtitle: 'Senior Frontend Engineer · React & TypeScript',
  email: 'kevinlami15@gmail.com',
  location: 'Florianópolis, SC',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/kevinlami', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kevin-lami-613019117/',
      icon: 'linkedin',
    },
  ],
}
