'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LocaleToggle, ThemeToggle } from '@/components/header-controls'
import { Monogram } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'education', 'contact'] as const

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}

export function SiteHeader() {
  const { ui } = useLocale()
  const active = useActiveSection()
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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          aria-label={ui.nav.home}
          className="flex items-center gap-2.5 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <Monogram />
          <span className="hidden text-sm font-medium tracking-tight sm:inline">Aaron Zerrouk</span>
        </a>

        <nav aria-label={ui.nav.primary} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                    active === link.id && 'text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LocaleToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.nav.close : ui.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label={ui.nav.primary}
        hidden={!open}
        className="border-t border-border/60 md:hidden"
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md py-3 text-base text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
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
