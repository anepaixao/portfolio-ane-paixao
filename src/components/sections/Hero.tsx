import { motion } from 'framer-motion';
import { BrainCircuit, Boxes, Layers, Search, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const heroNodes: Array<{
  Icon: LucideIcon;
  className: string;
  sizeClass: string;
}> = [
  {
    Icon: Layers,
    className: 'left-0 top-8 sm:left-4',
    sizeClass: 'size-11',
  },
  {
    Icon: Boxes,
    className: 'right-2 top-0 sm:right-10 sm:top-8',
    sizeClass: 'size-10',
  },
  {
    Icon: BrainCircuit,
    className: 'right-0 top-1/2 -translate-y-1/2 sm:right-2',
    sizeClass: 'size-12',
  },
  {
    Icon: Smartphone,
    className: 'left-4 bottom-12 sm:left-10',
    sizeClass: 'size-10',
  },
  {
    Icon: Search,
    className: 'right-10 bottom-0 sm:right-16',
    sizeClass: 'size-9',
  },
];

export function Hero() {
  return (
    <section
      aria-label="Inicio"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_16%,rgb(109_59_255_/_0.34),transparent_30%),radial-gradient(circle_at_78%_28%,rgb(167_139_250_/_0.18),transparent_28%),radial-gradient(circle_at_82%_72%,rgb(59_130_246_/_0.26),transparent_34%),#10072b]"
      id="inicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-20 size-72 rounded-full border border-white/10 bg-gradient-to-br from-portfolio-purple/20 to-transparent blur-sm" />
      <div className="pointer-events-none absolute right-[-5rem] top-28 size-80 rounded-full border border-portfolio-blue/20 bg-gradient-to-br from-portfolio-blue/20 via-portfolio-lilac/10 to-transparent blur-md" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-[38rem] -translate-x-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute bottom-28 right-1/4 h-px w-80 rotate-[18deg] bg-gradient-to-r from-transparent via-portfolio-lilac/25 to-transparent" />

      <div className="section-shell grid min-h-[calc(100svh-64px)] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            Desenvolvedora de Software | Produto Digital | IA Aplicada
          </p>

          <h1 className="mt-7 text-4xl font-black leading-tight text-portfolio-text sm:text-5xl lg:text-7xl">
            Olá, eu sou Ane Paixão.
          </h1>

          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-portfolio-text sm:text-3xl">
            Construindo produtos digitais com tecnologia, propósito e visão de
            usuário.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
            Estudante de Ciência da Computação e desenvolvedora de software em
            formação, com experiência prática em projetos digitais, produto, IA
            aplicada e resolução de problemas reais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition duration-200 hover:scale-[1.02] hover:shadow-portfolio-blue/20 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#projetos"
            >
              Ver projetos
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold text-portfolio-text transition duration-200 hover:border-portfolio-lilac hover:text-portfolio-lilac focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#curriculo"
            >
              Baixar currículo
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-bold text-portfolio-muted transition duration-200 hover:border-portfolio-blue hover:text-portfolio-text focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:ring-offset-2 focus:ring-offset-portfolio-bg"
              href="#contato"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto w-full max-w-[34rem] lg:ml-auto"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-portfolio-purple/20 via-portfolio-blue/10 to-portfolio-lilac/15 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-lilac/15 bg-portfolio-lilac/10 blur-2xl" />
          <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative h-[24rem] overflow-hidden rounded-[2.4rem] border border-white/10 bg-portfolio-card/80 p-6 shadow-2xl shadow-portfolio-purple/15 backdrop-blur-xl sm:h-[27rem] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac/70 to-transparent" />
            <div className="absolute right-7 top-7 flex gap-1.5">
              <span className="size-1.5 rounded-full bg-portfolio-lilac/60" />
              <span className="size-1.5 rounded-full bg-portfolio-blue/60" />
              <span className="size-1.5 rounded-full bg-white/60" />
            </div>

            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-portfolio-lilac/22"
              viewBox="0 0 520 420"
            >
              <circle cx="260" cy="210" fill="none" r="124" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
              <circle cx="260" cy="210" fill="none" r="86" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />
              <path
                d="M260 210L112 100"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 10"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M260 210L402 112"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 10"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M260 210L430 210"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 10"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M260 210L140 326"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 10"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M260 210L376 330"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 10"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M122 148C164 126 202 144 238 172"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5 11"
                strokeLinecap="round"
                strokeOpacity="0.24"
                strokeWidth="1"
              />
              <path
                d="M286 250C318 278 344 294 372 302"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5 11"
                strokeLinecap="round"
                strokeOpacity="0.24"
                strokeWidth="1"
              />
              <path
                d="M310 166C344 156 374 170 404 196"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5 11"
                strokeLinecap="round"
                strokeOpacity="0.24"
                strokeWidth="1"
              />
            </svg>

            <motion.div
              animate={{ scale: [1, 1.03, 1], opacity: [0.88, 1, 0.88] }}
              className="absolute left-1/2 top-1/2 z-10 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-portfolio-purple/30 via-portfolio-blue/18 to-portfolio-lilac/30 p-[1px] shadow-[0_0_60px_rgba(109,59,255,0.22)]"
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative flex size-full items-center justify-center rounded-full bg-portfolio-card/90 backdrop-blur">
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div className="absolute inset-9 rounded-full border border-portfolio-lilac/15" />
                <div className="relative size-16 rounded-[1.6rem] border border-white/12 bg-gradient-to-br from-portfolio-purple/18 via-transparent to-portfolio-blue/18">
                  <div className="absolute inset-3 rounded-xl border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-lilac shadow-[0_0_18px_rgba(167,139,250,0.8)]" />
                </div>
              </div>
            </motion.div>

            {heroNodes.map(({ Icon, className, sizeClass }, index) => (
              <motion.div
                animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                className={`absolute z-20 ${className}`}
                key={className}
                transition={{
                  duration: 4.6 + index * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.05] p-3 shadow-lg shadow-black/10 backdrop-blur">
                  <span className={`grid ${sizeClass} place-items-center rounded-[1rem] border border-portfolio-blue/25 bg-portfolio-blue/10 text-portfolio-lilac`}>
                    <Icon size={16} />
                  </span>
                </div>
              </motion.div>
            ))}

            <div className="absolute left-[18%] top-[24%] size-2 rounded-full bg-portfolio-lilac/80 shadow-[0_0_16px_rgba(167,139,250,0.7)]" />
            <div className="absolute right-[22%] top-[32%] size-2.5 rounded-full bg-portfolio-blue/75 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
            <div className="absolute left-[32%] bottom-[23%] size-2 rounded-full bg-portfolio-purple/75 shadow-[0_0_18px_rgba(109,59,255,0.75)]" />
            <div className="absolute right-[30%] bottom-[20%] size-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(248,250,252,0.45)]" />

            <motion.div
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              className="absolute left-12 top-14 h-24 w-24 rounded-full bg-portfolio-purple/18 blur-2xl"
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              className="absolute bottom-10 right-14 h-28 w-28 rounded-full bg-portfolio-blue/18 blur-2xl"
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              className="absolute left-1/2 top-1/2 h-[16.5rem] w-[16.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
