# Personal Portfolio Landing Page

A modern, customizable personal portfolio landing page built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🎨 Features

- **Three-layer architecture**: Content → Theme → Components
- **Fully customizable**: Edit one JSON file to update all content
- **Theme tokens**: CSS variables for consistent design system
- **Responsive design**: Mobile-first, works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Dark mode ready**: Automatically respects system preferences
- **Motion-safe**: Respects `prefers-reduced-motion` settings
- **No build step**: Open `index.html` directly or use any static server

## 📁 Project Structure

```
LupizeraWebPage/
├── index.html              # Main HTML file
├── config/
│   └── content.json        # 📝 EDIT THIS to customize content
├── css/
│   ├── theme.css           # 🎨 EDIT THIS to customize design
│   ├── components.css      # Component styles
│   └── sections.css        # Section-specific styles
├── js/
│   └── app.js              # Content loader and interactivity
├── assets/
│   └── images/             # Add your images here
├── components/             # (Future: reusable HTML templates)
└── .github/
    └── copilot-instructions.md
```

## 🚀 Quick Start

### 1. Add Your Content

Edit `config/content.json` to customize:
- Personal information (name, role, bio)
- Projects and experience
- Skills and technologies
- Social media links
- Contact information

### 2. Add Your Images

Place your images in `assets/images/`:
- `avatar.jpg` - Your profile photo (recommended: 400x400px)
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots (recommended: 1200x630px)

### 3. Customize Theme (Optional)

Edit `css/theme.css` to change:
- Colors (primary accent, neutrals, semantic colors)
- Typography (font families, sizes, weights)
- Spacing scale
- Border radius, shadows, transitions

### 4. Preview Your Site

**Option A: Open directly**
```bash
# Simply open index.html in your browser
```

**Option B: Use a local server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 Customization Guide

### Content Changes

**All content is in `config/content.json`**

| What to Change | Where in content.json |
|----------------|----------------------|
| Name, role, bio | `hero`, `about` |
| Projects | `projects.items[]` |
| Skills | `skills.categories[]` |
| Work experience | `experience.items[]` |
| Social links | `social.links[]` |
| Location | `location` |
| Contact info | `contact` |

### Design Changes

**All design tokens are in `css/theme.css`**

| What to Change | CSS Variable |
|----------------|--------------|
| Primary color | `--color-primary-*` |
| Background | `--color-background` |
| Text colors | `--color-text-*` |
| Font family | `--font-display`, `--font-body` |
| Font sizes | `--text-*` |
| Spacing | `--space-*` |
| Border radius | `--radius-*` |

### Layout Changes

**To reorder or remove sections**, edit `index.html`:
- Each section is a `<section>` tag with an `id`
- Move sections up/down to reorder
- Delete a section to remove it
- The JavaScript will automatically populate content

## 🎨 Color Palette

The default theme uses a blue accent:
- Primary: Blue (`#3b82f6`)
- Neutral: Grays
- Background: White (light mode) / Dark gray (dark mode)

To change the accent color:
1. Go to [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
2. Pick a color (e.g., purple, green, orange)
3. Replace all `--color-primary-*` values in `css/theme.css`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for icon links
- Keyboard navigation support
- High contrast text
- `prefers-reduced-motion` support

## 🚢 Deployment

### GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch (e.g., `main`)
4. Your site will be at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments

### Vercel
```bash
npm i -g vercel
vercel
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - Content loading and interactivity
- **CSS Variables** - Design token system
- **JSON** - Content management

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Support

If you have questions or need help customizing, open an issue on GitHub.

---

**Built with ❤️ by [Your Name]**
