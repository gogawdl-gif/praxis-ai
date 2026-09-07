import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Circle, Sparkles, Zap } from 'lucide-react'
import { TiltCard } from './TiltCard'

const TOPICS = [
  { label: 'Onboarding', course: 'Opening store procedure', line: 'First you disarm the alarm, then power on the registers…' },
  { label: 'Support', course: 'Handling a return', line: 'Check the order in the portal, then confirm the item is unused…' },
  { label: 'Compliance', course: 'Cash handling policy', line: 'Every drawer count needs two signatures before close…' },
  { label: 'Process updates', course: 'New POS workflow', line: 'Skip the old discount screen — it moved under Payments…' },
]

const bars = [5, 10, 7, 13, 9, 14, 6, 11]

export function Hero() {
  const [active, setActive] = useState(0)
  const topic = TOPICS[active]
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-36 pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 wash-section" />
      <motion.div
        className="blob -z-10 left-[-6rem] top-[6rem] size-[26rem] bg-primary/10"
        style={{ backgroundColor: 'rgba(61,75,245,0.10)' }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob -z-10 right-[-8rem] top-[2rem] size-[24rem] bg-mint/15"
        style={{ backgroundColor: 'rgba(53,208,176,0.16)' }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-ink md:text-6xl">
          Teach your business to AI. <span className="text-primary" style={{ color: '#3d4bf5' }}>Once.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft" style={{ color: '#4b4b5c' }}>
          Upload your materials or record your screen — Praxis turns it into lessons, practice,
          and quizzes automatically.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_24px_-8px_rgba(61,75,245,0.5)] transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: '#3d4bf5' }}
          >
            Start training your team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-wash"
            style={{ borderColor: '#e6e8f2' }}
          >
            See how it works
          </a>
        </div>

        {/* topic tabs */}
        <div className="mx-auto mt-14 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-line bg-white p-1.5" style={{ borderColor: '#e6e8f2' }}>
          {TOPICS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === i ? 'bg-primary text-white' : 'text-ink-soft hover:bg-wash'
              }`}
              style={active === i ? { backgroundColor: '#3d4bf5' } : { color: '#4b4b5c' }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* layered visual: real photo -> transformation -> generated course */}
      <div className="relative mx-auto mt-16 flex max-w-5xl flex-col items-center gap-6 px-6 md:flex-row md:items-stretch md:justify-center md:gap-2">
        <motion.div style={{ y: photoY }} className="relative z-10 w-full max-w-[280px] shrink-0 md:-rotate-3">
          <TiltCard max={6} className="overflow-hidden rounded-[2rem_2rem_2rem_0.5rem] border-4 border-white shadow-[0_30px_60px_-20px_rgba(20,20,31,0.25)]">
            <img
              src="/images/hero-recording.jpg"
              alt="Manager recording a walkthrough while wearing a headset"
              className="h-72 w-full object-cover md:h-80"
            />
          </TiltCard>
          <motion.div
            className="absolute -bottom-4 -right-4 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-ink shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-rose-400" />
              <span className="relative inline-flex size-2 rounded-full bg-rose-500" />
            </span>
            Recording
          </motion.div>
        </motion.div>

        <div className="z-0 flex items-center justify-center py-2 md:py-0 md:px-3">
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="grid size-9 place-items-center rounded-full bg-white text-primary shadow-md md:rotate-90"
            style={{ color: '#3d4bf5' }}
          >
            <Zap size={16} />
          </motion.div>
        </div>

        <motion.div style={{ y: cardY }} className="relative z-10 w-full max-w-sm md:rotate-2">
          <div className="card-soft overflow-hidden rounded-[0.5rem_2rem_2rem_2rem] bg-white">
            <div className="flex items-center gap-1.5 border-b px-5 py-3.5" style={{ borderColor: '#e6e8f2' }}>
              <span className="size-2.5 rounded-full bg-black/10" />
              <span className="size-2.5 rounded-full bg-black/10" />
              <span className="size-2.5 rounded-full bg-black/10" />
              <span className="ml-3 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
                Praxis — training agent
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 p-5"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary" style={{ color: '#3d4bf5' }}>
                    <Circle size={8} className="fill-current" />
                    Now teaching: {topic.course}
                  </div>
                  <p className="mt-2 text-[13px] text-ink-soft" style={{ color: '#4b4b5c' }}>
                    “{topic.line}”
                  </p>
                  <div className="mt-3 flex items-end gap-[3px]">
                    {bars.map((h, i) => (
                      <motion.span
                        key={i}
                        className="w-[3px] rounded-full"
                        style={{ height: h, backgroundColor: 'rgba(61,75,245,0.35)' }}
                        animate={{ scaleY: [1, 1.6, 0.7, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.06 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-dim" style={{ color: '#8888a0' }}>
                  <Sparkles size={11} />
                  Generated
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Lesson', 'Simulation', 'Quiz'].map((g) => (
                    <div key={g} className="rounded-lg bg-wash px-3 py-2 text-xs font-medium text-ink" style={{ backgroundColor: '#eef1fd' }}>
                      {g}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
