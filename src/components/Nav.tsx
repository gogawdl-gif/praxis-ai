import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'card-glow shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
              <span className="size-2.5 rounded-sm bg-ink" style={{ backgroundColor: '#05050a' }} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Praxis</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-fg-muted transition-colors hover:text-white"
                style={{ color: '#a6a6b3' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="text-sm text-fg-muted hover:text-white" style={{ color: '#a6a6b3' }}>
              Sign in
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Start free
            </a>
          </div>

          <button
            className="grid size-9 place-items-center rounded-lg border border-white/10 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-6 md:hidden">
          <div className="card-glow flex flex-col gap-1 rounded-2xl p-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-fg-muted hover:bg-white/5 hover:text-white"
                style={{ color: '#a6a6b3' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-black"
            >
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
