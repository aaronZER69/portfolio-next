'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/i18n'

export function LocalTime() {
  const { locale } = useLocale()
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  if (!now) return <span aria-hidden="true">--:--</span>

  const time = new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
    timeZoneName: 'short',
  }).format(now)

  return <time dateTime={now.toISOString()}>{time}</time>
}
