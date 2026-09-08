import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'

const ITEMS = [
  { lead: 'A manager explains it once.', body: 'Then has to explain it again to every new employee.' },
  { lead: 'The SOP exists.', body: 'But nobody wants to read a 40-page document.' },
  { lead: 'The presentation exists.', body: "But it isn't a real learning programme." },
  { lead: 'The expert leaves.', body: 'And years of practical knowledge leave with them.' },
]

const CYCLE_MS = 3400

// Each card's look depends only on its distance from the active one -
// the fanned-out stack reads as "everything this knowledge already
// lives in: someone's head, a doc, a deck" - scattered, not yet one
// thing. That's the point being made, not just a decoration.
const ROTATE = [0, 7, -6, 9]
const X = [0, 22, -16, 10]
const Y = [0, 14, 24, 32]
const SCALE = [1, 0.95, 0.91, 0.88]
const OPACITY = [1, 0.65, 0.4, 0.22]

export function ProblemSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % ITEMS.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [paused])

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

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-16 h-[220px] w-full max-w-md sm:h-[190px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {ITEMS.map((item, i) => {
              const d = (i - active + ITEMS.length) % ITEMS.length
              return (
                <motion.div
                  key={item.lead}
                  className="absolute inset-0 rounded-2xl border bg-white p-7"
                  style={{
                    borderColor: '#e6e8f2',
                    zIndex: ITEMS.length - d,
                    boxShadow: d === 0 ? '0 24px 48px -20px rgba(20,20,31,0.22)' : '0 12px 24px -16px rgba(20,20,31,0.16)',
                  }}
                  animate={{ rotate: ROTATE[d], x: X[d], y: Y[d], scale: SCALE[d], opacity: OPACITY[d] }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h4 className="font-display text-lg font-medium">{item.lead}</h4>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                    {item.body}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {ITEMS.map((item, i) => (
              <button
                key={item.lead}
                aria-label={`Show: ${item.lead}`}
                onClick={() => setActive(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? 20 : 6,
                  backgroundColor: i === active ? '#3d4bf5' : '#e6e8f2',
                }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-base font-medium text-ink">
            Learnik turns that knowledge into training your team can use.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
