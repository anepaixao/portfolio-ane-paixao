import { motion } from 'framer-motion';

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
      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden h-px w-[38rem] -translate-x-1/2 rotate-[-12deg] bg-gradient-to-r from-transparent via-white/15 to-transparent sm:block" />
      <div className="pointer-events-none absolute bottom-28 right-1/4 hidden h-px w-80 rotate-[18deg] bg-gradient-to-r from-transparent via-portfolio-lilac/25 to-transparent sm:block" />

      <div className="section-shell grid min-h-[calc(100svh-64px)] grid-cols-1 items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex h-auto max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:w-fit sm:px-5 sm:py-2">
            <p className="flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.04em] text-portfolio-lilac sm:flex-nowrap sm:gap-x-2 sm:text-xs sm:tracking-[0.12em]">
              <span className="whitespace-nowrap">Desenvolvedora de Software</span>
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

          <p className="mt-6 max-w-xl text-lg font-medium leading-snug text-portfolio-text sm:mt-8 sm:max-w-2xl sm:text-[1.7rem]">
            Construindo produtos digitais com tecnologia, propósito e visão de
            usuário.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue px-6 text-sm font-bold text-white shadow-lg shadow-portfolio-purple/20 transition duration-200 hover:scale-[1.02] hover:shadow-portfolio-blue/20 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-bg sm:w-auto"
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
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-portfolio-purple/18 via-portfolio-blue/10 to-portfolio-lilac/15 blur-3xl sm:-inset-6" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-portfolio-lilac/10 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute right-4 top-6 h-16 w-16 rounded-full bg-portfolio-blue/12 blur-2xl sm:right-8 sm:top-8 sm:h-24 sm:w-24" />
          <div className="absolute bottom-8 left-6 h-20 w-20 rounded-full bg-portfolio-purple/12 blur-2xl sm:left-10 sm:bottom-10 sm:h-28 sm:w-28" />

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
              <div className="relative h-full w-full rounded-[2.35rem] border border-white/16 bg-[#120c26]/85 p-2 shadow-[0_30px_70px_rgba(6,4,18,0.55)] backdrop-blur-2xl">
                <div className="absolute inset-x-0 top-0 h-24 rounded-t-[2.35rem] bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/12" />
                <div className="relative h-full overflow-hidden rounded-[1.95rem] border border-white/10 bg-[linear-gradient(180deg,rgba(109,59,255,0.2),rgba(16,7,43,0.96)_26%,rgba(16,7,43,0.98)_100%)] px-3 py-4">
                  <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-portfolio-blue/16 blur-2xl" />
                  <div className="absolute left-2 top-10 h-20 w-20 rounded-full bg-portfolio-purple/14 blur-2xl" />

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

                  <div className="relative mt-4 overflow-hidden rounded-[1.45rem] border border-white/10 bg-gradient-to-br from-portfolio-purple/28 via-portfolio-blue/14 to-white/6 p-3">
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
                        <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-portfolio-purple/30 to-portfolio-blue/20" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 w-16 rounded-full bg-white/16" />
                          <div className="h-2 w-11 rounded-full bg-white/10" />
                        </div>
                        <span className="h-6 w-6 rounded-full border border-portfolio-lilac/25 bg-white/6" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.15rem] border border-portfolio-blue/20 bg-gradient-to-r from-portfolio-purple/24 to-portfolio-blue/24 px-3 py-3">
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
                    <span className="h-9 rounded-2xl border border-portfolio-lilac/20 bg-gradient-to-b from-portfolio-purple/24 to-portfolio-blue/18" />
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
              <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] border border-white/14 bg-white/[0.06] shadow-[0_24px_48px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-portfolio-purple/12" />
                <div className="absolute inset-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-14 rounded-full bg-white/18" />
                      <div className="h-2 w-10 rounded-full bg-white/10" />
                    </div>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(110,231,183,0.45)]" />
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
                            className="h-2 rounded-full bg-gradient-to-r from-white/16 via-white/8 to-transparent"
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

                  <div className="mt-4 rounded-[1.15rem] border border-white/10 bg-gradient-to-r from-portfolio-purple/16 to-portfolio-blue/12 p-3">
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
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.055] shadow-[0_18px_34px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/12 via-transparent to-portfolio-lilac/10" />
                <div className="absolute inset-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-12 rounded-full bg-white/18" />
                      <div className="h-2 w-8 rounded-full bg-white/10" />
                    </div>
                    <span className="h-8 w-8 rounded-2xl bg-gradient-to-br from-portfolio-purple/26 to-portfolio-blue/22" />
                  </div>

                  <div className="mt-4 rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-end gap-2">
                      <span className="h-8 w-3 rounded-full bg-white/16" />
                      <span className="h-12 w-3 rounded-full bg-portfolio-purple/36" />
                      <span className="h-6 w-3 rounded-full bg-white/12" />
                      <span className="h-10 w-3 rounded-full bg-portfolio-blue/36" />
                    </div>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    <div className="mt-3 flex items-center justify-between">
                      <span className="h-2 w-12 rounded-full bg-white/12" />
                      <span className="h-6 w-14 rounded-full border border-portfolio-lilac/18 bg-white/6" />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-portfolio-lilac/80 shadow-[0_0_10px_rgba(167,139,250,0.6)]" />
                    <span className="h-2 flex-1 rounded-full bg-gradient-to-r from-portfolio-purple/24 via-portfolio-blue/22 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: [0.35, 0.58, 0.35] }}
              className="absolute left-[18%] top-[14%] h-4 w-4 rounded-full bg-portfolio-lilac/85 shadow-[0_0_20px_rgba(167,139,250,0.8)] sm:h-5 sm:w-5"
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ opacity: [0.24, 0.52, 0.24] }}
              className="absolute right-[18%] top-[26%] h-3.5 w-3.5 rounded-full bg-portfolio-blue/85 shadow-[0_0_18px_rgba(59,130,246,0.75)] sm:h-4 sm:w-4"
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={{ opacity: [0.2, 0.42, 0.2] }}
              className="absolute left-[34%] bottom-[18%] h-3.5 w-3.5 rounded-full bg-portfolio-purple/80 shadow-[0_0_18px_rgba(109,59,255,0.75)] sm:h-4 sm:w-4"
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
