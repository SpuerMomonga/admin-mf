import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { setupStore } from '@amf/store';
import router, { setupRouter } from './router';
import { setupRemote } from './remote';

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  setupRemote();

  setupRouter(app);

  await router.isReady();

  app.mount('#root');
}

bootstrap();
