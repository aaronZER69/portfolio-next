'use client'

import { Section } from '@/components/section'
import { skills, type Level } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const levelOrder: Level[] = ['solid', 'comfortable', 'learning']

const levelDot: Record<Level, string> = {
  solid: 'bg-brand',
  comfortable: 'border border-brand bg-brand/30',
  learning: 'border border-dashed border-muted-foreground',
}

function LevelDot({ level }: { level: Level }) {
  return <span aria-hidden="true" className={cn('size-2 shrink-0 rounded-full', levelDot[level])} />
}

export function Skills() {
  const { ui } = useLocale()

  return (
    <Section id="skills" index={4} label={ui.sections.skills} heading={ui.skills.heading}>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="font-mono text-xs uppercase">{ui.skills.legend}</span>
        {levelOrder.map((level) => (
          <span key={level} className="flex items-center gap-2">
            <LevelDot level={level} />
            {ui.skills.levels[level]}
          </span>
        ))}
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {skills.map((group) => (
          <div key={group.group} className="reveal grid gap-4 py-6 md:grid-cols-[12rem_1fr]">
            <h3 className="font-medium">{ui.skills.groups[group.group]}</h3>
            <ul className="flex flex-wrap gap-2">
              {[...group.items]
                .sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level))
                .map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm"
                  >
                    <LevelDot level={skill.level} />
                    {skill.name}
                    <span className="sr-only">— {ui.skills.levels[skill.level]}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
