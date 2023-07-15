/* eslint-env node */

module.exports = {
	plugins: ['jest', 'testing-library'],
	extends: ['plugin:testing-library/react'],
	rules: {
		'jest/expect-expect': [
			'warn',
			{
				assertFunctionNames: ['expect', '*.getBy*', '*.getAllBy*', '*.findBy*', '*.findAllBy*'],
			},
		],
		'testing-library/prefer-wait-for': 'warn',
	},
};
