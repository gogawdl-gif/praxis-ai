export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-display text-lg font-medium tracking-tight text-ink ${className}`}>
      Grasp
      <span
        className="ml-[3px] inline-block size-[5px] translate-y-[-2px] rounded-full bg-primary"
        style={{ backgroundColor: '#3d4bf5' }}
      />
    </span>
  )
}
