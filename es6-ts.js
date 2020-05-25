/**
 * ES6 + TypeScript specific config
 */

module.exports = {
  extends: [
    'eslint-config-airbnb-typescript/base',
    '@sampotts/eslint-config/config/ts',
    '@sampotts/eslint-config/rules/common',
    '@sampotts/eslint-config/rules/ts',
  ].map(require.resolve),
  plugins: [],
  rules: {},
};
