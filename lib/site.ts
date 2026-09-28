export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const profile = {
  name: 'Aaron Zerrouk',
  email: 'aaron.zerrouk96@gmail.com',
  github: 'https://github.com/aaronZER69',
  githubHandle: 'aaronZER69',
  cv: '/cv-aaron-zerrouk.pdf',
} as const
