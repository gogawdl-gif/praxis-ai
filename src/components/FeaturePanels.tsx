import { ArrowRight, ScreenShare, Sparkles, Swords } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'
import { Reveal } from './Reveal'
import { SimulationMockup } from './SimulationMockup'
import { TiltCard } from './TiltCard'

export function FeaturePanels() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        {/* Panel A — real photo */}
        <Reveal>
          <div className="card grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <span className="grid size-11 place-items-center rounded-xl bg-wash text-primary" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                <ScreenShare size={20} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight md:text-[2rem]">
                Teach it once
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft" style={{ color: '#4b4b5c' }}>
                Record your screen and talk a process through, or upload the docs you already have.
                Praxis builds the full course from that.
              </p>
              <a href="#get-started" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
                Start free <ArrowRight size={14} />
              </a>
            </div>

            <TiltCard max={5} className="relative">
              <div className="overflow-hidden rounded-[2.5rem_0.75rem_2.5rem_0.75rem] shadow-[0_20px_50px_-20px_rgba(20,20,31,0.3)]">
                <img
                  src="/images/panel-desk.jpg"
                  alt="Team reviewing a process together at their laptops"
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-5 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-primary shadow-lg" style={{ color: '#3d4bf5' }}>
                <Sparkles size={13} />
                3 lessons generated
              </div>
            </TiltCard>
          </div>
        </Reveal>

        {/* Panel B — simulation mockup */}
        <Reveal delay={0.06}>
          <div className="card grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:items-center md:p-12">
            <div className="order-2 md:order-1">
              <SimulationMockup />
            </div>
            <div className="order-1 md:order-2">
              <span className="grid size-11 place-items-center rounded-xl bg-wash text-primary" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                <Swords size={20} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight md:text-[2rem]">
                Real practice, not slides
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft" style={{ color: '#4b4b5c' }}>
                Branching simulations put employees in the actual conversation — including the
                awkward parts — before it counts for real.
              </p>
              <p className="mt-4 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
                Try the example →
              </p>
            </div>
          </div>
        </Reveal>

        {/* Panel C — animated dashboard */}
        <Reveal delay={0.12}>
          <div className="card grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <span className="grid size-11 place-items-center rounded-xl bg-wash text-primary" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                <Sparkles size={20} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight md:text-[2rem]">
                Always up to date
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft" style={{ color: '#4b4b5c' }}>
                When a process changes, just tell Praxis. It updates every affected lesson and
                quiz — and shows you who's scored and who's behind.
              </p>
              <a href="#get-started" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
                See a course <ArrowRight size={14} />
              </a>
            </div>
            <DashboardMockup />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
