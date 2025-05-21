import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "amf_host",
      shared: {
        vue: {
          // @ts-expect-error 有这个参数
          import: "vue",
          singleton: true,
          shareScope: "default",
        },
      },
      exposes: {},
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "../../dist/app-host",
  },
  server: {
    port: 5001,
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
