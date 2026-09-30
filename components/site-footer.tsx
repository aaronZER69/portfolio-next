'use client'

import { ArrowUpIcon } from 'lucide-react'
import { useLocale } from '@/lib/i18n'
import { profile } from '@/lib/site'

export function SiteFooter() {
  const { ui } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-5xl space-y-8 px-5 py-10 md:px-8">
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {ui.footer.built}.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            {ui.footer.top}
            <ArrowUpIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
