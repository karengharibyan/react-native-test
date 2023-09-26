module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@store': './src/store',
          '@types': './src/types',
          '@styles': './src/styles',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@enums': './src/enums',
          '@configs': './src/configs',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
