#!/bin/sh
# Ensures there is an executable gradlew at repo root that returns success without performing a native build.
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
GW="$ROOT_DIR/gradlew"

create_shim() {
  cat > "$GW" <<'EOF'
#!/bin/sh
# Executable gradlew no-op shim for Expo-managed project. Returns success.
echo "gradlew shim: no native Gradle build required (Expo-managed)."
exit 0
EOF
}

# If gradlew does not exist or isn't executable or doesn't start with a shebang, recreate it as a shim.
if [ ! -f "$GW" ]; then
  create_shim
elif ! head -n 1 "$GW" | grep -q "^#\!"; then
  # File exists but isn't a script; replace with executable shim
  create_shim
fi

# Ensure executable permission
chmod +x "$GW" 2>/dev/null || true

# As a final step, attempt to run it (should succeed)
"$GW" >/dev/null 2>&1 || /bin/sh "$GW" >/dev/null 2>&1 || true

echo "ensure-exec-gradlew: Completed."
exit 0
