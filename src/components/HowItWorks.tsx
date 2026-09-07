import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart3,
  BookOpen,
  GitBranch,
  ListChecks,
  MessagesSquare,
  RefreshCcw,
  ScreenShare,
} from 'lucide-react'
import { type ComponentType, useEffect, useState } from 'react'
import { DashboardMockup } from './DashboardMockup'
import { IconDropFile, IconMic } from './icons'
import { AgentChatMockup } from './mockups/AgentChatMockup'
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

const INPUT: Item[] = [
  { icon: ScreenShare, title: 'Record your screen', body: 'Click record, walk through the workflow. Learnik watches every click.', Visual: ScreenRecordMockup },
  { icon: IconMic, title: 'Just talk', body: "No slides needed. Explain the process out loud, Learnik writes it down.", Visual: VoiceMockup },
  { icon: IconDropFile, title: 'Drag in what you have', body: 'Docs, decks, old training videos. Point Learnik at your existing library.', Visual: DropzoneMockup },
  { icon: MessagesSquare, title: 'Answer a few questions', body: 'The training agent asks what a screen recording alone would miss.', Visual: AgentChatMockup },
]

const OUTPUT: Item[] = [
  { icon: BookOpen, title: 'A structured lesson', body: 'Step by step, with screenshots pulled straight from your recording.', Visual: LessonMockup },
  { icon: GitBranch, title: 'A branching simulation', body: 'The trickiest part becomes a scenario employees actually have to handle.', Visual: SimulationMockup },
  { icon: ListChecks, title: 'A scored quiz', body: 'Five questions, graded the moment someone finishes.', Visual: QuizMockup },
]

const RESULTS: Item[] = [
  { icon: BarChart3, title: "Know who's ready", body: "Every attempt is scored on its own, so you're not guessing who needs another pass.", Visual: DashboardMockup },
  { icon: RefreshCcw, title: 'Training that updates itself', body: 'Tell it what changed in a sentence. Every course built from it updates instantly.', Visual: UpdateMockup },
]

const CYCLE_MS = 4200

function CycleGroup({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || items.length <= 1) return
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [paused, items.length])

  const item = items[active]

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-3"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
              <item.icon size={16} />
            </span>
            <div>
              <h4 className="font-display text-base font-medium">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
                {item.body}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <item.Visual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex gap-1.5 md:ml-[19.5rem]">
          {items.map((it, i) => (
            <button
              key={it.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${it.title}`}
              className="h-1.5 rounded-full transition-all"
              style={{ width: active === i ? 20 : 6, backgroundColor: active === i ? '#3d4bf5' : '#e6e8f2' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function MacroSection({
  n,
  label,
  title,
  lead,
  items,
}: {
  n: string
  label: string
  title: string
  lead: string
  items: Item[]
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
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed md:ml-16" style={{ color: '#4b4b5c' }}>
          {lead}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 md:ml-16">
        <CycleGroup items={items} />
      </Reveal>
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
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: '#4b4b5c' }}>
            Most training tools stop at "upload a document." Here's every input Learnik accepts,
            every output it produces, and what you get to see once it's live.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <div className="absolute left-6 top-6 bottom-6 hidden w-px md:block" style={{ backgroundColor: '#e6e8f2' }} />
        <div className="space-y-16">
          <MacroSection
            n="01"
            label="Input"
            title="However you'd teach a new hire"
            lead="Pick whatever's fastest for you. Learnik turns any of it into the same finished course."
            items={INPUT}
          />
          <MacroSection
            n="02"
            label="Output"
            title="What Learnik builds from that"
            lead="A transcript by itself isn't training. Learnik finds the decision points and the exceptions, then produces all three of these from one recording."
            items={OUTPUT}
          />
          <MacroSection
            n="03"
            label="Results"
            title="What you actually get to see"
            lead="Not a course that disappears into a folder: a live view of who's ready, and training that stays honest when the process changes."
            items={RESULTS}
          />
        </div>
      </div>
    </section>
  )
}
