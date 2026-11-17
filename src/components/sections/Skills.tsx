import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, Code2, Layers, Settings2 } from 'lucide-react';
import { skills } from '../../data/skills';

const skillIcons = {
  Desenvolvimento: Code2,
  Produto: Layers,
  'IA & Pesquisa': BrainCircuit,
  Ferramentas: Settings2,
};


const skillAccents = [
  'from-portfolio-purple/70 to-portfolio-blue/30',
  'from-portfolio-blue/70 to-portfolio-lilac/30',
  'from-portfolio-lilac/70 to-portfolio-purple/30',
  'from-portfolio-purple/50 to-portfolio-lilac/60',
  'from-portfolio-blue/50 to-portfolio-purple/50',
];

export function Skills() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="skills-title"
      className="section-block bg-portfolio-bg-alt"
      id="habilidades"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            <span className="inline-flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                <Layers aria-hidden="true" size={15} />
              </span>
              Habilidades
            </span>
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="skills-title"
          >
            Minhas competências 
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const SkillIcon =
              skillIcons[group.category as keyof typeof skillIcons] ?? Layers;
            const isTools = group.category === 'Ferramentas';

            return (
            <motion.article
              className={`group relative min-w-0 ${isTools ? '-mt-2 md:col-span-2 lg:col-span-3' : ''}`}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              key={group.category}
              transition={{ delay: reducedMotion ? 0 : index * 0.05, duration: reducedMotion ? 0 : 0.35 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <span className={`relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-portfolio-lilac/30 bg-gradient-to-br text-portfolio-text shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.12)] transition-[border-color,box-shadow] duration-300 group-hover:border-portfolio-lilac/55 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_20px_rgba(109,59,255,0.18)] ${skillAccents[index]}`}>
                  <span aria-hidden="true" className="absolute inset-1 rounded border border-white/10" />
                  <SkillIcon aria-hidden="true" size={isTools ? 17 : 21} />
                </span>
                <h3 aria-label={group.category} className="text-sm font-bold leading-6 text-portfolio-text/90 transition-colors duration-300 group-hover:text-portfolio-text">
                  {group.category.toLocaleUpperCase('pt-BR')}
                </h3>
              </div>
              <span aria-hidden="true" className={`mt-4 block h-px w-full bg-gradient-to-r opacity-45 transition-opacity duration-300 group-hover:opacity-90 ${skillAccents[index]}`} />

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    className="flex max-w-full items-start gap-2 rounded-md border border-white/10 bg-gradient-to-b from-white/[0.065] to-white/[0.025] px-2.5 py-1 text-xs font-medium leading-5 text-portfolio-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] backdrop-blur-sm transition-[border-color,color,background-color] duration-300 group-hover:border-portfolio-lilac/25 group-hover:bg-white/[0.025] group-hover:text-portfolio-text"
                    key={`${group.category}-${skill}`}
                  >
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-portfolio-lilac/40 transition-colors duration-300 group-hover:bg-portfolio-lilac/80" />
                    <span className="min-w-0 break-words">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
