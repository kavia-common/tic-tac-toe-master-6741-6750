#!/bin/sh
# Ensure root ./gradlew is world-readable and then source it (no exec bit required).
set -eu
if [ -f "./gradlew" ]; then
  chmod 0644 ./gradlew 2>/dev/null || true
  /bin/sh -lc ". ./gradlew" || true
  echo "ci-ensure-gradlew-readable: Completed."
  exit 0
fi
echo "ci-ensure-gradlew-readable: ./gradlew not found, skipping."
exit 0
