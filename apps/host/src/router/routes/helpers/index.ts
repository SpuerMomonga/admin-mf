import { RouteCustomRaw, RouteRemote } from '@/router/tying';
import { loadRemote } from '@module-federation/runtime';
import { Component, h } from 'vue';
import { RouteRecordRaw } from 'vue-router';

function mergeRouteModules(context: Rspack.Context): RouteRecordRaw[] {
  const mergedRoutes = context.keys().flatMap((path) => (context(path) as { default: RouteCustomRaw[] }).default);
  return generateRoutes(mergedRoutes);
}

const loadRemoteComponent =
  (remote: RouteRemote): RouteRecordRaw['component'] =>
  async () => {
    try {
      const component = await loadRemote(`${remote.name}/${remote.component}`);
      return (component as { default: Component }).default;
    } catch (error) {
      console.error('Remote component load failed:', error);
      return () => h('div', '远程组件加载错误'); // 返回兜底组件
    }
  };

function generateRoutes(mergedRoutes: RouteCustomRaw[]): RouteRecordRaw[] {
  return mergedRoutes.map((item) => {
    const { remote, children, ...etc } = item;
    return {
      ...etc,
      ...(remote && { component: loadRemoteComponent(remote) }),
      ...(children?.length && { children: generateRoutes(children) }),
    } as unknown as RouteRecordRaw;
  });
}

export { mergeRouteModules };
