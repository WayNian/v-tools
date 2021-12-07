import {
  create,
  NButton,
  NCard,
  NGi,
  NGrid,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NSpace,
} from "naive-ui";
import { App } from "vue";

const naive = create({
  components: [
    NButton,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NSpace,
    NMenu,
    NGrid,
    NGi,
    NCard,
  ],
});

export const initNaiveUI = (app: App) => {
  app.use(naive);
};
