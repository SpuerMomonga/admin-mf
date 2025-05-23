import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { setupStore } from '@amf/store';
import router, { setupRouter } from './router';
import { setupNaive } from './plugins/naiveui';
import { setupRemote } from './plugins/remote';

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  setupNaive(app);

  setupRemote();

  setupRouter(app);

  await router.isReady();

  app.mount('#root');
}

bootstrap();
