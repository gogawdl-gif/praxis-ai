import { Reveal } from './Reveal'

const ITEMS = [
  { lead: 'A manager explains it once.', body: 'Then has to explain it again to every new employee.' },
  { lead: 'The SOP exists.', body: "But nobody wants to read a 40-page document." },
  { lead: 'The presentation exists.', body: "But it isn't a real learning programme." },
  { lead: 'The expert leaves.', body: 'And years of practical knowledge leave with them.' },
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

        <div
          className="mt-12 grid divide-y divide-line rounded-2xl border border-line bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
          style={{ borderColor: '#e6e8f2' }}
        >
          {ITEMS.map((item, i) => (
            <Reveal key={item.lead} delay={i * 0.05} className="h-full">
              <div className="h-full p-7">
                <h4 className="font-display text-base font-medium">{item.lead}</h4>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-base font-medium text-ink">
            Learnik turns that knowledge into training your team can use.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
