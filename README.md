# create-devkitlab-nextjs

`create-devkitlab-nextjs` scaffolds a DevkitLab-flavored Next.js starter with TypeScript, Tailwind CSS, and the bundled project template.

## Usage

```bash
npx create-devkitlab-nextjs@latest my-app
```

Then:

```bash
cd my-app
npm install
npm run dev
```

## What It Generates

- Next.js + App Router
- TypeScript
- Tailwind CSS
- Sanity starter wiring
- ESLint, Prettier, Husky, and lint-staged

## Publish

GitHub can publish this package to npm for you.

### Repository setup

- Keep this repo as the npm package repo.
- Keep the starter app in a separate template repo.

### One-time setup in the package repo

1. Create an npm access token at `npmjs.com`.
2. Add it to your GitHub repository secrets as `NPM_TOKEN`.
3. Add a repository variable named `TEMPLATE_REPOSITORY`, for example `your-org/devkitlab-nextjs-template`.
4. If the template repo is private, add a secret named `TEMPLATE_REPO_TOKEN` with read access to that repo.
5. Make sure the package name in `package.json` is available on npm.

### One-time setup in the template repo

When the template repo is pushed, it should send a `repository_dispatch` event to this package repo. A minimal workflow in the template repo looks like this:

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
            https://api.github.com/repos/shahadat-robin/nextjs-page-rendering/dispatches \
            -d '{"event_type":"template_updated","client_payload":{"ref":"main"}}'
```

The `PACKAGE_REPO_DISPATCH_TOKEN` secret should be a GitHub token that can dispatch workflows to the package repo.

### Release flow

1. Push changes to the template repo.
2. The template repo dispatches `template_updated` to the package repo.
3. The package repo workflow checks out the latest template, syncs it into [`template/`](/Users/shahadat/projects/NextJs-Starter/template), bumps the npm package version, commits the sync, and publishes to npm.

You can also run the same package workflow manually from GitHub Actions with `workflow_dispatch`, or continue publishing from a GitHub Release if you prefer.
