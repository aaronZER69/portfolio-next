'use client'

import { ArrowUpRightIcon } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { ProjectCover } from '@/components/projects/project-cover'
import { buttonVariants } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Project } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Props = { project: Project | null; onOpenChange: (open: boolean) => void }

function DetailHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{children}</h3>
}

export function ProjectDialog({ project, onOpenChange }: Props) {
  const { t, ui } = useLocale()

  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      {project && (
        <DialogContent
          closeLabel={ui.projects.close}
          className="max-h-[90dvh] gap-0 overflow-y-auto p-0 sm:max-w-3xl"
        >
          <div className="p-6 pb-0 md:p-8 md:pb-0">
            <DialogHeader className="gap-2 pr-8">
              <p className="font-mono text-xs text-muted-foreground">{t(project.kind)}</p>
              <DialogTitle className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</DialogTitle>
              <DialogDescription className="text-base text-pretty">{t(project.summary)}</DialogDescription>
            </DialogHeader>
          </div>

          <section aria-label={ui.projects.screenshots} className="px-6 pt-6 md:px-8">
            {project.images.length > 1 ? (
              <Carousel opts={{ loop: true }} className="group/carousel">
                <CarouselContent>
                  {project.images.map((image) => (
                    <CarouselItem key={image.src}>
                      <ProjectCover
                        project={project}
                        image={image}
                        sizes="(min-width: 768px) 700px, 90vw"
                        className="aspect-video rounded-lg border border-border"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious label={ui.projects.prev} className="left-3 bg-background/80 backdrop-blur" />
                <CarouselNext label={ui.projects.next} className="right-3 bg-background/80 backdrop-blur" />
              </Carousel>
            ) : (
              <ProjectCover
                project={project}
                image={project.images[0]}
                sizes="(min-width: 768px) 700px, 90vw"
                className="aspect-video rounded-lg border border-border"
              />
            )}
          </section>

          <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_1fr] md:p-8">
            <div className="space-y-8">
              <section className="space-y-3">
                <DetailHeading>{ui.projects.context}</DetailHeading>
                <p className="leading-relaxed text-pretty text-muted-foreground">{t(project.context)}</p>
              </section>
              <section className="space-y-3">
                <DetailHeading>{ui.projects.features}</DetailHeading>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature.fr} className="flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <section className="space-y-3">
                <DetailHeading>{ui.projects.stack}</DetailHeading>
                <dl className="divide-y divide-border rounded-lg border border-border">
                  {project.stack.map((item) => (
                    <div key={item.name} className="px-3 py-2.5">
                      <dt className="text-sm font-medium">{item.name}</dt>
                      <dd className="text-xs text-muted-foreground">{t(item.detail)}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'h-10 w-full')}
                >
                  <GitHubIcon data-icon="inline-start" />
                  {ui.projects.source}
                  <ArrowUpRightIcon data-icon="inline-end" />
                  <span className="sr-only">(GitHub)</span>
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
