import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter({
      // fallback: '404.html'
    }),
  },
  paths: {
    base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
  },
};

export default config;
