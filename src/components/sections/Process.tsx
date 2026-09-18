import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import {
  Blocks,
  Code2,
  Layout,
  Orbit,
  Search,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRef } from 'react';

const steps: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: 'Problema',
    description: 'Entendo dores, contexto e necessidades dos usuários.',
    Icon: Search,
  },
  {
    title: 'Produto',
    description: 'Organizo escopo, MVP, regras de negócio e prioridades.',
    Icon: Blocks,
  },
  {
    title: 'Interface',
    description: 'Transformo fluxos em telas, componentes e experiências mobile/web.',
    Icon: Layout,
  },
  {
    title: 'Tecnologia',
    description: 'Desenvolvo soluções com React, React Native, TypeScript e APIs.',
    Icon: Code2,
  },
  {
    title: 'Aprendizado',
    description: 'Documento decisões, analiso aprendizados e evoluo a solução.',
    Icon: TrendingUp,
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 78%', 'end 42%'],
  });
  const progressScale = prefersReducedMotion ? 1 : scrollYProgress;

  return (
    <section
      aria-labelledby="process-title"
      className="section-block overflow-hidden bg-portfolio-bg-alt"
      id="processo"
      ref={sectionRef}
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            <span className="grid size-6 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-portfolio-lilac">
              <Orbit aria-hidden="true" size={13} />
            </span>
            Processo
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="process-title"
          >
            Ecossistemas digitais
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue" />
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-portfolio-card/75 p-6 shadow-2xl shadow-portfolio-purple/10 backdrop-blur-xl sm:p-8 lg:p-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-lilac/70 to-transparent" />
          <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-portfolio-purple/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 right-0 h-44 w-44 rounded-full bg-portfolio-blue/12 blur-3xl" />

          <DesktopTimeline
            prefersReducedMotion={Boolean(prefersReducedMotion)}
            progress={scrollYProgress}
            progressScale={progressScale}
          />

          <MobileTimeline
            prefersReducedMotion={Boolean(prefersReducedMotion)}
            progress={scrollYProgress}
            progressScale={progressScale}
          />
        </motion.div>
      </div>
    </section>
  );
}

type TimelineProps = {
  prefersReducedMotion: boolean;
  progress: MotionValue<number>;
  progressScale: MotionValue<number> | number;
};

function DesktopTimeline({
  prefersReducedMotion,
  progress,
  progressScale,
}: TimelineProps) {
  return (
    <div className="hidden lg:block">
      <div className="relative px-2 pt-10">
        <div className="absolute left-12 right-12 top-16 h-0.5 rounded-full bg-white/10" />
        <motion.div
          aria-hidden="true"
          className="absolute left-12 right-12 top-16 h-0.5 origin-left rounded-full bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-lilac shadow-[0_0_16px_rgba(109,59,255,0.22)]"
          style={{ scaleX: progressScale }}
        />

        <div className="relative z-10 grid grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <ProcessStep
              index={index}
              key={step.title}
              orientation="desktop"
              prefersReducedMotion={prefersReducedMotion}
              progress={progress}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileTimeline({
  prefersReducedMotion,
  progress,
  progressScale,
}: TimelineProps) {
  return (
    <div className="lg:hidden">
      <div className="relative pl-12 sm:pl-14">
        <div className="absolute bottom-5 left-5 top-5 w-0.5 rounded-full bg-white/10" />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-5 left-5 top-5 w-0.5 origin-top rounded-full bg-gradient-to-b from-portfolio-purple via-portfolio-blue to-portfolio-lilac shadow-[0_0_16px_rgba(109,59,255,0.2)]"
          style={{ scaleY: progressScale }}
        />

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <ProcessStep
              index={index}
              key={step.title}
              orientation="mobile"
              prefersReducedMotion={prefersReducedMotion}
              progress={progress}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ProcessStepProps = {
  index: number;
  orientation: 'desktop' | 'mobile';
  prefersReducedMotion: boolean;
  progress: MotionValue<number>;
  step: (typeof steps)[number];
};

function ProcessStep({
  index,
  orientation,
  prefersReducedMotion,
  progress,
  step,
}: ProcessStepProps) {
  const { title, description, Icon } = step;
  const stepProgress = index / (steps.length - 1);
  const inputRange = [
    index === 0 ? -0.01 : stepProgress - 0.12,
    stepProgress,
    index === steps.length - 1 ? 1.01 : stepProgress + 0.12,
  ];
  const nodeScale = useTransform(progress, inputRange, [1, 1.07, 1.02]);
  const nodeOpacity = useTransform(progress, inputRange, [0.62, 1, 0.82]);
  const cardY = useTransform(progress, inputRange, [0, -5, 0]);
  const cardOpacity = useTransform(progress, inputRange, [0.72, 1, 0.86]);

  if (orientation === 'desktop') {
    return (
      <motion.div
        className="group text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        transition={{
          delay: prefersReducedMotion ? 0 : index * 0.07,
          duration: prefersReducedMotion ? 0 : 0.45,
        }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <TimelineNode
          Icon={Icon}
          opacity={prefersReducedMotion ? 1 : nodeOpacity}
          scale={prefersReducedMotion ? 1 : nodeScale}
        />
        <TimelineCard
          description={description}
          opacity={prefersReducedMotion ? 1 : cardOpacity}
          prefersReducedMotion={prefersReducedMotion}
          title={title}
          y={prefersReducedMotion ? 0 : cardY}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.06,
        duration: prefersReducedMotion ? 0 : 0.42,
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
    >
      <div className="absolute -left-12 top-4 sm:-left-14">
        <TimelineNode
          Icon={Icon}
          opacity={prefersReducedMotion ? 1 : nodeOpacity}
          scale={prefersReducedMotion ? 1 : nodeScale}
        />
      </div>
      <TimelineCard
        description={description}
        opacity={prefersReducedMotion ? 1 : cardOpacity}
        prefersReducedMotion={prefersReducedMotion}
        title={title}
        y={prefersReducedMotion ? 0 : cardY}
      />
    </motion.div>
  );
}

type TimelineNodeProps = {
  Icon: LucideIcon;
  opacity: MotionValue<number> | number;
  scale: MotionValue<number> | number;
};

function TimelineNode({ Icon, opacity, scale }: TimelineNodeProps) {
  return (
    <motion.div
      className="mx-auto grid size-11 place-items-center rounded-full border border-white/12 bg-portfolio-bg text-portfolio-lilac shadow-lg shadow-portfolio-purple/10 transition duration-200 group-hover:border-portfolio-lilac/45"
      style={{ opacity, scale }}
    >
      <Icon aria-hidden="true" size={18} />
    </motion.div>
  );
}

type TimelineCardProps = {
  description: string;
  opacity: MotionValue<number> | number;
  prefersReducedMotion: boolean;
  title: string;
  y: MotionValue<number> | number;
};

function TimelineCard({
  description,
  opacity,
  prefersReducedMotion,
  title,
  y,
}: TimelineCardProps) {
  return (
    <motion.div
      className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition duration-200 hover:border-portfolio-lilac/35 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-portfolio-purple/10 lg:mt-6"
      style={{ opacity, y }}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
    >
      <span
        aria-hidden="true"
        className="mb-3 inline-flex size-2 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue"
      />
      <p className="text-sm font-black text-portfolio-text">{title}</p>
      <p className="mt-2 text-sm leading-6 text-portfolio-muted">
        {description}
      </p>
    </motion.div>
  );
}
