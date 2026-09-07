import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section id="get-started" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/25 via-[#0d0d13] to-cyan-500/10 px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet-500/30 blur-[100px]" />
            <h2 className="relative font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Teach it once.
              <br />
              Train everyone.
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-lg text-fg-muted" style={{ color: '#c8c8d1' }}>
              Bring one process to Praxis and see the full course it builds — free, no setup call
              required.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Start free
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.06]"
              >
                View pricing
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
