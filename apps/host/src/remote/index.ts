import { init } from '@module-federation/runtime';

export function setupRemote() {
  init({ name: 'amf_host', remotes: [] });
}
