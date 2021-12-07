import Layout from "@/views/home/index.vue";
import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "charts/echarts/echarts-map",
        name: "echarts-map",
        component: () => import("@/views/charts/echarts/map.vue"),
      },
      {
        path: "charts/echarts/echarts-line",
        name: "echarts-line",
        component: () => import("@/views/charts/echarts/line.vue"),
      },
      {
        path: "charts/echarts/echarts-bar",
        name: "echarts-bar",
        component: () => import("@/views/charts/echarts/bar.vue"),
      },
      {
        path: "charts/echarts/echarts-pie",
        name: "echarts-pie",
        component: () => import("@/views/charts/echarts/pie.vue"),
      },
      {
        path: "charts/g2/map",
        name: "g2-map",
        component: () => import("@/views/charts/echarts/map.vue"),
      },
      {
        path: "draw/canvas",
        name: "canvas",
        component: () => import("@/views/about/index.vue"),
      },
      {
        path: "draw/svg",
        name: "svg",
        component: () => import("@/views/draw/SvgDraw.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/about/index.vue"),
      },
    ],
  },
];
export default routes;
