#!/usr/bin/env node

import { cp, mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.resolve(__dirname, '..', 'template');

const rawProjectName = process.argv[2] || 'my-devkitlab-app';
const projectName = rawProjectName.trim();

if (!projectName) {
  console.error('Project name cannot be empty.');
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);

try {
  await mkdir(targetDir, { recursive: true });
  const existingEntries = await readdir(targetDir);

  if (existingEntries.length > 0) {
    console.error(`Target directory is not empty: ${targetDir}`);
    process.exit(1);
  }

  await cp(templateDir, targetDir, {
    recursive: true,
    filter: source => {
      const relativePath = path.relative(templateDir, source);

      return relativePath !== '.DS_Store';
    },
  });

  await renameIfExists(path.join(targetDir, 'gitignore'), path.join(targetDir, '.gitignore'));
  await renameIfExists(path.join(targetDir, 'env.example'), path.join(targetDir, '.env.example'));

  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));

  packageJson.name = toPackageName(projectName);

  await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

  const packageManager = detectPackageManager();

  console.log('');
  console.log('DevkitLab Next.js starter created successfully.');
  console.log('');
  console.log('Next steps:');
  console.log(`  cd ${projectName}`);
  console.log(`  ${packageManager} install`);
  console.log(`  ${packageManager} run dev`);
  console.log('');
} catch (error) {
  console.error('Failed to create project.');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

function toPackageName(value) {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9-_]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'my-devkitlab-app'
  );
}

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent || '';

  if (userAgent.startsWith('yarn')) {
    return 'yarn';
  }

  if (userAgent.startsWith('pnpm')) {
    return 'pnpm';
  }

  return 'npm';
}

async function renameIfExists(fromPath, toPath) {
  try {
    await rename(fromPath, toPath);
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return;
    }

    throw error;
  }
}
