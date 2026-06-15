export function Hero() {
  return (
    <section
      aria-label="Inicio"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_16%,rgb(109_59_255_/_0.34),transparent_30%),radial-gradient(circle_at_78%_28%,rgb(167_139_250_/_0.18),transparent_28%),radial-gradient(circle_at_82%_72%,rgb(59_130_246_/_0.26),transparent_34%),#10072b]"
      id="inicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-20 size-72 rounded-full border border-white/10 bg-gradient-to-br from-portfolio-purple/20 to-transparent blur-sm" />
      <div className="pointer-events-none absolute right-[-5rem] top-28 size-80 rounded-full border border-portfolio-blue/20 bg-gradient-to-br from-portfolio-blue/20 via-portfolio-lilac/10 to-transparent blur-md" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[38rem] -translate-x-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute bottom-28 right-1/4 h-px w-80 rotate-[18deg] bg-gradient-to-r from-transparent via-portfolio-lilac/25 to-transparent" />

      <div className="section-shell grid min-h-[calc(100svh-64px)] items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
           Desenvolvedora de Software | Produto Digital | IA Aplicada
          </p>

          <h1 className="mt-7 text-4xl font-black leading-tight text-portfolio-text sm:text-5xl lg:text-7xl">
            Olá, eu sou Ane Paixão.
          </h1>

          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-portfolio-text sm:text-3xl">
            Construindo produtos digitais com tecnologia, propósito e visão de
            usuário.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
            Estudante de Ciência da Computação e desenvolvedora de software 
            em formação, com experiência prática em projetos digitais, produto, 
            IA aplicada e resolução de problemas reais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition duration-200 hover:scale-[1.02] hover:shadow-portfolio-blue/20 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#projetos"
            >
              Ver projetos
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold text-portfolio-text transition duration-200 hover:border-portfolio-lilac hover:text-portfolio-lilac focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="/resume.pdf"
            >
              Baixar currículo
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-bold text-portfolio-muted transition duration-200 hover:border-portfolio-blue hover:text-portfolio-text focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#contato"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-portfolio-purple/30 via-portfolio-blue/20 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-portfolio-card/80 p-5 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5">
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
                <div className="rounded-2xl border border-white/10 bg-portfolio-bg-alt p-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue" />
                  <div className="mt-5 h-3 w-20 rounded-full bg-white/15" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-portfolio-bg-alt p-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-lilac" />
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
