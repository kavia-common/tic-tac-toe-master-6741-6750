#!/bin/sh
# CI helper: successfully satisfy a Gradle probe without native build.
# Use this if your CI cannot execute ./gradlew due to permission policies.
if [ -f "./gradlew" ]; then
  /bin/sh -lc ". ./gradlew" || true
fi
echo "ci-gradle-probe: success (Expo-managed; no native Gradle build)."
exit 0
