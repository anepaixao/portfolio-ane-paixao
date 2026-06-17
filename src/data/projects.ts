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
      'Desenvolvimento front-end/mobile',
      'Estruturação de telas, componentes e fluxos',
      'Definição de escopo e regras de negócio do MVP',
      'Liderança e organização da equipe',
    ],
    status: 'Em desenvolvimento',
  },
  {
    title: 'FinanceirAne',
    description:
      'Assistente financeira pessoal em desenvolvimento, criada para apoiar o registro, organização e acompanhamento de gastos, conectando automação, dados, experiência conversacional e educação financeira.',
    tags: ['Finanças', 'IA Aplicada', 'Automação', 'Dados', 'Produto Digital'],
    highlights: [
      'Organização de gastos e categorias financeiras',
      'Experiência conversacional',
      'Automação de registros e acompanhamento',
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
      'Pesquisa acadêmica em IA aplicada',
      'Análise comparativa de ferramentas',
      'Escrita e comunicação técnica',
      'Aplicações de IA na educação STEM',
    ],
    status: 'Pesquisa acadêmica',
  },
];
