import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
	plugins: [sveltekit()]
});
