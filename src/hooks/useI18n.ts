import type { LocaleType } from "@/types/config";
import { i18n } from "@/locales";
import { useI18n } from "vue-i18n";

export function setHtmlPageLang(locale: LocaleType) {
  document.querySelector("html")?.setAttribute("lang", locale);
}

export const useLocale = () => {
  const { t } = useI18n();

  //   切换语言
  const changeLocale = async (locale: LocaleType) => {
    // 动态导入，不能使用@ ，无法解析，使用原路径
    const module = await import(`../locales/lang/${locale}.ts`);
    if (!module) return;
    if (i18n.mode === "legacy") {
      i18n.global.locale = locale;
    } else {
      (i18n.global.locale as any).value = locale;
    }
    i18n.global.setLocaleMessage(locale, module.default);
    setHtmlPageLang(locale);
  };

  return {
    changeLocale,
    t,
  };
};
