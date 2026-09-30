'use client'

import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'

export function LocaleToggle() {
  const { locale, setLocale, ui } = useLocale()
  const nextLocale = locale === 'fr' ? 'en' : 'fr'
  const nextFlagClass = nextLocale === 'fr' ? 'flag-icon-fr' : 'flag-icon-gb'

  return (
    <Button
      variant="ghost"
      size="default"
      className="h-10 gap-2 px-3 text-sm"
      aria-label={ui.lang.toggle}
      title={ui.lang.toggle}
      lang={nextLocale}
      onClick={() => setLocale(nextLocale)}
    >
      <span aria-hidden="true" className={`flag-icon ${nextFlagClass}`} />
      <span>{ui.lang.short}</span>
    </Button>
  )
}
