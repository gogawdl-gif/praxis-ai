import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MockupWindow } from './MockupWindow'

const OUTPUTS = [
  { label: 'Lesson', detail: '6 steps, with screenshots pulled from your recording' },
  { label: 'Simulation', detail: 'A branching scenario for the trickiest part' },
  { label: 'Quiz', detail: '5 questions, scored automatically' },
]

export function GenerationMockup() {
  return (
    <MockupWindow label="Building the course">
      <div className="space-y-3 p-5">
        <div className="rounded-lg bg-wash px-3.5 py-2.5 text-[13px] text-ink-soft" style={{ backgroundColor: '#f5f6fd', color: '#4b4b5c' }}>
          Transcript, screenshots, and your existing docs, combined
        </div>

        {OUTPUTS.map((o, i) => (
          <motion.div
            key={o.label}
            className="flex items-start gap-3 rounded-xl border px-3.5 py-3"
            style={{ borderColor: '#e6e8f2' }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.2 }}
          >
            <motion.span
              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary"
              style={{ backgroundColor: '#3d4bf5' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.35 + i * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
            >
              <Check size={11} className="text-white" strokeWidth={3} />
            </motion.span>
            <div>
              <div className="text-[13px] font-medium text-ink">{o.label}</div>
              <div className="text-xs text-ink-dim" style={{ color: '#8888a0' }}>
                {o.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MockupWindow>
  )
}
