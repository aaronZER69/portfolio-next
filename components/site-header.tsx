'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LocaleToggle } from '@/components/header-controls'
import { HamburgerIcon } from '@/components/hamburger-icon'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'education', 'contact'] as const

export function SiteHeader() {
  const { ui } = useLocale()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = sectionIds.map((id) => ({ id, label: ui.nav[id] }))

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/65">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          aria-label={ui.nav.home}
          className="flex items-center gap-2.5 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <Image
            src="/az-logo.png"
            alt="Aaron Zerrouk"
            width={72}
            height={48}
            priority
            className="site-logo h-14 w-[5.5rem] object-contain"
          />
        </a>

        <div className="flex items-center gap-1">
          <LocaleToggle />
          <Button
            variant="ghost"
            size="icon-lg"
            className="ml-2 size-12"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.nav.close : ui.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <HamburgerIcon open={open} />
          </Button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label={ui.nav.primary}
        aria-hidden={!open}
        inert={!open}
        data-open={open}
        className="menu-panel border-t border-border/60"
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-5 py-5 md:px-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md py-4 text-lg text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {link.label}
                <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
                  {String(sectionIds.indexOf(link.id) + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
