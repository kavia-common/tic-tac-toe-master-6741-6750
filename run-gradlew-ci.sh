#!/usr/bin/env bash
# Forces execution of ./gradlew via /bin/sh to bypass executable permission requirements in CI.
set -euo pipefail
if [ -f "./gradlew" ]; then
  /bin/sh -lc ". ./gradlew"
  exit 0
else
  echo "run-gradlew-ci.sh: ./gradlew not found, skipping."
  exit 0
fi
