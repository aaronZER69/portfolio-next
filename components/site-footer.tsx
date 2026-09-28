'use client'

import { ArrowUpIcon, ChevronDownIcon, FileTextIcon } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { documents } from '@/lib/content'
import { useLocale } from '@/lib/i18n'
import { profile } from '@/lib/site'

export function SiteFooter() {
  const { ui } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto max-w-5xl space-y-8 px-5 py-10 md:px-8">
        <Collapsible className="rounded-lg border border-border">
          <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
            {ui.footer.documents}
            <ChevronDownIcon
              aria-hidden="true"
              className="size-4 text-muted-foreground transition-transform group-data-[panel-open]:rotate-180"
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="divide-y divide-border border-t border-border">
              {documents.map((doc) => (
                <li key={doc.key}>
                  <a
                    href={doc.href}
                    download
                    className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <FileTextIcon className="size-4" aria-hidden="true" />
                      {ui.footer.docs[doc.key]}
                    </span>
                    <span className="font-mono text-xs">{doc.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>

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
