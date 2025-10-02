# CI Troubleshooting: Gradle Probe Permissions

This repository is an Expo-managed React Native app and does not require local Gradle builds.

If your CI runs a command like `bash -lc "./gradlew"` and fails with "Permission denied":

Recommended options (any one of these):
1) Use the npm wrapper (preferred):
   - npm run gradle:probe

2) Use the Makefile target:
   - make gradle-check

3) Run the POSIX wrapper:
   - bash ./run-gradlew-ci.sh

4) Source the shim directly:
   - bash -lc "/bin/sh -lc '. ./gradlew'"

If your CI workflow cannot change the command, add a pre-step:
- bash ./scripts/ci-pre-exec.sh
- bash ./ci-ensure-gradlew-readable.sh

All paths above return success without invoking a native Android build.
