import { Router } from 'vue-router';

export function createRouterGuards(router: Router) {
  router.beforeEach(async () => {});
}

export function createPageGuard(router: Router) {
  router.afterEach(async () => {
    return true;
  });
}
