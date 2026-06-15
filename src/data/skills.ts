export type SkillCategory = {
  category: string;
  description: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    category: 'Desenvolvimento Front-end/Mobile',
    description:
      'Criação de interfaces e experiências digitais responsivas, com foco em usabilidade, organização de componentes e desenvolvimento mobile.',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Notion', 'Figma', 'Trello', 'Kanban', 'Documentação técnica'],
  },
  {
    category: 'Desenvolvimento de Software',
    description:
      'Base em lógica, estruturação de projetos, programação e construção de soluções digitais com boas práticas.',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Node.js',
      'C',
      'APIs REST',
      'Lógica de programação',
      'Organização de projetos',
    ],
  },
  {
    category: 'Produto Digital',
    description:
      'Atuação na organização de MVPs, entendimento de problemas reais, priorização e construção de soluções com foco no usuário.',
    skills: [
      'Entendimento de problemas',
      'Discovery inicial',
      'MVP',
      'User stories',
      'Priorização',
      'Regras de negócio',
      'Visão de usuário',
      'Comunicação com stakeholders',
    ],
  },
  {
    category: 'IA Aplicada e Pesquisa',
    description:
      'Experiência acadêmica e prática com investigação, análise e aplicação de inteligência artificial em contextos reais.',
    skills: [
      'IA aplicada',
      'Pesquisa acadêmica',
      'Análise comparativa',
      'Robótica educacional',
      'Educação STEM',
      'Automação com IA',
      'Escrita técnica',
    ],
  },
  {
    category: 'Ferramentas e Organização',
    description:
      'Ferramentas usadas para desenvolvimento, documentação, organização de projetos e colaboração.',
    skills: ['VS Code', 'Linux', 'Notion', 'Figma', 'Trello', 'Kanban', 'Documentação técnica'],
  },
];
