---
description: "Scaffold or refine the Lupizeira tattoo artist landing page (dark, image-first, conversion-focused) using this project's 3-layer architecture (content.json + theme tokens + components)."
name: "Lupizeira Landing"
argument-hint: "What to scaffold or refine (e.g. 'all sections', 'portfolio grid + modal', 'CTA only')"
agent: "agent"
---

# Lupizeira — Tattoo Artist Landing Page

Build (or refine) the landing page for **Lupizeira**, a tattoo artist working at studio **GE Souza Tattoo**, using this workspace's existing 3-layer architecture:

- **Content** → [config/content.json](../../config/content.json)
- **Theme tokens** → [css/theme.css](../../css/theme.css)
- **Composition** → [index.html](../../index.html), partials in [components/](../../components/), behavior in [js/](../../js/)

Respect the Portfolio Landing Builder rules already loaded in this mode. Never hardcode copy, colors, or links inside components — everything flows through the config and tokens.

## Positioning

The site is **not** a replacement for Instagram. It exists to:

1. **Convert** — drive WhatsApp / booking contact.
2. **Show authority** — portfolio + studio credibility.
3. **Build identity** — strong, cohesive visual brand.

Tone: autoral, confident, editorial. Instagram = discovery, landing = decision.

## Section Order (top → bottom)

1. **Hero** — full-bleed image, name, tagline, primary CTA (Agendar sessão), secondary CTA (Instagram).
2. **Sobre a artista** — short editorial bio + highlights.
3. **Portfólio** — responsive grid (1 / 2 / 3 cols), hover zoom, click → modal with keyboard + swipe navigation.
4. **Estilos / especialidades** — tag chips (Fineline, Blackwork, Ornamental, …) driven by `content.json`.
5. **Sobre o estúdio** — GE Souza Tattoo: descrição, localização, foto.
6. **Processo / como funciona** — 3–5 steps (briefing → orçamento → desenho → sessão → cuidados).
7. **Depoimentos** *(opcional, omit if no data)*.
8. **CTA agendamento** — destaque com WhatsApp.
9. **Footer** — social, localização, copyright.

A **floating CTA** (WhatsApp) deve ficar visível durante o scroll em mobile e desktop.

## Design Direction

- **Mode**: dark predominante, alto contraste, imagem como protagonista.
- **Palette suggestion** (seed values; refine in [css/theme.css](../../css/theme.css)):
  - `--color-bg: #0a0a0a`
  - `--color-surface: #111111`
  - `--color-accent: #e63946`
  - `--color-text: #f1f1f1`
  - `--color-muted: #a1a1a1`
- **Type pairing**: `Playfair Display` (display) + `Inter` (body), modular scale.
- **Spacing**: `--spacing-section: 6rem`, `--spacing-container: 1.5rem`.
- **Radius / motion**: `--radius-md: 12px`; subtle fade/slide on scroll, respeitando `prefers-reduced-motion`.

## Content Schema (extend [config/content.json](../../config/content.json))

```json
{
  "hero": { "name": "Lupizeira", "tagline": "...", "ctaPrimary": { "label": "Agendar sessão", "href": "..." }, "ctaSecondary": { "label": "Instagram", "href": "..." }, "image": "/assets/images/hero.jpg" },
  "about": { "title": "Sobre", "description": "...", "highlights": ["..."] },
  "portfolio": [ { "image": "/assets/images/portfolio/01.webp", "alt": "...", "category": "fineline" } ],
  "styles": ["Fineline", "Blackwork", "Ornamental"],
  "process": [ { "title": "Briefing", "description": "..." } ],
  "studio": { "name": "GE Souza Tattoo", "description": "...", "address": "...", "image": "/assets/images/studio.jpg" },
  "testimonials": [ { "quote": "...", "author": "..." } ],
  "contact": { "whatsapp": "https://wa.me/...", "instagram": "https://instagram.com/lupizeira", "email": "..." },
  "location": { "city": "...", "region": "...", "timezone": "...", "availability": "Aceitando agendamentos" }
}
```

## JavaScript Responsibilities ([js/](../../js/))

- `app.js` (or `main.js`) — fetch `content.json`, hydrate all sections.
- `portfolio.js` — render grid, lazy-load images (`loading="lazy"`, `decoding="async"`), aspect-ratio fixo.
- `modal.js` — abrir lightbox, navegação por teclado (←/→/Esc), swipe em mobile, focus trap.

## Conversion Rules

- CTA principal = WhatsApp; CTA de confiança = Instagram.
- CTA visível no header (sticky), repetido em meio (após portfólio) e fim (seção dedicada) + floating button mobile.
- Botões grandes (≥ 44px touch target), contraste AA mínimo.

## Quality Bar

- **A11y**: landmarks semânticos, alt text em todas as imagens, foco visível, contraste AA, `prefers-reduced-motion`.
- **Responsivo**: mobile-first, validar em 360 / 768 / 1280.
- **Performance**: WebP, lazy loading, sem libs pesadas.
- **SEO básico**: `<title>Lupizeira Tattoo | Tatuagem Autoral</title>`, meta description, Open Graph (`og:image` = hero), `lang="pt-BR"`.
- **Assets** organizados em `assets/images/{hero,portfolio,studio,icons}/`.

## Execution

Argument: **${input:scope:all sections}**

1. Identifique a camada afetada (content / tokens / component / composition) — edite **somente** essa camada.
2. Se for scaffold completo: atualize `content.json` primeiro, depois tokens, depois componentes/seções, por fim composição em `index.html`.
3. Ao terminar, liste o "edit *this* file to change *that*" para as áreas tocadas.
