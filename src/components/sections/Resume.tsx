import { FileText } from 'lucide-react';

export function Resume() {
  return (
    <section
      aria-labelledby="resume-title"
      className="section-block bg-portfolio-bg"
      id="curriculo"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-portfolio-card p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-portfolio-purple/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-portfolio-blue/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
                <span className="inline-flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                    <FileText size={15} />
                  </span>
                  Currículo
                </span>
              </p>
              <h2
                className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
                id="resume-title"
              >
                 Quer conhecer minha trajetória com mais detalhes?
              </h2>
              <p className="mt-5 text-xl font-semibold leading-snug text-portfolio-text sm:text-2xl">
                
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
                Disponibilizo meu currículo principal com foco em
                desenvolvimento de software, front-end/mobile, produto digital e
                inteligência artificial aplicada.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Desenvolvimento de software',
                  'Front-end/mobile',
                  'Produto digital',
                  'IA aplicada',
                ].map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-semibold text-portfolio-muted"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition duration-200 hover:scale-[1.02] hover:shadow-portfolio-blue/20 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-card"
                download
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
              >
                Baixar currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
