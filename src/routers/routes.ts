import Layout from "@/views/home/index.vue";
import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
  },
  {
    path: "/about",
    component: () => import("@/views/about/index.vue"),
  },
];
export default routes;
