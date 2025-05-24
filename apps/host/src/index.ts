import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { setupStore } from '@amf/stores';
import router, { setupRouter } from './router';
import { setupNaive } from './plugins/naiveui';
import { setupRemote } from './plugins/remote';

async function bootstrap() {
  const app = createApp(App);

  setupRemote();

  setupStore(app);

  setupNaive(app);

  setupRouter(app);

  await router.isReady();

  app.mount('#root');
}

bootstrap();
