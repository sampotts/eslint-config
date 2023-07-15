/* eslint-env node */

module.exports = {
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		project: true,
	},
	overrides: [
		{
			files: ['*.test.ts', '*.spec.ts'],
			rules: {
				'no-unsafe-return': 'off',
			},
		},
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
		// Use noImplicitReturns in tsconfig instead
		'consistent-return': 'off',
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/consistent-type-assertions': [
			'warn',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never',
			},
		],
		'@typescript-eslint/consistent-type-imports': 'warn',
		'@typescript-eslint/explicit-member-accessibility': 'warn',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'warn',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/prefer-ts-expect-error': 'warn',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/unified-signatures': 'warn',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowBoolean: true,
				allowNumber: true,
			},
		],

		// TODO: Re-enable at a later date
		// Fix TypeScript extension issues
		// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
		// https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
