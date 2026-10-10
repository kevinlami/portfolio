import type { NavItem, Profile } from '@/types/portfolio'

// PLACEHOLDER CONTENT — replace with verified professional data before
// publishing (docs/PROJECT.md §3: do not invent personal details).
export const profile: Profile = {
  fullName: 'Alexandre Ramos',
  monogram: 'AR',
  title: 'Senior Frontend Engineer',
  subtitle: 'Senior Frontend Engineer',
  status: 'Staff/Senior Roles',
  email: 'alexandre.ramos.eng@gmail.com',
  location: 'São Paulo / Open to Global Remote (UTC-3)',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/alexandreramos', icon: 'terminal' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexandreramos-eng', icon: 'badge' },
  ],
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
