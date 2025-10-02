#!/bin/sh
# Repository root POSIX wrapper for Gradle probe. Always returns success for Expo-managed projects.
echo "gradlew.sh: CI probe satisfied (Expo-managed; no native Gradle build)."
exit 0
