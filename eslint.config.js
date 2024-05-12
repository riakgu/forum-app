import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginCypress from 'eslint-plugin-cypress';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended
});

export default [
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node}
    }
  },
  ...compat.extends('airbnb'),
  // pluginReactConfig,
  {
    // plugins: ['cypress'],
    // env: {
    //   'cypress/globals': true
    // },
    // extends: ['plugin:cypress/recommended'],
    ignores: ['src/stories/'],
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': 'off',
      'import/no-extraneous-dependencies': 'off',
    }
  }
];
