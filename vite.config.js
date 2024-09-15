import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: 3000,
      hot: true,
    },
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        find: "@vue/runtime-core",
        replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
      },
    },
    plugins: [vue()],
    watchOptions: {
      poll: true,
    },
    build: {
      outDir: "dist",
    },
  };
});
