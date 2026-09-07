import { Reveal } from './Reveal'

const QUOTES = [
  {
    quote: 'I recorded our closing checklist once, on my phone. By morning, new hires had a real course.',
    role: 'Operations manager, retail',
  },
  {
    quote: 'The simulations are the part that stuck — people practice the hard conversation first.',
    role: 'Training lead, contact center',
  },
  {
    quote: 'I told Praxis what changed in two sentences. Every lesson updated itself.',
    role: 'Clinic operations director',
  },
]

export function Quotes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What teams notice first
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.role} delay={i * 0.06}>
              <div className="card h-full rounded-2xl p-7">
                <p className="text-[15px] leading-relaxed text-ink">“{q.quote}”</p>
                <p className="mt-5 text-xs font-medium text-ink-dim" style={{ color: '#8888a0' }}>
                  {q.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
