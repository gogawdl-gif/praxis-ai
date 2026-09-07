import {
  BarChart3,
  BookOpen,
  GitBranch,
  ListChecks,
  MessagesSquare,
  RefreshCcw,
  ScreenShare,
} from 'lucide-react'
import type { ComponentType } from 'react'
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
  { icon: ScreenShare, title: 'Record your screen', body: 'Every click, captured.', Visual: ScreenRecordMockup },
  { icon: IconMic, title: 'Just talk', body: 'No slides needed.', Visual: VoiceMockup },
  { icon: IconDropFile, title: 'Drag in what you have', body: 'Docs, decks, old videos.', Visual: DropzoneMockup },
  { icon: MessagesSquare, title: 'Answer a few questions', body: 'Fills in the gaps.', Visual: AgentChatMockup },
]

const OUTPUT: Item[] = [
  { icon: BookOpen, title: 'A structured lesson', body: 'Step by step, with screenshots.', Visual: LessonMockup },
  { icon: GitBranch, title: 'A branching simulation', body: 'The tricky part, practiced.', Visual: SimulationMockup },
  { icon: ListChecks, title: 'A scored quiz', body: 'Five questions, graded instantly.', Visual: QuizMockup },
]

const RESULTS: Item[] = [
  { icon: BarChart3, title: "Know who's ready", body: 'Every attempt, scored.', Visual: DashboardMockup },
  { icon: RefreshCcw, title: 'Training that updates itself', body: 'Tell it what changed.', Visual: UpdateMockup },
]

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

function MacroSection({
  n,
  label,
  title,
  items,
}: {
  n: string
  label: string
  title: string
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
      </Reveal>

      <div className="mt-6 md:ml-16">
        {items.map((item, i) => (
          <Row key={item.title} item={item} delay={i * 0.05} />
        ))}
      </div>
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
          <MacroSection n="01" label="Input" title="However you'd teach a new hire" items={INPUT} />
          <MacroSection n="02" label="Output" title="What Learnik builds from that" items={OUTPUT} />
          <MacroSection n="03" label="Results" title="What you actually get to see" items={RESULTS} />
        </div>
      </div>
    </section>
  )
}
