import { defineStore } from 'pinia';
import { store } from '../index';

export const useUserStore = defineStore('user-app', {
  state: () => ({ collapsed: false, theme: 'light' }),
  getters: {},
  actions: {},
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
