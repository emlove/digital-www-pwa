const nx = require('@nx/eslint-plugin');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
      pluginImport: eslintPluginImport,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      curly: 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: 'Do not import React. Use named imports instead.',
            },
          ],
        },
      ],
      'pluginImport/newline-after-import': 'warn',
      'pluginImport/no-absolute-path': 'error',
      'pluginImport/no-dynamic-require': 'error',
      'pluginImport/no-mutable-exports': 'error',
      'pluginImport/no-self-import': 'error',
      'pluginImport/no-useless-path-segments': 'error',
      'pluginImport/no-webpack-loader-syntax': 'error',
      'pluginImport/default': 'off',
      'pluginImport/named': 'off',
      'pluginImport/namespace': 'off',
      'pluginImport/no-cycle': 'off',
      'pluginImport/no-deprecated': 'off',
      'pluginImport/no-named-as-default': 'off',
      'pluginImport/no-named-as-default-member': 'off',
      'pluginImport/no-namespace': 'off',
      'pluginImport/no-unused-modules': 'off',
      'pluginImport/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: '@lof-digital-www/**',
              group: 'internal',
            },
          ],
        },
      ],
      'unicorn/catch-error-name': ['warn', { name: 'err' }],
      'prefer-template': 'warn',
      'template-curly-spacing': ['warn', 'never'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
