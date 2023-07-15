/* eslint-env node */

module.exports = {
	plugins: ['react', 'react-hooks'],
	extends: ['plugin:react-hooks/recommended'],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
	},
};
