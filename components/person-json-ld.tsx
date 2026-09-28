import { profile, siteUrl } from '@/lib/site'

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  givenName: 'Aaron',
  familyName: 'Zerrouk',
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: 'Développeur Web',
  description: 'Étudiant en BUT MMI à l’IUT Clermont Auvergne et développeur web.',
  sameAs: [profile.github],
  alumniOf: [{ '@type': 'EducationalOrganization', name: 'BTS SIO SLAM' }],
  affiliation: { '@type': 'CollegeOrUniversity', name: 'IUT Clermont Auvergne' },
  address: { '@type': 'PostalAddress', addressLocality: 'Clermont-Ferrand', addressCountry: 'FR' },
  knowsLanguage: ['fr', 'en', 'es', 'ja'],
  knowsAbout: ['Développement web', 'React', 'Vue.js', 'Laravel', 'PHP', 'JavaScript', 'TypeScript', 'MySQL', 'WebGL'],
}

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
    />
  )
}
