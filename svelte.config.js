import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';
import path from "path"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
	],

	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					'src': path.resolve('./src')
				}
			},
			server: {
				proxy: {
					// '/service': 'http://134.209.212.127:3003',
					// '/api': {
					//     target: 'http://134.209.212.127:3003',
					//     changeOrigin: true,
					//     rewrite: (p) => p.replace(/^\/api/, '')
					// }
				},
			},
			plugins: [imagetools({ force: true })],
		})
	}
};

export default config;
