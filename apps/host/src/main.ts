import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { init } from "@module-federation/runtime";

init({
  name: "amf",
  remotes: [
    {
      name: "amf_template",
      // mf-manifest.json 是在 Module federation 新版构建工具中生成的文件类型，对比 remoteEntry 提供了更丰富的功能
      // 预加载功能依赖于使用 mf-manifest.json 文件类型
      entry: "http://localhost:5002/remoteEntry.js",
      type: "module",
    },
  ],
});

createApp(App).mount("#app");
