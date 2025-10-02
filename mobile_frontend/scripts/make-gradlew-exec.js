#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * make-gradlew-exec
 * Ensures gradlew shims are executable to avoid CI "Permission denied" errors.
 *
 * This script is safe to run multiple times and on all platforms.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Compute __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  path.join(__dirname, '..', 'gradlew'),
  path.join(__dirname, '..', 'android', 'gradlew'),
];

for (const f of files) {
  try {
    if (fs.existsSync(f)) {
      // 0o755 (rwxr-xr-x)
      fs.chmodSync(f, 0o755);
      console.log(`[make-gradlew-exec] Set executable permission on: ${f}`);
    }
  } catch (e) {
    console.warn(`[make-gradlew-exec] Failed to chmod ${f}:`, e?.message || e);
  }
}
