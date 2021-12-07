<template>
  <n-layout-sider
    :collapsed-width="64"
    :width="240"
    :collapsed="store.collapsed"
    show-trigger
    @collapse="store.collapsed = true"
    @expand="store.collapsed = false"
    style="height: 100vh"
    :inverted="true"
  >
    <n-menu
      accordion
      :inverted="true"
      :value="activeItem"
      :collapsed="store.collapsed"
      :default-expanded-keys="expandedKeys"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :on-update:value="handleMenuUpdate"
    />
  </n-layout-sider>
</template>
<script setup lang="ts">
  import { useMenu } from "@/hooks/useMenu";
  import { useSystemStore } from "@/stores/system";
  import { useRouter } from "vue-router";
  const store = useSystemStore();

  const router = useRouter();
  const { menuOptions, expandedKeys, activeItem } = useMenu();

  const handleMenuUpdate = (key: string) => {
    activeItem.value = key;
    router.push({
      name: key,
    });
  };
</script>
<style></style>
