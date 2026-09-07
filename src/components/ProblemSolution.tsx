import { Check, X } from 'lucide-react'
import { Reveal } from './Reveal'

const OLD_WAY = [
  'Weeks of calls with consultants to scope a course',
  'An instructional designer builds slide decks by hand',
  'A brittle LMS that takes a project plan to configure',
  'Every process change means redoing it all over again',
]

const PRAXIS_WAY = [
  'You upload materials or talk through a process once',
  'Praxis writes the lessons, exercises, and quizzes',
  'Employees train, practice, and get assessed — day one',
  'Tell Praxis what changed. It updates the training itself',
]

export function ProblemSolution() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Training programs used to take a village.
          </h2>
          <p className="mt-5 text-lg text-fg-muted" style={{ color: '#a6a6b3' }}>
            Now it takes one conversation with the person who already knows how the job is done.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-6 text-sm font-medium uppercase tracking-wide text-fg-dim" style={{ color: '#6f6f7d' }}>
                The old way
              </div>
              <ul className="space-y-4">
                {OLD_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-fg-muted" style={{ color: '#8d8d98' }}>
                    <X size={16} className="mt-0.5 shrink-0 text-rose-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card-glow relative h-full overflow-hidden rounded-2xl p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="mb-6 text-sm font-medium uppercase tracking-wide text-violet-300" style={{ color: '#c4b5fd' }}>
                The Praxis way
              </div>
              <ul className="space-y-4">
                {PRAXIS_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400">
                      <Check size={11} className="text-black" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
