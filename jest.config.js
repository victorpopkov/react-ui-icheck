module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/*.config.js',
    '!**/coverage/**',
    '!**/index.js',
    '!**/node_modules/**',
    '!.eslintrc.js',
  ],
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['<rootDir>/.github/', '<rootDir>/lib/'],
  setupFiles: ['<rootDir>/tests/shim.js', '<rootDir>/tests/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
