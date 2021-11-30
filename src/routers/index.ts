import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const initRouter = (app: App) => {
  app.use(router);
};
