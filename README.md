# NoBS Portal Docs

Documentation site for NoBS Portal, built with [Docusaurus](https://docusaurus.io/).

## Local development

Prerequisites:

- Node.js 18+ and npm

Install and run:

```bash
npm install
npm run start
```

If you see a jsdom error related to `getInterfaceWrapper`, reinstall with clean cache:

```bash
rm -rf node_modules package-lock.json
npm install
```

The site runs at http://localhost:3000 and reloads on changes.

## Build

```bash
npm run build
npm run serve
```

## Deployment

This repository deploys with GitHub Pages via GitHub Actions:

- On push to `main`, the workflow at `.github/workflows/deploy.yml` builds the site and publishes it to the `gh-pages` branch.
- Current public URL (project pages): `https://cheminfo.github.io/nobs-docs/`.

### Custom domain (later)

When ready to move to `docs.nobsportal.org`:

1. Update `docusaurus.config.js: url` to `https://docs.nobsportal.org` and `baseUrl` to `/`.
2. Add `static/CNAME` with `docs.nobsportal.org`.
3. In repo Settings → Pages, set the custom domain to `docs.nobsportal.org` and enforce HTTPS.
4. Add a DNS CNAME for `docs` → the Pages host GitHub shows in settings.

To temporarily redirect `www.nobsportal.org` to the docs:

- Prefer a registrar/DNS URL forward from `www.nobsportal.org` → `https://docs.nobsportal.org/`.
- If forward isn’t available, CNAME `www` → `docs.nobsportal.org` (note: not a true HTTP redirect).

## Content guidelines

- Emphasize clear, non-technical explanations.
- Focus on user workflows and concepts.
- Keep pages short and actionable; link out for details.

## Inspired by

- https://github.com/cheminfo/ct-docs
