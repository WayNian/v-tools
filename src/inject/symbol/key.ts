import type { changeThemeFn, theme } from "./../type";
import { InjectionKey } from "vue";

export const ChangeThemeKey: InjectionKey<changeThemeFn> = Symbol("theme");
export const ThemeKey: InjectionKey<theme> = Symbol("color");
