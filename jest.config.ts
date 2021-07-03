/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
 clearMocks: true,
 collectCoverage: true,
 collectCoverageFrom: ['src/pages/**/*.tsx', 'src/components/**/*.tsx', 'src/hooks/*.tsx', '!src/hooks/index.tsx'],
 coverageDirectory: 'coverage',
 coverageReporters: ['text-summary', 'lcov'],
 moduleFileExtensions: ['tsx', 'ts', 'js', 'json'],
 preset: 'ts-jest',
 roots: ['<rootDir>/src'],
 setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
 testMatch: ['<rootDir>/src/__tests__/**/*.spec.{ts,tsx}'],
 transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
