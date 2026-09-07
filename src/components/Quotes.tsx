import { useState } from 'react'
import { Reveal } from './Reveal'

const QUOTES = [
  {
    quote: 'Recorded our IT setup once, ten minutes. By morning every new hire had a full course.',
    role: 'IT operations manager',
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote: 'Reps rehearse the hard renewal call before a customer ever hears it.',
    role: 'Enablement lead, customer success',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote: 'Told it what changed in two sentences. Every lesson updated itself.',
    role: 'Operations manager',
    avatar: '/images/avatar-3.jpg',
  },
]

function Card({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <div className="card w-[22rem] shrink-0 rounded-2xl bg-white p-6">
      <p className="text-[15px] leading-relaxed text-ink">"{q.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <img src={q.avatar} alt="" className="size-9 rounded-full object-cover" />
        <p className="text-xs font-medium text-ink-dim" style={{ color: '#8888a0' }}>
          {q.role}
        </p>
      </div>
    </div>
  )
}

export function Quotes() {
  const [paused, setPaused] = useState(false)
  const items = [...QUOTES, ...QUOTES]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What changed for teams using it
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="no-scrollbar overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        >
          <div
            className="flex w-max gap-5 animate-marquee"
            style={{ animationDuration: '38s', animationPlayState: paused ? 'paused' : 'running' }}
          >
            {items.map((q, i) => (
              <Card key={i} q={q} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
