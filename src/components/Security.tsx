import { Fingerprint, KeyRound, Lock, ScrollText } from 'lucide-react'
import { Reveal } from './Reveal'

const ITEMS = [
  {
    icon: Lock,
    title: 'Encrypted in transit & at rest',
    body: 'Uploaded materials, recordings, and generated training content are encrypted end to end.',
  },
  {
    icon: KeyRound,
    title: 'SSO & role-based access',
    body: 'Bring your identity provider. Control exactly who can create, edit, or just take training.',
  },
  {
    icon: ScrollText,
    title: 'Full audit trail',
    body: 'Every update to a course — human or AI-made — is logged, timestamped, and reversible.',
  },
  {
    icon: Fingerprint,
    title: 'Your data trains no one else',
    body: 'What you teach Praxis about your business stays inside your workspace, full stop.',
  },
]

export function Security() {
  return (
    <section id="security" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="text-sm font-medium uppercase tracking-wide text-cyan-300" style={{ color: '#67e8f9' }}>
              Built for the enterprise
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Fast to roll out. Strict about who sees what.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fg-muted" style={{ color: '#a6a6b3' }}>
              Praxis is built to sit inside the same governance your IT and security teams already
              require — without slowing down the person who just wants to teach their team something.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-300" style={{ color: '#c4b5fd' }}>
                    <item.icon size={17} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted" style={{ color: '#a6a6b3' }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
