import { Logo } from './Logo'

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
    links: [{ label: 'Contact', href: 'mailto:hello@learnik.ai' }],
  },
  {
    title: 'Legal',
    links: [
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

        <div className="mt-12 border-t border-line pt-6 text-center text-xs text-ink-dim" style={{ borderColor: '#e6e8f2', color: '#8888a0' }}>
          © {new Date().getFullYear()} Learnik. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
