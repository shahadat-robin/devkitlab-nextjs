# @devkitlab/create-devkitlab-nextjs

CLI package for scaffolding the DevkitLab Next.js starter.

This repository is the npm package repo. The actual starter source lives in the separate template repository and is tracked here through the [`template/`](/Users/shahadat/projects/NextJs-Starter/template) Git submodule.

## Install and Use

Create a new project with:

```bash
npx @devkitlab/create-devkitlab-nextjs@latest my-app
```

Then start the generated app:

```bash
cd my-app
npm install
npm run dev
```

If you prefer, you can use `pnpm` or `yarn` instead of `npm`.

## What the CLI Generates

- Next.js App Router starter
- TypeScript
- Tailwind CSS
- Sanity starter wiring
- ESLint and Prettier
- Husky and lint-staged

## Repository Layout

- [`bin/`](/Users/shahadat/projects/NextJs-Starter/bin) contains the executable used by `npx`
- [`template/`](/Users/shahadat/projects/NextJs-Starter/template) is the starter template Git submodule
- [`.github/workflows/publish.yml`](/Users/shahadat/projects/NextJs-Starter/.github/workflows/publish.yml) publishes the package from GitHub Actions

## How Publishing Works

This package publishes through GitHub Actions using npm Trusted Publishing.

- Package repo: this repository
- Template repo: the repository pointed to by [`.gitmodules`](/Users/shahadat/projects/NextJs-Starter/.gitmodules)
- Package name: `@devkitlab/create-devkitlab-nextjs`
- Workflow: [`publish.yml`](/Users/shahadat/projects/NextJs-Starter/.github/workflows/publish.yml)

The workflow can run in three ways:

1. Push changes to `main` that affect [`package.json`](/Users/shahadat/projects/NextJs-Starter/package.json), [`.gitmodules`](/Users/shahadat/projects/NextJs-Starter/.gitmodules), or [`template/`](/Users/shahadat/projects/NextJs-Starter/template).
2. Trigger `repository_dispatch` from the template repo after template updates.
3. Run it manually with GitHub Actions `workflow_dispatch`.

During a template-triggered run, the workflow:

1. Updates the `template` submodule to the latest remote commit.
2. Bumps the package version with a patch release.
3. Commits the new submodule pointer back to `main`.
4. Publishes the package to npm if that version is not already published.

## One-Time Setup

### Package Repo

1. Create the npm package `@devkitlab/create-devkitlab-nextjs` if it does not exist yet by letting the first successful publish create it.
2. In npm package settings, add a Trusted Publisher for this GitHub repository and this workflow file: `publish.yml`.
3. If the template repository is private, add a GitHub Actions secret named `TEMPLATE_REPO_TOKEN` with read access to the template repo.

### Template Repo

Configure the template repo to notify this package repo when the template changes.

Example workflow for the template repo:

```yaml
name: Notify package repo

on:
  push:
    branches:
      - main

jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger package publish
        env:
          GH_TOKEN: ${{ secrets.PACKAGE_REPO_DISPATCH_TOKEN }}
        run: |
          curl -L \
            -X POST \
            -H "Accept: application/vnd.github+json" \
            -H "Authorization: Bearer ${GH_TOKEN}" \
            https://api.github.com/repos/shahadat-robin/devkitlab-nextjs/dispatches \
            -d '{"event_type":"template_updated","client_payload":{"ref":"main"}}'
```

`PACKAGE_REPO_DISPATCH_TOKEN` must have permission to dispatch workflows to the package repo.

## Updating the Template Manually

If you want to update the template submodule locally:

```bash
git submodule update --init --remote template
git add template .gitmodules
git commit -m "chore: update template submodule"
git push origin main
```

## Troubleshooting

- If GitHub Actions does not start after a push, confirm the commit changed [`package.json`](/Users/shahadat/projects/NextJs-Starter/package.json), [`.gitmodules`](/Users/shahadat/projects/NextJs-Starter/.gitmodules), or something inside [`template/`](/Users/shahadat/projects/NextJs-Starter/template).
- If npm publish fails with auth errors, verify the npm Trusted Publisher configuration exactly matches this repository and the workflow filename `publish.yml`.
- If the template repo is private and submodule checkout fails, verify `TEMPLATE_REPO_TOKEN` is present in GitHub Actions secrets.
