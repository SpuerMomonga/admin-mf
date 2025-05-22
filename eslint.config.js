import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tsEslint.config(
  {
    ignores: ['**/node_modules', '**/build', '**/dist', '**/pnpm-lock.yaml', '.vscode', '**/*.d.ts'],
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        parser: tsEslint.parser,
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      indent: 'off',
    },
  },
  eslintPluginPrettierRecommended,
);
