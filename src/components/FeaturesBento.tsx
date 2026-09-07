import {
  Bot,
  GaugeCircle,
  ListChecks,
  RefreshCcw,
  Swords,
  Video,
} from 'lucide-react'
import { Reveal } from './Reveal'

export function FeaturesBento() {
  return (
    <section id="platform" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-wide text-amber-300" style={{ color: '#fcd34d' }}>
            The platform
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Everything a training program needs. Nothing you have to build.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
          <Reveal delay={0.02} className="md:col-span-2">
            <FeatureCard
              icon={Video}
              title="Learns from what you already have"
              body="Point Praxis at your SOPs, onboarding docs, recorded calls, or training videos. It reads and watches everything and pulls out the actual process — no reformatting required."
              accent="from-violet-500 to-fuchsia-400"
              tall
            />
          </Reveal>

          <Reveal delay={0.08}>
            <FeatureCard
              icon={Bot}
              title="A training agent that interviews you"
              body="No writing required — narrate a screen recording and Praxis's agent asks clarifying questions in the moment, the way a good trainer would."
              accent="from-cyan-400 to-blue-400"
            />
          </Reveal>

          <Reveal delay={0.14}>
            <FeatureCard
              icon={Swords}
              title="Realistic practice, not just slides"
              body="Branching simulations let employees practice the actual conversation or workflow — including the awkward parts — before it counts."
              accent="from-amber-400 to-orange-400"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <FeatureCard
              icon={ListChecks}
              title="Quizzes & assessments, auto-scored"
              body="Every lesson ends with a check for understanding. Every course ends with an assessment that tells you who's actually ready for the floor."
              accent="from-emerald-400 to-teal-400"
            />
          </Reveal>

          <Reveal delay={0.26} className="md:col-span-2">
            <FeatureCard
              icon={RefreshCcw}
              title="Training that keeps itself current"
              body="Processes change constantly. Tell Praxis what's different — in a sentence or a follow-up recording — and it updates every lesson, exercise, and quiz that depends on it, instantly, across every team taking that course."
              accent="from-violet-500 to-cyan-400"
              tall
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-5">
          <div className="card-glow flex flex-col items-start gap-6 rounded-2xl p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300" style={{ color: '#67e8f9' }}>
                <GaugeCircle size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">A manager dashboard, not a spreadsheet</h3>
                <p className="mt-1.5 max-w-xl text-[15px] text-fg-muted" style={{ color: '#a6a6b3' }}>
                  See completion, scores, and who's falling behind on any process — by team, role,
                  or location — the moment they finish a lesson.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  body,
  accent,
  tall,
}: {
  icon: typeof Video
  title: string
  body: string
  accent: string
  tall?: boolean
}) {
  return (
    <div className={`card-glow group relative h-full overflow-hidden rounded-2xl p-8 ${tall ? 'md:min-h-[240px]' : 'md:min-h-[240px]'}`}>
      <div
        className={`pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br ${accent} opacity-[0.12] blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
      />
      <span className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${accent} text-black`}>
        <Icon size={19} />
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-fg-muted" style={{ color: '#a6a6b3' }}>
        {body}
      </p>
    </div>
  )
}
