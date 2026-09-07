import { FileStack, MessagesSquare, ScreenShare, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const STEPS = [
  {
    n: '01',
    icon: ScreenShare,
    title: 'Teach it once',
    body: 'Upload existing documents, videos, and SOPs — or open Praxis and record your screen while you talk a process through, the way you\'d explain it to a new hire.',
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'Praxis builds the program',
    body: 'From that single recording or upload, Praxis writes structured lessons, hands-on practice exercises, realistic simulations, and a scored assessment — automatically.',
  },
  {
    n: '03',
    icon: FileStack,
    title: 'Employees train and get evaluated',
    body: 'New hires and existing staff move through interactive lessons and simulated scenarios at their own pace, and are scored so you know exactly who\'s ready.',
  },
  {
    n: '04',
    icon: MessagesSquare,
    title: 'Process changes? Just say so',
    body: 'When a process changes, the manager tells Praxis in plain language. Praxis finds every lesson, exercise, and quiz that\'s affected and updates them — no rebuild.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wide text-cyan-300" style={{ color: '#67e8f9' }}>
            How it works
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            From “here's how we do it” to a full training program.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="bg-panel h-full" >
              <div className="h-full bg-[#0d0d13] p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-fg-dim" style={{ color: '#6f6f7d' }}>
                    {step.n}
                  </span>
                  <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300" style={{ color: '#c4b5fd' }}>
                    <step.icon size={19} />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted" style={{ color: '#a6a6b3' }}>
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
