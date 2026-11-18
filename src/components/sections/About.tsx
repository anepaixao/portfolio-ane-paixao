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
          <div className="mt-6 h-1 w-20 rounded-full bg-portfolio-lilac" />

          <div className="mt-8 rounded-3xl border border-white/10 bg-portfolio-card/75 p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-portfolio-muted sm:text-lg">
              <p>
                Sou estudante de Ciência da Computação na UESC e desenvolvedora 
                de software em formação, com foco em desenvolvimento mobile, 
                produto digital e inteligência artificial aplicada.
              </p>
              <p>
              Minha trajetória combina programação, pesquisa acadêmica e
              liderança de projetos, com experiência na construção de soluções digitais,
              definição de escopo, documentação de regras de negócio e organização de MVPs.
              </p>
              <p>
                Atuo na interseção entre tecnologia, produto e usuário,
                transformando problemas reais em soluções digitais mais claras, úteis e acessíveis.
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
                className="rounded-3xl border border-white/10 bg-portfolio-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-lilac/60 hover:shadow-lg hover:shadow-black/10"
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

          <div className="relative rounded-[2rem] border border-white/10 bg-portfolio-lilac/10 p-[1px] shadow-2xl shadow-black/10">
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
