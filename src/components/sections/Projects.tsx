import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  FolderKanban,
  ShoppingBag,
  Wallet,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { projects, type Project } from '../../data/projects';

const projectIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  'Macuco Entregas': ShoppingBag,
  FinanceirAne: Wallet,
  'IA na Robótica Educacional': BrainCircuit,
};

const statusStyles: Record<string, string> = {
  'Em desenvolvimento':
    'border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-lilac',
  'Pesquisa acadêmica':
    'border-portfolio-lilac/30 bg-portfolio-lilac/10 text-portfolio-lilac',
};

const projectAccents: Record<
  string,
  {
    glow: string;
    icon: string;
    line: string;
    subtitle: string;
  }
> = {
  'Macuco Entregas': {
    glow: 'group-hover:shadow-portfolio-purple/10',
    icon: 'from-portfolio-purple/24 via-portfolio-blue/12 to-portfolio-lilac/18',
    line: 'from-portfolio-purple via-portfolio-lilac to-transparent',
    subtitle: 'Produto mobile, delivery local e organização de MVP',
  },
  FinanceirAne: {
    glow: 'group-hover:shadow-portfolio-blue/10',
    icon: 'from-portfolio-blue/24 via-portfolio-purple/12 to-portfolio-lilac/18',
    line: 'from-portfolio-blue via-portfolio-lilac to-transparent',
    subtitle: 'Finanças pessoais, automação e experiência conversacional',
  },
  'IA na Robótica Educacional': {
    glow: 'group-hover:shadow-portfolio-lilac/10',
    icon: 'from-portfolio-lilac/22 via-portfolio-purple/14 to-portfolio-blue/14',
    line: 'from-portfolio-lilac via-portfolio-purple to-transparent',
    subtitle: 'Pesquisa acadêmica, IA aplicada e educação STEM',
  },
};

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="projects-title"
      className="section-block bg-portfolio-bg-alt"
      id="projetos"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
              <span className="inline-flex items-center gap-2">
                <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                  <FolderKanban aria-hidden="true" size={15} />
                </span>
                Projetos
              </span>
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
              id="projects-title"
            >
              Meus principais trabalhos
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
          </div>

          <p className="max-w-sm text-sm leading-6 text-portfolio-muted lg:text-right">
            Cases compactos que conectam produto, desenvolvimento e IA aplicada
            em diferentes contextos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              index={index}
              key={project.title}
              prefersReducedMotion={Boolean(prefersReducedMotion)}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectShowcaseCardProps = {
  index: number;
  prefersReducedMotion: boolean;
  project: Project;
};

function ProjectShowcaseCard({
  index,
  prefersReducedMotion,
  project,
}: ProjectShowcaseCardProps) {
  const ProjectIcon = projectIcons[project.title] ?? FolderKanban;
  const accent = projectAccents[project.title] ?? {
    glow: 'group-hover:shadow-portfolio-purple/10',
    icon: 'from-portfolio-purple/20 via-portfolio-blue/12 to-portfolio-lilac/16',
    line: 'from-portfolio-purple via-portfolio-blue to-transparent',
    subtitle: 'Projeto de tecnologia e produto digital',
  };
  const statusClass =
    statusStyles[project.status] ??
    'border-white/10 bg-white/[0.04] text-portfolio-muted';

  return (
    <motion.article
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-portfolio-card/95 p-5 shadow-xl shadow-black/10 transition duration-300 hover:border-portfolio-lilac/45 sm:p-6 ${accent.glow}`}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.98,
              y: 24,
            }
      }
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.06,
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.22 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
              y: 0,
            }
      }
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line} opacity-70`}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between xl:flex-col">
        <div className="flex min-w-0 items-start gap-4">
          <motion.span
            className={`relative mt-1 grid size-12 shrink-0 place-items-center rounded-2xl border border-portfolio-lilac/25 bg-gradient-to-br text-portfolio-lilac shadow-lg shadow-portfolio-purple/10 ${accent.icon}`}
            whileHover={
              prefersReducedMotion ? undefined : { rotate: -3, scale: 1.04 }
            }
          >
            <ProjectIcon aria-hidden="true" size={19} />
            <span
              aria-hidden="true"
              className="absolute inset-1 rounded-[0.9rem] border border-white/10"
            />
          </motion.span>

          <div className="min-w-0">
            <h3 className="text-xl font-black leading-tight text-portfolio-text sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-portfolio-lilac">
              {accent.subtitle}
            </p>
          </div>
        </div>

        <span
          className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusClass}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-portfolio-muted sm:text-base">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-portfolio-lilac">
          Contribuições
        </p>
        <ul className="mt-3 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              className="flex min-w-0 gap-2.5 text-sm leading-6 text-portfolio-muted"
              key={`${project.title}-${highlight}`}
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-1 shrink-0 text-portfolio-lilac"
                size={15}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-portfolio-muted transition duration-200 group-hover:border-portfolio-purple/35"
            key={`${project.title}-${tag}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10 px-4 py-2 text-sm font-bold text-portfolio-text transition duration-200 hover:border-portfolio-lilac/70 hover:bg-portfolio-lilac/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-lilac/70"
              href={link.href}
              key={`${project.title}-${link.href}`}
              rel="noreferrer"
              target="_blank"
            >
              <ArrowUpRight aria-hidden="true" size={16} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
