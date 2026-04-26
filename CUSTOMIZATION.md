# Guia de Customização — Lupizeira Landing Page

## 📁 Estrutura dos Assets

A landing page está configurada para usar os seguintes assets já carregados:

```
assets/
  Icons/
    LupiProfileIcon.jpg        → Foto usada no Hero
    StarIconForPlaceHolder.jpg → Ícone para produto (Brushes)
  TatooArts/
    EscritasArts/
      Escrita1-7.jpg/webp      → Portfolio (Tatuagens Escritas)
    MinimalistArts/
      Minimalist1-7.jpg/webp   → Portfolio (Minimalista)
    Feedbacks/
      Feedback1-7.jpg/webp     → Depoimentos de clientes
```

Todas essas imagens **já estão mapeadas** no [config/content.json](config/content.json).

## 🎨 Editando Conteúdo

### Texto, links e informações

Edite **somente** [config/content.json](config/content.json):

| Quer mudar… | Campo em content.json |
|---|---|
| Nome, tagline, foto do hero | `hero.*` |
| Bio e highlights | `about.*` |
| Imagens do portfólio | `portfolio.items[]` |
| Estilos/especialidades | `styles.items[]` |
| Dados do estúdio (endereço, mapa) | `studio.*` |
| Etapas do processo | `process.steps[]` |
| Produto (Brushes Procreate) | `shop.product.*` |
| Imagens de depoimentos | `testimonials.items[]` |
| WhatsApp, Instagram, TikTok, Linktree | `social.links[]` e `floatingCta.*` |
| Localização e disponibilidade | `location.*` |

### Adicionar/remover tatuagem do portfólio

Em [config/content.json](config/content.json), encontre o array `portfolio.items` e adicione/remova:

```json
{
  "image": "assets/TatooArts/EscritasArts/MinhaImagem.jpg",
  "alt": "Descrição da tatuagem",
  "category": "Fine Line"
}
```

Categorias atuais: `Fine Line`, `Tatuagens Escritas`, `Minimalista`, `Floral & Botânico`, `Blackwork Delicado`, `Anime`, `Pet Tattoo`.

### Editar links sociais

Em [config/content.json](config/content.json), seção `social.links`:

```json
{ "platform": "Instagram", "url": "https://instagram.com/lupizeira", "icon": "instagram" }
```

Ícones disponíveis: `instagram`, `tiktok`, `linktree`, `whatsapp`, `email`.

## 🎨 Editando Cores e Estilo

### Mudar paleta de cores

Edite [css/theme.css](css/theme.css), variáveis no topo:

```css
--color-accent: #e63946;           /* Vermelho principal */
--color-bg: #0a0a0a;               /* Fundo escuro */
--color-text: #f1f1f1;             /* Texto claro */
```

### Mudar fontes

Em [css/theme.css](css/theme.css):

```css
--font-display: 'Playfair Display', serif;  /* Títulos */
--font-body: 'Inter', sans-serif;           /* Corpo de texto */
```

Depois adicione o link da fonte no `<head>` de [index.html](index.html).

## 📐 Estrutura das Seções

Ordem atual (top → bottom):

1. **Hero** — foto + nome + tagline + CTAs
2. **Sobre** — bio + highlights
3. **Portfólio** — grid de imagens (14 itens, mix Escritas + Minimalistas)
4. **Estilos** — chips com especialidades
5. **Estúdio** — GE Souza Tattoo (foto + mapa)
6. **Processo** — 5 etapas (Briefing → Cicatrização)
7. **Shop** — Brushes Procreate (imagem + CTA)
8. **Depoimentos** — grid de feedbacks (7 imagens)
9. **CTA** — agendamento WhatsApp
10. **Location & Social** — cidade + links sociais
11. **Footer** — copyright + voltar ao topo

### Reordenar seções

1. Em [index.html](index.html), mova os blocos `<section>`:

```html
<section id="portfolio" class="portfolio-section"></section>
<section id="about" class="about-section"></section>
```

2. Em [js/app.js](js/app.js), linha ~52, ajuste a ordem das chamadas `render*()`:

```js
this.renderPortfolio();
this.renderAbout();
```

### Remover uma seção

1. Delete a `<section>` correspondente em [index.html](index.html)
2. Comente ou delete a chamada `render*()` em [js/app.js](js/app.js)
3. (Opcional) Remova o link da nav em [config/content.json](config/content.json) → `nav.links`

## 🖼️ Substituindo Imagens

### Hero

Substitua `assets/Icons/LupiProfileIcon.jpg` pela sua foto ou atualize o caminho em `content.json` → `hero.image`.

### Portfólio

Coloque novas imagens em `assets/TatooArts/` (crie subpastas se quiser organizar por estilo). Depois atualize `portfolio.items` em [config/content.json](config/content.json).

Recomendações:
- **Proporção**: 1:1 (quadrado) para o grid funcionar melhor
- **Tamanho**: 1200×1200px
- **Formato**: WebP (menor) ou JPG de alta qualidade

### Depoimentos

Substitua `Feedback1-7` em `assets/TatooArts/Feedbacks/` ou atualize `testimonials.items` em [config/content.json](config/content.json).

Formato ideal: 9:16 (stories verticais).

### Produto (Brushes)

Substitua `assets/Icons/StarIconForPlaceHolder.jpg` ou atualize `shop.product.image` em [config/content.json](config/content.json).

## 🧩 Componentes Customizáveis

### Botões

Em [css/components.css](css/components.css), classes `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`.

### Tags (chips de estilos)

Em [css/components.css](css/components.css), classe `.tag`.

### Floating WhatsApp

Controlado por `floatingCta` em [config/content.json](config/content.json). Para ocultar, remova o objeto ou defina `label: ""`.

### Lightbox (modal de portfólio)

Comportamento em [js/app.js](js/app.js), linha ~405. Suporta teclado (←/→/Esc) e swipe mobile.

## 🚀 Deployment

Para visualizar localmente (necessário porque usa `fetch()`):

```bash
npx serve .
```

Acesse `http://localhost:3000`.

### Deploy em produção

Hospede em **Vercel**, **Netlify** ou **GitHub Pages**:

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod

# GitHub Pages
git push origin main
```

## 📞 Links Importantes

- WhatsApp: `https://wa.me/5585994212930`
- Instagram: `https://instagram.com/lupizeira`
- TikTok: `https://www.tiktok.com/@lupizeira`
- Linktree: `https://linktr.ee/lupizeira`
- Brushes Procreate: `https://pay.kiwify.com.br/x0z1qUu`

Todos configurados em [config/content.json](config/content.json).

---

**Dúvidas?** Todos os caminhos de arquivos e comportamentos estão documentados neste guia. Edite sempre `content.json` primeiro — é a fonte de verdade do site.
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

### Reorder Sections
In `index.html`, cut and paste entire `<section>` blocks to reorder them.

Example: Move Projects above About:
```html
<section id="hero" class="hero-section"></section>
<section id="projects" class="projects-section"></section> <!-- Moved up -->
<section id="about" class="about-section"></section>
```

## Advanced Customization

### Add Custom Styles
Create `css/custom.css` and add it to `index.html`:
```html
<link rel="stylesheet" href="css/custom.css">
```

### Modify Component Styles
Edit `css/components.css` to change:
- Button styles (`.btn`)
- Card styles (`.card`)
- Tag styles (`.tag`)
- Icon link styles (`.icon-link`)

### Add New Content Fields
1. Add the field to `config/content.json`
2. Update `js/app.js` to render the new field
3. Add styles in `css/sections.css` if needed

## Tips

- **Test on mobile**: Use browser DevTools (F12) → Device Toolbar
- **Check contrast**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Validate HTML**: Use [W3C Validator](https://validator.w3.org/)
- **Optimize images**: Compress images before adding them (use [TinyPNG](https://tinypng.com/))

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Open an issue on GitHub
- Review the code comments in each file
