import { Reveal } from './Reveal'

const FEATURED = {
  quote:
    'Writing our onboarding docs used to eat a week every time IT changed something. Instead I screen-recorded the new-hire setup once, about ten minutes, talking through it as I went. By the next morning every new hire had a real course: lessons, a quiz, all of it.',
  result: 'A week of doc-writing became a ten-minute recording',
  role: 'IT operations manager',
  avatar: '/images/avatar-1.jpg',
}

const OTHERS = [
  {
    quote:
      "New reps used to lose their first few renewal calls figuring it out live, on real customers. Now they run the hard version in a simulation first, so the real call isn't the first time they've had it.",
    result: 'Reps rehearse the hard call before a customer ever hears it',
    role: 'Enablement lead, customer success',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote:
      'Our intake process changed mid-quarter, which normally meant updating every doc by hand before anyone got it wrong. I told Learnik what changed in two sentences instead. Every lesson updated itself, for everyone already enrolled.',
    result: 'Two sentences replaced a manual doc-update pass',
    role: 'Operations manager',
    avatar: '/images/avatar-3.jpg',
  },
]

function Result({ text }: { text: string }) {
  return (
    <p className="mt-4 flex items-start gap-2 text-[13px] font-medium text-primary" style={{ color: '#3d4bf5' }}>
      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" style={{ backgroundColor: '#3d4bf5' }} />
      {text}
    </p>
  )
}

export function Quotes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            What changed for teams using it
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal className="md:row-span-2">
            <div className="card-soft flex h-full flex-col justify-between rounded-3xl bg-white p-8 md:p-10">
              <div>
                <p className="font-display text-xl font-normal leading-snug tracking-tight text-ink md:text-2xl">
                  "{FEATURED.quote}"
                </p>
                <Result text={FEATURED.result} />
              </div>
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
                <p className="text-[15px] leading-relaxed text-ink">"{q.quote}"</p>
                <Result text={q.result} />
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
