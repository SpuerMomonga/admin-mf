import { MenuOption } from 'naive-ui';
import { Router, RouteRecordRaw } from 'vue-router';
import { default as cloneDeep } from 'lodash.clonedeep';

async function generateAccess(router: Router, routes: RouteRecordRaw[]) {
  routes = cloneDeep(routes);

  const notFound = router.getRoutes().find((r) => r.name === 'NotFound');

  routes.forEach((route) => {
    router.addRoute(route);
  });

  if (notFound?.name) {
    router.removeRoute(notFound.name!);
  }

  // if (notFound) {
  //   // router.addRoute(notFound);
  // }

  console.log(router.getRoutes());
  generateMenus(routes);
}

function generateMenus(routes: RouteRecordRaw[]): MenuOption[] {
  // routes.map(item => {
  //   const {meta,} = item;
  //   return {}
  // })
  return [];
}

export { generateAccess };
