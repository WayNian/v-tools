import type { App } from "vue";
import { createI18n } from "vue-i18n";

import type { I18n, I18nOptions } from "vue-i18n";
import { setHtmlPageLang } from "@/hooks/useI18n";

const createI18nOptions = async (): Promise<I18nOptions> => {
  const module = await import("@/locales/lang/zh-CN");
  return {
    legacy: false,
    locale: "zh-CN",
    fallbackLocale: "en",
    messages: {
      "zh-CN": module.default,
    },
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  };
};

export let i18n: I18n;

export const initI18n = async (app: App) => {
  const options = await createI18nOptions();
  i18n = createI18n(options);
  setHtmlPageLang("zh-CN");
  app.use(i18n);
};
