/**
 * Common rules for TypeScript
 */

module.exports = {
  rules: {
    // Fix TypeScript extension issues
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Let prettier take care of it
    '@typescript-eslint/indent': 'off',

    // This one is annoying
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
