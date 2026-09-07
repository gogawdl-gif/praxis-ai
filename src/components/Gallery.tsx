import { Reveal } from './Reveal'

const TILES = [
  {
    src: '/images/gallery-sales.jpg',
    label: 'Sales & customer success',
    note: 'Pitch decks & renewal calls',
    // mobile: cols 1-2, row 1  |  desktop: cols 1-2, rows 1-2
    className: 'col-start-1 col-end-3 row-start-1 row-end-2 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3',
  },
  {
    src: '/images/gallery-it.jpg',
    label: 'Software & IT',
    note: 'Deploys & access requests',
    // mobile: col 1, row 2  |  desktop: col 3, row 1
    className: 'col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2',
  },
  {
    src: '/images/gallery-support.jpg',
    label: 'Customer support',
    note: 'Tickets & escalations',
    // mobile: col 2, row 2  |  desktop: col 4, rows 1-2
    className: 'col-start-2 col-end-3 row-start-2 row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2',
  },
  {
    src: '/images/gallery-finance.jpg',
    label: 'Finance & ops',
    note: 'Reporting & approvals',
    // mobile: col 1, row 3  |  desktop: col 3, row 2
    className: 'col-start-1 col-end-2 row-start-3 row-end-4 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3',
  },
  {
    src: '/images/gallery-hr.jpg',
    label: 'HR & people',
    note: 'Onboarding & policy',
    // mobile: col 2, row 3  |  desktop: col 4, row 2
    className: 'col-start-2 col-end-3 row-start-3 row-end-4 md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3',
  },
]

export function Gallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Wherever your team works
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            The same process, taught the way each department actually works.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 [grid-auto-rows:9rem] md:grid-cols-4 md:[grid-auto-rows:11rem]">
          {TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.05} className={tile.className}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={tile.src}
                  alt={tile.label}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-sm font-medium text-white">{tile.label}</div>
                  <div className="text-xs text-white/70">{tile.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
