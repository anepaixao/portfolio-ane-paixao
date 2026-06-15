import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="border-b border-white/10 py-24" id="sobre">
      <motion.div
        className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <p className="section-kicker">Sobre mim</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Tecnologia com olhar de produto.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-zinc-300">
          <p>
            Sou Ane Paixao, desenvolvedora front-end/mobile em formacao. Gosto
            de transformar ideias em interfaces organizadas, bonitas e
            funcionais.
          </p>
          <p>
            Meu foco atual esta em React, TypeScript, Tailwind CSS, React Native
            e em como a inteligencia artificial pode apoiar criacao, pesquisa e
            melhoria de produtos digitais.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
