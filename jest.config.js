module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/index.js',
    '!**/*.config.js',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['<rootDir>/.github/', '<rootDir>/lib/'],
  setupFiles: ['<rootDir>/tests/shim.js', '<rootDir>/tests/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
