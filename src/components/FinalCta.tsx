import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section id="get-started" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl px-8 py-20 text-center">
            <img
              src="/images/office-team.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(20,20,40,0.55), rgba(30,25,90,0.85))' }}
            />
            <h2 className="relative font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
              Teach it once. Every new hire learns it right.
            </h2>
            <p className="relative mx-auto mt-4 max-w-sm text-white/85">
              Bring one process. See the full course it builds, free, no setup call needed.
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
