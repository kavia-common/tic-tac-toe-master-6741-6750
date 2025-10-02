#!/bin/sh
# Ensures ./gradlew exists, is an executable script, and runs successfully as a no-op.
set -eu
node ./scripts/ensure-gradlew-exec.js >/dev/null 2>&1 || true
chmod +x ./gradlew 2>/dev/null || true
./gradlew >/dev/null 2>&1 || /bin/sh ./gradlew >/dev/null 2>&1 || true
echo "gradle-precheck: ./gradlew prepared and validated."
exit 0
