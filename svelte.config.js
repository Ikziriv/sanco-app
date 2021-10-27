/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* jshint esversion: 9 */

// command env properties
const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'vercel';
const isAMP = process.env.AMP ? true : false;

import { imagetools } from 'vite-imagetools';
import { mdsvex } from 'mdsvex';

import preprocess from 'svelte-preprocess';
import vercelAdapter from '@sveltejs/adapter-vercel';
import nodeAdapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';
import { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Custom require function as replacement for the require from the commonJS in ES Module

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line
const options = JSON.stringify(process.env.OPTIONS || '{}');
const getAdapters = (adapt) => {
	switch (adapt) {
		case 'node':
			return nodeAdapter;
		case 'static':
			return staticAdapter;
		case 'vercel':
			return vercelAdapter;
		default:
			return nodeAdapter;
	}
};

const adapter = getAdapters(adapt);
const extensions = [`.svelte`, '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			sass: true,
			scss: {
				// prependData: `@import 'src/styles/variables/index.scss';`,
				outputStyle: 'compressed',
			},
			preserve: ['ld+json'],
		}),
		mdsvex({ extensions: extensions }),
	],

	kit: {
		adapter: vercelAdapter(),
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					$hooks: resolve(__dirname, './src/hooks'),
					$components: resolve(__dirname, './src/components'),
					$lib: resolve(__dirname, './src/lib'),
					$stores: resolve(__dirname, './src/lib/stores'),
				}
			},
			plugins: [imagetools({ force: true })],
		})
	}
};

if (hasAdapter) {
	config.kit.adapter = adapter(options);
}

if (config.kit?.adapter?.name === '@sveltejs/adapter-static') {
	config.kit.prerender = {
		crawl: true,
		enabled: true
	};
}

export default config;
