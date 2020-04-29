/**
 * ES6 specific config
 */

module.exports = {
  extends: ['eslint-config-airbnb/base', '@sampotts/eslint-config/rules/common'].map(require.resolve),
  plugins: [],
  rules: {},
};
