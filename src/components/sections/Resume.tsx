export function Resume() {
  return (
    <section
      aria-labelledby="resume-title"
      className="section-block bg-portfolio-bg"
      id="curriculo"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-portfolio-card p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-portfolio-purple/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-portfolio-blue/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
                Currículo
              </p>
              <h2
                className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
                id="resume-title"
              >
                Currículo
              </h2>
              <p className="mt-5 text-xl font-semibold leading-snug text-portfolio-text sm:text-2xl">
                Quer conhecer minha trajetória com mais detalhes?
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
                Disponibilizo meu currículo principal com foco em
                desenvolvimento de software, front-end/mobile, produto digital e
                inteligência artificial aplicada.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-card"
                download
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
              >
                Baixar currículo
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/15 bg-white/5 px-6 text-sm font-bold text-portfolio-text transition hover:border-portfolio-lilac hover:text-portfolio-lilac focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-card"
                href="#contato"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
