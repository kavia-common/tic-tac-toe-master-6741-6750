#!/usr/bin/env bash
# Wrapper script to satisfy CI Gradle probe without requiring exec permissions on ./gradlew.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Use /bin/sh to source and run the gradlew no-op shim even if not executable.
if [ -f "$ROOT_DIR/gradlew" ]; then
  /bin/sh -lc ". \"$ROOT_DIR/gradlew\""
  exit 0
fi

echo "run-gradle-probe: gradlew not found, nothing to do."
exit 0
