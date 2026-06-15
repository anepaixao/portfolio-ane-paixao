export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Front-end',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Interfaces responsivas', 'Acessibilidade'],
  },
  {
    title: 'Produto e IA',
    items: ['Pesquisa', 'Prototipagem', 'Prompt engineering', 'Automacoes'],
  },
];
