import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createRouterGuard } from './guards';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
}

export default router;
