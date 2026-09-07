import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const COURSES = [
  { name: 'Billing dispute process', pct: 92 },
  { name: 'Customer data handling', pct: 78 },
  { name: 'New CRM workflow', pct: 41 },
]

export function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="card-soft overflow-hidden rounded-3xl bg-white">
      <div className="flex items-center gap-1.5 border-b px-5 py-3.5" style={{ borderColor: '#e6e8f2' }}>
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="ml-3 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
          app.mobbilise.io/dashboard
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Active courses', value: 12 },
            { label: 'Avg. score', value: 87, suffix: '%' },
            { label: 'Updated', value: 3 },
          ].map((s, i) => (
            <div key={s.label} className="rounded-xl bg-wash p-3 text-center" style={{ backgroundColor: '#f5f6fd' }}>
              <motion.div
                className="font-display text-xl font-medium"
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {s.value}
                {s.suffix ?? ''}
              </motion.div>
              <div className="mt-0.5 text-[10px] text-ink-dim" style={{ color: '#8888a0' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2.5">
          {COURSES.map((c, i) => (
            <div key={c.name} className="rounded-xl bg-wash p-3" style={{ backgroundColor: '#f5f6fd' }}>
              <div className="flex items-center justify-between text-xs font-medium text-ink">
                <span>{c.name}</span>
                <span className="text-ink-dim" style={{ color: '#8888a0' }}>
                  {c.pct}%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  style={{ backgroundColor: '#3d4bf5' }}
                  initial={{ width: '0%' }}
                  animate={inView ? { width: `${c.pct}%` } : {}}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
