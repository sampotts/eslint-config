/* eslint-env node */

/*
ESLint Rule Documentation Sites
https://eslint.org/docs/rules/
https://github.com/yannickcr/eslint-plugin-react
https://github.com/benmosher/eslint-plugin-import
https://github.com/testing-library/eslint-plugin-testing-library
https://github.com/jest-community/eslint-plugin-jest
https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
*/

module.exports = {
	extends: ['./configs/javascript.js', './configs/react-global.js'],
	overrides: [
		{
			extends: ['./configs/typescript.js'],
			files: ['*.{ts,tsx}'],
		},
		{
			extends: ['./configs/react.js'],
			files: ['*.{jsx,tsx}'],
		},
		{
			extends: ['./configs/jest.js'],
			files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
		},
		{
			extends: ['./configs/react-testing-library.js'],
			files: ['*.{test,spec}.{jsx,tsx}'],
		},
		{
			extends: ['plugin:prettier/recommended'],
			files: ['*'],
		},
	],
};
