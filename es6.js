/**
 * ES6 specific config
 */

module.exports = {
  extends: ['airbnb/base', '@sampotts/eslint-config/rules/common'].map(require.resolve),
  plugins: [],
  rules: {},
};
