import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

export function Experience() {
  return (
    <section className="border-b border-white/10 py-24" id="experiencia">
      <div className="section-shell">
        <p className="section-kicker">Experiencia</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Caminho profissional
        </h2>

        <div className="mt-10 grid gap-5">
          {experiences.map((experience, index) => (
            <motion.article
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              initial={{ opacity: 0, x: -20 }}
              key={`${experience.role}-${experience.period}`}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                  <p className="mt-1 text-green-300">{experience.company}</p>
                </div>
                <span className="rounded border border-white/10 px-3 py-1 text-sm text-zinc-300">
                  {experience.period}
                </span>
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{experience.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
