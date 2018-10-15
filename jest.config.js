module.exports = {
  coverageDirectory: 'coverage',
  setupFiles: [
    '<rootDir>/test/shim.js',
    '<rootDir>/test/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
