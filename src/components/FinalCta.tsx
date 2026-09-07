import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section id="get-started" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center" style={{ backgroundColor: '#3d4bf5' }}>
            <div className="blob left-1/2 top-[-4rem] size-72 -translate-x-1/2 bg-white/10" />
            <h2 className="relative font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
              Teach it once. Train everyone.
            </h2>
            <p className="relative mx-auto mt-4 max-w-sm text-white/80">
              Bring one process to Praxis — free, no setup call required.
            </p>
            <a
              href="#"
              className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              Start free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
