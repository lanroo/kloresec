import "./dracula.css";
import "./monokai-sublime.css";
import "./atom-one-dark.css";
import "./cyberwave.css";
import "./bun-theme.css";

export const themes = {
  dracula: "dracula",
  "monokai-sublime": "monokai-sublime",
  "atom-one-dark": "atom-one-dark",
  cyberwave: "cyberwave",
  bun: "bun",
} as const;

export type ThemeName = keyof typeof themes;
export default themes;
