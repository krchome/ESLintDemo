/* import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    extends: ['prettier'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
]; */
import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  prettierConfig,
  {
    rules: {
      semi: ['error', 'always'], // Enforce semicolons
      quotes: ['error', 'single'], // Prefer single quotes
    },
  },
];
