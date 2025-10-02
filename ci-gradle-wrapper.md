# CI Gradle Wrapper Behavior

This project is Expo-managed and does not require native Gradle builds.
Some CI systems still probe for `./gradlew`. To prevent failures:

- Prefer running: `bash ./run-gradlew-ci.sh`
- Alternatively: `make gradle-check`
- If CI insists on `./gradlew`, ensure it is invoked through a shell:
  - `bash -lc "/bin/sh -lc '. ./gradlew'"`

All wrappers are no-ops and return success.
