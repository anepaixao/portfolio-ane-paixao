import { skills } from '../../data/skills';

export function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      className="section-block bg-portfolio-bg-alt"
      id="habilidades"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Habilidades
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="skills-title"
          >
            Habilidades
          </h2>
          <p className="mt-5 text-base leading-8 text-portfolio-muted sm:text-lg">
            Habilidades organizadas por áreas de atuação para mostrar com
            clareza minha base técnica, visão de produto e interesse em IA.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-portfolio-card p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-portfolio-lilac/60 hover:shadow-portfolio-blue/10"
              key={group.category}
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
              <h3 className="text-xl font-bold leading-snug text-portfolio-text">
                {group.category}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-portfolio-muted">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-semibold text-portfolio-muted transition duration-200 hover:border-portfolio-blue/40 hover:text-portfolio-text"
                    key={`${group.category}-${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
