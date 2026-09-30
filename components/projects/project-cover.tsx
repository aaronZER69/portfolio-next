'use client'

import Image from 'next/image'
import type { Project, ProjectImage } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Props = {
  project: Project
  image?: ProjectImage
  sizes: string
  priority?: boolean
  className?: string
}

export function ProjectCover({ project, image, sizes, priority, className }: Props) {
  const { t, ui } = useLocale()

  if (image) {
    return (
      <div className={cn('portfolio-project-cover relative overflow-hidden bg-muted', className)}>
        <Image
          src={image.src}
          alt={t(image.alt)}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={image.animated}
          className="object-cover object-center"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} — ${ui.projects.placeholder}`}
      className={cn('relative flex flex-col justify-between overflow-hidden bg-muted p-5', className)}
    >
      <span className="font-mono text-[0.65rem] tracking-wide text-muted-foreground uppercase">
        {ui.projects.placeholder}
      </span>
      <span
        aria-hidden="true"
        className="text-4xl font-semibold tracking-tighter text-foreground/80 md:text-5xl"
      >
        {project.title.split(/[ —]/)[0]}
        <span className="text-brand">.</span>
      </span>
      <span aria-hidden="true" className="font-mono text-[0.65rem] text-muted-foreground">
        {project.tags.join(' / ')}
      </span>
    </div>
  )
}
