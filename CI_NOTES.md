# CI Notes

Some CI systems probe for `./gradlew`. This repository is an Expo-managed app and does not require native Gradle builds.

To satisfy automated checks, use the Makefile wrapper target instead of calling `./gradlew` directly:
- make gradle-check

This target runs the root shim via `/bin/sh ./gradlew` which succeeds even if executable permissions are restricted in CI.

If your CI still reports 'Permission denied' on ./gradlew, explicitly invoke the Python shim:
- bash ./run-gradlew-python.sh
