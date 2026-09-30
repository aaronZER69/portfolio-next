import { cn } from '@/lib/utils'

type HamburgerIconProps = {
  open: boolean
  className?: string
}

// Click animation adapted from "Flippin' burgers" (first menu) by Mikael Ainalem
// https://codepen.io/ainalem — three lines unroll into a cross instead of a simple swap.
export function HamburgerIcon({ open, className }: HamburgerIconProps) {
  return (
    <span aria-hidden="true" className={cn('burger-flip', open && 'is-open', className)}>
      <svg className="burger-flip-lines" viewBox="0 0 100 100">
        <path className="burger-flip-line burger-flip-line1" d="M 30,65 H 70" />
        <path
          className="burger-flip-line burger-flip-line2"
          d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"
        />
        <path
          className="burger-flip-line burger-flip-line3"
          d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"
        />
      </svg>
      <svg className="burger-flip-x" viewBox="0 0 100 100">
        <path className="burger-flip-line" d="M 34,32 L 66,68" />
        <path className="burger-flip-line" d="M 66,32 L 34,68" />
      </svg>
    </span>
  )
}
