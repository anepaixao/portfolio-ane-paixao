import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="border-b border-white/10 bg-zinc-900/40 py-24" id="projetos">
      <div className="section-shell">
        <p className="section-kicker">Projetos</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Trabalhos em destaque
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className="flex min-h-72 flex-col justify-between rounded-lg border border-white/10 bg-zinc-950 p-6"
              initial={{ opacity: 0, y: 24 }}
              key={project.title}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              </div>
              <div className="mt-7">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="rounded border border-green-300/25 px-2.5 py-1 text-xs font-semibold text-green-200" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-300 hover:text-green-200" href={project.link}>
                  Ver detalhes <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
