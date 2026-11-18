import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Blocks,
  Code2,
  Layout,
  Orbit,
  Search,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

const STEP_DURATION_MS = 900;
const FINAL_PAUSE_MS = 1350;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { amount: 0.32 });
  const [activeStep, setActiveStep] = useState(0);
  const completedStep = prefersReducedMotion ? steps.length : activeStep;
  const progressScale = Math.min(completedStep / (steps.length - 1), 1);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveStep(steps.length);
      return undefined;
    }

    if (!isInView) {
      setActiveStep(0);
      return undefined;
    }

    const timeout = window.setTimeout(
      () => {
        setActiveStep((current) =>
          current >= steps.length - 1 ? 0 : current + 1,
        );
      },
      activeStep >= steps.length - 1 ? FINAL_PAUSE_MS + STEP_DURATION_MS : STEP_DURATION_MS,
    );

    return () => window.clearTimeout(timeout);
  }, [activeStep, isInView, prefersReducedMotion]);

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
          <div className="mt-6 h-1 w-20 rounded-full bg-portfolio-lilac" />
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-portfolio-card/75 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8 lg:p-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-portfolio-lilac/10" />

          <DesktopTimeline
            activeStep={completedStep}
            prefersReducedMotion={Boolean(prefersReducedMotion)}
            progressScale={progressScale}
          />

          <MobileTimeline
            activeStep={completedStep}
            prefersReducedMotion={Boolean(prefersReducedMotion)}
            progressScale={progressScale}
          />
        </motion.div>
      </div>
    </section>
  );
}

type TimelineProps = {
  activeStep: number;
  prefersReducedMotion: boolean;
  progressScale: number;
};

function DesktopTimeline({
  activeStep,
  prefersReducedMotion,
  progressScale,
}: TimelineProps) {
  return (
    <div className="hidden lg:block">
      <div className="relative px-2 pt-10">
        <div className="absolute z-0 left-[calc(10%+6px)] right-[calc(10%+6px)] top-[62px] h-0.5 rounded-full bg-white/10" />
        <motion.div
          aria-hidden="true"
          animate={{ scaleX: progressScale }}
          className="absolute z-0 left-[calc(10%+6px)] right-[calc(10%+6px)] top-[62px] h-0.5 origin-left rounded-full bg-portfolio-lilac shadow-black/10"
          transition={{ duration: prefersReducedMotion || activeStep === 0 ? 0 : 0.38, ease: 'easeOut' }}
        />

        <div className="relative z-10 grid grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <ProcessStep
              activeStep={activeStep}
              index={index}
              key={step.title}
              orientation="desktop"
              prefersReducedMotion={prefersReducedMotion}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileTimeline({
  activeStep,
  prefersReducedMotion,
  progressScale,
}: TimelineProps) {
  return (
    <div className="lg:hidden">
      <div className="relative pl-12 sm:pl-14">
        <div className="absolute bottom-5 left-[22px] top-5 w-0.5 rounded-full bg-white/10" />
        <motion.div
          aria-hidden="true"
          animate={{ scaleY: progressScale }}
          className="absolute bottom-5 left-[22px] top-5 w-0.5 origin-top rounded-full bg-portfolio-lilac shadow-black/10"
          transition={{ duration: prefersReducedMotion || activeStep === 0 ? 0 : 0.38, ease: 'easeOut' }}
        />

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <ProcessStep
              activeStep={activeStep}
              index={index}
              key={step.title}
              orientation="mobile"
              prefersReducedMotion={prefersReducedMotion}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ProcessStepProps = {
  activeStep: number;
  index: number;
  orientation: 'desktop' | 'mobile';
  prefersReducedMotion: boolean;
  step: (typeof steps)[number];
};

function ProcessStep({
  activeStep,
  index,
  orientation,
  prefersReducedMotion,
  step,
}: ProcessStepProps) {
  const { title, description, Icon } = step;
  const isReached = activeStep >= index;
  const isCurrent = activeStep === index;
  const isComplete = activeStep >= steps.length;

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
          isComplete={isComplete}
          isCurrent={isCurrent}
          isReached={isReached}
          prefersReducedMotion={prefersReducedMotion}
        />
        <TimelineCard
          description={description}
          isComplete={isComplete}
          isCurrent={isCurrent}
          isReached={isReached}
          prefersReducedMotion={prefersReducedMotion}
          title={title}
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
      <div className="absolute z-10 -left-12 top-4 sm:-left-14">
        <TimelineNode
          Icon={Icon}
          isComplete={isComplete}
          isCurrent={isCurrent}
          isReached={isReached}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <TimelineCard
        description={description}
        isComplete={isComplete}
        isCurrent={isCurrent}
        isReached={isReached}
        prefersReducedMotion={prefersReducedMotion}
        title={title}
      />
    </motion.div>
  );
}

type TimelineStateProps = {
  isComplete: boolean;
  isCurrent: boolean;
  isReached: boolean;
  prefersReducedMotion: boolean;
};

type TimelineNodeProps = TimelineStateProps & {
  Icon: LucideIcon;
};

function TimelineNode({
  Icon,
  isComplete,
  isCurrent,
  isReached,
  prefersReducedMotion,
}: TimelineNodeProps) {
  const isActive = isCurrent && !isComplete;

  return (
    <motion.div
      animate={{
        backgroundColor: isActive ? '#3b2a63' : isReached ? '#2a1d47' : '#1b123a',
        borderColor: isReached
          ? 'rgba(167,139,250,0.5)'
          : 'rgba(255,255,255,0.12)',
        boxShadow: isActive
          ? '0 0 24px rgba(0,0,0,0.26)'
          : isReached
            ? '0 10px 20px -3px rgba(0,0,0,0.14)'
            : '0 10px 15px -3px rgba(0,0,0,0.08)',
        color: isActive ? '#f8fafc' : isReached ? '#c4b5fd' : '#a78bfa',
        scale: isActive ? 1.08 : isReached ? 1.03 : 1,
      }}
      className="relative z-10 mx-auto grid size-11 place-items-center rounded-full border bg-portfolio-bg text-portfolio-lilac shadow-lg transition duration-200 group-hover:border-portfolio-lilac/45"
      transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
    >
      <Icon aria-hidden="true" size={18} />
    </motion.div>
  );
}

type TimelineCardProps = TimelineStateProps & {
  description: string;
  title: string;
};

function TimelineCard({
  description,
  isComplete,
  isCurrent,
  isReached,
  prefersReducedMotion,
  title,
}: TimelineCardProps) {
  const isActive = isCurrent && !isComplete;

  return (
    <motion.div
      animate={{
        borderColor: isReached
          ? (isActive ? 'rgba(167,139,250,0.65)' : 'rgba(167,139,250,0.25)')
          : 'rgba(255,255,255,0.1)',
        boxShadow: isActive
          ? '0 14px 28px rgba(0,0,0,0.14)'
          : isReached
            ? '0 8px 18px rgba(0,0,0,0.06)'
            : '0 0 0 rgba(0,0,0,0)',
        backgroundColor: isActive ? '#251a43' : 'rgba(255,255,255,0.04)',
        y: isActive ? -4 : isReached ? 0 : 3,
      }}
      className="mt-5 rounded-3xl border bg-white/[0.04] p-4 text-left transition duration-200 hover:border-portfolio-lilac/35 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-black/10 lg:mt-6"
      transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: 'easeOut' }}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
    >
      <span
        aria-hidden="true"
        className="mb-3 inline-flex size-2 rounded-full bg-portfolio-lilac/10"
      />
      <p className="text-sm font-black text-portfolio-text">{title}</p>
      <p className="mt-2 text-sm leading-6 text-portfolio-muted">
        {description}
      </p>
    </motion.div>
  );
}
