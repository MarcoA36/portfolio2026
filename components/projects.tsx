import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     id: 2,
//     title: "Landing Page de Servicios",
//     description: "que pongo aca?.",
//     image: "/proyecto2.png",
//     tags: ["Next.js", "Tailwind"],
//   },
// ]

// export function Projects() {
//   return (
//     <section className="px-4 lg:px-8 py-20">
//       <div className="max-w-6xl mx-auto lg:ml-48 space-y-10">

//         {/* HEADER */}
//         <div className="space-y-2">
//           <h2 className="text-sm uppercase tracking-wider text-primary">
//             Otros proyectos
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold">
//             Trabajos recientes
//           </h3>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <Card
//               key={project.id}
//               className="group overflow-hidden hover:border-primary transition-all duration-300"
//             >
//               <div className="relative aspect-video overflow-hidden bg-muted">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </div>

//               <CardHeader>
//                 <CardTitle className="text-lg">{project.title}</CardTitle>
//                 <CardDescription className="text-sm">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-3">
//                 <div className="flex flex-wrap gap-1">
//                   {project.tags.map((tag) => (
//                     <Badge key={tag} variant="secondary" className="text-xs">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>

//                 <div className="flex gap-2">
//                   <Button size="sm" variant="outline" asChild className="flex-1">
//                     <a href="#" target="_blank">
//                       <ExternalLink className="w-3 h-3 mr-1" />
//                       Demo
//                     </a>
//                   </Button>

//                   <Button size="sm" variant="ghost" asChild>
//                     <a href="#" target="_blank">
//                       <Github className="w-3 h-3" />
//                     </a>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

const projects = [
  {
    id: 2,
    title: "Landing Page Corporativa & Personal",
    description:
      "Desarrollo de una plataforma profesional diseñada para exponer servicios tecnológicos. Implementación de arquitectura moderna.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://zonaweb.site", // Reemplaza con tu link real
  },
];

export function Projects() {
  return (
    <section className="px-4 lg:px-8 py-20" id="otros-proyectos">
      <div className="max-w-6xl mx-auto lg:ml-48 space-y-10">
        {/* HEADER */}
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-wider text-primary">
            Soluciones
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Desarrollo Web
          </h3>
        </div>

        {/* GRID - Ahora sin imagen, el Card destaca por su contenido */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2">
                  <Button size="sm" className="w-full group" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explorar sitio de servicios
                      <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
