import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const TIERS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'to try it out',
    desc: 'Teach your first process and see the full course Praxis builds from it.',
    features: ['1 active course', 'Upload or screen-record', 'Quizzes & basic assessment', 'Up to 10 employees'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Business',
    price: '$14',
    period: '/ employee / month',
    desc: 'For teams that train continuously and need it kept up to date.',
    features: [
      'Unlimited courses',
      'Simulations & branching practice',
      'Auto-updating training',
      'Manager dashboard & reporting',
      'SSO',
    ],
    cta: 'Start free',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'volume & compliance',
    desc: 'Multi-location or regulated teams with custom retention and controls.',
    features: [
      'Everything in Business',
      'Custom data retention',
      'Advanced audit & permissions',
      'Dedicated support',
    ],
    cta: 'Talk to sales',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Priced like software, not like a project.
          </h2>
          <p className="mt-5 text-lg text-fg-muted" style={{ color: '#a6a6b3' }}>
            No implementation fee. No per-course consulting bill.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlight
                    ? 'card-glow border-2 border-violet-500/40'
                    : 'border border-white/10 bg-white/[0.02]'
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[11px] font-semibold text-black">
                    Most teams pick this
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold tracking-tight">{tier.price}</span>
                  <span className="text-sm text-fg-dim" style={{ color: '#6f6f7d' }}>
                    {tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted" style={{ color: '#a6a6b3' }}>
                  {tier.desc}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                      <Check size={15} className="mt-0.5 shrink-0 text-cyan-300" style={{ color: '#67e8f9' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-started"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    tier.highlight ? 'bg-white text-black' : 'border border-white/15 bg-white/[0.04] text-white'
                  }`}
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
