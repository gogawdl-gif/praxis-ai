const ITEMS = [
  'SaaS & software',
  'Financial services',
  'Sales & customer success',
  'Marketing teams',
  'IT & operations',
  'HR & people teams',
  'Professional services',
]

export function IndustryMarquee() {
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-line bg-white py-7" style={{ borderColor: '#e6e8f2' }}>
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-ink-dim" style={{ color: '#8888a0' }}>
        Growing teams already training with Learnik
      </p>
      <div className="no-scrollbar relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((item, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-medium text-ink-dim" style={{ color: '#8888a0' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
