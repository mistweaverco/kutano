import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSvelte from 'eslint-plugin-svelte';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	eslintPluginPrettierRecommended
);
