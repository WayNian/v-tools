<script setup lang="ts">
  import { useLocale } from "@/hooks/useI18n";
  import type { LocaleType } from "@/types/config";
  import { useCounterStore } from "@/stores/theme";
  const { changeLocale, t } = useLocale();

  const toogleLocale = async (lang: LocaleType) => {
    await changeLocale(lang);
  };

  const store = useCounterStore();
</script>

<template>
  <n-button @click="toogleLocale('zh-CN')">中文</n-button>
  <n-button @click="toogleLocale('en')">英文</n-button>
  <div>
    <p>{{ t("config.info.name") }}: 皮卡丘</p>
    <p>{{ t("config.info.age") }}: 3</p>
    <p>{{ t("config.info.height") }}: 100</p>
  </div>
  <n-button @click="store.increment">增加</n-button>
  <h1>{{ store.count }}</h1>
  <router-view />
</template>

<style></style>
