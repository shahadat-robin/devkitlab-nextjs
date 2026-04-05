# @devkitlab/create-nextjs

Scaffold a DevkitLab Next.js starter with TypeScript, Tailwind CSS, and a ready-to-extend project structure.

## Why Use It

- Start faster with an opinionated Next.js setup
- Skip repetitive project bootstrapping
- Get a clean base for content-driven or product-focused apps
- Use a starter that already includes common developer tooling

## What You Get

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint and Prettier
- Husky and lint-staged
- Reusable starter structure for components and app sections

## Installation

Create a new app with:

```bash
npx @devkitlab/create-nextjs@latest my-app
```

Then move into the project and install dependencies:

```bash
cd my-app
npm install
npm run dev
```

You can also use `pnpm` or `yarn` instead of `npm`.

## Getting Started

After installation:

1. Create a `.env.local` file if you need environment variables.
2. Start the development server with `npm run dev`.
3. Open `http://localhost:3000`.
4. Begin editing the generated app.

## Generated Project Highlights

- App code lives in `app/`
- Shared UI and utilities live in `src/`
- Static assets live in `public/`
- Tailwind is preconfigured
- Linting and formatting are already set up

## Who It’s For

This starter is useful if you want:

- a modern Next.js + TypeScript base
- Tailwind configured out of the box
- a starter that can grow into a CMS-backed app
- a reusable foundation for client projects or internal tools
