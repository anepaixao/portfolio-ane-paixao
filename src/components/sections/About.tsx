const highlights = [
  'Ciência da Computação',
  'Desenvolvimento Front-end/Mobile',
  'Produto Digital & MVP',
  'IA Aplicada & Pesquisa',
];

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-block bg-portfolio-bg"
      id="sobre"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Sobre mim
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="about-title"
          >
            Sobre mim
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
        </div>

        <div>
          <div className="rounded-3xl border border-white/10 bg-portfolio-card/75 p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-portfolio-muted sm:text-lg">
              <p>
                Sou estudante de Ciência da Computação na UESC e desenvolvedora
                em formação, com interesse em desenvolvimento front-end/mobile,
                produto digital e inteligência artificial aplicada.
              </p>
              <p>
                Minha trajetória combina programação, pesquisa acadêmica,
                liderança de projetos e construção de soluções digitais. Tenho
                experiência com projetos que envolvem aplicativos mobile, MVPs,
                automação, análise de problemas reais e comunicação com
                diferentes perfis de pessoas.
              </p>
              <p>
                Atualmente, busco oportunidades de estágio e posições iniciais
                onde eu possa aprender, contribuir com times de tecnologia e
                desenvolver soluções que gerem impacto para usuários e negócios.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <article
                className="rounded-3xl border border-white/10 bg-portfolio-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-lilac/60 hover:shadow-lg hover:shadow-portfolio-purple/10"
                key={highlight}
              >
                <div className="mb-5 size-2 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
                <h3 className="text-base font-bold leading-snug text-portfolio-text">
                  {highlight}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
