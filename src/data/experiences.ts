export type Experience = {
  period: string;
  title: string;
  institution: string;
  description: string;
  note?: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    period: '2024 — Atual',
    title: 'Graduação em Ciência da Computação',
    institution: 'Universidade Estadual de Santa Cruz (UESC)',
    description: 'Formação em Ciência da Computação com base em programação, algoritmos, estruturas de dados, matemática, lógica e fundamentos de sistemas computacionais, articulando teoria e prática para compreender, projetar e desenvolver soluções em software e tecnologia.',
    tags: ['Ciência da Computação', 'Programação', 'Matemática', 'Sistemas Computacionais'],
  },
  {
    period: 'Fev/2026 — Set/2026',
    title: 'Bolsista de Iniciação Científica · 1º ciclo',
    institution: 'Inteligência Artificial na Robótica Educacional · UESC',
    description: 'Pesquisa e desenvolvimento de soluções com IA aplicada à Robótica Educacional, unindo revisão bibliográfica, desenvolvimento em Python, arquitetura de software, testes e construção de protótipos educacionais e estações robóticas.',
    note: 'Resultados apresentados no 32º Seminário de Iniciação Científica da UESC.',
    tags: ['Pesquisa científica', 'Python', 'IA generativa', 'LLMs', 'Prototipagem', 'STEM'],
  },
  {
    period: 'Out/2026 — Atual',
    title: 'Iniciação Científica · 2º ciclo',
    institution: 'IA aplicada e desenvolvimento de protótipos educacionais · UESC',
    description: 'Continuidade da pesquisa, com evolução do software e da arquitetura, desenvolvimento em Python, integração entre componentes computacionais e físicos e construção de novos protótipos educacionais para o ensino de Matemática.',
    tags: ['Python', 'Arquitetura de software', 'IA aplicada', 'Prototipagem'],
  },
];
