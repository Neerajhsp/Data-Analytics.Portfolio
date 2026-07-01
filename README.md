# Neeraj Kumar — Data Analyst Portfolio

A premium, data-driven analytics portfolio built with React 19, TypeScript, Tailwind CSS and Framer Motion. Designed to feel like a modern SaaS analytics product — dark theme, glassmorphism, animated dashboards and fully data-driven content.

**Live demo:** _add your deployed URL here_

---

## ✨ Features

- Animated hero with rotating role titles and floating dashboard motifs
- Data-driven Projects grid with search, category filters and a full-detail modal
- Dashboard Gallery, Case Studies, SQL Showcase and Python Notebook Showcase
- Skills, Tools and Services sections with progress bars and hover animations
- "Learning Journey" timeline in place of formal work experience
- Certifications grid that grows automatically from a single data file
- Live GitHub stats (followers, repos, latest activity) via the GitHub REST API
- Resume section + downloadable PDF resume
- Contact form wired for EmailJS, with toast notifications and validation
- Fully responsive: mobile, tablet, laptop, desktop and ultra-wide
- SEO-ready: meta tags, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`
- Accessible: semantic HTML, ARIA labels, visible focus states, reduced-motion support

## 🧱 Tech Stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · React Router DOM · React Icons · Lucide Icons · EmailJS · React Hot Toast · Recharts · React CountUp · React Intersection Observer

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── assets/images/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── pages/              # Home, NotFound
│   ├── components/
│   │   ├── layout/         # Navbar, Sidebar, Footer, BackToTop, ThemeToggle
│   │   ├── sections/       # Hero, About, Skills, Projects, Contact, etc.
│   │   └── ui/              # ProjectCard, KPICard, ChartCard, Modal, etc.
│   ├── data/                # ⭐ All content lives here — never hardcoded in components
│   ├── hooks/                # useTypingEffect, useScrollSpy, useTheme
│   ├── types/                 # Shared TypeScript interfaces
│   └── utils/                  # iconRegistry (safe icon resolver)
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. That's it — no manual configuration required to see the site running.

To build for production:

```bash
npm run build
npm run preview
```

## ➕ How to Add a New Project

Every project card, filter, search result, dashboard gallery tile and modal is generated from **one file**: `src/data/projects.ts`.

1. Open `src/data/projects.ts`
2. Copy an existing project object
3. Fill in the fields (the shape is defined by the `Project` interface in `src/types/index.ts`)
4. Save — the new project automatically appears in Projects, Dashboard Gallery, filters and search. No component code needs to change.

The same pattern applies to `skills.ts`, `services.ts`, `certifications.ts`, `caseStudies.ts`, `sqlShowcase.ts`, `notebooks.ts` and every other file in `src/data`.

## 📄 How to Update Your Resume

Replace `public/resume.pdf` with your own PDF (keep the same filename), or update the `href` in `src/components/sections/Resume.tsx` and `Hero.tsx` if you rename the file.

## 📬 How to Configure EmailJS

The contact form in `src/components/sections/Contact.tsx` is wired for [EmailJS](https://www.emailjs.com/):

1. Create a free EmailJS account and an Email Service + Template
2. Copy your **Service ID**, **Template ID** and **Public Key**
3. Open `src/components/sections/Contact.tsx` and replace the placeholder constants near the top of the file
4. Restart the dev server

Until configured, the form shows a friendly error toast instead of silently failing.

## ☁️ Deployment

### Vercel
```bash
npm install -g vercel
vercel
```
Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --build
```
Build command: `npm run build`. Publish directory: `dist`.

### GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`
3. Add scripts: `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
4. `npm run deploy`

## 🖼️ Screenshots

_Add screenshots of the live site here once deployed._

## 🛡️ Icon Safety

All icons are resolved through `src/utils/iconRegistry.ts`, which looks up icon names across the Tabler, Simple Icons and Font Awesome 6 icon sets and falls back to a safe default if a name doesn't exist — the app never breaks or shows a broken import because of an icon name.

## 📜 License

This is personal portfolio source code belonging to Neeraj Kumar. Feel free to reference the architecture, but please don't republish the content or branding as your own.
