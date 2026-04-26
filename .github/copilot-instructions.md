# Portfolio Landing Page Project

This is a personal portfolio landing page built with HTML, Tailwind CSS, and vanilla JavaScript.

## Project Structure

- `index.html` - Main landing page
- `config/` - Content configuration files
- `css/` - Stylesheets and theme tokens
- `js/` - JavaScript modules and interactivity
- `components/` - Reusable HTML component templates
- `assets/` - Images, icons, and media

## Customization

- **Content**: Edit `config/content.json` to update text, links, and social media
- **Theme**: Edit `css/theme.css` to change colors, fonts, and spacing
- **Layout**: Edit `index.html` to reorder or remove sections

## Development

Open `index.html` in a browser or use a local server:
```bash
npx serve .
```

## Architecture

Three-layer architecture:
1. **Content Config** (`config/content.json`) - Single source of truth for all copy, links, and data
2. **Theme Tokens** (`css/theme.css`) - CSS variables for colors, typography, spacing
3. **Components** - Reusable, token-driven HTML/CSS/JS modules
