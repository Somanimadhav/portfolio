# Madhav Somani — Portfolio

A responsive React portfolio positioning Madhav for Forward Deployed Engineer and product-focused software engineering roles. It highlights end-to-end product work, AI-enabled workflows, API integrations, and customer-problem solving.

## Stack

- React 19.3
- Vite 8
- React Bootstrap + Bootstrap 5
- EmailJS for the contact form

## Requirements

- Node.js 20.19+ (Node.js 22.12+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Configure Netlify to use `npm run build` as the build command and `dist` as the publish directory.

## Featured projects

- **ApplyFlow:** Privacy-first job application assistant with local-LLM resume parsing and browser autofill.
- **OpsPilot AI (in progress):** FDE-style email and workflow automation concept for classifying incoming requests, gathering context, drafting/routing replies, creating follow-up tasks, and escalating cases for human approval. The portfolio describes planned capabilities rather than claiming a completed production system.
- **FGH:** E-commerce storefront and admin dashboard concept, with AI virtual try-on identified as planned.

## Contact form

The contact form uses EmailJS. The existing service ID, template ID, and public key have been preserved from the original project. These values are public client-side identifiers, not private server credentials. If you rotate them, update `src/components/Contact.js` accordingly. Never put private API keys or secrets in `public/`.

## Project structure

- `src/components/` — page sections and UI components
- `src/assets/` — images, fonts, and resume PDF
- `public/` — static public assets
- `legacy/` — the original standalone HTML/CSS/JS version, retained for reference

## Notes

The old Create React App setup was replaced with Vite. The previous CRA `package-lock.json` was removed because it describes a different dependency graph; running `npm install` creates a fresh lockfile for this setup.
