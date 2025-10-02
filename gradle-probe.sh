#!/bin/sh
# CI helper to run the no-op gradle shim via a shell.
if [ -f "./gradlew" ]; then
  /bin/sh -lc ". ./gradlew"
  exit $?
fi
echo "gradle-probe.sh: gradlew not found. Nothing to do."
exit 0
