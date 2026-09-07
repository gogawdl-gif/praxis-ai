const COLUMNS = [
  {
    title: 'Product',
    links: ['Platform', 'How it works', 'Security', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help center', 'Status', 'Privacy', 'Terms'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                <span className="size-2.5 rounded-sm" style={{ backgroundColor: '#05050a' }} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Praxis</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-dim" style={{ color: '#6f6f7d' }}>
              Teach your business to AI once. Praxis turns it into a training program employees
              actually complete — and keeps it current.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-wide text-fg-dim" style={{ color: '#6f6f7d' }}>
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-fg-muted hover:text-white" style={{ color: '#a6a6b3' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-xs text-fg-dim sm:flex-row" style={{ color: '#6f6f7d' }}>
          <span>© {new Date().getFullYear()} Praxis. All rights reserved.</span>
          <span>Made for teams who'd rather show than write a manual.</span>
        </div>
      </div>
    </footer>
  )
}
