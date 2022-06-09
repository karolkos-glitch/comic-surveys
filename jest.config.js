// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts","./src/**/*.tsx"],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(svg)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest-setup.ts']
};

module.exports = config;