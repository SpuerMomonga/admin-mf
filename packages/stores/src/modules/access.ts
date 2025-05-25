import { defineStore } from 'pinia';
import { store } from '../setup';
import type { MenuOption } from 'naive-ui';
import type { RouteRecordRaw } from 'vue-router';

interface AccessState {
  token: string | null;
  isAccessChecked: boolean;
  accessMenus: MenuOption[];
  accessRoutes: RouteRecordRaw[];
}

export const useAccessStore = defineStore('access-app', {
  state: (): AccessState => ({ token: '11111', isAccessChecked: false, accessMenus: [], accessRoutes: [] }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setIsAccessChecked(checked: boolean) {
      this.isAccessChecked = checked;
    },
    setAccessMenus(menus: MenuOption[]) {
      // @ts-expect-error TS2589
      this.accessMenus = menus;
    },
    setAccessRoutes(routes: RouteRecordRaw[]) {
      this.accessRoutes = routes;
    },
  },
});

export function useAccessStoreWithOut() {
  return useAccessStore(store);
}
