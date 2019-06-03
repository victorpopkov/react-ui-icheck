module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '!src/index.js',
    '!**/coverage/**',
    '!**/lib/**',
    '!**/node_modules/**',
    '!*.config.js',
    '**/*.{js,jsx}',
  ],
  coverageDirectory: 'coverage',
  setupFiles: [
    '<rootDir>/test/shim.js',
    '<rootDir>/test/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
