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
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  setupFiles: ['<rootDir>/test/shim.js', '<rootDir>/test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
