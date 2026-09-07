import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MockupWindow } from './MockupWindow'

const LESSONS = ['Opening store procedure', 'Handling a return', 'Cash handling policy']

export function UpdateMockup() {
  return (
    <MockupWindow label="Process update">
      <div className="space-y-3 p-5">
        <div
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-4 py-2.5 text-[13px] text-white"
          style={{ backgroundColor: '#3d4bf5' }}
        >
          The discount step moved. It's under Payments now, not Checkout.
        </div>

        <div className="rounded-lg bg-wash px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wide" style={{ backgroundColor: '#f5f6fd', color: '#8888a0' }}>
          Updating every course that mentions it
        </div>

        <div className="space-y-2">
          {LESSONS.map((l, i) => (
            <motion.div
              key={l}
              className="flex items-center justify-between rounded-lg border px-3.5 py-2.5"
              style={{ borderColor: '#e6e8f2' }}
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.3 + i * 0.3 }}
            >
              <span className="text-[13px] text-ink">{l}</span>
              <motion.span
                className="flex items-center gap-1 text-[11px] font-medium"
                style={{ color: '#0d9668' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.5 + i * 0.3 }}
              >
                <Check size={12} strokeWidth={3} />
                Updated
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </MockupWindow>
  )
}
