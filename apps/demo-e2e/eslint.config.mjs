import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/playwright-report', '**/test-results'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': ['error', { enforceBuildableLibDependency: true }],
    },
  },
  {
    files: ['**/*.ts'],
    rules: { '@typescript-eslint/no-non-null-assertion': 'off' },
  },
];
