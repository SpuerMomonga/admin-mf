import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createPageGuard, createRouterGuards } from './routeGuards';
import { basicRoutes } from './base';

export const constantRouter: RouteRecordRaw[] = [...basicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  createPageGuard(router);
  createRouterGuards(router);
}

export default router;
