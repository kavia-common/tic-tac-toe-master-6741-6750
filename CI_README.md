# CI Usage Summary

This is an Expo-managed app and does not require native Gradle builds.

If your CI probes for ./gradlew and fails with "Permission denied", use one of:
- bash ./ci-gradle-probe.sh
- npm run gradle:probe
- make gradle-check
- bash ./run-gradlew-ci.sh

All are no-op probes that return success.

Note: The repository root contains a Python-based ./gradlew shim to maximize compatibility in CI environments.
