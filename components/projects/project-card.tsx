'use client'

import { ArrowUpRightIcon } from 'lucide-react'
import { ProjectCover } from '@/components/projects/project-cover'
import type { Project } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Props = { project: Project; onOpen: (project: Project) => void }

export function ProjectCard({ project, onOpen }: Props) {
  const { t, ui } = useLocale()

  return (
    <li className="reveal">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
        className={cn(
          'group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-foreground/25 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
          project.upcoming && 'border-dashed',
        )}
      >
        <ProjectCover
          project={project}
          image={project.images[0]}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full border-b border-border transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
        />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs text-muted-foreground">{t(project.kind)}</p>
            {project.upcoming && (
              <span className="rounded-full bg-brand/10 px-2 py-0.5 font-mono text-[0.65rem] text-brand uppercase">
                {ui.projects.soon}
              </span>
            )}
          </div>
          <h3 className="mt-2 flex items-start justify-between gap-2 text-lg font-semibold tracking-tight">
            {project.title}
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:text-brand motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{t(project.summary)}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label={ui.projects.stack}>
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
          <span className="sr-only">{ui.projects.open}</span>
        </div>
      </button>
    </li>
  )
}
