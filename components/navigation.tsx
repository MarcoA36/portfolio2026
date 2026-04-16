"use client"

import { useState, useEffect } from "react"
import { Github, Mail, MessageCircle } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "inicio", label: "Inicio" },
    // { id: "sobre-mi", label: "Sobre mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:gap-8 z-50">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition-colors hover:text-primary ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-8 border-t border-border">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:tu@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Portafolio</span>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:tu@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
