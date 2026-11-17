export type SkillCategory = {
  category: string;
  description: string;
  skills: string[];
};


export const skills: SkillCategory[] = [
  { category: 'Desenvolvimento', description: 'Desenvolvimento de interfaces e soluções mobile/web.', skills: ['React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'APIs REST', 'HTML', 'CSS', 'Tailwind CSS', 'C'] },
  { category: 'Produto', description: 'Competências de produto complementares ao desenvolvimento.', skills: ['Discovery', 'MVP', 'User stories', 'Priorização', 'Regras de negócio', 'Visão de usuário', 'Comunicação com stakeholders'] },
  { category: 'IA & Pesquisa', description: 'Aplicação de IA, investigação e comunicação técnica.', skills: ['IA aplicada', 'Gemini API', 'Automação com IA', 'Revisão bibliográfica', 'Análise comparativa', 'Escrita técnica'] },
  { category: 'Ferramentas', description: 'Ferramentas de apoio ao desenvolvimento e colaboração.', skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Figma', 'Notion', 'Trello', 'Kanban', 'Oracle Cloud'] },
];
