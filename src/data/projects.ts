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
      'Aplicativo de delivery local focado em pequenos comércios de Buerarema-BA, desenvolvido como MVP para conectar lojas, consumidores e pedidos em uma experiência simples e acessível.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Produto Digital', 'MVP', 'Liderança'],
    highlights: [
      'Liderança na organização do produto e equipe',
      'Definição de escopo para MVP',
      'Construção de experiência mobile',
      'Regras de negócio para comércio local',
      'Pensamento de produto e validação',
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
  {
    title: 'Agente de IA para Clínica Odontológica',
    description:
      'Estudo e prototipação de uma solução baseada em IA para apoiar a reativação de pacientes e otimizar processos comerciais em clínicas odontológicas.',
    tags: ['IA Aplicada', 'Automação', 'Discovery', 'CRM', 'WhatsApp', 'Produto'],
    highlights: [
      'Mapeamento de problema real',
      'Análise de limitações técnicas',
      'Recorte de MVP',
      'Validação de dados e fluxos',
      'Pensamento estratégico de produto',
    ],
    status: 'Prototipação',
  },
  {
    title: 'Casaê Brasil',
    description:
      'Projeto de e-commerce no segmento de cama, mesa e banho, com foco em operação digital, identidade de marca, experiência de compra e estruturação comercial.',
    tags: [
      'E-commerce',
      'Produto Digital',
      'Branding',
      'Operação Digital',
      'Experiência do Usuário',
    ],
    highlights: [
      'Criação de loja online',
      'Definição de identidade visual',
      'Organização de catálogo',
      'Escrita de descrições de produto',
      'Estratégia de operação digital',
    ],
    status: 'Projeto próprio',
  },
];
