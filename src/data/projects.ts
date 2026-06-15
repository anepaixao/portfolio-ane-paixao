export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: 'Portfolio Ane Paixao',
    description:
      'Experiencia web responsiva para apresentar projetos, habilidades e trajetoria profissional.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: '#inicio',
  },
  {
    title: 'App de Estudos',
    description:
      'Interface mobile-first para organizar metas, trilhas de aprendizado e progresso semanal.',
    stack: ['React Native', 'Expo', 'UI Design'],
    link: '#contato',
  },
  {
    title: 'Dashboard de Produto',
    description:
      'Prototipo de painel para acompanhar indicadores, feedbacks e oportunidades de melhoria.',
    stack: ['TypeScript', 'Produto Digital', 'IA Aplicada'],
    link: '#contato',
  },
];
