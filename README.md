# Shreeshail S P — Data Engineer Portfolio

Personal resume portfolio for **Shreeshail S P**, Data Engineer Intern at NeoStats. Built with pure HTML, CSS, and vanilla JavaScript for GitHub Pages — no build step.

[![Pages](https://img.shields.io/badge/GitHub-Pages-7c3aed?style=flat-square&logo=github)](https://shreeshail-sp.github.io/Portfolio/)
[![License](https://img.shields.io/badge/License-MIT-06b6d4?style=flat-square)](#license)

---

## About

This site is the public version of the NeoStats-focused resume: ETL pipelines, Azure, Microsoft Fabric, Python, SQL, Power BI, and the retail medallion-architecture project.

## Features

- **Resume-aligned content** — experience, skills, projects, certifications, and leadership from the latest CV
- **Downloadable PDF resume** in `assets/resume/`
- **Dark + Light theme** with persistence via `localStorage`
- **Glassmorphism UI** with animated gradient blobs and grid background
- **Hero section** with animated typing effect and terminal mockup
- **Smooth scroll** navigation with active-link highlighting
- **Scroll-triggered reveal animations** using `IntersectionObserver`
- **Animated stat counters**
- **Fully responsive** (mobile, tablet, desktop)
- **Reduced-motion** support for accessibility
- **Custom 404 page**, `robots.txt`, and SEO meta tags
- **Zero build step** — just static files

---

## Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── 404.html                # Custom 404 page
├── .nojekyll               # Tells GitHub Pages to skip Jekyll processing
├── robots.txt              # SEO crawler config
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # All styles
    ├── js/
    │   └── main.js         # All interactivity
    └── resume/
        └── Shreeshail_SP_Resume.pdf
```

---

## Local Preview

Just open `index.html` in your browser. That's it.

If you'd like a local server (recommended for clean asset paths):

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deploying to GitHub Pages

This is a **static** site, so GitHub Pages serves it natively. No Actions, no build needed.

### Option A — Deploy from the `main` branch (recommended)

1. Push this repo to GitHub (it's already at `Shreeshail-sp/Portfolio`).
2. Go to **Settings → Pages** in your repo.
3. Under **Source**, choose:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**.
5. Wait ~30–60 seconds. Your site goes live at:
   ```
   https://shreeshail-sp.github.io/Portfolio/
   ```

### Option B — Deploy from a `gh-pages` branch

If you prefer to keep the deployed copy separate:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

Then in **Settings → Pages**, choose **Branch: `gh-pages`**.

### Custom Domain (optional)

1. Add a file named `CNAME` at the repo root containing your domain, e.g.:
   ```
   shreeshail.dev
   ```
2. In your domain registrar, add a `CNAME` record pointing to `shreeshail-sp.github.io`.
3. In **Settings → Pages**, enter the same domain under **Custom domain** and tick **Enforce HTTPS**.

---

## Customising

All content lives in `index.html`. To update:

| What to change          | Where                                                    |
| ----------------------- | -------------------------------------------------------- |
| Name, tagline, bio      | `index.html` → `<section class="hero">` and `#about`     |
| Typing phrases          | `assets/js/main.js` → `phrases` array in `initTypingEffect()` |
| Skills                  | `index.html` → `<section id="skills">`                   |
| Experience entries      | `index.html` → `<section id="experience">`               |
| Projects                | `index.html` → `<section id="projects">`                 |
| Education / certs       | `index.html` → `<section id="education">`                |
| Contact links           | `index.html` → `<section id="contact">` and footer       |
| Resume PDF              | `assets/resume/Shreeshail_SP_Resume.pdf`                 |
| Theme colours           | `assets/css/style.css` → `:root { --primary, --accent }` |

### Updating Social Links

Look for these URLs in `index.html` and replace if needed:

- GitHub: `https://github.com/Shreeshail-sp`
- LinkedIn: `https://www.linkedin.com/in/shreeshailsp`
- Kaggle: `https://www.kaggle.com/`
- Email: `shreeshailx@gmail.com`
- Phone: `+91 82772 20852`

---

## Tech

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, backdrop-filter
- **Vanilla JavaScript** — no frameworks, no build tools
- **Google Fonts** — Inter, Space Grotesk, JetBrains Mono
- **Font Awesome 6** — icons via CDN

---

## Browser Support

Works on all modern browsers (Chrome, Firefox, Edge, Safari) and is fully responsive on mobile devices.

---

## License

MIT © Shreeshail S P

You're welcome to fork this and adapt it for your own portfolio. A link back is appreciated but not required.

---

Built with care by **Shreeshail S P**.
