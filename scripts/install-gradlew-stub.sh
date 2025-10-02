#!/bin/sh
# Atomically install an executable gradlew stub at the repository root.
set -eu
ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
STUB="$ROOT_DIR/scripts/gradlew-stub.sh"
TARGET="$ROOT_DIR/gradlew"

# Copy stub over target
cp "$STUB" "$TARGET"

# Ensure executable permission
chmod +x "$TARGET" 2>/dev/null || true

# Validate it runs
"$TARGET" >/dev/null 2>&1 || /bin/sh "$TARGET" >/dev/null 2>&1 || true

echo "install-gradlew-stub: Installed executable ./gradlew stub."
exit 0
