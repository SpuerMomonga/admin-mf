import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig({
  plugins: [
    federation({
      name: "amf_template",
      filename: "remoteEntry.js",
      shared: {
        vue: {
          // @ts-expect-error 有这个参数
          import: false,
          singleton: true,
          shareScope: "default",
        },
      },
      exposes: {
        "./TestPage": "./src/pages/TestPage.vue",
      },
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "../../dist/app-template",
  },
  server: {
    port: 5002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
