export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  status: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'Macuco Entregas',
    description:
      'Aplicativo mobile de delivery local voltado à modernização do comércio em Buerarema-BA, desenvolvido como MVP para conectar lojas, consumidores e pedidos em uma experiência simples e acessível.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Produto Digital', 'MVP', 'Liderança'],
    highlights: [
      'Liderança na organização do produto e equipe',
      'Definição de escopo para MVP',
      'Construção de experiência mobile',
      'Regras de negócio para comércio local',
      'Pensamento de produto e entendimento do comércio local',
    ],
    status: 'Em desenvolvimento',
  },
  {
    title: 'Financeirane',
    description:
      'Assistente financeira pessoal em desenvolvimento, criada para apoiar o registro, organização e acompanhamento de gastos, conectando automação, dados, experiência conversacional e educação financeira.',
    tags: ['Finanças', 'IA Aplicada', 'Automação', 'Dados', 'Produto Digital'],
    highlights: [
      'Organização de contas e categorias financeiras',
      'Planejamento de funcionalidades do agente',
      'Foco em usabilidade e clareza das informações',
      'Aplicação de produto digital a um problema real',
      'Estruturação inicial de solução com IA aplicada',
    ],
    status: 'Em desenvolvimento',
  },
  {
    title: 'IA na Robótica Educacional',
    description:
      'Projeto de iniciação científica sobre o uso de inteligência artificial na robótica educacional, investigando potencialidades, desafios e aplicações no contexto da educação STEM.',
    tags: [
      'IA Aplicada',
      'Pesquisa',
      'Educação STEM',
      'Robótica Educacional',
      'Comunicação Técnica',
    ],
    highlights: [
      'Pesquisa acadêmica',
      'Análise comparativa de ferramentas',
      'Escrita técnica',
      'Comunicação científica',
      'Aplicações de IA na educação',
    ],
    status: 'Pesquisa acadêmica',
  },
];
