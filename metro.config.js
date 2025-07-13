const { withNativeWind } = require('nativewind/metro');
const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/globals.css' })

// use this conf if sentry is uninstalled
// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require('nativewind/metro');
// const config = getDefaultConfig(__dirname)
// module.exports = withNativeWind(config, { input: './app/globals.css' })