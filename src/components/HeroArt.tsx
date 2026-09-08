import { AnimatePresence, motion } from 'framer-motion'
import { Check, FileText, Presentation, ScreenShare, Video } from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const CONTAINER_HEIGHT = 420
const CENTER = { left: 50, top: 45 }

type SourceInput = {
  label: string
  Icon: ComponentType<{ size?: number; className?: string }>
  start: { left: number; top: number }
  duration: number
  delay: number
}

// What actually feeds the funnel — plain, immediately-legible source
// types (kept generic on purpose: the point is "whatever you already
// have", not a specific file format).
const INPUTS: SourceInput[] = [
  { label: 'PDF', Icon: FileText, start: { left: 6, top: 6 }, duration: 3.6, delay: 0 },
  { label: 'Video', Icon: Video, start: { left: 86, top: 4 }, duration: 3.9, delay: 0.9 },
  { label: 'Screen recording', Icon: ScreenShare, start: { left: 2, top: 64 }, duration: 3.4, delay: 1.8 },
  { label: 'Presentation', Icon: Presentation, start: { left: 92, top: 68 }, duration: 4.1, delay: 2.7 },
]

// What comes out the other end — one complete learning programme,
// cycling through the same example content used later in "How it
// works" so the hero isn't teasing outputs the rest of the page
// doesn't back up.
const OUTPUTS = [
  { title: 'New hire onboarding', meta: '6 lessons · Practice · Quiz' },
  { title: 'Refund policy training', meta: '4 lessons · Practice · Quiz' },
  { title: 'CRM workflow course', meta: '5 lessons · Practice · Quiz' },
]

const CYCLE_MS = 3200

function pct(n: number) {
  return `${n}%`
}

// Moves via transform (x/y), not left/top — left/top are layout
// properties, so animating them every frame forces the browser to
// recompute layout on each tick instead of just compositing.
//
// Position is a single two-point path (start straight to center) with
// one continuous ease, not three waypoints — a middle waypoint means
// two separately-eased segments back to back, and velocity resets to
// "slow" again at the join, which reads as a stutter/stop-start rather
// than a smooth glide. Opacity and scale keep their own multi-point
// fade so the chip still appears, holds, then fades as it "arrives" -
// a property fading unevenly isn't noticeable the way a position
// stutter is, so it doesn't need the same one-segment treatment.
function FunnelChip({ input, containerWidth }: { input: SourceInput; containerWidth: number }) {
  const { Icon, label, start } = input
  const centerPx = {
    x: ((CENTER.left - start.left) / 100) * containerWidth,
    y: ((CENTER.top - start.top) / 100) * CONTAINER_HEIGHT,
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pct(start.left), top: pct(start.top) }}>
      <motion.div
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-white px-3 py-1.5 text-xs shadow-[0_10px_20px_-10px_rgba(20,20,31,0.25)]"
        style={{ borderColor: '#e6e8f2', color: '#4b4b5c' }}
        initial={{ x: 0, y: 0, opacity: 0, scale: 0.85 }}
        animate={{
          x: [0, centerPx.x],
          y: [0, centerPx.y],
          opacity: [0, 1, 1, 0],
          scale: [0.85, 1, 0.5],
        }}
        transition={{
          x: { duration: input.duration, delay: input.delay, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: input.duration, delay: input.delay, repeat: Infinity, ease: 'easeInOut' },
          // Framer's per-property transition overrides replace the
          // whole transition for that property rather than inheriting
          // duration/repeat/delay from sibling keys - leaving those out
          // here silently fell back to a one-shot ~0.3s animation with
          // no repeat, so opacity/scale played once and froze at their
          // final (invisible, shrunk) value forever while x/y kept
          // looping normally. Every property needs its own complete
          // config, not just the parts that differ (the times array).
          //
          // Each chip runs on its own duration, so with repeat: Infinity
          // their cycles drift in and out of phase with each other over
          // time - if "visible" were only a small slice of each cycle,
          // there'd be real stretches where all four chips are
          // invisible at once and the funnel looks empty. Visible for
          // ~80% of each chip's own cycle, so that can't happen.
          opacity: {
            duration: input.duration,
            delay: input.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.08, 0.88, 1],
          },
          scale: {
            duration: input.duration,
            delay: input.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.08, 1],
          },
        }}
      >
        <Icon size={13} className="shrink-0" />
        {label}
      </motion.div>
    </div>
  )
}

// No pulsing ring here - a thin border visually thins further as it
// scales up via transform, which read as flickery rather than a clean
// pulse, and two staggered rings overlapping made it busier than
// intentional. The chips flowing in and the output card cycling
// already carry the motion in this scene; the center point doesn't
// need its own animation to read as "live."
function FunnelCenter() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pct(CENTER.left), top: pct(CENTER.top) }}>
      <div
        className="grid size-11 place-items-center rounded-full shadow-[0_14px_28px_-10px_rgba(61,75,245,0.55)]"
        style={{ backgroundColor: '#3d4bf5' }}
      >
        <span className="size-2.5 rounded-full bg-white" />
      </div>
    </div>
  )
}

function CycleCard() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % OUTPUTS.length), CYCLE_MS)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_36px_-14px_rgba(20,20,31,0.28)]">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500">
        <Check size={13} className="text-white" strokeWidth={3} />
      </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          className="min-w-0"
        >
          <p className="truncate text-sm font-medium text-ink">{OUTPUTS[i].title}</p>
          <p className="truncate text-[11px]" style={{ color: '#8888a0' }}>
            {OUTPUTS[i].meta}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function FunnelOutput() {
  return (
    <div className="absolute w-[17rem] -translate-x-1/2 -translate-y-1/2" style={{ left: pct(CENTER.left), top: '84%' }}>
      <CycleCard />
    </div>
  )
}

export function HeroArt() {
  const containerRef = useRef<HTMLDivElement>(null)
  // Height is a fixed 420px regardless of viewport; width is the only
  // dimension that actually changes (w-full up to max-w-md), so that's
  // the only thing worth measuring.
  const [containerWidth, setContainerWidth] = useState(384)

  // Measured synchronously before paint so the chips' first render
  // already uses the real width - avoids a one-time visible snap from
  // the 384px fallback to the actual size.
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    setContainerWidth(el.getBoundingClientRect().width)
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width
      if (width) setContainerWidth(width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative mx-auto h-[420px] w-full max-w-md">
      {/* Static, not animated - a scale-pulsing blur filter is one of
          the more expensive things to repaint every frame, and stacked
          on top of four continuously-moving chips it was adding real
          compositing cost for a barely-visible effect. */}
      <div
        className="absolute left-1/2 top-[45%] size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(61,75,245,0.08)' }}
      />

      {/* funnel stem connecting the convergence point to the finished course */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: '48%',
          height: '32%',
          width: 1,
          background: 'linear-gradient(180deg, rgba(61,75,245,0.35), rgba(61,75,245,0))',
        }}
      />

      {INPUTS.map((input) => (
        <FunnelChip key={input.label} input={input} containerWidth={containerWidth} />
      ))}

      <FunnelCenter />
      <FunnelOutput />
    </div>
  )
}
