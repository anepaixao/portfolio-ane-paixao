import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, Smartphone, Target } from 'lucide-react';
import profileImage from '../../assets/images/ane-profile.png';

const highlights = [
  { label: 'Ciência da Computação', icon: GraduationCap },
  { label: 'Desenvolvimento Front-end/Mobile', icon: Smartphone },
  { label: 'Produto Digital & MVP', icon: Target },
  { label: 'IA Aplicada & Pesquisa', icon: BrainCircuit },
];

export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-block bg-portfolio-bg"
      id="sobre"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            <span className="inline-flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                <GraduationCap size={15} />
              </span>
              Sobre mim
            </span>
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="about-title"
          >
            Entre tecnologia, produto e pessoas
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />

          <div className="mt-8 rounded-3xl border border-white/10 bg-portfolio-card/75 p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-portfolio-muted sm:text-lg">
              <p>
                Sou estudante de Ciência da Computação na UESC e desenvolvedora front-end/mobile 
                em formação, com interesse em desenvolvimento de software, 
                produto digital e inteligência artificial aplicada.
              </p>
              <p>
               Minha trajetória combina programação, pesquisa acadêmica, 
               liderança de projetos e construção de soluções digitais. 
               Tenho experiência com aplicativos mobile, MVPs, documentação 
               de regras de negócio, análise de problemas reais e 
               comunicação com diferentes perfis de pessoas.
              </p>
              <p>
                Atualmente, busco oportunidades de estágio e posições 
                iniciais onde eu possa aprender, contribuir com times de tecnologia e 
                desenvolver soluções que gerem impacto para usuários e negócios.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ label, icon: Icon }, index) => (
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-white/10 bg-portfolio-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-lilac/60 hover:shadow-lg hover:shadow-portfolio-purple/10"
                key={label}
              >
                <div className="mb-5 grid size-10 place-items-center rounded-2xl border border-portfolio-blue/25 bg-portfolio-blue/10 text-portfolio-lilac">
                  <Icon size={19} />
                </div>
                <h3 className="text-base font-bold leading-snug text-portfolio-text">
                  {label}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-portfolio-purple/30 via-portfolio-blue/20 to-portfolio-lilac/20 blur-2xl" />
          <div className="absolute -right-4 top-8 size-24 rounded-full border border-portfolio-blue/25 bg-portfolio-blue/10 blur-sm" />
          <div className="absolute -bottom-5 -left-5 size-28 rounded-full border border-portfolio-lilac/25 bg-portfolio-purple/10 blur-sm" />

          <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-portfolio-purple/45 via-portfolio-blue/35 to-portfolio-lilac/25 p-[1px] shadow-2xl shadow-portfolio-purple/20">
            <div className="rounded-[1.95rem] bg-portfolio-card/80 p-3 backdrop-blur">
              <img
                alt="Foto de perfil de Ane Paixão"
                className="aspect-[3/4] w-full rounded-[1.55rem] object-cover object-center"
                src={profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
