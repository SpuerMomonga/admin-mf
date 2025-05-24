import { defineStore } from 'pinia';
import { store } from '../setup';

type ThemeMode = 'dark' | 'light';

interface ConfigState {
  theme: {
    mode: ThemeMode;
  };
  collapsed: boolean;
}

function isReducedMotion() {
  return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
}

export const usePreferencesStore = defineStore('preferences-app', {
  state: (): ConfigState => ({ collapsed: false, theme: { mode: 'light' } }),
  getters: {
    themeMode(state): ThemeMode {
      return state.theme.mode;
    },
  },
  actions: {
    toggleThemeMode(mode: ThemeMode) {
      if (!document.startViewTransition || isReducedMotion()) {
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        this.theme.mode = mode;
        return;
      }
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
    },
  },
});

export function usePreferencesStoreWithOut() {
  return usePreferencesStore(store);
}
