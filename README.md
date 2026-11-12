# Ivan Passos — Portfólio e links

Site em React, TypeScript, Vite e Tailwind CSS 4. As páginas são carregadas sob demanda.

## Desenvolvimento

```sh
bun install
bun run dev
```

## Verificação

```sh
bun run format:check
bun run lint
bun run build
```

Use `bun run format` para formatar. A saída estática fica em `dist/`.
O `vercel.json` encaminha as rotas para `index.html` na Vercel, permitindo
abrir ou atualizar diretamente `/links`, `/works`, `/services`, `/products`
e `/works/porto-seguros`. A configuração entra em vigor no próximo deploy.
Em outras hospedagens, configure o mesmo fallback de rotas.

## Estrutura

```text
src/
  app/                  # Rotas e carregamento sob demanda
  pages/                # Uma pasta por área do site
    home/
    links/
    loops/
    works/              # Listagem e detalhe de projeto
    services/
    products/
  components/
    layout/             # Cabeçalho, menu, rodapé, tema e status local
    cards/              # Cards compartilhados
    home/               # Componentes específicos da página inicial
    motion/             # Lenis, animações de entrada e blur
    magicui/            # Componentes adaptados do Magic UI
    ui/                 # Primitivos Radix/shadcn
  data/                 # Projetos, loops, perfil e redes sociais
  styles/               # Tailwind, estilos globais e estilos compartilhados
  assets/               # Imagens locais
  main.tsx              # Inicialização do React
```

Os imports usam `@/`, que aponta para `src/` no Vite e no TypeScript.
Estilos exclusivos ficam junto à página ou ao componente. Os estilos de layout
compartilhados ficam em `styles/portfolio.css` e `styles/pages.css`.
Projetos, Serviços e Produtos têm páginas próprias, sem condicionais em uma página genérica.

## Tailwind e formatação

O Tailwind 4 é compilado pelo plugin oficial `@tailwindcss/vite`.
`src/styles/tailwind.css` carrega o tema e as utilities. O Preflight não está
ativado nesta etapa: o reset existente é preservado para não alterar o visual.
O CSS atual continua funcionando; a migração para utilities pode ser gradual.
Regras CSS existentes fora de layers têm prioridade sobre utilities; ao migrar
um componente, remova as declarações antigas equivalentes para evitar conflitos.

`prettier-plugin-tailwindcss` ordena automaticamente as classes ao executar
`bun run format`. O plugin aponta para o arquivo de entrada do Tailwind na
`.prettierrc.json`. A extensão Prettier do editor também usa essa configuração.
O marquee de marcas já utiliza utilities para a tipografia dos nomes.
Use a variante `dark:` com o atributo `data-theme`, conforme o tema atual.

As rotas `/loops` e `/blog` abrem a newsletter; `/loops/:slug` abre uma edição.
Os endereços antigos `/drops` e `/drops/:slug` continuam funcionando como aliases.

Os temas compartilham a preferência local `theme`. Os ícones são Remix Icon.
A foto está em `src/assets/avatar.jpg`; o favicon em `public/favicon.svg`.

## Conteúdo e integrações pendentes

Os nomes dos clientes foram informados pelo proprietário. Os textos dos cases
são fictícios e estão identificados como demonstrativos; validar escopo,
participação e resultados antes da publicação. As imagens de projetos estão
reservadas. Os produtos ainda não têm catálogo real.

Newsletter e formulário de mensagem não enviam nem armazenam dados. O contato
funcional é o formulário externo do Tally. As contagens de seguidores em `/links`
são ilustrativas. Não há backend ou integração automática com redes sociais.

## Referências

- Portfólio: https://artifact.framer.ai/
- Links: https://linx.framer.website/
- Componentes: https://ui.shadcn.com/
- Rolagem: https://github.com/darkroomengineering/lenis
- Fundo de links: https://magicui.design/docs/components/flickering-grid

