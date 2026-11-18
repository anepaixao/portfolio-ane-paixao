import { motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuit,
  CheckCircle2,
  FolderKanban,
  ShoppingBag,
  Wallet,
} from 'lucide-react';
import type { ComponentType } from 'react';
import { projects, type Project } from '../../data/projects';
import { ProjectDetailsDialog } from '../projects/ProjectDetailsDialog';

const projectIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  'Macuco Entregas': ShoppingBag,
  FinanceirAne: Wallet,
  'IA na Robótica Educacional': BrainCircuit,
};

const projectAccents: Record<
  string,
  {
    subtitle: string;
  }
> = {
  'Macuco Entregas': {
    subtitle: 'Aplicativo de Delivery Regional',
  },
  FinanceirAne: {
    subtitle: 'Assistente Financeiro com IA Generativa',
  },
  'IA na Robótica Educacional': {
    subtitle: 'Pesquisa Aplicada em Inteligência Artificial e Educação STEM',
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
              Projetos em destaque
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-portfolio-lilac" />
          </div>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[...projects.filter((project) => project.title === 'FinanceirAne'), ...projects.filter((project) => project.title !== 'FinanceirAne')].map((project, index) => (
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
  const isFeatured = project.title === 'FinanceirAne';
  const accent = projectAccents[project.title] ?? {
    subtitle: 'Projeto de tecnologia e produto digital',
  };

  return (
    <motion.article
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-portfolio-card/95 p-5 shadow-xl shadow-black/10 transition duration-300 hover:border-portfolio-lilac/45 sm:p-6 ${isFeatured ? 'md:col-span-2' : ''} `}
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
        className="absolute inset-x-0 top-0 h-px bg-portfolio-lilac/60 opacity-70"
      />

      <div className={isFeatured ? 'grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-10' : ''}>
      <div className="min-w-0">
      <div className="flex flex-col items-start gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <motion.span
            className={`relative mt-1 grid size-12 shrink-0 place-items-center rounded-2xl border border-portfolio-lilac/25 bg-portfolio-lilac/10 text-portfolio-lilac shadow-lg shadow-black/10 `}
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
          className="max-w-full rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10 px-3 py-1 text-xs font-semibold text-portfolio-lilac"
        >
          {project.cover?.status ?? project.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-portfolio-muted sm:text-base">
        {project.cover?.description ?? project.description}
      </p>
      </div>

      <div className="min-w-0">
      <div className={isFeatured ? '' : 'mt-6'}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-portfolio-lilac">
          Contribuições
        </p>
        <ul className="mt-3 space-y-2.5">
          {(project.cover?.highlights ?? project.highlights.slice(0, 3)).map((highlight) => (
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
        {(project.cover?.tags ?? project.tags.slice(0, 4)).map((tag) => (
          <span
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-portfolio-muted transition duration-200 group-hover:border-portfolio-lilac/35"
            key={`${project.title}-${tag}`}
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
      </div>

      <ProjectDetailsDialog project={project} />
    </motion.article>
  );
}
