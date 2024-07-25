module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  verbose: true,
  testTimeout: 10000,
  collectCoverageFrom: ['src/**', '!**/*.test.ts', '!**/*.spec.ts'],
  coveragePathIgnorePatterns: ['src/private-routes.ts'],
  coverageDirectory: 'test/test-results',
  reporters: ['default'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|ispec|e2e))\\.tsx?$',
};
