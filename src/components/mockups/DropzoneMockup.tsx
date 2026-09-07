import { motion } from 'framer-motion'
import { FileText, FileVideo, Presentation } from 'lucide-react'
import { IconDropFile } from '../icons'
import { MockupWindow } from './MockupWindow'

const FILES = [
  { icon: FileText, name: 'Refund-policy.docx', delay: 0 },
  { icon: FileVideo, name: 'Onboarding-call.mp4', delay: 0.5 },
  { icon: Presentation, name: 'CRM-workflow.pptx', delay: 1 },
]

export function DropzoneMockup() {
  return (
    <MockupWindow label="File import">
      <div className="p-5">
        <div
          className="relative flex h-[220px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed"
          style={{ borderColor: '#c7cdf0', background: '#fbfbfe' }}
        >
          <IconDropFile className="text-primary/40" size={26} style={{ color: '#3d4bf5', opacity: 0.4 }} />
          <p className="text-xs font-medium text-ink-dim" style={{ color: '#8888a0' }}>
            Drop in whatever you've already got
          </p>

          <div className="mt-2 flex w-full flex-col gap-2 px-6">
            {FILES.map((f) => (
              <motion.div
                key={f.name}
                className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-ink shadow-sm"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: [0, 1, 1, 0], y: [-16, 0, 0, 8] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.4, delay: f.delay, times: [0, 0.2, 0.85, 1] }}
              >
                <f.icon size={14} className="shrink-0 text-primary" style={{ color: '#3d4bf5' }} />
                <span className="truncate">{f.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-lg bg-wash px-3.5 py-2.5" style={{ backgroundColor: '#f5f6fd' }}>
          <span className="text-xs font-medium text-ink-soft" style={{ color: '#4b4b5c' }}>
            Reading documents
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
            <motion.div
              className="h-full rounded-full bg-primary"
              style={{ backgroundColor: '#3d4bf5' }}
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </MockupWindow>
  )
}
