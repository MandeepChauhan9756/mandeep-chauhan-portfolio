# Mandeep Chauhan — Portfolio

Personal portfolio for **Mandeep Chauhan**, Python Backend Developer with 3+ years of
professional experience in FastAPI, Django, DRF and Flask, plus hands-on Data Science
and Machine Learning project work. Built to support applications for Python Backend
Developer, Django/FastAPI Developer, Backend Engineer, and Data Science / ML Intern roles.

Live demo: _add your Vercel URL here after deploying_

## Features

- Single clear identity: **Python Backend Developer | Data Science & Machine Learning**
- Sections: Hero, About, Skills, Experience, Backend Projects, Data Science & ML
  Projects, Education, Certifications, Achievements, Contact
- Dark, technical color system (navy/charcoal base + amber signal accent), all content
  is data-driven from `src/data/*.js` — no hardcoded copy in the UI components
- Fully responsive (320px → 1440px+), keyboard-accessible, visible focus states,
  respects `prefers-reduced-motion`
- SEO: page title, meta description, Open Graph, Twitter card, canonical URL, favicon
- No fabricated projects, links, metrics, or experience — every fact traces back to the
  original resume

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- No backend — the contact section uses direct `mailto:`/`tel:` links

## Project structure

```
src/
  components/     Reusable UI (Navbar, Footer, ProjectCard, TechBadge, SectionHeading)
  sections/       One file per page section (Hero, About, Skills, Experience, ...)
  data/           All resume-sourced content (profile, skills, experience, projects, ...)
  App.jsx         Assembles sections
  main.jsx        React entry point
  index.css       Tailwind directives + design tokens / base styles
public/
  favicon.svg
  Mandeep_Chauhan_Resume.pdf   ← you need to add this file (see below)
```

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is written to `dist/`.

## ⚠️ Action required before deploying

1. **Add your resume PDF.** Place your actual resume file at:
   ```
   public/Mandeep_Chauhan_Resume.pdf
   ```
   The "Download Resume" button in the Hero section already links to
   `/Mandeep_Chauhan_Resume.pdf`. No fake resume file is included — you must add
   the real one.

2. **Add project links if you have them.** In `src/data/projects.js`, each project has
   empty `github` and `demo` fields. Fill in real URLs where they exist — cards with no
   link show "Source coming soon" instead of a fake button.

3. **Update the canonical/OG URL** in `index.html` once you have your final domain
   (currently set to a placeholder `https://mandeepchauhan.dev/`).

## Deployment (Vercel)

See the step-by-step GitHub + Vercel instructions provided in the chat response, or:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel gives you a live `*.vercel.app` URL.
5. (Optional) Connect a custom domain from the Vercel project's **Settings → Domains** tab.

## Author

**Mandeep Chauhan**
- Email: chauhanmandeep9756@gmail.com
- GitHub: [github.com/MandeepChauhan9756](https://github.com/MandeepChauhan9756)
- LinkedIn: [linkedin.com/in/mandeepchauhan9756](https://www.linkedin.com/in/mandeepchauhan9756)
