import { ref } from "vue";

export const useKeydown = (key: string | number) => {
  const isKeydown = ref<Boolean>(false);
  document.onkeydown = function (e: KeyboardEvent) {
    if (key === e.key) {
      isKeydown.value = true;
    }
  };
  document.onkeyup = function (e: KeyboardEvent) {
    if (key === e.key) {
      isKeydown.value = false;
    }
  };
  return {
    isKeydown,
  };
};
