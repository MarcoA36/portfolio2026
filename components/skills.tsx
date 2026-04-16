import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { category: "Backend", items: ["Node.js", "PHP", "Express"] },
    { category: "Bases de Datos", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Herramientas", items: ["Git", "Docker", "Vercel", "AWS"] },
  ]

  return (
    <section id="habilidades" className="min-h-screen flex items-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto lg:ml-48 w-full">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-primary">Habilidades</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">Tecnologías y herramientas</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h4 className="text-xl font-semibold">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
