import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16 lg:pt-0"
    >
      <div className="max-w-4xl mx-auto lg:ml-48">
        <div className="space-y-6">
          <div className="space-y-4"> {/* Aumenté un poco el gap aquí */}
            {/* TU NOMBRE */}
            <h2 className="text-lg md:text-xl font-medium text-primary tracking-tight">
              Hola, soy <span className="font-bold">Marco</span>
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Desarrollador Web
              <br />
              <span className="text-primary/90 italic">Full Stack</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Enfocado en la creación de soluciones integrales, desde el diseño de
            interfaces hasta la arquitectura de bases de datos. Responsable y
            orientado a resultados, con gran capacidad para optimizar recursos
            existentes y transformar ideas simples en sistemas escalables. Busco
            integrar equipos donde pueda colaborar con referentes técnicos y
            continuar mi crecimiento profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#proyectos">Ver Proyectos</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#contacto">Contactar</a>
            </Button>
          </div>

          <div className="pt-12">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Conoce más de mi trabajo</span>
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}