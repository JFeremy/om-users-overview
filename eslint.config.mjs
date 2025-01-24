import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:tailwindcss/recommended',
  ),
  ...compat.plugins(
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
  ),
  ...compat.config({
    env: {
      browser: true,
      es2024: true,
      jest: true,
      node: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
    globals: {
      React: true,
      JSX: true,
    },
    ignorePatterns: [
      '.next',
      'node_modules',
      'out',
      'public',
      'plop-templates',
      'CHANGELOG.md',
      'src/components/ui',
    ],
  }),
];

export default eslintConfig;
