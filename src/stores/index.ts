import { createPinia } from "pinia";
import { App } from "vue";

export const initStore = (app: App) => {
  const store = createPinia();
  app.use(store);
};
