import { ref } from "vue";
import { useRoute } from "vue-router";
const menuOptions = [
  {
    label: "仪表台",
    key: "dashboard",
  },
  {
    label: "图表",
    key: "charts",
    children: [
      {
        label: "echarts",
        key: "echarts",
        children: [
          {
            label: "地图",
            key: "echarts-map",
          },
          {
            label: "折线图",
            key: "echarts-line",
          },
          {
            label: "柱状图",
            key: "echarts-bar",
          },
          {
            label: "饼图",
            key: "echarts-pie",
          },
        ],
      },
      {
        label: "g2",
        key: "g2",
        children: [
          {
            label: "地图",
            key: "g2-map",
          },
          {
            label: "折线图",
            key: "g2-line",
          },
          {
            label: "饼图",
            key: "g2-pie",
          },
        ],
      },
    ],
  },
  {
    label: "绘制",
    key: "draw",
    children: [
      {
        label: "canvas",
        key: "canvas",
      },
      {
        label: "svg",
        key: "svg",
      },
    ],
  },
  {
    label: "拖拽",
    key: "drag",
    children: [
      {
        label: "组件",
        key: "drag-el",
      },
      {
        label: "表格",
        key: "drag-table",
      },
    ],
  },
  {
    label: "关于",
    key: "about",
  },
];

export const useMenu = () => {
  const expandedKeys = ref<string[]>();
  const activeItem = ref("");
  const { fullPath, name } = useRoute();

  expandedKeys.value = fullPath.split("/");
  expandedKeys.value.splice(0, 1);
  activeItem.value = name as string;

  return {
    menuOptions,
    expandedKeys,
    activeItem,
  };
};
