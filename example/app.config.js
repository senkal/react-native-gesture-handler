export default ({ config }) => ({
  ...config,
  name: 'example',
  slug: 'example',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F8F9FF',
  },
  ios: {
    bundleIdentifier: 'com.example.gestures',
    buildNumber: '1',
    supportsTablet: true,
  },
  android: {
    versionCode: 1,
    package: 'com.example.gestures',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#F8F9FF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-camera',
      {
        cameraPermission: 'Allow RNGH example to access your camera',
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './node_modules/@swmansion/icons/fonts/broken/swm-icons-broken.ttf',
          './node_modules/@swmansion/icons/fonts/outline/swm-icons-outline.ttf',
          './node_modules/@swmansion/icons/fonts/curved/swm-icons-curved.ttf',
        ],
      },
    ],
  ],
  newArchEnabled: Boolean(Number(process.env.FABRIC_ENABLED)),
});
