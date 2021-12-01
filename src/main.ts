import { createApp } from "vue";
import App from "./App.vue";
import { initStore } from "./stores/index";
import { initRouter } from "./routers/index";
import { initNaiveUI } from "./plugin/ui/index";
import { initI18n } from "./locales/index";

const bootstrap = async () => {
  const app = createApp(App);

  initStore(app);
  initNaiveUI(app);
  // 异步函数，想要跟同步一样执行，需要包装一下，使用async
  await initI18n(app);
  initRouter(app);

  app.mount("#app");
};

bootstrap();
