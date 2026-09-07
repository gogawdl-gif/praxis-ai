import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

const OPTIONS = [
  { text: 'Offer a refund immediately, no questions asked', correct: false },
  { text: 'Acknowledge the frustration, then check the billing history', correct: true },
]

export function SimulationMockup() {
  const [picked, setPicked] = useState<number | null>(null)

  return (
    <div className="card-soft overflow-hidden rounded-[2rem_0.5rem_2rem_2rem] bg-white">
      <div className="flex items-center gap-1.5 border-b px-5 py-3.5" style={{ borderColor: '#e6e8f2' }}>
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="ml-3 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
          Simulation: handling a billing dispute
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-wash px-4 py-3 text-[13px] text-ink" style={{ backgroundColor: '#eef1fd' }}>
          “This is the third time I've had to email about this charge. I want a refund, now.”
        </div>
        <div className="pl-2 text-[11px] font-medium uppercase tracking-wide text-ink-dim" style={{ color: '#8888a0' }}>
          How do you respond?
        </div>

        <div className="space-y-2">
          {OPTIONS.map((opt, i) => {
            const isPicked = picked === i
            const showResult = picked !== null
            return (
              <button
                key={opt.text}
                onClick={() => setPicked(i)}
                className={`flex w-full items-start gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[13px] transition-colors ${
                  showResult && isPicked && opt.correct ? 'border-emerald-300 bg-emerald-50' : ''
                } ${showResult && isPicked && !opt.correct ? 'border-rose-300 bg-rose-50' : ''} ${
                  !isPicked || !showResult ? 'border-line hover:bg-wash' : ''
                }`}
                style={!showResult || !isPicked ? { borderColor: '#e6e8f2' } : undefined}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {showResult && isPicked ? (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full ${
                        opt.correct ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    >
                      {opt.correct ? (
                        <Check size={10} className="text-white" strokeWidth={3} />
                      ) : (
                        <X size={10} className="text-white" strokeWidth={3} />
                      )}
                    </motion.span>
                  ) : (
                    <span className="mt-0.5 size-4 shrink-0 rounded-full border-2" style={{ borderColor: '#d7dae8' }} />
                  )}
                </AnimatePresence>
                <span className="text-ink-soft" style={{ color: '#4b4b5c' }}>
                  {opt.text}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
