# Lupizeira Landing Page

Landing page da Lupizeira, tatuadora do estúdio GE Souza Tattoo.

Projeto estático em HTML, CSS e JavaScript, feito para apresentar portfólio, reforçar a identidade da marca e converter visitas em agendamentos via WhatsApp.

## Estrutura

- `index.html`: estrutura da página
- `config/content.json`: textos, links, imagens e dados das seções
- `css/theme.css`: cores, fontes e tokens visuais
- `css/components.css`: botões, chips e elementos reutilizáveis
- `css/sections.css`: estilos das seções
- `js/app.js`: renderização do conteúdo e interações
- `favicon/`: favicons e arquivos web app

## Onde editar

- Conteúdo: `config/content.json`
- Tema visual: `css/theme.css`
- Ordem das seções: `index.html`

## Rodar localmente

Como o projeto usa `fetch()` para carregar o conteúdo, rode com servidor local:

```bash
npx serve .
```

Depois acesse `http://localhost:3000`.

## Deploy

Fluxo recomendado:

1. Subir o projeto para o GitHub.
2. Importar o repositório na Vercel.
3. Publicar como projeto estático.

Na Vercel, pode deixar o `Build Command` e o `Output Directory` em branco.

## Observações

- Os favicons ficam em `favicon/`.
- O conteúdo principal do site deve ser mantido em `config/content.json`.
- Este projeto foi customizado especificamente para a marca Lupizeira.
