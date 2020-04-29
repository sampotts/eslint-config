/**
 * React specific rules
 */

module.exports = {
  rules: {
    // Disallow use of variables before they are defined (overrides root config)
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    // Ignore issues with line breaks as Git handles all
    'linebreak-style': 'off',

    // Use indent rule for spacing, so disable others
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',

    // Ignore new lines for object curlies
    'object-curly-newline': 'off',

    // Line length handled by Prettier
    'max-len': 'off',

    // We use .js extension
    'react/jsx-filename-extension': 'off',

    // Live life on the edge...
    'react/no-danger': 'off',

    // Adjusted to remove nested requirement and allow children inside label
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: 'id',
        allowChildren: true,
      },
    ],

    // Allow adjacent label/input
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
};
