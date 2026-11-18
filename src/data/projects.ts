export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  status: string;
  statusDetail?: string;
  cover?: {
    description: string;
    highlights?: string[];
    tags: string[];
    status?: string;
  };
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    "title": "FinanceirAne",
    "cover": {
      "description": "Assistente financeiro que permite registrar transações e consultar informações por linguagem natural, integrando Telegram, Gemini e Python.",
      "highlights": [
        "Linguagem natural convertida em dados financeiros estruturados",
        "Registro e consultas financeiras automatizadas",
        "Aplicação funcional implantada na Oracle Cloud"
      ],
      "tags": [
        "Python",
        "Gemini API",
        "Telegram",
        "Oracle Cloud"
      ],
      "status": "Funcional e em evolução"
    },
    "description": "Assistente financeiro pessoal desenvolvido em Python, com integração à Gemini API e ao Telegram. Permite registrar transações e consultar informações financeiras por meio de mensagens em linguagem natural, automatizando o acompanhamento de receitas e despesas.",
    "highlights": [
      "Gemini API para interpretar mensagens e extrair dados financeiros estruturados.",
      "Registro de receitas, despesas e compras parceladas no Google Sheets.",
      "Consultas por período, categoria e método de pagamento.",
      "Backend Python com validação, tratamento de falhas e testes automatizados.",
      "Deploy na Oracle Cloud com integração contínua via GitHub Actions."
    ],
    "tags": [
      "Python",
      "Gemini API",
      "Telegram Bot API",
      "Google Sheets API",
      "Oracle Cloud",
      "Pytest",
      "GitHub Actions"
    ],
    "status": "Em desenvolvimento — aplicação funcional e em uso.",
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/anepaixao/financeirane-ai-agent"
      }
    ]
  },
  {
    "title": "IA na Robótica Educacional",
    "cover": {
      "description": "Pesquisa aplicada sobre o uso de IA generativa e LLMs em ambientes de aprendizagem de Matemática e Robótica Educacional.",
      "highlights": [
        "IA generativa aplicada à educação",
        "Desenvolvimento do HackMath em Python",
        "Arquitetura e controle de intervenções pedagógicas"
      ],
      "tags": [
        "Python",
        "IA Generativa",
        "Pytest",
        "Pesquisa"
      ]
    },
    "description": "Projeto de iniciação científica desenvolvido na Universidade Estadual de Santa Cruz (UESC), com foco na integração de inteligência artificial generativa e modelos de linguagem (LLMs) a ambientes de aprendizagem de Matemática e Robótica Educacional.",
    "highlights": [
      "Pesquisa bibliográfica e análise de aplicações de IA em ambientes educacionais.",
      "Desenvolvimento de componentes do HackMath em Python, incluindo lógica de negócio, gerenciamento de estados e validação de dados.",
      "Modelagem da arquitetura do sistema e especificação de mecanismos para controle de intervenções pedagógicas com IA.",
      "Implementação de testes automatizados com Pytest, com 23 testes aprovados no primeiro incremento.",
      "Documentação técnica, produção de relatórios e apresentação de resultados no Seminário de Iniciação Científica da UESC."
    ],
    "tags": [
      "Python",
      "Pytest",
      "Pydantic",
      "Git",
      "GitHub"
    ],
    "status": "Pesquisa acadêmica em desenvolvimento"
  },
  {
    "title": "Macuco Entregas",
    "cover": {
      "description": "MVP mobile de delivery regional criado para conectar estabelecimentos e consumidores do comércio local de Buerarema-BA.",
      "highlights": [
        "Liderança e organização da equipe",
        "Planejamento do MVP e regras de negócio",
        "Desenvolvimento mobile com React Native, Expo e TypeScript"
      ],
      "tags": [
        "React Native",
        "Expo",
        "TypeScript",
        "APIs"
      ]
    },
    "description": "O Macuco Entregas é um aplicativo mobile de delivery local voltado à modernização do comércio em Buerarema/BA.",
    "highlights": [
      "Liderança do projeto, com coordenação da equipe, reuniões e distribuição de responsabilidades.",
      "Planejamento do MVP e definição de prioridades, funcionalidades e regras de negócio.",
      "Desenvolvimento de funcionalidades mobile com React Native, Expo e TypeScript.",
      "Participação nas decisões de arquitetura e experiência do usuário."
    ],
    "tags": [
      "React Native",
      "Expo",
      "TypeScript",
      "Integração com APIs"
    ],
    "status": "Projeto empreendedor"
  }
];
