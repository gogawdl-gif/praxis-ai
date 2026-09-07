import { GaugeCircle, Globe2, Lock, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import { TiltCard } from './TiltCard'

const ITEMS = [
  { icon: GaugeCircle, title: 'Auto-scored quizzes', body: 'Know who\'s actually ready to go.' },
  { icon: Globe2, title: 'Any device, any language', body: 'Auto-translated for global teams.' },
  { icon: ShieldCheck, title: 'SSO & permissions', body: 'Bring your own identity provider.' },
  { icon: Lock, title: 'Encrypted end to end', body: 'Your process stays your process.' },
]

export function FeatureGrid() {
  return (
    <section id="platform" className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <TiltCard max={5} className="card h-full rounded-2xl p-6 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(20,20,31,0.25)]">
                <span className="grid size-10 place-items-center rounded-xl bg-wash text-primary" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                  <item.icon size={18} />
                </span>
                <h4 className="mt-4 font-display text-base font-medium">{item.title}</h4>
                <p className="mt-1.5 text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
