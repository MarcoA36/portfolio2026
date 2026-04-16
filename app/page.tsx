import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { MainProject } from "@/components/main-project"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
           <Skills />
        {/* <About /> */}
        <MainProject/>
     
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
