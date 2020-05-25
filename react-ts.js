/**
 * React + TypeScript specific config
 */

module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    '@sampotts/eslint-config/config/ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    '@sampotts/eslint-config/rules/common',
    '@sampotts/eslint-config/rules/react',
    '@sampotts/eslint-config/rules/ts',
  ].map(require.resolve),
  plugins: [],
  rules: {},
};
