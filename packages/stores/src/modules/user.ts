import { defineStore } from 'pinia';
import { store } from '../setup';

interface UserInfo {
  username: string;
  userId: string;
  areaName: string;
}

interface AccessState {
  userInfo: UserInfo | null;
  roles: string[];
}

export const useUserStore = defineStore('user-app', {
  state: (): AccessState => ({
    userInfo: null,
    roles: [],
  }),
  actions: {},
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
