/**
 * React + TypeScript specific config
 */

module.exports = {
  extends: ['eslint-config-airbnb-typescript', '@sampotts/eslint-config/config/ts', 'prettier/@typescript-eslint', '@sampotts/eslint-config/rules/react'].map(
    require.resolve,
  ),
  plugins: [],
  rules: {},
};
