import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const TIERS = [
  {
    name: 'Starter',
    price: '$0',
    features: ['1 active course', 'Upload or screen-record', 'Up to 10 employees'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Business',
    price: '$14',
    period: '/ employee / mo',
    features: ['Unlimited courses', 'Simulations & practice', 'Auto-updating training', 'SSO'],
    cta: 'Start free',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything in Business', 'Custom data retention', 'Dedicated support'],
    cta: 'Talk to sales',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="wash-section py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Priced like software
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            No implementation fee. No consulting bill.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  tier.highlight ? 'card-soft bg-white' : 'card bg-white'
                }`}
              >
                {tier.highlight && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-medium text-white"
                    style={{ backgroundColor: '#3d4bf5' }}
                  >
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-medium">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-medium tracking-tight">{tier.price}</span>
                  {tier.period && (
                    <span className="text-xs text-ink-dim" style={{ color: '#8888a0' }}>{tier.period}</span>
                  )}
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
                      <Check size={15} className="mt-0.5 shrink-0 text-primary" style={{ color: '#3d4bf5' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-started"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                    tier.highlight ? 'bg-primary text-white' : 'border border-line text-ink'
                  }`}
                  style={tier.highlight ? { backgroundColor: '#3d4bf5' } : { borderColor: '#e6e8f2' }}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
