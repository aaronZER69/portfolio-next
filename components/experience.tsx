'use client'

import { Section } from '@/components/section'
import { experiences } from '@/lib/content'
import { useLocale } from '@/lib/i18n'

export function Experience() {
  const { t, ui } = useLocale()

  return (
    <Section id="experience" index={3} label={ui.sections.experience} heading={ui.experience.heading}>
      <ol className="relative border-l border-border">
        {experiences.map((job) => (
          <li key={job.company} className="reveal relative pb-14 pl-8 last:pb-0 md:pl-10">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-background bg-brand ring-1 ring-brand"
            />
            <p className="font-mono text-xs text-muted-foreground">
              <time>{t(job.period)}</time>
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              {job.company}
              <span className="font-normal text-muted-foreground"> — {t(job.role)}</span>
            </h3>
            <p className="mt-3 max-w-prose leading-relaxed text-pretty text-muted-foreground">{t(job.summary)}</p>

            <h4 className="sr-only">{ui.experience.missions}</h4>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {job.missions.map((mission) => (
                <li key={mission.fr} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-brand" />
                  {t(mission)}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <li key={tag} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
