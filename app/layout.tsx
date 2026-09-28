import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import { siteUrl } from '@/lib/site'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const title = 'Aaron Zerrouk — Développeur Web · Étudiant BUT MMI'
const description =
  "Portfolio d'Aaron Zerrouk, étudiant en BUT MMI à l'IUT Clermont Auvergne et développeur web. À la recherche d'une alternance, d'un stage ou d'un job étudiant."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s — Aaron Zerrouk' },
  description,
  applicationName: 'Aaron Zerrouk — Portfolio',
  authors: [{ name: 'Aaron Zerrouk', url: 'https://github.com/aaronZER69' }],
  creator: 'Aaron Zerrouk',
  keywords: [
    'Aaron Zerrouk',
    'développeur web',
    'portfolio',
    'BUT MMI',
    'IUT Clermont Auvergne',
    'BTS SIO SLAM',
    'alternance développeur web',
    'stage développeur',
    'React',
    'Vue.js',
    'Laravel',
    'Next.js',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: 'Aaron Zerrouk',
    title,
    description,
    firstName: 'Aaron',
    lastName: 'Zerrouk',
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1714' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
