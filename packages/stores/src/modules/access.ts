import { defineStore } from 'pinia';
import { store } from '../setup';

interface AccessState {
  token: string | null;
  isAccessChecked: boolean;
}

export const useAccessStore = defineStore('access-app', {
  state: (): AccessState => ({ token: '11111', isAccessChecked: false }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setIsAccessChecked(checked: boolean) {
      this.isAccessChecked = checked;
    },
  },
});

export function useAccessStoreWithOut() {
  return useAccessStore(store);
}
