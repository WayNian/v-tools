import echarts from "@/utils/echarts";
import type { EChartsOption } from "echarts";
import { Ref, unref } from "vue";

export const useECharts = (elRef: Ref<HTMLElement>) => {
  let chartInstance: echarts.ECharts | null = null;

  const initECharts = () => {
    if (!elRef) return;
    const el = unref(elRef);
    if (!chartInstance) {
      chartInstance = echarts.init(el);
    }
  };
  const resize = () => {
    initECharts();
    setTimeout(() => {
      chartInstance?.resize();
    }, 250);
  };

  const addResizeListener = () => {
    window.addEventListener("resize", resize);
  };

  const removeResizeListener = () => {
    window.removeEventListener("resize", resize);
  };
  const setOptions = (opt: EChartsOption) => {
    initECharts();
    chartInstance?.setOption(opt);
    addResizeListener();
  };
  return {
    resize,
    setOptions,
    removeResizeListener,
    initECharts,
    echartsIntance: echarts,
  };
};
