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
    role: 'Cofundadora / Produto e Tecnologia',
    organization: 'Blue Eggs',
    period: '2025 — atual',
    description:
      'Atuação na criação e organização de soluções digitais, com foco em desenvolvimento de produto, liderança de equipe, estruturação de MVPs e comunicação entre áreas técnica e estratégica.',
    highlights: [
      'Estruturação do produto Macuco Entregas',
      'Organização de escopo para MVP',
      'Comunicação com equipe técnica',
      'Definição de regras de negócio',
      'Visão de produto e experiência do usuário',
    ],
    type: 'Produto & Tecnologia',
  },
  {
    role: 'Pesquisadora',
    organization: 'UESC',
    period: '2024 — atual',
    description:
      'Pesquisa sobre inteligência artificial aplicada à robótica educacional, com foco em educação STEM, análise de ferramentas, revisão bibliográfica e produção técnica.',
    highlights: [
      'Pesquisa em IA aplicada',
      'Análise comparativa de ferramentas',
      'Escrita e comunicação técnica',
      'Investigação sobre educação STEM',
      'Produção acadêmica',
    ],
    type: 'Pesquisa Acadêmica',
  },
  {
    role: 'Desenvolvimento e Produto Digital',
    organization: 'Projetos próprios e colaborativos',
    period: '2024 — atual',
    description:
      'Desenvolvimento e estruturação de projetos digitais envolvendo aplicativos, automação, e-commerce, discovery, validação de problemas e construção de soluções voltadas para usuários reais.',
    highlights: [
      'Desenvolvimento de soluções digitais',
      'Estudos de automação com IA',
      'Estruturação de e-commerce',
      'Validação de problemas reais',
      'Organização de documentação e processos',
    ],
    type: 'Projetos Digitais',
  },
];
