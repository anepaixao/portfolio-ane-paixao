import { motion } from 'framer-motion';
import { BriefcaseBusiness, Rocket } from 'lucide-react';
import { experiences } from '../../data/experiences';

export function Experience() {
  return (
    <section
      aria-labelledby="experiences-title"
      className="section-block bg-portfolio-bg"
      id="experiencias"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            <span className="inline-flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                <BriefcaseBusiness size={15} />
              </span>
              Experiências
            </span>
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="experiences-title"
          >
            Minha Trajetória 
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
        </div>

        <div className="mt-12 space-y-6 lg:relative lg:space-y-0">
          <div className="hidden lg:absolute lg:left-6 lg:top-3 lg:block lg:h-[calc(100%-1.5rem)] lg:w-px lg:bg-gradient-to-b lg:from-portfolio-purple lg:via-portfolio-blue lg:to-transparent" />

          {experiences.map((experience, index) => (
            <motion.article
              className="relative lg:grid lg:grid-cols-[3rem_1fr] lg:gap-6 lg:pb-8"
              initial={{ opacity: 0, y: 22 }}
              key={`${experience.organization}-${experience.role}`}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="hidden lg:flex lg:justify-center">
                <span className="relative z-10 mt-3 grid size-8 place-items-center rounded-full border border-white/10 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white shadow-lg shadow-portfolio-purple/40">
                  <Rocket size={14} />
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-portfolio-card p-6 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-portfolio-lilac/60 hover:shadow-lg hover:shadow-portfolio-blue/10 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-portfolio-lilac">
                      {experience.organization}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-portfolio-text sm:text-2xl">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 px-3 py-1 text-xs font-semibold text-portfolio-lilac">
                      {experience.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-portfolio-muted">
                      {experience.period}
                    </span>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-portfolio-muted">
                  {experience.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-portfolio-lilac">
                    Destaques
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-portfolio-muted"
                        key={`${experience.organization}-${highlight}`}
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
