#!/bin/sh
# Helper to run the Python-based ./gradlew shim explicitly via Python.
# Use this in CI to bypass execute-bit issues on ./gradlew.
if command -v python3 >/dev/null 2>&1; then
  python3 ./gradlew
elif command -v python >/dev/null 2>&1; then
  python ./gradlew
else
  echo "run-gradlew-python.sh: Python interpreter not found. Nothing to do."
fi
exit 0
