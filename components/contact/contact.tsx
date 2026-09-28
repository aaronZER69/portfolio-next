'use client'

import { ArrowUpRightIcon } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { CopyEmail } from '@/components/contact/copy-email'
import { GitHubIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { useLocale } from '@/lib/i18n'
import { profile } from '@/lib/site'

export function Contact() {
  const { ui } = useLocale()

  return (
    <Section id="contact" index={6} label={ui.sections.contact} heading={ui.contact.heading}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">{ui.contact.pitch}</p>

          <div className="space-y-2">
            <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{ui.contact.direct}</p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-medium break-all underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
              >
                {profile.email}
              </a>
              <CopyEmail />
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/30"
          >
            <GitHubIcon className="size-5" aria-hidden="true" />
            <span>
              <span className="block text-sm font-medium">GitHub</span>
              <span className="block font-mono text-xs text-muted-foreground">@{profile.githubHandle}</span>
            </span>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="size-4 text-muted-foreground transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}
