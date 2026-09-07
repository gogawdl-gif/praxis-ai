import { motion } from 'framer-motion'
import { IconMic } from '../icons'
import { MockupWindow } from './MockupWindow'

const bars = [8, 16, 11, 22, 14, 24, 9, 19, 12, 21, 10, 17, 13, 20]

export function VoiceMockup() {
  return (
    <MockupWindow label="Voice capture">
      <div className="p-5">
        <div className="flex items-center gap-3 rounded-xl border px-4 py-4" style={{ borderColor: '#e6e8f2' }}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
            <IconMic size={16} />
          </span>
          <div className="flex flex-1 items-end gap-[3px]">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full"
                style={{ height: h, backgroundColor: 'rgba(61,75,245,0.4)' }}
                animate={{ scaleY: [1, 1.8, 0.6, 1.3, 1] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-1.5 rounded-xl bg-wash px-4 py-3.5 text-[13px] leading-relaxed text-ink-soft" style={{ backgroundColor: '#f5f6fd', color: '#4b4b5c' }}>
          <p>"So once a customer disputes a charge, you'll want to pull up their account first."</p>
          <p className="opacity-50">"Check the invoice history before you respond to them."</p>
        </div>
      </div>
    </MockupWindow>
  )
}
