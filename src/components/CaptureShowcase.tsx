import { useEffect, useRef, useState } from 'react'
import { AgentChatMockup } from './mockups/AgentChatMockup'
import { DropzoneMockup } from './mockups/DropzoneMockup'
import { ScreenRecordMockup } from './mockups/ScreenRecordMockup'
import { VoiceMockup } from './mockups/VoiceMockup'
import { Reveal } from './Reveal'

const SLIDES = [
  { title: 'Record your screen', body: 'Click record, walk through the workflow. Learnik watches every click.', Visual: ScreenRecordMockup },
  { title: 'Just talk', body: "No slides needed. Explain the process out loud, Learnik writes it down.", Visual: VoiceMockup },
  { title: 'Drag in what you have', body: 'Docs, decks, old training videos. Point Learnik at your existing library.', Visual: DropzoneMockup },
  { title: 'Answer a few questions', body: 'The training agent asks what a screen recording alone would miss.', Visual: AgentChatMockup },
]

const AUTOPLAY_MS = 4200

export function CaptureShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  function onScroll() {
    const el = trackRef.current
    if (!el) return
    const slideWidth = el.scrollWidth / SLIDES.length
    setActive(Math.round(el.scrollLeft / slideWidth))
  }

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true
    setPaused(true)
    startX.current = e.clientX
    startScroll.current = trackRef.current?.scrollLeft ?? 0
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current || !trackRef.current) return
    trackRef.current.scrollLeft = startScroll.current - (e.clientX - startX.current)
  }
  function onPointerUp() {
    dragging.current = false
  }

  function goTo(i: number) {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: (el.scrollWidth / SLIDES.length) * i, behavior: 'smooth' })
  }

  // Auto-advance, paused while the carousel is hovered or being dragged.
  // goTo() scrolls the track; the onScroll handler above is what updates
  // `active`, so this effect only needs a ref to avoid a stale closure
  // (calling goTo from inside a setState updater would double-fire under
  // StrictMode and cancel the smooth-scroll animation).
  const activeRef = useRef(0)
  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      goTo((activeRef.current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            However you'd rather teach it
          </h2>
          <p className="mt-3 text-ink-soft" style={{ color: '#4b4b5c' }}>
            Pick whatever's fastest for you. Learnik turns any of it into the same finished course.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={trackRef}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="no-scrollbar mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 active:cursor-grabbing md:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {SLIDES.map((slide) => (
            <div key={slide.title} className="w-[82vw] max-w-[380px] shrink-0 snap-center select-none">
              <div className="h-[340px]">
                <slide.Visual />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium">{slide.title}</h3>
              <p className="mt-1.5 text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
                {slide.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 flex items-center justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            onClick={() => goTo(i)}
            aria-label={`Show ${s.title}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: active === i ? 20 : 6,
              backgroundColor: active === i ? '#3d4bf5' : '#d7dae8',
            }}
          />
        ))}
      </div>
    </section>
  )
}
