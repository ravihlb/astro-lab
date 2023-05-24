import { sveltekit } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev')
const basePath = dev ? '' : process.env.BASE_PATH;

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: [`${basePath}/src/**/*.{test,spec}.{js,ts}`]
	},
    server: {
        fs: {
            allow: ['static'],
        },
    },
};

export default config;
