import { motion } from 'framer-motion';
import { ArrowDown, Code2, ExternalLink, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,#14532d,transparent_34%),linear-gradient(135deg,#09090b_0%,#18181b_48%,#052e16_100%)]"
      id="inicio"
    >
      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-kicker">Front-end / Mobile / Produto Digital</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Ane Paixao
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Desenvolvedora em formacao criando interfaces claras, responsivas e
            humanas, com interesse em experiencias digitais apoiadas por IA.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex h-11 items-center gap-2 rounded bg-green-400 px-5 text-sm font-bold text-zinc-950 transition hover:bg-green-300"
              href="#projetos"
            >
              Ver projetos <ArrowDown size={18} />
            </a>
            <a
              className="inline-flex h-11 items-center gap-2 rounded border border-white/15 px-5 text-sm font-semibold text-zinc-100 transition hover:border-green-300 hover:text-green-300"
              href="#contato"
            >
              Falar comigo <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="aspect-[4/5] rounded-md bg-[linear-gradient(160deg,#22c55e_0%,#0f172a_45%,#020617_100%)] p-5">
            <div className="flex h-full flex-col justify-between rounded border border-white/15 bg-zinc-950/70 p-5">
              <div>
                <p className="text-sm font-semibold text-green-300">Agora</p>
                <p className="mt-3 text-2xl font-bold text-white">
                  Construindo repertorio em tecnologia, design e produto.
                </p>
              </div>
              <div className="grid gap-3">
                <a className="inline-flex items-center gap-3 text-zinc-300 hover:text-green-300" href="https://github.com/" rel="noreferrer" target="_blank">
                  <Code2 size={20} /> GitHub
                </a>
                <a className="inline-flex items-center gap-3 text-zinc-300 hover:text-green-300" href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                  <ExternalLink size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
