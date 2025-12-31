# Configuracoes de Producao

Este documento descreve o passo a passo para configurar o projeto fora do ambiente de desenvolvimento.

## 1. Dominio e DNS
1. Defina o dominio oficial que sera usado em producao.
2. No painel do provedor de DNS, crie os registros exigidos pelo seu hosting.
3. Aguarde a propagacao do DNS (pode levar de minutos a horas).
4. Valide o apontamento com `nslookup` ou `dig` e com o painel do hosting.

## 2. Hosting e deploy estatico
1. Escolha o provedor de hosting para site estatico.
2. Configure o build para gerar `dist/` com `npm run build`.
3. Publique a pasta `dist/` no provedor escolhido.
4. Verifique se a pagina inicial e o catalogo carregam corretamente.

### Opcoes comuns de hosting (passo a passo resumido)

#### GitHub Pages
1. Ative o GitHub Pages no repositorio.
2. Defina a branch e a pasta de publicacao (`/dist` se usar workflow de build).
3. Configure um workflow de build se necessario.
4. Aponte o dominio personalizado no GitHub Pages e no DNS.

#### Vercel
1. Conecte o repositorio no painel da Vercel.
2. Defina o framework como Astro e o output como `dist`.
3. Execute o deploy e valide o preview.
4. Aponte o dominio no painel e ajuste o DNS.

#### Netlify
1. Conecte o repositorio no painel da Netlify.
2. Configure o build com `npm run build` e publish directory `dist`.
3. Execute o deploy e valide o preview.
4. Aponte o dominio no painel e ajuste o DNS.

#### Cloudflare Pages
1. Conecte o repositorio no Cloudflare Pages.
2. Configure o build com `npm run build` e output `dist`.
3. Execute o deploy e valide o preview.
4. Aponte o dominio no painel e ajuste o DNS.

## 3. Analytics (Google Analytics)
1. Crie uma propriedade GA4 no Google Analytics (Admin > Create Property).
2. Em Data Streams, crie um stream Web e informe o dominio do site.
3. Copie o Measurement ID (formato `G-XXXXXXXXXX`).
4. Atualize `src/data/config.json` em `analytics.googleAnalyticsId` e mantenha `enabled` como `true`.
5. Integre o script do GA4 no layout global (ex.: `src/layouts/BaseLayout.astro`), lendo o ID do `config.json` e renderizando o snippet apenas quando `enabled` estiver ativo.
6. Se preferir Google Tag Manager, substitua o snippet do GA4 pelo container do GTM e centralize os eventos por la.
7. Valide a coleta abrindo o site e conferindo em Realtime ou DebugView no GA.
8. Se nao quiser usar analytics, defina `enabled` como `false` e remova o script do layout.

Observacoes:
- O projeto apenas guarda o ID em `config.json`. A coleta so funciona se o snippet estiver inserido no layout.
- Para conformidade com LGPD, avalie exibir aviso de cookies/consentimento.

## 4. Contatos e links externos
1. Atualize links e textos em `src/data/config.json` (Instagram, WhatsApp, links de venda).
2. Verifique se os links externos abrem corretamente no navegador.
3. Confira se o link interno do catalogo (`/catalogo`) funciona.

## 5. Seguranca e privacidade
1. Mantenha `mcp-servers.json` fora do Git (ja esta no `.gitignore`).
2. Use `mcp-servers.example.json` como referencia para criar o arquivo local.
3. Nunca commite tokens, chaves ou dados sensiveis.

## 6. Assets e direitos de uso
1. Verifique se todas as imagens em `public/` sao autorizadas para uso comercial.
2. Garanta que as imagens estejam otimizadas e com nomes finais.
3. Confirme que os caminhos usados em `src/data/products.json` existem.

## 7. Sitemap e robots
1. Garanta que `site` em `astro.config.mjs` esteja com o dominio final.
2. Use `@astrojs/sitemap` para gerar o sitemap durante o build.
3. Atualize `public/robots.txt` com o dominio final e o arquivo de sitemap.

## 8. CI (integracao continua)
1. Mantenha o workflow em `.github/workflows/ci.yml`.
2. O pipeline executa `npm ci`, `npm run astro -- check` e `npm run build`.
3. Verifique se a pipeline passa antes de publicar novas versoes.

## 9. SEO e redes sociais
1. Atualize `site` em `astro.config.mjs` para o dominio final.
2. Revise metatags em `src/layouts/BaseLayout.astro` (title, description, og, twitter).
3. Substitua URLs de imagem para o dominio final (og:image, twitter:image).
4. Confirme favicon e branding em `public/`.
