import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { MockupWindow } from './MockupWindow'

const OPTIONS = ['Ask them to call back later', 'Refund on the spot, no checks', 'Confirm the item is unused first', 'Escalate to a manager']
const CORRECT = 2

export function QuizMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [picked, setPicked] = useState(false)

  useEffect(() => {
    if (!inView) return
    const id = setTimeout(() => setPicked(true), 900)
    return () => clearTimeout(id)
  }, [inView])

  return (
    <MockupWindow label="Quiz">
      <div ref={ref} className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-medium text-ink">Question 4 of 5</div>
          <motion.span
            className="rounded-full px-2.5 py-1 text-[11px] font-medium"
            style={{ backgroundColor: picked ? '#e8f9f1' : '#f5f6fd', color: picked ? '#0d9668' : '#8888a0' }}
          >
            {picked ? 'Correct' : 'Scoring…'}
          </motion.span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: '#4b4b5c' }}>
          Before you refund an item, what should you check first?
        </p>

        <div className="mt-3 space-y-2">
          {OPTIONS.map((opt, i) => {
            const isCorrect = i === CORRECT
            return (
              <div
                key={opt}
                className="flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-[13px] transition-colors"
                style={{
                  borderColor: picked && isCorrect ? '#a7e3c8' : '#e6e8f2',
                  backgroundColor: picked && isCorrect ? '#f2fbf7' : 'white',
                  color: '#4b4b5c',
                }}
              >
                {picked && isCorrect ? (
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-500">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="size-4 shrink-0 rounded-full border-2" style={{ borderColor: '#d7dae8' }} />
                )}
                {opt}
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-lg bg-wash px-3.5 py-2.5" style={{ backgroundColor: '#f5f6fd' }}>
          <span className="text-xs font-medium" style={{ color: '#4b4b5c' }}>
            Score
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
            <motion.div
              className="h-full rounded-full bg-primary"
              style={{ backgroundColor: '#3d4bf5' }}
              initial={{ width: '60%' }}
              animate={{ width: picked ? '80%' : '60%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-xs" style={{ color: '#8888a0' }}>
            {picked ? '4/5' : '3/5'}
          </span>
        </div>
      </div>
    </MockupWindow>
  )
}
