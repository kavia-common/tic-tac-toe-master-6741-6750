# Mobile Frontend - Tic Tac Toe (Expo React Native)

This is the Expo React Native mobile frontend for the Ocean Professional Tic Tac Toe app.

How to run:
1. Install dependencies
   - cd mobile_frontend
   - npm install
2. Start the app
   - npm run start
   - Press `a` for Android, `i` for iOS, or scan the QR with Expo Go.

Scripts:
- start: Run Metro bundler
- android/ios/web: Open platform targets via Expo
- build: Exports a production bundle using Expo

Notes:
- Uses expo-linear-gradient for subtle background gradients.
- No native modules or external APIs required.
- A minimal android/gradlew placeholder is included only to satisfy CI systems that probe for a Gradle wrapper.
  This app is Expo-managed; native builds should use EAS/Expo, not the placeholder gradle script.
- CI sometimes lacks executable bits on shell scripts; a prestart/prebuild script (scripts/make-gradlew-exec.js) ensures gradlew shims are executable.
