# Ivan Passos — Portfólio e links

Site em React, TypeScript e Vite. As páginas são carregadas sob demanda.

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

- `src/route.tsx`: seleção e carregamento das páginas.
- `src/Home.tsx`: página inicial.
- `src/Pages.tsx`: projetos, serviços e produtos.
- `src/WorkDetail.tsx`: detalhes dos projetos.
- `src/App.tsx`: página de links, em `/links`.
- `src/components/site-layout.tsx`: cabeçalho, rodapé e newsletter compartilhados.
- `src/components/work-cards.tsx`: cards reutilizáveis.
- `src/components/ui/`: composições do shadcn/ui com Radix, adaptadas ao CSS existente.
- `src/components/page-motion.tsx`: Lenis e reveal, com limpeza de efeitos e suporte a movimento reduzido.
- `src/components/lenis.css`: estilos da versão 1.3.27; revisar ao atualizar Lenis.
- `src/components/bottom-blur.tsx`: blur progressivo sem interceptar cliques.
- `src/data/works.ts`: projetos, descrições e conteúdo demonstrativo.
- `src/data/profile.ts`: redes sociais e ferramentas.

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
