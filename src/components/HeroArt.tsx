import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { Check, FileText, ScreenShare } from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import { IconDropFile, IconMic } from './icons'

const CENTER = { left: 50, top: 45 }

type SourceInput = {
  label: string
  Icon: ComponentType<{ size?: number; className?: string }>
  start: { left: number; top: number }
  mid: { left: number; top: number }
  duration: number
  delay: number
}

// What actually feeds the funnel — same three input types as the
// "How it works" Input step, with docs split into two chips so the
// funnel reads as "several messy sources", not one.
const INPUTS: SourceInput[] = [
  { label: 'Screen recording', Icon: ScreenShare, start: { left: 6, top: 6 }, mid: { left: 25, top: 24 }, duration: 3.6, delay: 0 },
  { label: 'Process.pdf', Icon: FileText, start: { left: 86, top: 4 }, mid: { left: 65, top: 22 }, duration: 3.9, delay: 0.9 },
  { label: 'Voice walkthrough', Icon: IconMic, start: { left: 2, top: 64 }, mid: { left: 22, top: 52 }, duration: 3.4, delay: 1.8 },
  { label: 'Old slide deck', Icon: IconDropFile, start: { left: 92, top: 68 }, mid: { left: 70, top: 54 }, duration: 4.1, delay: 2.7 },
]

// What comes out the other end — one clean, structured course, cycling
// through the same example content used later in "How it works" so the
// hero isn't teasing outputs the rest of the page doesn't back up.
const OUTPUTS = [
  { title: 'New hire onboarding', meta: '6 lessons · quiz · ready' },
  { title: 'Refund policy training', meta: '4 lessons · quiz · ready' },
  { title: 'CRM workflow course', meta: '5 lessons · quiz · ready' },
]

const CYCLE_MS = 3200

function pct(n: number) {
  return `${n}%`
}

function FunnelChip({ input }: { input: SourceInput }) {
  const { Icon, label, start, mid } = input
  return (
    <motion.div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border bg-white px-3 py-1.5 text-xs shadow-[0_10px_20px_-10px_rgba(20,20,31,0.25)]"
      style={{ borderColor: '#e6e8f2', color: '#4b4b5c' }}
      initial={{ left: pct(start.left), top: pct(start.top), opacity: 0, scale: 0.85 }}
      animate={{
        left: [pct(start.left), pct(mid.left), pct(CENTER.left)],
        top: [pct(start.top), pct(mid.top), pct(CENTER.top)],
        opacity: [0, 1, 1, 0],
        scale: [0.85, 1, 0.95, 0.5],
      }}
      transition={{
        duration: input.duration,
        delay: input.delay,
        repeat: Infinity,
        ease: 'easeIn',
        times: [0, 0.4, 0.82, 1],
      }}
    >
      <Icon size={13} className="shrink-0" />
      {label}
    </motion.div>
  )
}

function FunnelCenter() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pct(CENTER.left), top: pct(CENTER.top) }}>
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ border: '1.5px solid #3d4bf5' }}
          initial={{ scale: 1, opacity: 0.45 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 2.6, delay: i * 1.3, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
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
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const springRotX = useSpring(rotX, { stiffness: 100, damping: 14 })
  const springRotY = useSpring(rotY, { stiffness: 100, damping: 14 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotY.set(px * 6)
    rotX.set(py * -6)
  }

  function onMouseLeave() {
    rotX.set(0)
    rotY.set(0)
  }

  return (
    <motion.div
      className="relative mx-auto h-[420px] w-full max-w-md"
      style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 800 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="absolute left-1/2 top-[45%] size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(61,75,245,0.08)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
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
        <FunnelChip key={input.label} input={input} />
      ))}

      <FunnelCenter />
      <FunnelOutput />
    </motion.div>
  )
}
