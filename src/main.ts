import { initNaiveUI } from "./plugin/ui/index";
import { createApp } from "vue";
import App from "./App.vue";
import { initI18n } from "./locales/index";

const bootstrap = async () => {
  const app = createApp(App);

  initNaiveUI(app);
  await initI18n(app);

  app.mount("#app");
};

bootstrap();
