export function About() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto lg:ml-48">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-primary">
              Sobre mí
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-balance">
              Mi camino en el desarrollo web
            </h3>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A fines de 2020 comence a adentrarme en el mundo de la
              programación mediante tutoriales, iniciando con HTML y CSS y
              continuando en 2021 con cursos de JavaScript y PHP en la UTN. En
              2022 recibí tutorías que me permitieron profundizar en frontend y
              backend a través de proyectos reales, como la creación de un
              diario digital. <br/>Desde 2023 sume la inteligencia artificial como
              herramienta de aprendizaje, lo que me permitio acelerar mucho la
              creacion de proyectos, pero nunca deje de preocuparme por entender
              los conceptos fundamentales que hacen falta para ser
              un buen desarrollador.
            </p>

            <p>
              Me enfoco en crear interfaces intuitivas, alto rendimiento y una
              excelente experiencia de usuario, siempre aplicando buenas
              prácticas de desarrollo.
            </p>

            <p>
              Actualmente trabajo como freelance, desarrollando soluciones web a
              medida para distintas necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
