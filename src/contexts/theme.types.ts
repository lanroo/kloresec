import { ThemeName } from "../styles/themes";

export type ThemeContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

// Mude aqui para o tema que você quer usar:
// Opções: "dracula" | "monokai-sublime" | "atom-one-dark" | "cyberwave" | "bun"
export const defaultTheme: ThemeName = "monokai-sublime";
