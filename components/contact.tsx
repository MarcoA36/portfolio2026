"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, MessageCircle, FileText, Linkedin } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensaje enviado correctamente. Me pondré en contacto contigo pronto.")
  }

  return (
    <section id="contacto" className="min-h-screen flex items-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto lg:ml-48 w-full">
        <div className="space-y-12">
          
          {/* HEADER RECLUTADOR */}
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Actualmente estoy abierto a nuevas oportunidades y desafíos técnicos. 
              Si buscas un desarrollador con iniciativa y capacidad de resolución, hablemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FORMULARIO PROFESIONAL */}
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle>Mensaje directo</CardTitle>
                <CardDescription>Consultas sobre mi perfil técnico o propuestas laborales.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Nombre o Empresa" required className="bg-muted/30" />
                  <Input type="email" placeholder="Email de contacto" required className="bg-muted/30" />
                  <Textarea placeholder="Cuéntame sobre la posición o el proyecto..." rows={4} required className="bg-muted/30" />
                  <Button type="submit" className="w-full font-bold">
                    Enviar Propuesta
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* ACCESOS RÁPIDOS */}
            <div className="space-y-4">
              
              {/* CV - CRÍTICO PARA RECLUTADORES */}
              <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-start gap-1 group border-primary/20 hover:border-primary transition-all" asChild>
                <a href="/tu-cv.pdf" download>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <FileText className="w-5 h-5" />
                    <span>Descargar Curriculum Vitae</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-normal">Versión actualizada 2026 - PDF</span>
                </a>
              </Button>

              <div className="grid grid-cols-1 gap-4">
                <Card className="border-border hover:bg-muted/20 transition-colors">
                  <a href="mailto:tu@email.com" className="flex items-center p-4 gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Email</p>
                      <p className="text-sm font-medium">marco_95_5@yahoo.com</p>
                    </div>
                  </a>
                </Card>

                <Card className="border-border hover:bg-muted/20 transition-colors">
                  <a href="https://linkedin.com/in/tuusuario" target="_blank" className="flex items-center p-4 gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold">Mi whatsapp</p>
                      <p className="text-sm font-medium">+549 2284 656640</p>
                    </div>
                  </a>
                </Card>
              </div>

            </div>
          </div>

          <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 — Desarrollador Full Stack</p>
            <div className="flex gap-6">
              <a href="https://github.com/MarcoA36" className="hover:text-primary">GitHub</a>
              <a href="#inicio" className="hover:text-primary">Volver arriba</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}