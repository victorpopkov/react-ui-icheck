module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/lib/**',
    '!**/node_modules/**',
    '!**/website/**',
    '!*.config.js',
  ],
  coverageDirectory: 'coverage',
  setupFiles: [
    '<rootDir>/test/shim.js',
    '<rootDir>/test/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
