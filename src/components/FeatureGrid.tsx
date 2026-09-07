import { Globe2, Lock, ShieldCheck, Users } from 'lucide-react'
import { Reveal } from './Reveal'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Single sign-on (SSO)',
    body: 'Works with the identity provider your IT team already runs.',
  },
  {
    icon: Users,
    title: 'Role-based permissions',
    body: 'Control exactly who can create, edit, or just take training.',
  },
  {
    icon: Lock,
    title: 'Your data stays yours',
    body: "Never used to train anyone else's model, never leaves your workspace.",
  },
  {
    icon: Globe2,
    title: '50+ languages',
    body: 'One recording covers every office worldwide, automatically translated.',
  },
]

export function FeatureGrid() {
  return (
    <section id="platform" className="wash-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <span className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
            Enterprise-ready
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Built to pass your IT review
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: '#4b4b5c' }}>
            The same controls your security team already expects from everything else on the
            network.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(20,20,31,0.04)]" style={{ borderColor: '#e6e8f2' }}>
                <span className="grid size-11 place-items-center rounded-xl" style={{ backgroundColor: '#eef1fd', color: '#3d4bf5' }}>
                  <item.icon size={19} />
                </span>
                <h4 className="mt-4 font-display text-base font-medium">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#4b4b5c' }}>
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
