import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  index: number
  label: string
  heading: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, index, label, heading, children, className }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('border-t border-border/70 py-20 md:py-28', className)}>
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[11rem_1fr] md:gap-12 md:px-8">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
            <span className="text-brand">{String(index).padStart(2, '0')}</span>
            <span aria-hidden="true" className="h-px w-6 bg-border" />
            {label}
          </p>
        </div>
        <div className="min-w-0">
          <h2
            id={headingId}
            className="reveal max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl"
          >
            {heading}
          </h2>
          <div className="mt-10 md:mt-12">{children}</div>
        </div>
      </div>
    </section>
  )
}
