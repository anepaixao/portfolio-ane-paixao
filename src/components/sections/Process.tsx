import { motion } from 'framer-motion';
import {
  Blocks,
  Code2,
  Layout,
  Search,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const steps: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: 'Problema',
    description: 'Entendo dores, contexto e necessidades dos usuários.',
    Icon: Search,
  },
  {
    title: 'Produto',
    description: 'Organizo escopo, MVP, regras de negócio e prioridades.',
    Icon: Blocks,
  },
  {
    title: 'Interface',
    description: 'Transformo fluxos em telas, componentes e experiências mobile/web.',
    Icon: Layout,
  },
  {
    title: 'Tecnologia',
    description: 'Desenvolvo soluções com React, React Native, TypeScript e APIs.',
    Icon: Code2,
  },
  {
    title: 'Aprendizado',
    description: 'Documento decisões, analiso aprendizados e evoluo a solução.',
    Icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="section-block overflow-hidden bg-portfolio-bg-alt"
      id="processo"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Processo
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="process-title"
          >
            Meu processo de construção
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
            Meu processo conecta visão de produto e construção técnica: parto
            de problemas reais, organizo o escopo, desenho fluxos, desenvolvo
            interfaces e evoluo a solução com aprendizado contínuo.
          </p>
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-portfolio-card/75 p-6 shadow-2xl shadow-portfolio-purple/10 backdrop-blur-xl sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac/70 to-transparent" />
          <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-portfolio-purple/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 right-0 h-44 w-44 rounded-full bg-portfolio-blue/12 blur-3xl" />

          <div className="hidden lg:block">
            <div className="relative px-2 pt-10">
              <div className="absolute left-12 right-12 top-16 h-0.5 rounded-full bg-gradient-to-r from-portfolio-purple/45 via-portfolio-blue/65 to-portfolio-lilac/45" />

              <div className="relative z-10 grid grid-cols-5 gap-4">
                {steps.map(({ title, description, Icon }, index) => (
                  <motion.div
                    className="group text-center"
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ delay: index * 0.07, duration: 0.45 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="mx-auto grid size-11 place-items-center rounded-full border border-white/12 bg-portfolio-bg text-portfolio-lilac shadow-lg shadow-portfolio-purple/10 transition duration-200 group-hover:border-portfolio-lilac/45">
                      <Icon size={18} />
                    </div>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition duration-200 hover:border-portfolio-lilac/35 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-portfolio-purple/10">
                      <span className="mb-3 inline-flex size-2 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
                      <p className="text-sm font-black text-portfolio-text">
                        {title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-portfolio-muted">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative pl-14">
              <div className="absolute bottom-5 left-5 top-5 w-0.5 rounded-full bg-gradient-to-b from-portfolio-purple/45 via-portfolio-blue/65 to-portfolio-lilac/45" />

              <div className="grid gap-5">
                {steps.map(({ title, description, Icon }, index) => (
                  <motion.div
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                    key={title}
                    initial={{ opacity: 0, y: 14 }}
                    transition={{ delay: index * 0.06, duration: 0.42 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 bg-portfolio-bg text-portfolio-lilac shadow-lg shadow-portfolio-purple/10">
                        <Icon size={17} />
                      </div>
                      <p className="text-sm font-black text-portfolio-text">
                        {title}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-portfolio-muted">
                      {description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
