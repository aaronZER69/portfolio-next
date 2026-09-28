'use server'

import { z } from 'zod'
import { profile } from '@/lib/site'

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().max(200),
  message: z.string().trim().min(10).max(5000),
})

export type ContactField = keyof z.infer<typeof schema>

export type ContactState =
  | { status: 'idle' }
  | { status: 'invalid'; fields: ContactField[]; values: Record<ContactField, string> }
  | { status: 'sent' }
  | { status: 'fallback'; mailto: string }
  | { status: 'error' }

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Bots fill every field; humans never see this one.
  if (formData.get('company')) return { status: 'sent' }

  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  }

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    const fields = [...new Set(parsed.error.issues.map((issue) => issue.path[0] as ContactField))]
    return { status: 'invalid', fields, values: raw }
  }

  const { name, email, message } = parsed.data
  const subject = `Portfolio — message de ${name}`
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    const body = `${message}\n\n— ${name} (${email})`
    return {
      status: 'fallback',
      mailto: `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
        to: [profile.email],
        reply_to: email,
        subject,
        text: `${message}\n\n— ${name} <${email}>`,
        html: `<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p><p>— ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
      }),
    })
    return res.ok ? { status: 'sent' } : { status: 'error' }
  } catch {
    return { status: 'error' }
  }
}
