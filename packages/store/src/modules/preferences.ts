import { defineStore } from 'pinia';
import { store } from '../index';
import type { GlobalTheme } from 'naive-ui';
import { darkTheme } from 'naive-ui';

type ThemeMode = 'dark' | 'light';

interface ConfigState {
  themeMode: ThemeMode;
  collapsed: boolean;
}

function isReducedMotion() {
  return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
}

export const useUserStore = defineStore('preferences-app', {
  state: (): ConfigState => ({ collapsed: false, themeMode: 'light' }),
  getters: {
    naiveUiTheme(state): GlobalTheme | null {
      return state.themeMode === 'light' ? null : darkTheme;
    },
  },
  actions: {
    toggleThemeMode(themeMode: ThemeMode) {
      if (!document.startViewTransition || isReducedMotion()) {
        document.documentElement.classList.toggle('dark');
        this.themeMode = themeMode;
        return;
      }
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
