import { Check, Minus } from 'lucide-react'
import { Fragment } from 'react'
import { Reveal } from './Reveal'

const PLANS = [
  { name: 'Business', price: '$14', period: '/employee/mo', note: '', cta: 'Start free trial', highlight: true },
  { name: 'Enterprise', price: 'Custom', period: '', note: 'For teams of 100+', cta: 'Talk to sales', highlight: false },
]

const ROWS: { label: string; values: [string | boolean, string | boolean] }[] = [
  { label: 'Team members', values: ['Unlimited', 'Unlimited'] },
  { label: 'Courses', values: ['Unlimited', 'Unlimited'] },
  { label: 'Practice & quizzes', values: [true, true] },
  { label: 'Updates itself when a process changes', values: [true, true] },
  { label: 'Single sign-on (SSO)', values: [false, true] },
  { label: 'Support', values: ['Priority email', 'Dedicated + onboarding'] },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={16} className="mx-auto text-primary" style={{ color: '#3d4bf5' }} />
    ) : (
      <Minus size={15} className="mx-auto" style={{ color: '#8888a0' }} />
    )
  }
  return <span className="text-sm text-ink">{value}</span>
}

function PlanHeader({ plan }: { plan: (typeof PLANS)[number] }) {
  return (
    <>
      {/* Fixed-height slot so every plan's name starts on the same
          baseline, whether or not it has a "Most popular" badge. */}
      <div className="mb-2 flex h-[22px] items-start justify-center">
        {plan.highlight && (
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium text-white"
            style={{ backgroundColor: '#3d4bf5' }}
          >
            Most popular
          </span>
        )}
      </div>
      <h3 className="font-display text-base font-medium">{plan.name}</h3>
      <div className="mt-2 flex items-baseline justify-center gap-1">
        <span className="font-display text-2xl font-medium tracking-tight">{plan.price}</span>
        {plan.period && (
          <span className="text-[11px] text-ink-dim" style={{ color: '#8888a0' }}>
            {plan.period}
          </span>
        )}
      </div>
      {plan.note && (
        <p className="mt-1 text-[11px]" style={{ color: '#8888a0' }}>
          {plan.note}
        </p>
      )}
      <a
        href="#get-started"
        className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition-transform hover:scale-[1.03] ${
          plan.highlight ? 'text-white' : 'border text-ink'
        }`}
        style={plan.highlight ? { backgroundColor: '#3d4bf5' } : { borderColor: '#e6e8f2' }}
      >
        {plan.cta}
      </a>
    </>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="wash-section py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Straightforward pricing
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            Every plan starts with a 7-day free trial. No credit card required.
          </p>
        </Reveal>

        {/* Mobile: stacked full-width cards, one per plan, no horizontal scroll */}
        <Reveal delay={0.1} className="mt-12 space-y-5 md:hidden">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 text-center ${plan.highlight ? 'card-soft' : 'card'}`}
              style={{ borderColor: '#e6e8f2' }}
            >
              <PlanHeader plan={plan} />
              <ul className="mt-6 space-y-3 text-left">
                {ROWS.map((row) => {
                  const value = plan.highlight ? row.values[0] : row.values[1]
                  return (
                    <li key={row.label} className="flex items-center justify-between gap-3 text-sm">
                      <span style={{ color: '#4b4b5c' }}>{row.label}</span>
                      <Cell value={value} />
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Desktop: comparison table */}
        <Reveal delay={0.1} className="mt-12 hidden md:block">
          <div className="card-soft mx-auto max-w-xl overflow-hidden rounded-2xl border border-line" style={{ borderColor: '#e6e8f2' }}>
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-white">
              <div className="border-b p-6" style={{ borderColor: '#e6e8f2' }}>
                <div className="mb-2 h-[22px]" />
                <div className="font-display text-lg font-medium tracking-tight text-ink">Compare plans</div>
                <p className="mt-1.5 text-sm" style={{ color: '#8888a0' }}>
                  Everything included, side by side.
                </p>
              </div>
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="border-b border-l p-6 text-center"
                  style={{ borderColor: '#e6e8f2', backgroundColor: plan.highlight ? 'rgba(61,75,245,0.045)' : undefined }}
                >
                  <PlanHeader plan={plan} />
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
            No implementation fees. No consulting contract buried in the fine print.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
