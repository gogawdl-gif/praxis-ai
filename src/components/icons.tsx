// Small bespoke icon set, single stroke weight, consistent geometry.
// Deliberately not lucide's decorative "AI" glyphs (sparkle/bolt/etc).
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base({ size, ...props }: IconProps) {
  return {
    width: size ?? 24,
    height: size ?? 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...props,
  }
}

export function IconRecord(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="13" height="14" rx="3" />
      <path d="M16 10l5-3v10l-5-3" />
    </svg>
  )
}

export function IconMic(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  )
}

export function IconDropFile(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v11" />
      <path d="M7.5 10.5 12 15l4.5-4.5" />
      <path d="M4 16.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" />
    </svg>
  )
}

export function IconBranch(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 8.2V15.8" />
      <path d="M8 7l8 4" />
      <path d="M8 17l8-4" />
    </svg>
  )
}

export function IconPulse(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </svg>
  )
}
