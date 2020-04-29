/**
 * React specific config
 */

module.exports = {
  extends: ['airbnb', '@sampotts/eslint-config/rules/common', '@sampotts/eslint-config/rules/react'].map(require.resolve),
  plugins: [],
  rules: {},
};
