import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      aria-label="Inicio"
      className="relative overflow-hidden border-b border-white/10 bg-portfolio-bg"
      id="inicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-portfolio-lilac/10" />

      <div className="section-shell grid min-h-[calc(100svh-64px)] grid-cols-1 items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:min-h-0 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-14 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex h-auto max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:w-fit sm:px-5 sm:py-2">
            <p className="flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.04em] text-portfolio-lilac sm:flex-nowrap sm:gap-x-2 sm:text-xs sm:tracking-[0.12em]">
              <span className="whitespace-nowrap">Software</span>
              <span aria-hidden="true" className="text-white/35">
                |
              </span>
              <span className="whitespace-nowrap">Produto Digital</span>
              <span aria-hidden="true" className="text-white/35">
                |
              </span>
              <span className="whitespace-nowrap">IA Aplicada</span>
            </p>
          </div>

          <h4 className="mt-6 max-w-[12ch] text-[2.15rem] font-black leading-[1.05] text-portfolio-text sm:mt-7 sm:max-w-none sm:text-[2.85rem] lg:text-[4.5rem]">
            Olá, eu sou Ane Paixão.
          </h4>
          <p className="mt-6 max-w-xl font-['Fredoka'] text-[2rem] font-semibold leading-tight tracking-tight sm:mt-8 sm:max-w-2xl sm:text-[2.8rem]">
            <span className="text-portfolio-lilac">
              Desenvolvedora de software
            </span>
          </p>
          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-portfolio-muted sm:mt-8 sm:max-w-2xl sm:text-lg">
            Sou desenvolvedora de software em formação, com foco em front-end/mobile,
            produto digital e inteligência artificial aplicada. Gosto de transformar
            problemas reais em soluções digitais claras, úteis e bem organizadas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-portfolio-purple px-6 text-sm font-bold text-white shadow-lg shadow-black/10 transition duration-200 hover:scale-[1.02] hover:shadow-black/10 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto"
              href="#projetos"
            >
              Ver projetos
            </a>
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold text-portfolio-text transition duration-200 hover:border-portfolio-lilac hover:text-portfolio-lilac focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto"
              href="#curriculo"
            >
              Baixar currículo
            </a>
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 text-sm font-bold text-portfolio-muted transition duration-200 hover:border-portfolio-blue hover:text-portfolio-text focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto"
              href="#contato"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto w-full max-w-[20rem] sm:max-w-[27rem] lg:ml-auto lg:max-w-[34rem]"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >

          <div className="relative h-[20rem] [perspective:1400px] sm:h-[24rem] lg:h-[29rem]">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full text-portfolio-lilac/18"
              viewBox="0 0 620 500"
            >
              <path
                d="M160 160C214 132 292 132 362 174"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 12"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M192 320C256 288 350 288 430 330"
                fill="none"
                stroke="currentColor"
                strokeDasharray="6 12"
                strokeLinecap="round"
                strokeWidth="1.2"
              />
              <path
                d="M180 218C212 198 258 196 300 206"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.28"
                strokeWidth="1"
              />
              <path
                d="M356 222C408 206 456 214 494 244"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.24"
                strokeWidth="1"
              />
            </svg>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, -1.5, -3] }}
              className="absolute left-1/2 top-[8%] z-30 h-[17rem] w-[9rem] -translate-x-1/2 sm:h-[21rem] sm:w-[11.25rem] lg:top-[4%] lg:h-[25rem] lg:w-[13rem]"
              transition={{ duration: 6.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative h-full w-full rounded-[2.35rem] border border-white/16 bg-[#120c26]/85 p-2 shadow-[0_30px_70px_rgba(6,4,18,0.55)] ">
                <div className="absolute inset-x-0 top-0 h-24 rounded-t-[2.35rem] bg-portfolio-lilac/10" />
                <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/12" />
                <div className="relative h-full overflow-hidden rounded-[1.95rem] border border-white/10 bg-portfolio-bg px-3 py-4">

                  <div className="relative flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-2 w-10 rounded-full bg-white/20" />
                      <div className="h-2 w-16 rounded-full bg-white/10" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-portfolio-lilac/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    </div>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[1.45rem] border border-white/10 bg-portfolio-lilac/10 p-3">
                    <div className="grid grid-cols-[1.1fr_0.9fr] gap-2">
                      <div className="space-y-2">
                        <div className="h-2 w-14 rounded-full bg-white/25" />
                        <div className="h-2 w-10 rounded-full bg-white/12" />
                        <div className="mt-3 grid grid-cols-3 gap-1.5">
                          <span className="h-8 rounded-xl bg-white/12" />
                          <span className="h-8 rounded-xl bg-white/8" />
                          <span className="h-8 rounded-xl bg-white/10" />
                        </div>
                      </div>
                      <div className="rounded-[1.1rem] border border-white/10 bg-white/8 p-2">
                        <div className="flex h-full items-end gap-1.5">
                          <span className="h-4 w-2.5 rounded-full bg-white/18" />
                          <span className="h-8 w-2.5 rounded-full bg-portfolio-lilac/45" />
                          <span className="h-6 w-2.5 rounded-full bg-portfolio-blue/45" />
                          <span className="h-10 w-2.5 rounded-full bg-white/22" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {[1, 2, 3].map((item) => (
                      <div
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-2.5 py-2"
                        key={item}
                      >
                        <span className="h-10 w-10 rounded-2xl bg-portfolio-lilac/10" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 w-16 rounded-full bg-white/16" />
                          <div className="h-2 w-11 rounded-full bg-white/10" />
                        </div>
                        <span className="h-6 w-6 rounded-full border border-portfolio-lilac/25 bg-white/6" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.15rem] border border-portfolio-blue/20 bg-portfolio-lilac/10 px-3 py-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1.5">
                        <div className="h-2 w-14 rounded-full bg-white/18" />
                        <div className="h-2 w-10 rounded-full bg-white/10" />
                      </div>
                      <span className="h-9 w-9 rounded-2xl bg-white/14" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    <span className="h-9 rounded-2xl border border-white/10 bg-white/6" />
                    <span className="h-9 rounded-2xl border border-white/10 bg-white/6" />
                    <span className="h-9 rounded-2xl border border-portfolio-lilac/20 bg-portfolio-lilac/10" />
                    <span className="h-9 rounded-2xl border border-white/10 bg-white/6" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0], rotate: [7, 9, 7] }}
              className="absolute right-[1%] top-[16%] z-20 h-32 w-36 rotate-[7deg] sm:right-[6%] sm:h-44 sm:w-52 lg:right-[4%] lg:h-52 lg:w-60"
              transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] border border-white/14 bg-portfolio-card shadow-[0_24px_48px_rgba(0,0,0,0.22)] ">
                <div className="absolute inset-0 bg-portfolio-lilac/10" />
                <div className="absolute inset-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-14 rounded-full bg-white/18" />
                      <div className="h-2 w-10 rounded-full bg-white/10" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80 shadow-black/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-200/70" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {[76, 58, 88, 64].map((width, index) => (
                      <div
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-2.5 py-2"
                        key={width}
                      >
                        <span className="h-4 w-4 rounded-md border border-white/12 bg-white/6">
                          <span
                            className={`mt-[3px] block h-1.5 w-1.5 rounded-sm ${
                              index !== 1 ? 'ml-[3px] bg-portfolio-lilac/80' : 'ml-[3px] bg-white/10'
                            }`}
                          />
                        </span>
                        <div className="flex-1 space-y-1.5">
                          <div
                            className="h-2 rounded-full bg-portfolio-lilac/10"
                            style={{ width: `${width}%` }}
                          />
                          <div className="h-2 w-1/2 rounded-full bg-white/8" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <span className="h-10 rounded-xl border border-white/10 bg-white/6" />
                    <span className="h-10 rounded-xl border border-portfolio-blue/18 bg-portfolio-blue/10" />
                    <span className="h-10 rounded-xl border border-white/10 bg-white/6" />
                  </div>

                  <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-portfolio-lilac/10 p-3">
                    <div className="grid grid-cols-4 gap-1.5">
                      <span className="h-8 rounded-lg bg-white/8" />
                      <span className="h-8 rounded-lg bg-white/6" />
                      <span className="h-8 rounded-lg bg-white/8" />
                      <span className="h-8 rounded-lg bg-white/6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0], x: [0, 3, 0], rotate: [-7, -5, -7] }}
              className="absolute bottom-[9%] left-[2%] z-10 h-28 w-32 rotate-[-7deg] sm:left-[4%] sm:h-36 sm:w-44 lg:bottom-[10%] lg:left-[8%] lg:h-40 lg:w-52"
              transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/12 bg-portfolio-card shadow-[0_18px_34px_rgba(0,0,0,0.2)] ">
                <div className="absolute inset-0 bg-portfolio-lilac/10" />
                <div className="absolute inset-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-12 rounded-full bg-white/18" />
                      <div className="h-2 w-8 rounded-full bg-white/10" />
                    </div>
                    <span className="h-8 w-8 rounded-2xl bg-portfolio-lilac/10" />
                  </div>

                  <div className="mt-4 rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-end gap-2">
                      <span className="h-8 w-3 rounded-full bg-white/16" />
                      <span className="h-12 w-3 rounded-full bg-portfolio-purple/36" />
                      <span className="h-6 w-3 rounded-full bg-white/12" />
                      <span className="h-10 w-3 rounded-full bg-portfolio-blue/36" />
                    </div>
                    <div className="mt-3 h-px bg-portfolio-lilac/10" />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="h-2 w-12 rounded-full bg-white/12" />
                      <span className="h-6 w-14 rounded-full border border-portfolio-lilac/18 bg-white/6" />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-portfolio-lilac/80 shadow-black/10" />
                    <span className="h-2 flex-1 rounded-full bg-portfolio-lilac/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
