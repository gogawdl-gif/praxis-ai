import type { ReactNode } from 'react'

export function MockupWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="card-soft h-full overflow-hidden rounded-3xl bg-white">
      <div className="flex items-center gap-1.5 border-b px-5 py-3.5" style={{ borderColor: '#e6e8f2' }}>
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="size-2.5 rounded-full bg-black/10" />
        <span className="ml-3 text-xs text-ink-dim" style={{ color: '#8888a0' }}>
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}
