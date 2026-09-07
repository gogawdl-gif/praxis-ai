import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MockupWindow } from './MockupWindow'

const SECTIONS = ['Check the order in the portal', 'Confirm the item is unused', 'Issue the refund', 'Log the reason code']

export function LessonMockup() {
  return (
    <MockupWindow label="Lesson">
      <div className="p-5">
        <div className="text-[13px] font-medium text-ink">Processing a return</div>
        <div className="mt-0.5 text-xs" style={{ color: '#8888a0' }}>
          4 steps · 3 min read · pulled from your recording
        </div>

        <div className="mt-4 space-y-2">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s}
              className="flex items-center gap-3 rounded-lg border px-3.5 py-2.5"
              style={{ borderColor: '#e6e8f2' }}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.12 }}
            >
              <motion.span
                className="grid size-5 shrink-0 place-items-center rounded-full bg-primary"
                style={{ backgroundColor: '#3d4bf5' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.25 + i * 0.12, type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Check size={11} className="text-white" strokeWidth={3} />
              </motion.span>
              <span className="text-[13px] text-ink">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </MockupWindow>
  )
}
