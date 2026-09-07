import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Check, GitBranch } from 'lucide-react'
import type { ReactNode } from 'react'

function Float({
  className,
  duration,
  delay = 0,
  amplitude = 10,
  rotate = 3,
  depth = 10,
  parallaxX,
  children,
}: {
  className: string
  duration: number
  delay?: number
  amplitude?: number
  rotate?: number
  depth?: number
  parallaxX: ReturnType<typeof useMotionValue<number>>
  children: ReactNode
}) {
  const x = useTransform(parallaxX, [-1, 1], [-depth, depth])
  const springX = useSpring(x, { stiffness: 120, damping: 16 })

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: springX }}
      initial={{ opacity: 0, scale: 0.75, y: 16 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [16, -amplitude, 0, -amplitude, 0],
        rotate: [0, 0, rotate, 0, rotate],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
        y: { duration, delay, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.5, 0.75, 1] },
        rotate: { duration, delay, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.5, 0.75, 1] },
      }}
    >
      {children}
    </motion.div>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[0_16px_32px_-12px_rgba(20,20,31,0.2)]">
      {children}
    </div>
  )
}

export function HeroArt() {
  const parallaxX = useMotionValue(0)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    parallaxX.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
  }

  function onMouseLeave() {
    parallaxX.set(0)
  }

  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-md"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="blob absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 bg-primary/10"
        style={{ backgroundColor: 'rgba(61,75,245,0.10)' }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob absolute right-4 bottom-8 size-56 bg-mint/20"
        style={{ backgroundColor: 'rgba(53,208,176,0.2)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Float className="left-2 top-10" duration={6} amplitude={12} depth={14} parallaxX={parallaxX}>
        <Chip>
          <span className="grid size-5 place-items-center rounded-full bg-emerald-500">
            <Check size={11} className="text-white" strokeWidth={3} />
          </span>
          Lesson generated
        </Chip>
      </Float>

      <Float className="right-4 top-6" duration={7} delay={0.15} amplitude={9} rotate={-4} depth={8} parallaxX={parallaxX}>
        <Chip>
          <span className="grid size-5 place-items-center rounded-full bg-primary" style={{ backgroundColor: '#3d4bf5' }}>
            <GitBranch size={11} className="text-white" />
          </span>
          Simulation ready
        </Chip>
      </Float>

      <Float className="left-6 bottom-24" duration={8} delay={0.3} amplitude={10} rotate={4} depth={18} parallaxX={parallaxX}>
        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_32px_-12px_rgba(20,20,31,0.2)]">
          <img src="/images/avatar-2.jpg" alt="" className="size-9 rounded-full object-cover" />
          <div>
            <div className="text-sm font-medium text-ink">Marcus</div>
            <div className="text-xs" style={{ color: '#0d9668' }}>
              Ready · scored 92%
            </div>
          </div>
        </div>
      </Float>

      <Float className="right-8 bottom-6" duration={6.5} delay={0.45} amplitude={11} rotate={-3} depth={11} parallaxX={parallaxX}>
        <div className="grid place-items-center rounded-2xl bg-white p-4 shadow-[0_16px_32px_-12px_rgba(20,20,31,0.2)]">
          <div className="font-display text-2xl font-medium text-primary" style={{ color: '#3d4bf5' }}>
            5/5
          </div>
          <div className="text-[11px]" style={{ color: '#8888a0' }}>
            Quiz passed
          </div>
        </div>
      </Float>

      <Float className="left-1/2 top-1/2 -translate-x-1/2" duration={5.5} delay={0.6} amplitude={8} depth={6} parallaxX={parallaxX}>
        <Chip>
          <span className="size-2 rounded-full bg-primary" style={{ backgroundColor: '#3d4bf5' }} />
          Updated automatically
        </Chip>
      </Float>
    </div>
  )
}
