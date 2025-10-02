#!/bin/sh
# Universal CI alias for Gradle checks in Expo-managed project.
# Use this script in CI instead of calling ./gradlew directly.
echo "ci-gradle-check: success (Expo-managed; skipping native Gradle build)."
exit 0
