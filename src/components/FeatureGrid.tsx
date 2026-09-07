import { GaugeCircle, Lock, ShieldCheck, Swords } from 'lucide-react'
import { Reveal } from './Reveal'

const ITEMS = [
  { icon: Swords, title: 'Real practice', body: 'Branching simulations, not just slides.' },
  { icon: GaugeCircle, title: 'Auto-scored quizzes', body: 'Know who\'s ready for the floor.' },
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
              <div className="card h-full rounded-2xl p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-wash text-primary" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                  <item.icon size={18} />
                </span>
                <h4 className="mt-4 font-display text-base font-medium">{item.title}</h4>
                <p className="mt-1.5 text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
