import { GaugeCircle, Globe2, Lock, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const ITEMS = [
  { icon: GaugeCircle, title: 'Every quiz is scored', body: "So you stop guessing who's ready and start knowing." },
  { icon: Globe2, title: 'Works in 50+ languages', body: 'One recording covers every office, automatically translated.' },
  { icon: ShieldCheck, title: 'Your own SSO', body: 'Provision and deprovision access the way IT already does it.' },
  { icon: Lock, title: 'Encrypted end to end', body: 'What you teach it stays inside your workspace.' },
]

export function FeatureGrid() {
  return (
    <section id="platform" className="py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid divide-y divide-line rounded-3xl border border-line bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4" style={{ borderColor: '#e6e8f2' }}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 p-7" style={{ borderColor: '#e6e8f2' }}>
                <item.icon size={18} className="text-primary" style={{ color: '#3d4bf5' }} />
                <h4 className="font-display text-base font-medium">{item.title}</h4>
                <p className="text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
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
