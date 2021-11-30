<script setup lang="ts">
  import { useLocale } from "./hooks/useI18n";
  import type { LocaleType } from "./types/config";
  const { changeLocale, t } = useLocale();

  const toogleLocale = async (lang: LocaleType) => {
    await changeLocale(lang);
  };
</script>

<template>
  <n-button @click="toogleLocale('zh-CN')">中文</n-button>
  <n-button @click="toogleLocale('en')">英文</n-button>
  <div>
    <p>{{ t("config.info.name") }}: 皮卡丘</p>
    <p>{{ t("config.info.age") }}: 3</p>
    <p>{{ t("config.info.height") }}: 100</p>
  </div>
</template>

<style></style>
