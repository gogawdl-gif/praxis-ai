import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HEADLINE = 'Turn what your best people know into training everyone can pass.'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10 wash-section" />
      <motion.div
        className="blob -z-10 left-[-6rem] top-[6rem] size-[26rem] bg-primary/10"
        style={{ backgroundColor: 'rgba(61,75,245,0.10)' }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob -z-10 right-[-8rem] top-[2rem] size-[24rem] bg-mint/15"
        style={{ backgroundColor: 'rgba(53,208,176,0.16)' }}
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-[3.4rem]">
          {HEADLINE.split(' ').map((word, i, arr) => (
            // The space is a plain sibling text node, not part of the
            // inline-block span, so it can't get swallowed and still
            // gives the browser a normal line-wrap point.
            <span key={i}>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: '0.5em' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.035, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
              {i < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft" style={{ color: '#4b4b5c' }}>
          Show it a process once. Grasp writes the lessons, the practice, and the quizzes, and
          keeps every course current when the process changes.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_24px_-8px_rgba(61,75,245,0.5)] transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: '#3d4bf5' }}
          >
            Start training your team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-wash"
            style={{ borderColor: '#e6e8f2' }}
          >
            See how it works
          </a>
        </div>

        <p className="mt-6 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
          No credit card. No setup call. See a real course before you talk to anyone.
        </p>
      </div>
    </section>
  )
}
