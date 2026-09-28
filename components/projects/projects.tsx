'use client'

import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/projects/project-card'
import { ProjectDialog } from '@/components/projects/project-dialog'
import { Section } from '@/components/section'
import { categories, projects, type Category, type Project } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Projects() {
  const { t, ui } = useLocale()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  const filters = [{ id: 'all' as const, label: ui.projects.all }, ...categories.map((c) => ({ id: c.id, label: t(c.label) }))]

  return (
    <Section id="projects" index={2} label={ui.sections.projects} heading={ui.projects.heading}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label={ui.projects.filterLabel} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                filter === f.id && 'border-foreground bg-foreground text-background hover:text-background',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="font-mono text-xs text-muted-foreground">
          {ui.projects.count(visible.length)}
        </p>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-muted-foreground">{ui.projects.noResults}</p>
      )}

      <ProjectDialog project={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </Section>
  )
}
