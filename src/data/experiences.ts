export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  type: string;
};

export const experiences: Experience[] = [
  {
    role: 'Cofundadora, Produto e Desenvolvimento Mobile',
    organization: 'Blue Eggs',
    period: 'Out 2025 — atual',
    description:
      'Atuação na liderança da Blue Eggs e na construção do Macuco Entregas, conectando definição de escopo, regras de negócio, experiência do usuário e desenvolvimento front-end/mobile.',
    highlights: [
      'Organização do escopo do MVP',
      'Documentação de regras de negócio',
      'Desenvolvimento mobile com React Native e Expo',
      'Alinhamento entre equipe, produto e usuário',
    ],
    type: 'Produto, Liderança & Mobile',
  },
  {
    role: 'Projetos de Produto, IA e Desenvolvimento',
    organization: 'Projetos próprios',
    period: '2024 — atual',
    description:
      'Estruturação de projetos digitais próprios, conectando tecnologia, automação, dados e produto para resolver problemas práticos do dia a dia.',
    highlights: [
      'Planejamento de funcionalidades do agente',
      'Organização de dados e fluxos',
      'IA aplicada a problemas reais',
      'Documentação e evolução contínua',
    ],
    type: 'Produto, IA & Software',
  },
  {
    role: 'Pesquisadora em IA Aplicada',
    organization: 'UESC',
    period: '2024 — atual',
    description:
      'Pesquisa sobre inteligência artificial aplicada à robótica educacional e educação STEM, com foco em análise de ferramentas, revisão bibliográfica e produção técnica.',
    highlights: [
      'Pesquisa em IA aplicada',
      'Análise comparativa de ferramentas',
      'Revisão bibliográfica',
      'Escrita e comunicação técnica',
    ],
    type: 'Pesquisa Acadêmica',
  },
];
