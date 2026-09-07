import { Reveal } from './Reveal'

const ITEMS = [
  { title: 'Single sign-on (SSO)', body: 'Your existing identity provider.' },
  { title: 'Role-based permissions', body: 'Control who can create or edit.' },
  { title: 'Your data stays yours', body: 'Never shared, never used to train other models.' },
  { title: '50+ languages', body: 'Every office, automatically translated.' },
]

export function FeatureGrid() {
  return (
    <section id="platform" className="wash-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <span className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
            Enterprise-ready
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Built to pass your IT review
          </h2>
        </Reveal>

        <div className="mt-12 grid divide-y divide-line rounded-2xl border border-line bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4" style={{ borderColor: '#e6e8f2' }}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="h-full p-7">
                <h4 className="font-display text-base font-medium">{item.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
