'use client'

import { Section } from '@/components/section'
import { about } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

export function About() {
  const { ui, t } = useLocale()

  return (
    <Section id="about" index={1} label={ui.sections.about} heading={ui.about.heading}>
      <div className="reveal max-w-2xl space-y-5 text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
        {about.bio.map((paragraph) => (
          <p key={paragraph.fr}>{t(paragraph)}</p>
        ))}
      </div>

      <h3 className="mt-14 font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {ui.about.strengthsLabel}
      </h3>
      <ul className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {about.strengths.map((strength, i) => (
          <li key={strength.title.fr} className="reveal bg-card p-6">
            <span aria-hidden="true" className="font-mono text-xs text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="mt-6 text-lg font-semibold tracking-tight">{t(strength.title)}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(strength.detail)}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
