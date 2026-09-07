import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Layers, ScreenShare } from 'lucide-react'
import { type ComponentType, useEffect, useState } from 'react'
import { DashboardMockup } from './DashboardMockup'
import { IconDropFile, IconMic } from './icons'
import { DropzoneMockup } from './mockups/DropzoneMockup'
import { LessonMockup } from './mockups/LessonMockup'
import { QuizMockup } from './mockups/QuizMockup'
import { ScreenRecordMockup } from './mockups/ScreenRecordMockup'
import { UpdateMockup } from './mockups/UpdateMockup'
import { VoiceMockup } from './mockups/VoiceMockup'
import { Reveal } from './Reveal'
import { SimulationMockup } from './SimulationMockup'

type Item = {
  icon: ComponentType<{ size?: number; className?: string }>
  title: string
  body: string
  Visual: ComponentType
}

type SubItem = { label: string; Visual: ComponentType }

const INPUT: Item[] = [
  { icon: ScreenShare, title: 'Record your screen', body: 'Every click, captured.', Visual: ScreenRecordMockup },
  { icon: IconMic, title: 'Just talk', body: 'No slides needed.', Visual: VoiceMockup },
  { icon: IconDropFile, title: 'Drag in what you have', body: 'Docs, decks, old videos.', Visual: DropzoneMockup },
]

const OUTPUT_SUB: SubItem[] = [
  { label: 'Lesson', Visual: LessonMockup },
  { label: 'Simulation', Visual: SimulationMockup },
  { label: 'Quiz', Visual: QuizMockup },
]

const RESULTS_SUB: SubItem[] = [
  { label: 'Scores', Visual: DashboardMockup },
  { label: 'Updates', Visual: UpdateMockup },
]

const CYCLE_MS = 4200

function Row({ item, delay }: { item: Item; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="grid gap-5 border-t py-7 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,220px)_1fr] md:items-center md:gap-10" style={{ borderColor: '#e6e8f2' }}>
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
            <item.icon size={16} />
          </span>
          <div>
            <h4 className="font-display text-base font-medium">{item.title}</h4>
            <p className="text-sm" style={{ color: '#8888a0' }}>
              {item.body}
            </p>
          </div>
        </div>
        <div className="h-[260px]">
          <item.Visual />
        </div>
      </div>
    </Reveal>
  )
}

function SubTabRow({
  icon: Icon,
  title,
  body,
  items,
  delay,
}: {
  icon: ComponentType<{ size?: number }>
  title: string
  body: string
  items: SubItem[]
  delay: number
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [paused, items.length])

  const Visual = items[active].Visual

  return (
    <Reveal delay={delay}>
      <div
        className="grid gap-5 border-t py-7 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,220px)_1fr] md:items-center md:gap-10"
        style={{ borderColor: '#e6e8f2' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
              <Icon size={16} />
            </span>
            <div>
              <h4 className="font-display text-base font-medium">{title}</h4>
              <p className="text-sm" style={{ color: '#8888a0' }}>
                {body}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {items.map((it, i) => (
              <button
                key={it.label}
                onClick={() => setActive(i)}
                className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                style={
                  active === i
                    ? { backgroundColor: '#3d4bf5', borderColor: '#3d4bf5', color: 'white' }
                    : { borderColor: '#e6e8f2', color: '#4b4b5c' }
                }
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Visual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  )
}

function MacroSection({
  n,
  label,
  title,
  children,
}: {
  n: string
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-4">
          <span
            className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-2 bg-white font-display text-base font-medium"
            style={{ borderColor: '#3d4bf5', color: '#3d4bf5' }}
          >
            {n}
          </span>
          <div>
            <div className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
              {label}
            </div>
            <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">{title}</h3>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 md:ml-16">{children}</div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            The entire mechanism, from recording to results
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px md:block" style={{ backgroundColor: '#e6e8f2' }} />
        <div className="space-y-16">
          <MacroSection n="01" label="Input" title="However you'd teach a new hire">
            {INPUT.map((item, i) => (
              <Row key={item.title} item={item} delay={i * 0.05} />
            ))}
          </MacroSection>

          <MacroSection n="02" label="Output" title="What Learnik builds from that">
            <SubTabRow
              icon={Layers}
              title="An interactive course"
              body="Every recording becomes all three."
              items={OUTPUT_SUB}
              delay={0}
            />
          </MacroSection>

          <MacroSection n="03" label="Results" title="What you actually get to see">
            <SubTabRow
              icon={BarChart3}
              title="Always up to date"
              body="Who's ready, and what changed."
              items={RESULTS_SUB}
              delay={0}
            />
          </MacroSection>
        </div>
      </div>
    </section>
  )
}
