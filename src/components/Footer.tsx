import { Play, X } from 'lucide-react'
import { IconLinkedIn } from './icons'
import { Logo } from './Logo'

const SOCIALS = [
  { icon: IconLinkedIn, label: 'LinkedIn', href: '#' },
  { icon: X, label: 'X', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
]

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center', href: '#' },
      { label: 'Privacy', href: '/privacy.html' },
      { label: 'Terms', href: '/terms.html' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line py-14" style={{ borderColor: '#e6e8f2' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-dim" style={{ color: '#8888a0' }}>
              Show Learnik a process once. It builds the course and keeps it current for you.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-8 place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-primary hover:text-primary"
                  style={{ borderColor: '#e6e8f2', color: '#8888a0' }}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-wide text-ink-dim" style={{ color: '#8888a0' }}>
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ink-soft hover:text-ink" style={{ color: '#4b4b5c' }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-line pt-6 text-xs text-ink-dim sm:flex-row sm:justify-between" style={{ borderColor: '#e6e8f2', color: '#8888a0' }}>
          <span>© {new Date().getFullYear()} Learnik. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="/privacy.html" className="hover:text-ink">Privacy</a>
            <a href="/terms.html" className="hover:text-ink">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
