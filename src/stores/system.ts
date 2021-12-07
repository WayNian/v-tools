// stores/counter.js
import { defineStore } from "pinia";

export const useSystemStore = defineStore("counter", {
  state: () => {
    return { collapsed: false };
  },
  actions: {},
});
