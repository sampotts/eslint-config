/**
 * Common rules
 */

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import', 'prettier'],
  rules: {
    // Prettier setup
    'prettier/prettier': 'error',

    // Fix up spacing between declarations
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
    ],

    // Sort imports
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
};
