import { motion } from 'framer-motion'
import { MockupWindow } from './MockupWindow'

const CURSOR_STOPS = [
  { x: 40, y: 40 },
  { x: 190, y: 68 },
  { x: 190, y: 118 },
  { x: 90, y: 150 },
]

export function ScreenRecordMockup() {
  return (
    <MockupWindow label="Screen capture">
      <div className="p-5">
        <div className="relative overflow-hidden rounded-xl border" style={{ borderColor: '#e6e8f2', background: '#fbfbfe' }}>
          <div className="flex items-center justify-between border-b px-3 py-2" style={{ borderColor: '#e6e8f2' }}>
            <div className="h-2 w-28 rounded-full bg-black/10" />
            <span className="flex items-center gap-1.5 rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-medium text-rose-500">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-rose-400" />
                <span className="relative inline-flex size-1.5 rounded-full bg-rose-500" />
              </span>
              REC
            </span>
          </div>

          <div className="relative h-[190px] p-4">
            <div className="h-3 w-3/5 rounded bg-black/[0.06]" />
            <div className="mt-3 h-16 w-full rounded-lg" style={{ backgroundColor: '#eef1fd' }} />
            <div className="mt-3 flex gap-2">
              <div className="h-14 flex-1 rounded-lg bg-black/[0.04]" />
              <div className="h-14 flex-1 rounded-lg bg-black/[0.04]" />
            </div>

            <motion.div
              className="absolute size-4 rounded-full border-2 border-primary"
              style={{ borderColor: '#3d4bf5' }}
              animate={{ x: CURSOR_STOPS.map((s) => s.x), y: CURSOR_STOPS.map((s) => s.y) }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.33, 0.66, 1] }}
            />
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-wash px-3.5 py-2.5 text-[13px] text-ink-soft" style={{ backgroundColor: '#f5f6fd', color: '#4b4b5c' }}>
          "Now I'll open the settings panel and update the billing tier…"
        </div>
      </div>
    </MockupWindow>
  )
}
