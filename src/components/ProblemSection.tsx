import { Reveal } from './Reveal'

const ITEMS = [
  { n: '01', lead: 'A manager explains it once.', body: 'Then has to explain it again to every new employee.' },
  { n: '02', lead: 'The SOP exists.', body: 'But nobody wants to read a 40-page document.' },
  { n: '03', lead: 'The presentation exists.', body: "But it isn't a real learning programme." },
  { n: '04', lead: 'The expert leaves.', body: 'And years of practical knowledge leave with them.' },
]

export function ProblemSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Your company already knows how to do the work.
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            The problem is turning that knowledge into training.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.lead} delay={i * 0.08}>
              <div className="relative">
                <span
                  className="font-display block text-7xl font-medium leading-none tracking-tight"
                  style={{ color: '#3d4bf5', opacity: 0.14 }}
                >
                  {item.n}
                </span>
                <h4 className="-mt-5 font-display text-lg font-medium">{item.lead}</h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center text-base font-medium text-ink">
            Learnik turns that knowledge into training your team can use.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
