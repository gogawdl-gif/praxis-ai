import { Check, Minus } from 'lucide-react'
import { Fragment } from 'react'
import { Reveal } from './Reveal'

const PLANS = [
  { name: 'Starter', price: '$0', period: '', cta: 'Start free', highlight: false },
  { name: 'Business', price: '$14', period: '/employee/mo', cta: 'Start free', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', cta: 'Talk to sales', highlight: false },
]

const ROWS: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: 'Team members', values: ['Up to 10', 'Unlimited', 'Unlimited'] },
  { label: 'Courses', values: ['1', 'Unlimited', 'Unlimited'] },
  { label: 'Practice & quizzes', values: [false, true, true] },
  { label: 'Updates itself when a process changes', values: [false, true, true] },
  { label: 'Support', values: ['Email', 'Priority', 'Dedicated'] },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={16} className="mx-auto text-primary" style={{ color: '#3d4bf5' }} />
    ) : (
      <Minus size={14} className="mx-auto text-ink-dim" style={{ color: '#d7dae8' }} />
    )
  }
  return <span className="text-sm text-ink">{value}</span>
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Straightforward pricing
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            No implementation fees. No consulting contract buried in the fine print.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-x-auto">
          <div className="min-w-[560px] overflow-hidden rounded-2xl border border-line" style={{ borderColor: '#e6e8f2' }}>
            <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] bg-white">
              <div className="border-b p-6" style={{ borderColor: '#e6e8f2' }} />
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="border-b border-l p-6 text-center"
                  style={{ borderColor: '#e6e8f2', backgroundColor: plan.highlight ? 'rgba(61,75,245,0.045)' : undefined }}
                >
                  {plan.highlight && (
                    <span
                      className="mb-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium text-white"
                      style={{ backgroundColor: '#3d4bf5' }}
                    >
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-base font-medium">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="font-display text-2xl font-medium tracking-tight">{plan.price}</span>
                    {plan.period && (
                      <span className="text-[11px] text-ink-dim" style={{ color: '#8888a0' }}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <a
                    href="#get-started"
                    className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition-transform hover:scale-[1.03] ${
                      plan.highlight ? 'text-white' : 'border text-ink'
                    }`}
                    style={plan.highlight ? { backgroundColor: '#3d4bf5' } : { borderColor: '#e6e8f2' }}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}

              {ROWS.map((row) => (
                <Fragment key={row.label}>
                  <div
                    className="border-b p-4 pl-6 text-sm text-ink-soft"
                    style={{ borderColor: '#e6e8f2', color: '#4b4b5c' }}
                  >
                    {row.label}
                  </div>
                  {row.values.map((v, i) => (
                    <div
                      key={`${row.label}-${i}`}
                      className="border-b border-l p-4 text-center"
                      style={{
                        borderColor: '#e6e8f2',
                        backgroundColor: PLANS[i].highlight ? 'rgba(61,75,245,0.045)' : undefined,
                      }}
                    >
                      <Cell value={v} />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-6">
          <p className="text-center text-xs text-ink-dim" style={{ color: '#8888a0' }}>
            Enterprise also includes single sign-on, custom data retention, and a dedicated
            onboarding specialist.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
