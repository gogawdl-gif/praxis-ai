import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { DashboardMockup } from './DashboardMockup'
import { SimulationMockup } from './SimulationMockup'
import { TiltCard } from './TiltCard'

function ShowItOncePhoto() {
  return (
    <TiltCard max={4} className="h-full">
      <div className="h-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(20,20,31,0.3)]">
        <img
          src="/images/panel-desk.jpg"
          alt="Team reviewing a process together at their laptops"
          className="h-full w-full object-cover"
        />
      </div>
    </TiltCard>
  )
}

const STEPS = [
  {
    title: 'Show it once',
    body: "Talk through the process the way you'd explain it to a new hire, on screen or on camera. Mobbilise asks the follow-up questions a recording alone would miss.",
    Visual: ShowItOncePhoto,
  },
  {
    title: 'Employees practice before it counts',
    body: "They run the actual scenario, including the difficult customer. You find out who's ready before your customers do.",
    Visual: SimulationMockup,
  },
  {
    title: 'You always know who can handle it',
    body: "Every attempt is scored on its own. Open the dashboard and see exactly who needs another pass, without asking around.",
    Visual: DashboardMockup,
  },
]

export function StickySteps() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)))
  })

  return (
    <section id="how-it-works" ref={containerRef} className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ backgroundColor: '#e6e8f2' }} />
            <motion.div
              className="absolute left-4 top-0 w-px"
              style={{ height: lineHeight, backgroundColor: '#3d4bf5' }}
            />

            {STEPS.map((step, i) => (
              <div key={step.title} className="flex min-h-[68vh] items-start gap-6 md:min-h-[75vh] md:items-center">
                <div
                  className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border-2 bg-white font-display text-xs font-medium transition-colors duration-300"
                  style={{
                    borderColor: active === i ? '#3d4bf5' : '#e6e8f2',
                    color: active === i ? '#3d4bf5' : '#c3c6da',
                  }}
                >
                  {i + 1}
                </div>

                <div className="flex-1 pt-0.5">
                  <h3
                    className="font-display text-2xl font-medium tracking-tight transition-opacity duration-300 md:text-[2.1rem]"
                    style={{ opacity: active === i ? 1 : 0.35 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-4 max-w-sm text-[15px] leading-relaxed transition-opacity duration-300"
                    style={{ opacity: active === i ? 1 : 0.35, color: '#4b4b5c' }}
                  >
                    {step.body}
                  </p>

                  <div className="mt-8 h-72 md:hidden">
                    <step.Visual />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-1/2 h-[420px] -translate-y-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  {(() => {
                    const Visual = STEPS[active].Visual
                    return <Visual />
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
