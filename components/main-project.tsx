import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube } from "lucide-react";

const mainProject = {
  title: "Sistema de Gestión de Flota",
  image: "/sistema.webp",
  tags: [
    "React",
    "Redux",
    "Context API",
    "React Bootstrap",
    "Leaflet",
    "Node.js",
    "Socket.IO",
  ],
  features: [
    "Carga de pedidos desde web y app",
    "Panel administrativo completo",
    "App (REACT NATIVE) para conductores con asignación de viajes",
    "Comunicación en tiempo real (Socket.IO)",
    "Mapa interactivo con Leaflet",
    "Visualización de móviles y actividad en vivo en tiempo real.",
    "Web para clientes con pedido de viajes y seguimiento de estado.",
  ],
};

export function MainProject() {
  return (
    <section className="min-h-screen px-4 lg:px-8 py-20" id="proyectos">
      <div className="max-w-6xl mx-auto lg:ml-48 space-y-16">
        {/* HEADER */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-primary">
            Proyecto principal
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            {mainProject.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Plataforma de gestión de flota con monitoreo en tiempo real y
            sistema de geolocalización propio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* IMAGEN */}
          <div className="relative overflow-hidden rounded-2xl border aspect-video">
            <Image
              src={mainProject.image}
              alt={mainProject.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* CONTENIDO */}
          <div className="space-y-6">
            {/* FEATURES */}
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {mainProject.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {mainProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <Button asChild>
                <a href="#" target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demo
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-red-500/20 hover:bg-red-500/10 hover:text-red-600 transition-colors"
              >
                <a
                  href="https://www.youtube.com/watch?v=ETx6PzcqqUI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Video
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
