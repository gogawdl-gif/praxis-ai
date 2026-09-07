import { Reveal } from './Reveal'

const FEATURED = {
  quote:
    'I recorded our closing checklist once, on my phone, in about ten minutes. By the next morning every new hire had a real course out of it — lessons, a quiz, all of it.',
  role: 'Operations manager, retail',
  avatar: '/images/avatar-1.jpg',
}

const OTHERS = [
  {
    quote: 'The simulations are the part that stuck — people practice the hard conversation first.',
    role: 'Training lead, contact center',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote: 'I told Praxis what changed in two sentences. Every lesson updated itself.',
    role: 'Clinic operations director',
    avatar: '/images/avatar-3.jpg',
  },
]

export function Quotes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What teams notice first
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal className="md:row-span-2">
            <div className="card-soft flex h-full flex-col justify-between rounded-3xl bg-white p-8 md:p-10">
              <p className="font-display text-xl font-normal leading-snug tracking-tight text-ink md:text-2xl">
                “{FEATURED.quote}”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <img src={FEATURED.avatar} alt="" className="size-11 rounded-full object-cover" />
                <p className="text-sm font-medium text-ink-dim" style={{ color: '#8888a0' }}>
                  {FEATURED.role}
                </p>
              </div>
            </div>
          </Reveal>

          {OTHERS.map((q, i) => (
            <Reveal key={q.role} delay={0.06 + i * 0.06}>
              <div className="card rounded-3xl bg-white p-7">
                <p className="text-[15px] leading-relaxed text-ink">“{q.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={q.avatar} alt="" className="size-9 rounded-full object-cover" />
                  <p className="text-xs font-medium text-ink-dim" style={{ color: '#8888a0' }}>
                    {q.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
