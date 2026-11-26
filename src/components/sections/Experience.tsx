import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { GraduationCap, Milestone } from 'lucide-react';
import { useRef } from 'react';
import { experiences } from '../../data/experiences';

type ExperienceTimelineItemProps = {
  experience: (typeof experiences)[number];
  index: number;
  prefersReducedMotion: boolean;
  progress: MotionValue<number>;
};

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 74%', 'end 48%'],
  });
  const lineScale = prefersReducedMotion ? 1 : scrollYProgress;

  return (
    <section
      aria-labelledby="experiences-title"
      className="section-block bg-portfolio-bg"
      id="experiencias"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
            <span className="inline-flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full border border-portfolio-lilac/30 bg-portfolio-lilac/10">
                <GraduationCap aria-hidden="true" size={15} />
              </span>
              Trajetória
            </span>
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
            id="experiences-title"
          >
            Minha Trajetória
          </h2>
          <p className="mt-5 text-base leading-7 text-portfolio-muted">Um pouco do meu caminho na computação, entre aprendizados, pesquisa e novas experiências.</p>
          <div className="mt-6 h-1 w-20 rounded-full bg-portfolio-lilac" />
        </div>

        <div
          className="relative mt-12 space-y-6 pl-12 sm:pl-14 lg:space-y-0 lg:pl-0"
          ref={timelineRef}
        >
          <div
            aria-hidden="true"
            className="absolute z-0 bottom-6 left-5 top-3 w-px rounded-full bg-white/10 sm:left-6 lg:bottom-8 lg:top-3"
          />
          <motion.div
            aria-hidden="true"
            className="absolute z-0 bottom-6 left-5 top-3 w-px origin-top rounded-full bg-portfolio-lilac shadow-black/10 sm:left-6 lg:bottom-8 lg:top-3"
            style={{ scaleY: lineScale }}
          />

          {experiences.map((experience, index) => (
            <ExperienceTimelineItem
              experience={experience}
              index={index}
              key={`${experience.institution}-${experience.title}`}
              prefersReducedMotion={Boolean(prefersReducedMotion)}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineItem({
  experience,
  index,
  prefersReducedMotion,
  progress,
}: ExperienceTimelineItemProps) {
  const stepProgress =
    experiences.length === 1 ? 1 : index / (experiences.length - 1);
  const inputRange = [
    index === 0 ? -0.01 : stepProgress - 0.14,
    stepProgress,
    index === experiences.length - 1 ? 1.01 : stepProgress + 0.14,
  ];
  const nodeScale = useTransform(progress, inputRange, [1, 1.1, 1.04]);
  const nodeBorderColor = useTransform(progress, inputRange, [
    'rgba(167,139,250,0.3)',
    'rgba(167,139,250,0.9)',
    'rgba(167,139,250,0.65)',
  ]);
  const nodeBackground = useTransform(progress, inputRange, [
    'rgba(16,7,43,1)',
    '#3b2a63',
    '#2a1d47',
  ]);
  const nodeBoxShadow = useTransform(progress, inputRange, [
    '0 8px 14px rgba(0,0,0,0.12)',
    '0 0 26px rgba(0,0,0,0.32)',
    '0 10px 20px rgba(0,0,0,0.14)',
  ]);
  const nodeColor = useTransform(progress, inputRange, [
    'rgb(167,139,250)',
    'rgb(248,250,252)',
    'rgb(196,181,253)',
  ]);
  const cardY = useTransform(progress, inputRange, [0, -3, 0]);
  const cardBorderColor = useTransform(progress, inputRange, [
    'rgba(255,255,255,0.1)',
    'rgba(167,139,250,0.58)',
    'rgba(167,139,250,0.24)',
  ]);
  const cardBackground = useTransform(progress, inputRange, [
    'rgba(27,18,58,1)',
    'rgba(35,24,77,0.96)',
    'rgba(29,20,63,0.98)',
  ]);
  const cardBoxShadow = useTransform(progress, inputRange, [
    '0 10px 18px rgba(0,0,0,0.12)',
    '0 22px 42px rgba(0,0,0,0.18)',
    '0 14px 28px rgba(0,0,0,0.1)',
  ]);
  const accentOpacity = useTransform(progress, inputRange, [0, 1, 0.48]);

  return (
    <motion.article
      className="relative lg:grid lg:grid-cols-[3rem_1fr] lg:gap-6 lg:pb-8"
      initial={prefersReducedMotion ? false : { opacity: 0, x: 12, y: 10 }}
      key={`${experience.institution}-${experience.title}`}
      transition={{ delay: prefersReducedMotion ? 0 : index * 0.08, duration: prefersReducedMotion ? 0 : 0.45 }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
    >
      <div className="absolute z-10 -left-[46px] top-3 flex justify-center sm:-left-[50px] lg:static lg:flex">
        <motion.span
          className="relative z-10 grid size-9 place-items-center rounded-full border shadow-lg lg:mt-3"
          style={{
            backgroundColor: prefersReducedMotion
              ? '#2a1d47'
              : nodeBackground,
            borderColor: prefersReducedMotion
              ? 'rgba(167,139,250,0.65)'
              : nodeBorderColor,
            boxShadow: prefersReducedMotion
              ? '0 10px 20px rgba(0,0,0,0.14)'
              : nodeBoxShadow,
            color: prefersReducedMotion ? 'rgb(196,181,253)' : nodeColor,
            scale: prefersReducedMotion ? 1 : nodeScale,
          }}
        >
          <Milestone aria-hidden="true" size={16} strokeWidth={2.25} />
        </motion.span>
      </div>

      <motion.div
        className="relative z-10 overflow-hidden rounded-3xl border bg-portfolio-card p-5 shadow-xl shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-portfolio-lilac/60 hover:shadow-lg hover:shadow-black/10 sm:p-7"
        style={{
          backgroundColor: prefersReducedMotion
            ? 'rgba(29,20,63,0.98)'
            : cardBackground,
          borderColor: prefersReducedMotion
            ? 'rgba(167,139,250,0.24)'
            : cardBorderColor,
          boxShadow: prefersReducedMotion
            ? '0 14px 28px rgba(0,0,0,0.1)'
            : cardBoxShadow,
          y: prefersReducedMotion ? 0 : cardY,
        }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute z-0 bottom-6 left-0 top-6 w-1 rounded-r-full bg-portfolio-lilac/10"
          style={{ opacity: prefersReducedMotion ? 0.48 : accentOpacity }}
        />
        <p className="text-sm font-semibold text-portfolio-lilac">{experience.period}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug text-portfolio-text sm:text-2xl">
          {experience.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-portfolio-muted">{experience.institution}</p>
        <p className="mt-5 leading-7 text-portfolio-muted">{experience.description}</p>
        {experience.note && (
          <p className="mt-4 border-l-2 border-portfolio-lilac/30 pl-3 text-sm leading-6 text-portfolio-muted">
            {experience.note}
          </p>
        )}
        <ul className="mt-5 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <li key={tag} className="max-w-full break-words rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs leading-5 text-portfolio-muted">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.article>
  );
}
