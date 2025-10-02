#!/usr/bin/env bash
# Alternative bash stub for CI systems that specifically look for a bash gradle wrapper.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="$SCRIPT_DIR/mobile_frontend/gradlew"

chmod +x "$TARGET" >/dev/null 2>&1 || true
if [ -x "$TARGET" ]; then
  exec "$TARGET" "$@"
else
  /bin/sh "$TARGET" "$@"
  exit $?
fi
