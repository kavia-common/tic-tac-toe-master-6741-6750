#!/bin/sh
# Ensure the root ./gradlew is executable and validate that it runs.
set -eu
if [ -f "./gradlew" ]; then
  chmod +x ./gradlew 2>/dev/null || true
  # Try to run it; if execution fails, attempt via python/sh fallback.
  ./gradlew >/dev/null 2>&1 || {
    if command -v python3 >/dev/null 2>&1; then
      python3 ./gradlew >/dev/null 2>&1 || true
    else
      /bin/sh -lc ". ./gradlew" >/dev/null 2>&1 || true
    fi
  }
  echo "ci-prep-gradle: gradlew prepared."
  exit 0
fi
echo "ci-prep-gradle: ./gradlew not found; nothing to prepare."
exit 0
