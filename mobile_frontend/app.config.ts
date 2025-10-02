import { ExpoConfig } from 'expo/config';

/**
 * PUBLIC_INTERFACE
 * Expo app config (managed workflow clarification).
 * This config mirrors app.json but is provided as TypeScript for tooling clarity.
 */
export default (): ExpoConfig => ({
  name: 'reactnative',
  slug: 'reactnative',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: { supportsTablet: true },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    // Managed workflow note: local gradle builds are not required for CI.
    // This is informational only and does not affect runtime behavior.
  },
  web: { favicon: './assets/favicon.png' },
});
