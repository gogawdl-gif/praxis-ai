import { CountUp } from './CountUp'
import { Reveal } from './Reveal'

const STATS = [
  { node: <CountUp value={3} suffix="x" />, label: 'faster than building slides by hand' },
  { node: 'Zero', label: 'instructional designers needed' },
  { node: <CountUp value={1} />, label: 'sentence to update a lesson' },
  { node: '24/7', label: 'available, every language' },
]

export function Stats() {
  return (
    <section className="wash-section py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 px-6 sm:divide-x sm:divide-line md:grid-cols-4" style={{ borderColor: '#e6e8f2' }}>
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 0.06} className="text-center">
            <div className="font-display text-4xl font-medium text-primary md:text-5xl" style={{ color: '#3d4bf5' }}>
              {s.node}
            </div>
            <div className="mx-auto mt-2 max-w-[10rem] text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
