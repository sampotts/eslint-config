/**
 * React + TypeScript specific config
 */

module.exports = {
  extends: [
    'airbnb-typescript',
    '@sampotts/eslint-config/config/ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    '@sampotts/eslint-config/rules/react',
  ].map(require.resolve),
  plugins: [],
  rules: {},
};
