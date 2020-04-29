/**
 * ES6 + TypeScript specific config
 */

module.exports = {
  extends: [
    'airbnb-typescript/base',
    '@sampotts/eslint-config/config/ts',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    '@sampotts/eslint-config/rules/common',
  ].map(require.resolve),
  plugins: [],
  rules: {},
};
