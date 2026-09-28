import type { Metadata } from 'next'
import { about, education, experiences, languages, projects, skills } from '@/lib/content'
import { profile } from '@/lib/site'

export const metadata: Metadata = {
  title: 'CV',
  robots: { index: false, follow: false },
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-neutral-300 pb-1 font-mono text-[10px] tracking-widest text-[#b84a25] uppercase">
      {children}
    </h2>
  )
}

export default function CvPage() {
  const groups = { languages: 'Langages', frameworks: 'Frameworks', tools: 'Outils' } as const

  return (
    <main className="mx-auto min-h-screen max-w-[210mm] bg-white p-[14mm] text-[11px] leading-snug text-neutral-900 print:p-[12mm]">
      <header className="flex items-end justify-between gap-6 border-b-2 border-neutral-900 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {profile.name}
            <span className="text-[#b84a25]">.</span>
          </h1>
          <p className="mt-1 text-sm text-neutral-600">Étudiant en BUT MMI · Développeur Web — 21 ans</p>
          <p className="mt-1 text-neutral-600">Recherche : alternance, stage, job étudiant</p>
        </div>
        <ul className="text-right text-neutral-700">
          <li>{profile.email}</li>
          <li>github.com/{profile.githubHandle}</li>
          <li>Clermont-Ferrand, France</li>
        </ul>
      </header>

      <p className="mt-4 text-neutral-700">{about.bio[0].fr}</p>

      <div className="mt-5 grid grid-cols-[1.6fr_1fr] gap-8">
        <div className="space-y-5">
          <section>
            <Heading>Expérience</Heading>
            <ul className="space-y-3">
              {experiences.map((job) => (
                <li key={job.company}>
                  <p className="flex justify-between font-semibold">
                    <span>
                      {job.company} — {job.role.fr}
                    </span>
                    <span className="font-normal text-neutral-500">{job.period.fr}</span>
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-neutral-700">
                    {job.missions.map((m) => (
                      <li key={m.fr}>{m.fr}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Projets</Heading>
            <ul className="space-y-2">
              {projects
                .filter((p) => !p.upcoming)
                .map((p) => (
                  <li key={p.slug}>
                    <p className="font-semibold">
                      {p.title} <span className="font-normal text-neutral-500">· {p.tags.join(', ')}</span>
                    </p>
                    <p className="text-neutral-700">{p.summary.fr}</p>
                  </li>
                ))}
            </ul>
          </section>
        </div>

        <div className="space-y-5">
          <section>
            <Heading>Formation</Heading>
            <ul className="space-y-2">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-neutral-600">
                    {e.school} · {e.period.fr}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Compétences</Heading>
            <div className="space-y-2">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="font-semibold">{groups[g.group]}</p>
                  <p className="text-neutral-700">{g.items.map((i) => i.name).join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading>Langues</Heading>
            <ul className="space-y-0.5">
              {languages.map((l) => (
                <li key={l.name.fr} className="flex justify-between">
                  <span>{l.name.fr}</span>
                  <span className="text-neutral-600">{l.level.fr}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Qualités</Heading>
            <p className="text-neutral-700">Calme · Adaptable · Autonome</p>
          </section>
        </div>
      </div>
    </main>
  )
}
