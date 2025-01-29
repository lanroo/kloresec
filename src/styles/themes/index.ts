import "./dracula.css";
import "./monokai-sublime.css";
import "./atom-one-dark.css";

export const themes = {
  dracula: "dracula",
  monokaiSublime: "monokai-sublime",
  atomOneDark: "atom-one-dark",
} as const;

export type ThemeName = keyof typeof themes;
