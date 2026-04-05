#!/usr/bin/env node

import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const sourceArg = process.argv[2];
const targetArg = process.argv[3] || 'template';

if (!sourceArg) {
  console.error('Usage: node scripts/sync-template.mjs <source-dir> [target-dir]');
  process.exit(1);
}

const sourceDir = path.resolve(process.cwd(), sourceArg);
const targetDir = path.resolve(process.cwd(), targetArg);
const ignoredNames = new Set(['.git', 'node_modules', '.next', '.env.local', '.DS_Store']);

await rm(targetDir, { recursive: true, force: true });
await mkdir(targetDir, { recursive: true });

await cp(sourceDir, targetDir, {
  recursive: true,
  filter: source => {
    const name = path.basename(source);

    return !ignoredNames.has(name);
  },
});

console.log(`Synced template from ${sourceDir} to ${targetDir}`);
