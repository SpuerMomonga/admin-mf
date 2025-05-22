/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  // import.meta.env.PUBLIC_PORT
  readonly PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
