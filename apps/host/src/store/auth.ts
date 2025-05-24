import { defineStore } from 'pinia';
import { store, useUserStore, useAccessStore } from '@amf/stores';

export const useAuthStore = defineStore('auth-app', () => {
  const userStore = useUserStore();
  const accessStore = useAccessStore();

  async function login() {}

  async function logout() {}

  return { login, logout };
});

export function useAuthStoreWithOut() {
  return useAuthStore(store);
}
