export const contact = 'https://tally.so/r/2EGYpp'

type Work = {
  slug: string
  name: string
  category: string
  url?: string
  description: string
  preview: boolean
  paragraphs: string[]
  images: number
}

// Client names confirmed by Ivan. The narratives below are fictional draft copy,
// not a record of the scope delivered for each client.
const projects = [
  [
    'porto-seguros',
    'Porto Seguros',
    'Clareza em jornadas digitais',
    'Uma exploração de navegação, hierarquia de informações e estados de interface para tornar jornadas complexas mais fáceis de compreender.',
  ],
  [
    'slicefair',
    'Slicefair',
    'Uma experiência consistente',
    'Uma proposta de organização de fluxos e telas para conectar diferentes momentos de uma experiência digital.',
  ],
  [
    'cloudymos',
    'Cloudymos',
    'Informação bem organizada',
    'Uma exploração de painéis, navegação e apresentação de informações com foco na leitura e no uso cotidiano.',
  ],
  [
    'elefy',
    'Elefy',
    'Do fluxo à interface',
    'Uma proposta de evolução de interfaces a partir da organização de jornadas, prioridades e ações principais.',
  ],
  [
    'codaitech',
    'Codaitech',
    'Design conectado à engenharia',
    'Um estudo de aproximação entre interface e implementação, com componentes reutilizáveis e estados bem definidos.',
  ],
  [
    'zeeva',
    'ZEEVA',
    'Consistência entre telas',
    'Uma exploração de padrões de interface, tipografia e espaçamentos para compor uma experiência digital coesa.',
  ],
  [
    'sinkle',
    'Sinkle',
    'Menos atrito na navegação',
    'Uma proposta de simplificação de fluxos, com ações claras e feedback em cada etapa da experiência.',
  ],
  [
    'ulox',
    'Ulox',
    'Uma base para evoluir',
    'Um estudo de organização de componentes e padrões que facilite a evolução de um produto digital.',
  ],
  [
    'zowe',
    'ZOWE',
    'Uma experiência responsiva',
    'Uma exploração de layouts e comportamentos de interface que se adaptem a diferentes dispositivos.',
  ],
  [
    'myceo',
    'MyCEO',
    'Visibilidade para o que importa',
    'Uma proposta de hierarquia de informações e organização de ações para apoiar a navegação em uma interface.',
  ],
  [
    'jornalista-concurseiro',
    'Jornalista Concurseiro',
    'Conteúdo com leitura clara',
    'Uma exploração de estrutura de conteúdo e navegação, com atenção à legibilidade e à descoberta de informações.',
  ],
  [
    'signature12',
    'Signature12',
    'Detalhes que conectam a experiência',
    'Um estudo de consistência visual e interação, conectando componentes e páginas em uma experiência digital.',
  ],
] as const

export const workDetails: Work[] = projects.map(
  ([slug, name, concept, description]) => ({
    slug,
    name,
    category: 'Produto digital',
    description: concept + '.',
    preview: true,
    paragraphs: [
      `${description} Este é um roteiro fictício de apresentação do trabalho com ${name}; os detalhes reais da atuação ainda serão incorporados.`,
      'A narrativa proposta começa pela compreensão do contexto de uso e pela organização dos caminhos principais. A etapa seguinte apresenta alternativas de estrutura, hierarquia visual e interação para explorar a experiência.',
      'Para ilustrar o processo, este case poderá reunir fluxos, interfaces responsivas e componentes, relacionando decisões de UX/UI às possibilidades de implementação. As áreas de imagem estão reservadas para os materiais do projeto.',
      'Escopo, responsabilidades, tecnologias, datas e resultados serão preenchidos com as informações reais. Nenhuma entrega específica ou resultado descrito neste rascunho deve ser interpretado como validado.',
    ],
    images: 4,
  }),
)

workDetails.push({
  slug: 'digisource',
  name: 'Digisource',
  category: 'Projeto',
  url: 'https://digisource.io',
  description: 'Da organização da experiência à construção da interface.',
  preview: true,
  paragraphs: [
    'Neste case demonstrativo, a proposta para a Digisource é explorar a organização de uma experiência digital, com navegação clara e componentes consistentes.',
    'O roteiro de apresentação reúne estrutura de conteúdo, exploração de interfaces e conexão entre design e desenvolvimento. As imagens serão substituídas pelos materiais do projeto.',
    'Este texto é fictício e provisório. O escopo, minha participação e os resultados reais serão incluídos após a revisão do conteúdo.',
  ],
  images: 4,
})
