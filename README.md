# @devkitlab/create-nextjs

Scaffold a production-ready Next.js starter with TypeScript, Tailwind CSS, and opinionated defaults.

## Quick Start

```bash
npx @devkitlab/create-nextjs@latest my-app
cd my-app
yarn
yarn dev
```

Open `http://localhost:3000`.

## What This Generates

- Next.js 16 App Router project
- React 19 + TypeScript setup
- Tailwind CSS configuration
- Theme support via `next-themes`
- ESLint + Prettier
- Husky + lint-staged
- Starter layout, section components, and reusable UI primitives
- CI workflow (`.github/workflows/ci.yml`) in generated project

## Generated Structure

```plaintext
app/                    # Routes, layouts, and page-level UI
src/components/         # Reusable UI components
src/utils/              # Utility helpers
public/                 # Static assets
```

## Common Usage

Create project in current directory:

```bash
npx @devkitlab/create-nextjs@latest .
```

Create project in a named directory:

```bash
npx @devkitlab/create-nextjs@latest my-app
```

## Requirements

- Node.js `>= 18.17.0`

## Notes

- The generated template is Yarn-first (`preinstall` enforces Yarn).
- Repo-only workflow files are not copied into generated apps. In particular, `notify-package-repo.yml` is excluded.

## For Maintainers

This package repo publishes updates from the template submodule via GitHub Actions.

- Publish workflow: `.github/workflows/publish.yml`
- Triggered by template update dispatch or package changes
- Publishes only when the current package version is not already on npm

## Links

- npm: `@devkitlab/create-nextjs`
- repository: `https://github.com/devkit-lab/create-nextjs`
- issues: `https://github.com/devkit-lab/create-nextjs/issues`
