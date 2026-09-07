import { motion } from 'framer-motion'
import { MockupWindow } from './MockupWindow'

export function AgentChatMockup() {
  return (
    <MockupWindow label="Training agent">
      <div className="space-y-3 p-5">
        <motion.div
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-[13px] text-white"
          style={{ backgroundColor: '#3d4bf5' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Once billing disputes come in, I check Stripe first, then reply within an hour.
        </motion.div>

        <motion.div
          className="max-w-[80%] rounded-2xl rounded-bl-sm bg-wash px-4 py-2.5 text-[13px] text-ink"
          style={{ backgroundColor: '#eef1fd' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Got it. What do you do if the charge is more than 60 days old?
        </motion.div>

        <motion.div
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-[13px] text-white"
          style={{ backgroundColor: '#3d4bf5' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          Good catch, that goes to a manager for approval first.
        </motion.div>

        <motion.div
          className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-wash px-4 py-3"
          style={{ backgroundColor: '#eef1fd', width: 52 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="size-1.5 rounded-full bg-ink-dim"
              style={{ backgroundColor: '#8888a0' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
      </div>
    </MockupWindow>
  )
}
