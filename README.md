# Crochetin E-commerce (Astro)
Projeto Astro estático para landing de links oficiais e catálogo de bolsas artesanais.

## Visão geral da estrutura
- `astro.config.mjs` – Configurações do Astro (site, saída estática, minificação).
- `tsconfig.json` – Base de TypeScript para tipagem.
- `package.json` / `package-lock.json` – Dependências (`astro`, `@astrojs/check`, `typescript`) e scripts.
- `.astro/` – Cache interno do Astro.
- `public/` – Arquivos públicos servidos como estão (imagens, favicons).  
  *As imagens de produtos e logos devem estar aqui ou em subpastas correspondentes.*
- `src/` – Código-fonte do site:
  - `layouts/BaseLayout.astro` – Layout global, head (metatags, fontes) e wrapper de conteúdo.
  - `styles/global.css` – Estilos globais e tokens (cores, espaçamentos, animações).
  - `data/config.json` – Dados da landing (perfil, links, redes, analytics toggle/ID).
  - `data/products.json` – Catálogo de produtos (slug, preço, dimensões, imagens, tags).
  - `types/product.ts` – Tipagem de produto usada nas páginas e componentes.
  - `components/social/WhatsAppButton.astro` – CTA de compra com mensagem pré-preenchida.
  - `pages/index.astro` – Landing de links oficiais (link-in-bio) lendo `config.json`.
  - `pages/catalogo/index.astro` – Lista de produtos com cards e badges.
  - `pages/catalogo/[slug].astro` – Página de detalhe com preço, benefícios e CTA WhatsApp.

## Scripts úteis
- `npm run dev` – Servidor de desenvolvimento.
- `npm run build` – Build estático em `dist/`.
- `npm run preview` – Servir a saída estática localmente.
- `npm run astro` – CLI do Astro (lint/check, etc).

## Dados e conteúdo
- **Perfil e links**: edite `src/data/config.json` (texto, URLs e ícones).  
  *Campos `internal` e `isImage` controlam alvo (`_self`/`_blank`) e renderização de ícone.*
- **Produtos**: edite `src/data/products.json` (slug usado na rota `/catalogo/[slug]`).  
  *Imagens devem existir em `/public/images/products/` ou apontar para URL válida.*

## Estilo e identidade
- Paleta e tokens em `src/styles/global.css`.  
  *O layout carrega fontes Outfit e Playfair Display via Google Fonts.*
- Cards, animações e responsividade já definidos nesse CSS global.

## Build e deploy
- Saída estática em `dist/` (`astro.config.mjs` define `output: 'static'`).
- `site` configurado para `https://crochetin.com.br` (ajuste se o domínio mudar).
- Assets minificados via Vite/Terser.

## Como rodar localmente
```bash
npm install
npm run dev
```
Abra `http://localhost:4321` (porta padrão do Astro) para ver a landing e catálogo.

## Onde ajustar comportamento
- **Metadados/SEO**: `src/layouts/BaseLayout.astro`.
- **CTA do WhatsApp**: `src/components/social/WhatsAppButton.astro` (número e template de mensagem).
- **Preço/parcelamento**: `src/pages/catalogo/[slug].astro` (lógica de exibição) e `products.json` (valores).
- **Lista de produtos**: `src/pages/catalogo/index.astro` (badges, grid e CTA "Ver detalhes").

