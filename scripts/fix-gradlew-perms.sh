#!/usr/bin/env bash
# Ensures gradlew shims are executable for CI.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

chmod +x "$ROOT_DIR/gradlew" >/dev/null 2>&1 || true
chmod +x "$ROOT_DIR/mobile_frontend/gradlew" >/dev/null 2>&1 || true
chmod +x "$ROOT_DIR/mobile_frontend/android/gradlew" >/dev/null 2>&1 || true

echo "Gradlew permissions ensured."
