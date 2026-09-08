import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const ITEMS = [
  { lead: 'A manager explains it once.', body: 'Then has to explain it again to every new employee.', percent: 40 },
  { lead: 'The SOP exists.', body: 'But nobody wants to read a 40-page document.', percent: 55 },
  { lead: 'The presentation exists.', body: "But it isn't a real learning programme.", percent: 30 },
  { lead: 'The expert leaves.', body: 'And years of practical knowledge leave with them.', percent: 60 },
]

// A ring that never quite closes - the visual stand-in for "the
// knowledge is there, but it never became something your team can
// actually go through." No number is shown; it's a symbol, not a
// stat. The closing line below pays it off with a ring that completes.
function ProgressRing({ percent, delay = 0 }: { percent: number; delay?: number }) {
  const size = 40
  const stroke = 3.25
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - percent / 100)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e6e8f2" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#3d4bf5"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: dashOffset }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

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
                <ProgressRing percent={item.percent} delay={i * 0.05} />
                <h4 className="mt-4 font-display text-base font-medium">{item.lead}</h4>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex items-center justify-center gap-3">
          <ProgressRing percent={100} delay={0.15} />
          <p className="text-base font-medium text-ink">
            Learnik turns that knowledge into training your team can use.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
