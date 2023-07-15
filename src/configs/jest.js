/* eslint-env node */

module.exports = {
	plugins: ['jest'],
	globals: {
		screen: 'off',
	},
	extends: ['plugin:jest/recommended', 'plugin:jest/style'],
	rules: {
		'jest/no-if': 'error',
		'jest/no-test-return-statement': 'error',
		'jest/prefer-strict-equal': 'error',
		'jest/require-top-level-describe': 'error',
		'jest/consistent-test-it': [
			'warn',
			{
				withinDescribe: 'test',
			},
		],
		'max-lines-per-function': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
	},
};
