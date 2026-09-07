const COLUMNS = [
  { title: 'Product', links: ['Platform', 'How it works', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Resources', links: ['Help center', 'Privacy', 'Terms'] },
]

export function Footer() {
  return (
    <footer className="border-t border-line py-14" style={{ borderColor: '#e6e8f2' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg" style={{ backgroundColor: '#3d4bf5' }}>
                <span className="size-2.5 rounded-sm bg-white" />
              </span>
              <span className="font-display text-lg font-medium tracking-tight">Praxis</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-dim" style={{ color: '#8888a0' }}>
              Teach your business to AI once. Praxis keeps the training current.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-wide text-ink-dim" style={{ color: '#8888a0' }}>
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-soft hover:text-ink" style={{ color: '#4b4b5c' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-xs text-ink-dim" style={{ borderColor: '#e6e8f2', color: '#8888a0' }}>
          © {new Date().getFullYear()} Praxis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
