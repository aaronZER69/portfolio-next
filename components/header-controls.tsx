'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { ui } = useLocale()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={ui.theme.toggle}
      title={ui.theme.toggle}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  )
}

export function LocaleToggle() {
  const { locale, setLocale, ui } = useLocale()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="font-mono text-xs"
      aria-label={ui.lang.toggle}
      title={ui.lang.toggle}
      lang={locale === 'fr' ? 'en' : 'fr'}
      onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
    >
      {ui.lang.short}
    </Button>
  )
}
