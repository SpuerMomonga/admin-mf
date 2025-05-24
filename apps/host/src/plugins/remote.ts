import { init } from '@module-federation/runtime';

export function setupRemote() {
  init({
    name: 'amf_host',
    remotes: [
      {
        name: 'amf_template',
        entry: 'http://localhost:5001/remoteEntry.js',
      },
    ],
  });
}
