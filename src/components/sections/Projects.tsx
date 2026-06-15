import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="section-block bg-portfolio-bg-alt"
      id="projetos"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Projetos
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="projects-title"
          >
            Projetos
          </h2>
          <p className="mt-5 text-base leading-8 text-portfolio-muted sm:text-lg">
            Projetos que conectam desenvolvimento de software, produto digital
            e IA aplicada para resolver problemas reais com clareza e impacto.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group flex h-full flex-col rounded-lg border border-white/10 bg-portfolio-card p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-portfolio-lilac/60 hover:shadow-portfolio-purple/10"
              key={project.title}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="max-w-md text-xl font-bold leading-snug text-portfolio-text sm:text-2xl">
                  {project.title}
                </h3>
                <span className="rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 px-3 py-1 text-xs font-semibold text-portfolio-lilac">
                  {project.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-portfolio-muted">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-portfolio-muted transition duration-200 group-hover:border-portfolio-purple/35"
                    key={`${project.title}-${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-portfolio-lilac">
                  Destaques
                </p>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      className="flex gap-3 text-sm leading-6 text-portfolio-muted"
                      key={`${project.title}-${highlight}`}
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
