import { About } from '@/components/about'
import { Contact } from '@/components/contact/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { PersonJsonLd } from '@/components/person-json-ld'
import { Projects } from '@/components/projects/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <PersonJsonLd />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
