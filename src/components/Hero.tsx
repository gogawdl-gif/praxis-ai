import { motion } from 'framer-motion'
import { ArrowRight, Circle, Mic, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const TRANSCRIPT = [
  'Okay, so when a return comes in…',
  'first you check the order in the portal,',
  'then you confirm the item is unused…',
]

const GENERATED = [
  { label: 'Lesson', title: 'Processing a return' },
  { label: 'Simulation', title: 'Handle an upset customer' },
  { label: 'Quiz', title: '5 questions · scored' },
]

const bars = [6, 14, 9, 18, 11, 20, 8, 15, 10, 17, 7, 13]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_10%,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="absolute right-[-10rem] top-32 h-[26rem] w-[26rem] rounded-full bg-cyan-400/15 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-fg-muted" style={{ color: '#a6a6b3' }}>
                <Sparkles size={13} className="text-violet-400" style={{ color: '#8b5cf6' }} />
                No consultants. No instructional designers. No LMS setup.
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.2rem]">
                Teach your business
                <br />
                to AI. <span className="text-gradient">Once.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-fg-muted md:text-xl" style={{ color: '#a6a6b3' }}>
                Upload your docs, videos, and SOPs — or just record your screen and talk your
                process through. Praxis turns it into a complete training program: lessons,
                practice, simulations, quizzes, and assessments. No slide decks required.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#get-started"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Start training your team
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-8 text-xs uppercase tracking-wider text-fg-dim" style={{ color: '#6f6f7d' }}>
                Built for operations, support, retail, healthcare, and field teams
              </p>
            </Reveal>
          </div>

          {/* product mockup */}
          <Reveal delay={0.2} y={26}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-400/10 blur-2xl" />
              <div className="card-glow animate-float overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 text-xs text-fg-dim" style={{ color: '#6f6f7d' }}>
                    Praxis — training agent
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="relative flex size-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-400">
                      <Circle size={9} className="fill-rose-400 text-rose-400" />
                      <span className="absolute inline-flex size-8 animate-ping rounded-full bg-rose-500/20" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-white">Recording &amp; listening</div>
                      <div className="flex items-end gap-[3px] pt-1.5">
                        {bars.map((h, i) => (
                          <motion.span
                            key={i}
                            className="w-[3px] rounded-full bg-gradient-to-t from-violet-500 to-cyan-300"
                            style={{ height: h }}
                            animate={{ scaleY: [1, 1.7, 0.6, 1] }}
                            transition={{
                              duration: 1.1,
                              repeat: Infinity,
                              delay: i * 0.06,
                              ease: 'easeInOut',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <Mic size={15} className="text-fg-dim" style={{ color: '#6f6f7d' }} />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                    <div className="text-[11px] font-medium uppercase tracking-wide text-fg-dim" style={{ color: '#6f6f7d' }}>
                      Live transcript
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {TRANSCRIPT.map((t, i) => (
                        <p key={i} className="text-[13px] leading-snug text-fg-muted" style={{ color: '#a6a6b3', opacity: 1 - i * 0.18 }}>
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-fg-dim" style={{ color: '#6f6f7d' }}>
                      <Sparkles size={11} className="text-cyan-300" />
                      Praxis is generating
                    </div>
                    <div className="space-y-2">
                      {GENERATED.map((g, i) => (
                        <div
                          key={g.title}
                          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        >
                          <div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-violet-300" style={{ color: '#c4b5fd' }}>
                              {g.label}
                            </div>
                            <div className="text-[13px] text-white">{g.title}</div>
                          </div>
                          <span className="size-5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
