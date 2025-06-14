import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'amf_host',
      shared: {
        vue: {
          eager: true,
          import: 'vue',
          shareKey: 'vue',
          shareScope: 'default',
          singleton: true,
        },
        'vue-router': {
          eager: true,
          import: 'vue-router',
          shareKey: 'vue-router',
          shareScope: 'default',
          singleton: true,
        },
        '@amf/stores': {
          eager: true,
          import: '@amf/stores',
          shareKey: '@amf/stores',
          shareScope: 'default',
          singleton: true,
          version: '0.0.1',
        },
      },
    }),
  ],
  output: {
    distPath: {
      root: '../../dist/host-app',
    },
  },
  html: {
    title: 'Admin MF',
  },
  server: {
    port: import.meta.env.PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss],
      },
    },
  },
});
