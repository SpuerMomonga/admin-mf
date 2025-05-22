import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPageGuard, createRouterGuards } from './routeGuards';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  createPageGuard(router);
  createRouterGuards(router);
}

export default router;
