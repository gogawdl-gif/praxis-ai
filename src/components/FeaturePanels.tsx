import { ArrowRight, Circle, ScreenShare, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

export function FeaturePanels() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        {/* Panel A */}
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

            <div className="rounded-2xl border p-5" style={{ borderColor: '#e6e8f2', background: '#fbfbfe' }}>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3.5" style={{ boxShadow: '0 1px 2px rgba(20,20,31,0.04)' }}>
                <span className="relative grid size-7 place-items-center rounded-full bg-rose-50 text-rose-500">
                  <Circle size={8} className="fill-current" />
                </span>
                <div className="text-xs font-medium text-ink">Recording your screen…</div>
              </div>
              <div className="mt-3 space-y-2 rounded-xl bg-white p-3.5 text-[13px] text-ink-soft" style={{ color: '#4b4b5c', boxShadow: '0 1px 2px rgba(20,20,31,0.04)' }}>
                <p>“Okay — when a return comes in, first check the order…”</p>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-primary/5 p-3.5 text-xs font-medium text-primary" style={{ backgroundColor: 'rgba(61,75,245,0.06)', color: '#3d4bf5' }}>
                <Sparkles size={13} /> 3 lessons, 1 simulation, 1 quiz generated
              </div>
            </div>
          </div>
        </Reveal>

        {/* Panel B */}
        <Reveal delay={0.08}>
          <div className="card grid gap-8 rounded-3xl p-8 md:grid-cols-2 md:items-center md:p-12">
            <div className="order-2 md:order-1 rounded-2xl border p-5" style={{ borderColor: '#e6e8f2', background: '#fbfbfe' }}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Active courses', value: '12' },
                  { label: 'Avg. score', value: '87%' },
                  { label: 'Updated', value: '3' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white p-3 text-center" style={{ boxShadow: '0 1px 2px rgba(20,20,31,0.04)' }}>
                    <div className="font-display text-xl font-medium">{s.value}</div>
                    <div className="mt-0.5 text-[10px] text-ink-dim" style={{ color: '#8888a0' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { name: 'Return handling', pct: 92 },
                  { name: 'New POS workflow', pct: 41 },
                ].map((c) => (
                  <div key={c.name} className="rounded-xl bg-white p-3" style={{ boxShadow: '0 1px 2px rgba(20,20,31,0.04)' }}>
                    <div className="flex items-center justify-between text-xs font-medium text-ink">
                      <span>{c.name}</span>
                      <span className="text-ink-dim" style={{ color: '#8888a0' }}>{c.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-wash" style={{ backgroundColor: '#eef1fd' }}>
                      <div className="h-full rounded-full bg-primary" style={{ width: `${c.pct}%`, backgroundColor: '#3d4bf5' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
