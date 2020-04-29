/**
 * React + TypeScript specific config
 */

module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    '@sampotts/eslint-config/config/ts',
    '@sampotts/eslint-config/rules/common',
    '@sampotts/eslint-config/rules/react',
  ].map(require.resolve),
  plugins: [],
  rules: {},
};
