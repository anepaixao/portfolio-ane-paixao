import { motion } from 'framer-motion';
import { Code2, Layers, Sparkles } from 'lucide-react';
import { skills } from '../data/skills';

const icons = [Code2, Layers, Sparkles];

export function Skills() {
  return (
    <section className="border-b border-white/10 bg-zinc-900/40 py-24" id="habilidades">
      <div className="section-shell">
        <p className="section-kicker">Habilidades</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Ferramentas e interesses
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <motion.div
                className="rounded-lg border border-white/10 bg-zinc-950 p-6"
                initial={{ opacity: 0, y: 24 }}
                key={group.title}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Icon className="text-green-300" size={28} />
                <h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="rounded bg-white/5 px-3 py-1.5 text-sm text-zinc-300" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
