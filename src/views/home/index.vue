<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <BaseMenu />
      <n-layout>
        <BaseHeader />
        <n-layout-content content-style="padding: 24px;"> <router-view /></n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
  import BaseHeader from "@/components/Header";
  import BaseMenu from "@/components/Menu";
  import { ChangeThemeKey, ThemeKey } from "@/inject/symbol/key";
  import { changeThemeFn } from "@/inject/type";
  import { provide, reactive } from "vue";

  let theme = reactive({
    primaryColor: "red",
  });
  const changeTheme: changeThemeFn = () => {
    theme.primaryColor = "yellow";
  };
  provide(ChangeThemeKey, changeTheme);
  provide(ThemeKey, theme);
</script>
<style></style>
