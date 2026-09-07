const ITEMS = [
  'Field services',
  'Retail operations',
  'Healthcare & clinics',
  'Restaurants & hospitality',
  'Logistics & warehousing',
  'Contact centers',
  'Manufacturing',
  'Home & property services',
]

export function IndustryMarquee() {
  const items = [...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-white/[0.06] bg-white/[0.015] py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-wider text-fg-dim" style={{ color: '#6f6f7d' }}>
          Wherever knowledge lives in someone's head, Praxis can teach it
        </p>
      </div>
      <div className="no-scrollbar relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((item, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-medium text-fg-dim" style={{ color: '#6f6f7d' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
