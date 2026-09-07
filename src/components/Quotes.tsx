import { Reveal } from './Reveal'

const QUOTES = [
  {
    quote:
      'I recorded myself walking through our closing checklist once, on my phone. By the next morning every new hire had a real course out of it.',
    role: 'Operations manager, multi-location retail',
  },
  {
    quote:
      'The simulations are the part that changed things. People practice the hard conversation before they ever have it with a real customer.',
    role: 'Training lead, contact center',
  },
  {
    quote:
      'We changed a intake process mid-quarter. I told Praxis what changed in two sentences and it fixed every lesson that referenced the old steps.',
    role: 'Clinic operations director',
  },
]

export function Quotes() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wide text-fg-dim" style={{ color: '#6f6f7d' }}>
            From teams using Praxis
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            What changes when training stops being a project.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.role} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <p className="text-[15px] leading-relaxed text-white/90">“{q.quote}”</p>
                <p className="mt-6 text-xs text-fg-dim" style={{ color: '#6f6f7d' }}>
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
