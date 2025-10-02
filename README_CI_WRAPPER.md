# CI Wrapper Usage

This repository is an Expo-managed app; local Gradle builds are not required.

If your CI probes for `./gradlew` and encounters permission errors, use the wrapper npm script at the repository root:
- npm run gradle:probe

This calls a shell-based script that executes the root `gradlew` no-op via `/bin/sh`, avoiding executable permissions issues.
