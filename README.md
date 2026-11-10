# Ivan Passos — Links

Página pessoal de links feita com React, TypeScript e Vite. Projeto exclusivamente front-end.

## Desenvolvimento

```sh
bun install
bun run dev
```

## Verificação e produção

```sh
bun run lint
bun run build
bun run preview
```

O build estático é gerado em `dist/`.

## Organização

- `src/App.tsx`: composição e seções da página.
- `src/data/profile.ts`: redes sociais, contagens e plataformas utilizadas.
- `src/components/link-card.tsx`: cartões e cabeçalhos reutilizáveis.
- `src/components/theme-control.tsx`: temas claro, escuro e automático, com preferência local.
- `src/components/magicui/flickering-grid.tsx`: fundo animado adaptado do Flickering Grid da Magic UI. Respeita movimento reduzido e pausa quando a aba está oculta.
- `src/App.css` e `src/index.css`: layout, paleta Neutral e estados de interação.
- `src/assets/avatar.jpg`: foto otimizada para o perfil.
- `public/favicon.svg`: foto circular incorporada no favicon.

Todos os ícones são da família Remix Icon.

## Conteúdo e integrações

As contagens de seguidores são ilustrativas. A seção do YouTube está reservada, sem vídeo. As áreas de imagens do Instagram permanecem como espaços reservados.

Os formulários de contato e newsletter ainda não enviam nem armazenam dados. O contato disponível é o link externo do Tally. Não há backend, autenticação ou integração automática com redes sociais.

Para trocar a foto, utilize uma versão quadrada de aproximadamente 192 × 192 px no perfil e atualize também a imagem incorporada no favicon. O original não é necessário para publicar o site.

## Referências

- Estrutura visual: https://linx.framer.website/
- Fundo animado: https://magicui.design/docs/components/flickering-grid
