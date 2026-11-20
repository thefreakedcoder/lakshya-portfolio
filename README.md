# Lakshya Sinha — Portfolio

A fast, fully static personal portfolio built with Vite, React and TypeScript. Plain CSS, no UI libraries, no backend, no analytics.

## Commands

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # type-check and build to dist/
npm run lint    # lint
```

## Editing content

All text, links, projects, experience and skills live in `src/data/profile.ts`.
- Set `email` to the public contact address (currently a placeholder).
- Set `resumeUrl` to a PDF path/URL to show a Resume button (do not publish a PDF containing a phone number).

## Deploying on Vercel

Import the repo in Vercel; `vercel.json` sets the Vite framework preset and long-lived cache headers for `/assets/*`. Build command `npm run build`, output `dist`. Point the `lakshyasinha.in` domain at the project.
