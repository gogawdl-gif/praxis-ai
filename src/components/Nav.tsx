import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#fbfbfe]/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_#e6e8f2]' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-soft hover:text-ink" style={{ color: '#4b4b5c' }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#" className="text-sm font-medium text-ink-soft hover:text-ink" style={{ color: '#4b4b5c' }}>
            Log in
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: '#3d4bf5' }}
          >
            Start free
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#get-started"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: '#3d4bf5' }}
          >
            Start trial
          </a>
          <button
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-line"
            style={{ borderColor: '#e6e8f2' }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line px-6 pb-5 pt-2 md:hidden" style={{ borderColor: '#e6e8f2' }}>
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-wash"
                style={{ color: '#4b4b5c' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-white"
              style={{ backgroundColor: '#3d4bf5' }}
            >
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
