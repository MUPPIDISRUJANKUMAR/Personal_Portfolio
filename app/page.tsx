import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { ScrollToTop } from "@/components/scroll-to-top"
import { personalData } from "@/lib/constants"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>
          © {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
      </footer>
      <ScrollToTop />
    </main>
  )
}
