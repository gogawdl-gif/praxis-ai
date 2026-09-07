const STATS = [
  { value: 'Hours', label: 'not weeks, to build a course' },
  { value: '0', label: 'instructional designers needed' },
  { value: '1', label: 'sentence to update a lesson' },
  { value: '24/7', label: 'available, every language' },
]

export function Stats() {
  return (
    <section className="wash-section py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-medium text-primary md:text-5xl" style={{ color: '#3d4bf5' }}>
              {s.value}
            </div>
            <div className="mt-2 text-sm text-ink-soft" style={{ color: '#4b4b5c' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
