import type { NavItem, Profile } from '@/types/portfolio'

// Real public data.
// GitHub: https://github.com/kevinlami (24 public repos, verified via API)
// LinkedIn: https://www.linkedin.com/in/kevin-lami-613019117/
// Email and location are intentionally omitted until provided and verified;
// the UI hides email/location actions while they are absent.
export const profile: Profile = {
  fullName: 'Kevin Lami',
  monogram: 'KL',
  title: 'Frontend Developer',
  subtitle: 'Frontend Developer',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/kevinlami', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kevin-lami-613019117/',
      icon: 'linkedin',
    },
  ],
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
