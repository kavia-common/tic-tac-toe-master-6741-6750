#!/bin/sh
# Ensures gradlew shims are executable and provides a fallback no-op if chmod not allowed.
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
ROOT_SHIM="$ROOT_DIR/gradlew"
APP_SHIM="$ROOT_DIR/mobile_frontend/gradlew"
ANDROID_SHIM="$ROOT_DIR/mobile_frontend/android/gradlew"

# Try to set executable bits; ignore failures
chmod +x "$ROOT_SHIM" 2>/dev/null || true
chmod +x "$APP_SHIM" 2>/dev/null || true
chmod +x "$ANDROID_SHIM" 2>/dev/null || true

# Sanity check: if still not executable, print info and exit 0 (no-op)
if [ ! -x "$ROOT_SHIM" ]; then
  echo "ci-pre-exec: ./gradlew may not be executable in this CI environment. Using no-op fallback."
fi

exit 0
