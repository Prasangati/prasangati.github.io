# Prasanga Tiwari

Portfolio site for Prasanga Tiwari, senior full-stack and blockchain engineer. Built for linking from an Upwork profile and Upwork portfolio items.

All copy lives in `src/data.ts`. Set `profile.upworkUrl` to the public Upwork profile URL to show the "Hire me on Upwork" buttons.

## Upwork contact policy

Upwork does not allow contact details to be shared before a contract starts. This site has no email, phone, LinkedIn, résumé download, or contact form. Keep it that way. Clients reach Prasanga through Upwork only.

Each case study has its own anchor, so an Upwork portfolio item can link straight to it:

- `#investalytix` (includes a working WACC calculator)
- `#ghostrep`
- `#spooons`
- `#blockchain` (blockchain systems)

## Scripts

```bash
npm install
npm run dev      # http://127.0.0.1:5178
npm run build
npm run preview
```

## GitHub Pages

Push to GitHub and set Pages to deploy from **GitHub Actions**. `.github/workflows/pages.yml` builds and deploys `dist`. For a project site (`user.github.io/repo/`), set `VITE_BASE: /repo/` in the workflow.
