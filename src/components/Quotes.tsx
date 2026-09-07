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
    quote: 'I told Learnik what changed in two sentences, and every lesson updated itself.',
    role: 'Operations manager',
    avatar: '/images/avatar-3.jpg',
  },
  {
    quote: 'Compliance training used to take a consultant. Now it takes an afternoon.',
    role: 'L&D manager',
    avatar: '/images/avatar-4.jpg',
  },
  {
    quote: 'New hires stopped asking the same three questions once the course covered it.',
    role: 'HR lead',
    avatar: '/images/avatar-5.jpg',
  },
  {
    quote: 'Every score updates the dashboard in real time. No more guessing who needs help.',
    role: 'Training coordinator',
    avatar: '/images/avatar-6.jpg',
  },
]

const ROW_1 = QUOTES.slice(0, 3)
const ROW_2 = QUOTES.slice(3, 6)

function Card({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <div className="card w-[21rem] shrink-0 rounded-2xl bg-white p-6">
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

function Row({
  quotes,
  reverse,
  duration,
  offset,
  paused,
}: {
  quotes: typeof QUOTES
  reverse?: boolean
  duration: string
  offset?: boolean
  paused: boolean
}) {
  const items = [...quotes, ...quotes]
  return (
    <div className="no-scrollbar overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={`flex w-max gap-5 animate-marquee ${offset ? '-translate-x-24' : ''}`}
        style={{
          animationDuration: duration,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((q, i) => (
          <Card key={i} q={q} />
        ))}
      </div>
    </div>
  )
}

export function Quotes() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What changed for teams using it
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          className="mt-12 space-y-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Row quotes={ROW_1} duration="34s" paused={paused} />
          <Row quotes={ROW_2} duration="40s" reverse offset paused={paused} />
        </div>
      </Reveal>
    </section>
  )
}
