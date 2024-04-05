module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/index.js'],
  modulePathIgnorePatterns: ['<rootDir>/.github/', '<rootDir>/lib/'],
  setupFiles: ['<rootDir>/tests/shim.js', '<rootDir>/tests/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
};
