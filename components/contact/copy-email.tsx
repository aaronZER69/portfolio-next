'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n'
import { profile } from '@/lib/site'

export function CopyEmail() {
  const { ui } = useLocale()
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <Button type="button" variant="ghost" size="icon-sm" onClick={copy} aria-label={ui.contact.copy}>
        {copied ? <CheckIcon className="text-brand" /> : <CopyIcon />}
      </Button>
      <span role="status" className="sr-only">
        {copied ? ui.contact.copied : ''}
      </span>
    </>
  )
}
