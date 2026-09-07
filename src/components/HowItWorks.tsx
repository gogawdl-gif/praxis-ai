import { CaptureCarousel } from './CaptureCarousel'
import { DashboardMockup } from './DashboardMockup'
import { GenerationMockup } from './mockups/GenerationMockup'
import { Reveal } from './Reveal'
import { SimulationMockup } from './SimulationMockup'

const STEPS = [
  {
    kicker: 'Step 2 of 4 — Generate',
    title: 'What happens after you hit stop',
    body: "A transcript by itself isn't training. Learnik has to find the actual decision points, the exceptions, and the order things happen in: the same analysis an instructional designer would do by hand, done in the time it takes to make coffee.",
    Visual: GenerationMockup,
  },
  {
    kicker: 'Step 3 of 4 — Practice',
    title: 'Employees practice before it counts',
    body: "Reading about a difficult conversation and having one are different skills. Simulations put employees inside the actual scenario, including the parts that go wrong, so the first time they handle it for real isn't the first time they've handled it at all.",
    Visual: SimulationMockup,
  },
  {
    kicker: 'Step 4 of 4 — Track & update',
    title: "You always know who's ready, and training never goes stale",
    body: 'Every attempt is scored the moment it happens, so you\'re not guessing who needs another pass. When the process changes, telling Learnik in a sentence updates every course built from it, instantly, for everyone already enrolled.',
    Visual: DashboardMockup,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            The entire mechanism, from recording to results
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft" style={{ color: '#4b4b5c' }}>
            Most training tools stop at "upload a document." Here's everything that actually
            happens after you hit record, in the order it happens.
          </p>
        </Reveal>
      </div>

      {/* Step 1 — full width, the capture carousel */}
      <div className="mt-16 border-t border-line py-16" style={{ borderColor: '#e6e8f2' }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="text-sm font-medium text-primary" style={{ color: '#3d4bf5' }}>
              Step 1 of 4 — Capture
            </span>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-[2rem]">
              Teach it however is fastest for you
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: '#4b4b5c' }}>
              Most training programs never get built, because whoever knows the process best
              doesn't have time to become an instructional designer. Learnik removes that step:
              explain it however you already would, and pick whichever is easiest.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <CaptureCarousel />
        </Reveal>
      </div>

      {/* Steps 2-4 — two column, alternating */}
      {STEPS.map((step, i) => (
        <div key={step.title} className="border-t border-line py-16" style={{ borderColor: '#e6e8f2' }}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                <span className="font-display text-sm text-primary" style={{ color: '#3d4bf5' }}>
                  {step.kicker}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: '#4b4b5c' }}>
                  {step.body}
                </p>
              </Reveal>

              <Reveal delay={0.1} className={`h-[340px] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <step.Visual />
              </Reveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
