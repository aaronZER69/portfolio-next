'use client'

import { Section } from '@/components/section'
import { education, languages } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

export function Education() {
  const { t, ui } = useLocale()

  return (
    <Section id="education" index={5} label={ui.sections.education} heading={ui.education.heading}>
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <ol className="divide-y divide-border border-y border-border">
          {education.map((item) => (
            <li key={item.title} className="reveal grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
              <p className="font-mono text-xs text-muted-foreground sm:pt-1">
                {t(item.period)}
                {item.current && <span className="text-brand">{ui.education.now}</span>}
              </p>
              <div>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{t(item.detail)}</p>
              </div>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{ui.education.languages}</h3>
          <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
            {languages.map((lang) => (
              <div key={lang.name.fr} className="flex items-baseline justify-between gap-4 px-4 py-3">
                <dt className="font-medium">{t(lang.name)}</dt>
                <dd className="text-right text-sm text-muted-foreground">{t(lang.level)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
