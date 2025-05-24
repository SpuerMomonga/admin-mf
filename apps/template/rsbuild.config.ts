import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import tailwindcss from 'tailwindcss';
import path from 'path';
import { globSync } from 'glob';

// 将横杠/下划线命名转换为大驼峰命名
function toPascalCase(str: string) {
  return str
    .replace(/[-_]/g, ' ') // 将横杠或下划线替换为空格
    .split(' ') // 按空格分割成单词数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(''); // 拼接为大驼峰格式
}

// 动态生成模块联邦的 exposes 配置
function generateExposes() {
  const pagesPath = path.join(process.cwd(), 'src/pages');
  const entries = globSync('*/index.vue', { cwd: pagesPath, posix: true });
  return entries.reduce<{ [key in string]: string }>((exposes, entry) => {
    const folderName = entry.split('/')[0]; // 获取文件夹名称
    const componentName = toPascalCase(folderName); // 转换为大驼峰
    exposes[`./${componentName}`] = `./src/pages/${folderName}/index.vue`;
    return exposes;
  }, {});
}

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'amf_template',
      filename: 'remoteEntry.js',
      exposes: generateExposes(),
      shared: {
        vue: {
          // eager: true,
          import: false,
          shareKey: 'vue',
          shareScope: 'default',
          singleton: true,
        },
        'vue-router': {
          import: false,
          shareKey: 'vue-router',
          shareScope: 'default',
          singleton: true,
        },
        '@amf/stores': {
          // eager: true,
          import: false,
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
      root: '../../dist/template-app',
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
