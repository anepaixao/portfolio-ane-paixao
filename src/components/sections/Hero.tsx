export function Hero() {
  return (
    <section
      aria-label="Inicio"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgb(109_59_255_/_0.32),transparent_32%),radial-gradient(circle_at_82%_68%,rgb(59_130_246_/_0.24),transparent_34%),#10072b]"
      id="inicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac to-transparent" />

      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Desenvolvedora Front-end/Mobile | Produto Digital | IA Aplicada
          </p>

          <h1 className="mt-7 text-4xl font-black leading-tight text-portfolio-text sm:text-5xl lg:text-7xl">
            Olá, eu sou Ane.
          </h1>

          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-portfolio-text sm:text-3xl">
            Construindo produtos digitais com tecnologia, propósito e visão de
            usuário.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
            Estudante de Ciência da Computação, desenvolvedora em formação e
            criadora de soluções digitais com foco em experiência do usuário,
            tecnologia aplicada e resolução de problemas reais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#projetos"
            >
              Ver projetos
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded border border-white/15 bg-white/5 px-6 text-sm font-bold text-portfolio-text transition hover:border-portfolio-lilac hover:text-portfolio-lilac focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="/resume.pdf"
            >
              Baixar currículo
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded border border-white/15 px-6 text-sm font-bold text-portfolio-muted transition hover:border-portfolio-blue hover:text-portfolio-text focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#contato"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-5 rounded-lg bg-gradient-to-br from-portfolio-purple/30 via-portfolio-blue/20 to-transparent blur-2xl" />
          <div className="relative rounded-lg border border-white/10 bg-portfolio-card/80 p-5 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="rounded-md border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-portfolio-purple" />
                <span className="size-3 rounded-full bg-portfolio-blue" />
                <span className="size-3 rounded-full bg-portfolio-lilac" />
              </div>

              <div className="mt-8 space-y-4">
                <div className="h-3 w-28 rounded-full bg-portfolio-lilac/60" />
                <div className="h-4 w-full rounded-full bg-white/15" />
                <div className="h-4 w-10/12 rounded-full bg-white/10" />
                <div className="h-4 w-8/12 rounded-full bg-white/10" />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="rounded border border-white/10 bg-portfolio-bg-alt p-4">
                  <div className="h-8 w-8 rounded bg-gradient-to-br from-portfolio-purple to-portfolio-blue" />
                  <div className="mt-5 h-3 w-20 rounded-full bg-white/15" />
                </div>
                <div className="rounded border border-white/10 bg-portfolio-bg-alt p-4">
                  <div className="h-8 w-8 rounded bg-gradient-to-br from-portfolio-blue to-portfolio-lilac" />
                  <div className="mt-5 h-3 w-20 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
