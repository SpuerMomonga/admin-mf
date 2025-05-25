import { MenuOption, NIcon } from 'naive-ui';
import { Router, RouteRecordRaw } from 'vue-router';
import { default as cloneDeep } from 'lodash.clonedeep';
import { Component, h } from 'vue';

async function generateAccess(router: Router, routes: RouteRecordRaw[]) {
  const accessibleRoutes = cloneDeep(routes);

  accessibleRoutes.forEach((route) => {
    router.addRoute(route);
  });

  const accessibleMenus = generateMenus(router, accessibleRoutes);

  return { accessibleMenus, accessibleRoutes };
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function generateMenus(router: Router, routes: RouteRecordRaw[]): MenuOption[] {
  const finalRoutesMap: { [key: string]: string } = Object.fromEntries(
    router.getRoutes().map(({ name, path }) => [name, path]),
  );

  const mapTree = (routes: RouteRecordRaw[]): MenuOption[] => {
    return routes.map<MenuOption>((route) => {
      const { name, meta, children } = route;
      return {
        label: meta?.title ?? name,
        icon: meta?.icon ? renderIcon(meta?.icon) : undefined,
        key: finalRoutesMap[name as string],
        children: children?.length ? mapTree(children) : undefined,
      };
    });
  };

  return mapTree(routes);
}

export { generateAccess };
