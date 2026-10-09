# My_Website

An animated personal portfolio built from my resume, using Next.js 15, Tailwind CSS v4, and Framer Motion.

## Editing content

All text comes from [`src/data/resume.ts`](src/data/resume.ts). Update that file to change the name, roles, summary, experience, skills, projects, education, and contact links.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Pushing to `main` builds a static export and publishes it with GitHub Pages ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). To turn it on, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**. The site will be live at `https://<username>.github.io/My_Website/`.
