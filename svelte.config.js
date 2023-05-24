import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  kit: {
    alias: {
        '@components/*': 'src/components/*',
    },
    adapter: adapter(),
    paths: {
        base: dev ? '' : process.env.BASE_PATH
    },
    prerender: {
        entries: [
            '*',
            '/src/routes/*'
        ]
    }
  },
};

export default config;
