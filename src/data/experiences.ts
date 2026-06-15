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
    role: 'Produto Digital e Desenvolvimento Mobile',
    organization: 'Blue Eggs',
    period: 'Out 2025 — atual',
    description:
      'Aplicativo de delivery local desenvolvido como MVP para conectar pequenos comércios, consumidores e pedidos em uma experiência simples, acessível e focada no contexto de Buerarema-BA.',
    highlights: [
      'Estruturação do produto e escopo do MVP',
      'Organização de regras de negócio',
      'Desenvolvimento mobile com React Native e Expo',
      'Comunicação com equipe técnica',
      'Foco em experiência do usuário e comércio local',
    ],
    type: 'Produto & Mobile',
  },
  {
    role: 'Desenvolvimento de Software e Produto',
    organization: 'Projeto pessoal',
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
