import { DashboardMockup } from './DashboardMockup'
import { Reveal } from './Reveal'
import { SimulationMockup } from './SimulationMockup'
import { TiltCard } from './TiltCard'

function ShowItOncePhoto() {
  return (
    <TiltCard max={4} className="h-full">
      <div className="h-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(20,20,31,0.3)]">
        <img
          src="/images/panel-desk.jpg"
          alt="Team reviewing a process together at their laptops"
          className="h-full w-full object-cover"
        />
      </div>
    </TiltCard>
  )
}

const STEPS = [
  {
    title: 'Show it once',
    body: "Talk through the process the way you'd explain it to a new hire, on screen or on camera. Learnik asks the follow-up questions a recording alone would miss.",
    Visual: ShowItOncePhoto,
  },
  {
    title: 'Employees practice before it counts',
    body: "They run the actual scenario, including the difficult customer. You find out who's ready before your customers do.",
    Visual: SimulationMockup,
  },
  {
    title: 'You always know who can handle it',
    body: "Every attempt is scored on its own. Open the dashboard and see who needs another pass, without asking around.",
    Visual: DashboardMockup,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      {STEPS.map((step, i) => (
        <div key={step.title} className="flex min-h-dvh items-center py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20">
            <Reveal>
              <span className="font-display text-sm text-primary" style={{ color: '#3d4bf5' }}>
                Step {i + 1} of {STEPS.length}
              </span>
              <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-[2.4rem]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed" style={{ color: '#4b4b5c' }}>
                {step.body}
              </p>

              <div className="mt-8 flex gap-1.5">
                {STEPS.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: dotIndex === i ? 20 : 6,
                      backgroundColor: dotIndex === i ? '#3d4bf5' : '#e6e8f2',
                    }}
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-[320px] md:h-[400px]">
              <step.Visual />
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  )
}
