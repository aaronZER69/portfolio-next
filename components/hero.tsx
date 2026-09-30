'use client'

import { ArrowDownIcon, ArrowUpRightIcon, DownloadIcon } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { LocalTime } from '@/components/local-time'
import { buttonVariants } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'
import { profile } from '@/lib/site'
import { cn } from '@/lib/utils'

const enter = 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:fill-mode-both'

export function Hero() {
  const { ui } = useLocale()

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-5xl px-5 pt-16 pb-20 md:px-8 md:pt-28 md:pb-28">
        <p
          className={cn(
            'inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground',
            enter,
          )}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {ui.hero.status}
        </p>

        <h1
          id="hero-heading"
          className={cn(
            'mt-8 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl md:text-8xl',
            enter,
            'motion-safe:delay-100',
          )}
        >
          Aaron Zerrouk
          <span className="text-brand">.</span>
        </h1>

        <p
          className={cn(
            'mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg font-medium text-foreground md:text-xl',
            enter,
            'motion-safe:delay-150',
          )}
        >
          {ui.hero.title}
          <span lang="ja" className="font-mono text-sm font-normal text-muted-foreground">
            アーロン・ゼルーク
          </span>
        </p>

        <p
          className={cn(
            'mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg',
            enter,
            'motion-safe:delay-200',
          )}
        >
          {ui.hero.pitch}
        </p>

        <div className={cn('mt-10 flex flex-wrap gap-3', enter, 'motion-safe:delay-300')}>
          <a href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'h-10 px-4')}>
            {ui.hero.projects}
            <ArrowDownIcon data-icon="inline-end" />
          </a>
          <a
            href={profile.cv}
            download
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-10 px-4')}
          >
            <DownloadIcon data-icon="inline-start" />
            {ui.hero.cv}
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'h-10 px-4')}>
            {ui.hero.contact}
            <ArrowUpRightIcon data-icon="inline-end" />
          </a>
        </div>

        <dl
          className={cn(
            'mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-3 md:mt-24',
            enter,
            'motion-safe:delay-500',
          )}
        >
          <div>
            <dt className="font-mono text-xs text-muted-foreground uppercase">{ui.hero.time}</dt>
            <dd className="mt-1 font-medium tabular-nums">
              <LocalTime />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted-foreground uppercase">
              {ui.hero.school}
            </dt>
            <dd className="mt-1 font-medium">{ui.hero.based}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted-foreground uppercase">GitHub</dt>
            <dd className="mt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                <GitHubIcon className="size-3.5" />
                {profile.githubHandle}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
