# ExtensionChecker Site

[![CI/CD](https://github.com/extensionchecker/extensionchecker-site/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/extensionchecker/extensionchecker-site/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/badge/CodeQL-passing-brightgreen?logo=github&logoColor=white)](https://github.com/extensionchecker/extensionchecker-site/security/code-scanning)
[![tests](https://img.shields.io/github/actions/workflow/status/extensionchecker/extensionchecker-site/ci.yml?branch=main&label=tests&logo=githubactions&logoColor=white)](https://github.com/extensionchecker/extensionchecker-site/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/extensionchecker/extensionchecker-site/branch/main/graph/badge.svg)](https://codecov.io/gh/extensionchecker/extensionchecker-site)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](https://github.com/extensionchecker/extensionchecker-site/security/dependabot)
[![issues](https://img.shields.io/github/issues/extensionchecker/extensionchecker-site?label=issues)](https://github.com/extensionchecker/extensionchecker-site/issues)
[![last commit](https://img.shields.io/github/last-commit/extensionchecker/extensionchecker-site?label=last%20commit)](https://github.com/extensionchecker/extensionchecker-site/commits/main)
[![pull requests](https://img.shields.io/github/issues-pr/extensionchecker/extensionchecker-site?label=pull%20requests)](https://github.com/extensionchecker/extensionchecker-site/pulls)

<img src="docs/logo/icon.png" alt="ExtensionChecker logo" width="100" />

The public marketing and information site for [ExtensionChecker](https://github.com/extensionchecker/extensionchecker-app) — a free, open-source browser extension scanner. If you want full control, [self-host your own instance](https://github.com/extensionchecker/extensionchecker-app/blob/main/docs/SELF_HOSTING.md).

> [!TIP]
> **Live site:** [extensionchecker.org](https://extensionchecker.org)<br>
> **Scanner app:** [app.extensionchecker.org](https://app.extensionchecker.org)<br>
> **GitHub:** [github.com/extensionchecker](https://github.com/extensionchecker)

## What is this repo?

This repo contains the landing page, FAQ, Terms of Use, and Privacy Policy for the ExtensionChecker project. It is a static site built with Vite, React, and TypeScript and deployed to Cloudflare Pages.

The actual scanner application lives in [extensionchecker-app](https://github.com/extensionchecker/extensionchecker-app).

## Project structure

```
docs/               Markdown content (FAQ, Terms, Privacy)
src/
  app/              React components, pages, styles, hooks
  public/           Static assets (images, favicon, theme-init)
  index.html        Home page entry
  faq/index.html    FAQ page entry
  terms/index.html  Terms page entry
  privacy/index.html Privacy page entry
  vite.config.ts    Vite build configuration
  vitest.config.ts  Test configuration
wrangler.toml       Cloudflare Pages deployment config
```

## Getting started

### Prerequisites

- **Node.js 22** (see `.nvmrc`)
- npm

### Local development

```bash
cd src
npm install
npm run dev
```

The dev server starts at `http://localhost:4327`.

### Available scripts

All scripts run from the `src/` directory:

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the Vite dev server                |
| `npm run build`      | Type-check and build for production      |
| `npm run preview`    | Preview the production build locally     |
| `npm run lint`       | Run ESLint with zero warnings allowed    |
| `npm run test`       | Run tests with Vitest                    |
| `npm run test:coverage` | Run tests with code coverage          |

### Editing content

The FAQ, Terms of Use, and Privacy Policy are authored as Markdown files in the `docs/` directory. Edit them there and the site will pick up changes on the next build. GitHub Flavored Markdown and admonition callouts (`> [!NOTE]`, `> [!WARNING]`, etc.) are supported.

## Deployment

The site is deployed to Cloudflare Pages. To deploy manually:

```bash
cd src && npm run build && cd ..
npx wrangler pages deploy
```

CI/CD via GitHub Actions handles this automatically on pushes to `main`.

## Contributing

Bug reports, feature ideas, documentation improvements, and pull requests are all welcome. Please open an issue first for larger changes so we can discuss the approach.

This project is part of the [ExtensionChecker organization](https://github.com/extensionchecker).

## License

MIT — see [LICENSE](LICENSE) for details.
