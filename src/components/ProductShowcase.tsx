import { BarChart3, BookOpen, LayoutGrid, Settings, Users } from 'lucide-react'
import { Reveal } from './Reveal'

const COURSES = [
  { name: 'Return & refund handling', progress: 92, learners: 34 },
  { name: 'Opening store procedure', progress: 78, learners: 21 },
  { name: 'De-escalating an upset customer', progress: 64, learners: 34 },
  { name: 'New POS workflow (updated 2d ago)', progress: 41, learners: 34 },
]

export function ProductShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            One place to see if training actually stuck.
          </h2>
          <p className="mt-5 text-lg text-fg-muted" style={{ color: '#a6a6b3' }}>
            Every course Praxis builds comes with a dashboard your managers will actually open.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <div className="card-glow mx-auto overflow-hidden rounded-2xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-xs text-fg-dim" style={{ color: '#6f6f7d' }}>
                app.praxis.ai/dashboard
              </span>
            </div>

            <div className="grid md:grid-cols-[220px_1fr]">
              <aside className="hidden flex-col gap-1 border-r border-white/10 bg-white/[0.015] p-4 md:flex">
                {[
                  { icon: LayoutGrid, label: 'Overview', active: true },
                  { icon: BookOpen, label: 'Courses' },
                  { icon: Users, label: 'Team' },
                  { icon: BarChart3, label: 'Reports' },
                  { icon: Settings, label: 'Settings' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                      item.active
                        ? 'bg-white/[0.06] text-white'
                        : 'text-fg-dim'
                    }`}
                    style={!item.active ? { color: '#6f6f7d' } : undefined}
                  >
                    <item.icon size={15} />
                    {item.label}
                  </div>
                ))}
              </aside>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { label: 'Active courses', value: '12' },
                    { label: 'Employees training', value: '146' },
                    { label: 'Avg. assessment score', value: '87%' },
                    { label: 'Updated this week', value: '3' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="font-display text-2xl font-semibold">{stat.value}</div>
                      <div className="mt-1 text-xs text-fg-dim" style={{ color: '#6f6f7d' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {COURSES.map((c) => (
                    <div
                      key={c.name}
                      className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-white">{c.name}</div>
                        <div className="mt-0.5 text-xs text-fg-dim" style={{ color: '#6f6f7d' }}>
                          {c.learners} employees enrolled
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:w-56">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>
                        <span className="w-9 text-right text-xs text-fg-muted" style={{ color: '#a6a6b3' }}>
                          {c.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
