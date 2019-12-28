module.exports = {
	env: {
		browser: true,
		es6: true,
		amd: true,
		node: true,
		mocha: true,
		jest: true,
		jquery: true
	},
	extends: ['alloy', 'alloy/react', 'alloy/typescript'],
	// "extends": "eslint:recommended",
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		// 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
		// "react/jsx-uses-react": 1, // import * as React -> 'React' is defined but never used
		// "semi": ["error", "always"], // semicolon
		"quotes": ["error", "double"],
		"no-console": 2,
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src/']]
			}
		}
	}
};
