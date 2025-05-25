import { Router } from 'vue-router';
import { useAccessStore } from '@amf/stores';
// import { useAuthStore } from '@/store/auth';
import { accessRoutes } from './routes';
import { generateAccess } from './access';

function setupAccessGuard(router: Router) {
  router.beforeEach(async (to) => {
    const accessStore = useAccessStore();
    // const userStore = useUserStore();
    // const authStore = useAuthStore();

    // 未登录
    if (!accessStore.token) {
      if (to.fullPath !== '/login') {
        return { path: '/login' };
      }
      return to;
    }

    if (accessStore.isAccessChecked) {
      return true;
    }

    // console.log(accessRoutes);
    const { accessibleMenus, accessibleRoutes } = await generateAccess(router, accessRoutes);
    accessStore.setIsAccessChecked(true);
    accessStore.setAccessMenus(accessibleMenus);
    accessStore.setAccessRoutes(accessibleRoutes);

    // 重新跳转
    const redirectPath = to.fullPath;
    return {
      ...router.resolve(decodeURIComponent(redirectPath)),
      replace: true,
    };
  });
}

function createRouterGuard(router: Router) {
  setupAccessGuard(router);
}

export { createRouterGuard };
