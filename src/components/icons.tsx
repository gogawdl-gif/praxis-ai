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

// lucide-react dropped brand/logo glyphs; this one's drawn by hand to
// match the same stroke weight as the rest of this set.
export function IconLinkedIn({ size, ...rest }: IconProps) {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.5" cy="8" r="1.15" fill="currentColor" />
      <path d="M7.5 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11.5 17v-3.5c0-1.4 1-2.3 2.2-2.3s2.1.8 2.1 2.2V17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
