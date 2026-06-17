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
    role: 'CEO, Cofundadora, Produto e Front-end/Mobile',
    organization: 'Blue Eggs',
    period: 'Out 2025 — atual',
    description:
      'Atuação na liderança da Blue Eggs e na construção do Macuco Entregas, conectando definição de escopo, regras de negócio, experiência do usuário e desenvolvimento front-end/mobile em um MVP voltado ao comércio local de Buerarema-BA.',
    highlights: [
      'Estruturação do produto e escopo do MVP',
      'Organização de regras de negócio',
      'Desenvolvimento front-end/mobile com React Native, Expo e TypeScript',
      'Alinhamento entre equipe, produto e experiência do usuário',
      'Foco em soluções digitais para comércio local',
    ],
    type: 'Produto & Mobile',
  },
  {
    role: 'Projetos de Produto, IA e Desenvolvimento',
organization: 'Projetos independentes',
    period: 'Fev 2026 — atual',
    description:
      'Projeto de agente financeiro pessoal criado para organizar contas, acompanhar gastos, identificar possibilidades de economia e apoiar o planejamento financeiro de forma prática e personalizada.',
    highlights: [
      'Organização de contas e categorias financeiras',
      'Planejamento de funcionalidades do agente',
      'Foco em usabilidade e clareza das informações',
      'Aplicação de produto digital a um problema real',
      'Estruturação inicial de solução com IA aplicada',
    ],
    type: 'Software & IA Aplicada',
  },
  {
    role: 'Pesquisadora',
    organization: 'UESC',
    period: 'Fev 2026 — atual',
    description:
      'Projeto de iniciação científica sobre o uso de inteligência artificial na robótica educacional, investigando potencialidades, desafios e aplicações no contexto da educação STEM.',
    highlights: [
      'Pesquisa em IA aplicada',
      'Análise comparativa de ferramentas',
      'Revisão bibliográfica',
      'Escrita e comunicação técnica',
      'Investigação sobre educação STEM',
    ],
    type: 'Pesquisa Acadêmica',
  },
];
