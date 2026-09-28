'use client'

import { ArrowRightIcon, CheckCircle2Icon, MailIcon } from 'lucide-react'
import { useActionState } from 'react'
import { sendContact, type ContactField, type ContactState } from '@/app/actions/contact'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLocale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

export function ContactForm() {
  const { ui } = useLocale()
  const [state, action, pending] = useActionState(sendContact, initialState)

  const invalid = (field: ContactField) => state.status === 'invalid' && state.fields.includes(field)
  const value = (field: ContactField) => (state.status === 'invalid' ? state.values[field] : '')

  const fields: { id: ContactField; label: string; placeholder: string; type?: string; autoComplete: string }[] = [
    { id: 'name', label: ui.contact.name, placeholder: ui.contact.namePlaceholder, autoComplete: 'name' },
    { id: 'email', label: ui.contact.email, placeholder: ui.contact.emailPlaceholder, type: 'email', autoComplete: 'email' },
  ]

  return (
    <form action={action} noValidate className="space-y-5 rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              name={field.id}
              type={field.type ?? 'text'}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              defaultValue={value(field.id)}
              required
              aria-invalid={invalid(field.id) || undefined}
              aria-describedby={invalid(field.id) ? `${field.id}-error` : undefined}
              className="h-10"
            />
            {invalid(field.id) && (
              <p id={`${field.id}-error`} className="text-sm text-destructive">
                {ui.contact.errors[field.id]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{ui.contact.message}</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder={ui.contact.messagePlaceholder}
          defaultValue={value('message')}
          required
          aria-invalid={invalid('message') || undefined}
          aria-describedby={invalid('message') ? 'message-error' : undefined}
          className="min-h-36 resize-y"
        />
        {invalid('message') && (
          <p id="message-error" className="text-sm text-destructive">
            {ui.contact.errors.message}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">{ui.contact.honeypot}</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={pending} className="h-10 px-4">
          {pending ? ui.contact.sending : ui.contact.send}
          <ArrowRightIcon data-icon="inline-end" />
        </Button>

        <div role="status" aria-live="polite" className="text-sm">
          {state.status === 'sent' && (
            <p className="flex items-center gap-2 text-foreground">
              <CheckCircle2Icon className="size-4 text-brand" aria-hidden="true" />
              {ui.contact.success}
            </p>
          )}
          {state.status === 'fallback' && (
            <a href={state.mailto} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-10')}>
              <MailIcon data-icon="inline-start" />
              {ui.contact.fallback}
            </a>
          )}
          {state.status === 'error' && <p className="text-destructive">{ui.contact.error}</p>}
        </div>
      </div>
    </form>
  )
}
