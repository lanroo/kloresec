import React, { useEffect, useState } from "react";
import { ThemeName, themes } from "../styles/themes";
import { defaultTheme } from "./theme.types";
import { ThemeContext } from "./theme.context";
import hljs from "highlight.js";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Carrega o tema salvo do localStorage ou usa o tema padrão
  const savedTheme = localStorage.getItem("selectedTheme") as ThemeName;
  const [theme, setTheme] = useState<ThemeName>(savedTheme || defaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    // Remove todos os temas anteriores
    Object.keys(themes).forEach((themeName) => {
      root.classList.remove(`theme-${themeName}`);
      document.querySelectorAll(`.theme-${themeName}`).forEach((element) => {
        element.classList.remove(`theme-${themeName}`);
      });
    });

    // Adiciona o novo tema
    root.classList.add(`theme-${theme}`);

    // Adiciona a classe markdown-content ao container principal
    const markdownContainer = document.querySelector(".markdown-content");
    if (markdownContainer) {
      markdownContainer.classList.add(`theme-${theme}`);
    }

    // Atualiza os blocos de código
    document.querySelectorAll("pre code").forEach((block) => {
      const classes = block.className.split(" ");
      const langClass = classes.find((c) => c.startsWith("language-"));

      // Limpa todas as classes exceto a de linguagem
      block.className = `${langClass || ""}`.trim();

      // Aplica o highlight sem adicionar classes do highlight.js
      hljs.highlightElement(block as HTMLElement);

      // Força o tema atual
      const pre = block.parentElement;
      if (pre) {
        pre.className = `theme-${theme}`;
      }
    });

    // Salva o tema atual no localStorage
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
