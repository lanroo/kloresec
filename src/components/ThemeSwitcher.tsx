import { useTheme } from "../contexts/theme.context";
import { ThemeName, themes } from "../styles/themes";
import hljs from "highlight.js";

// Função auxiliar para formatar o nome do tema para exibição
function formatThemeName(themeName: string): string {
  return themeName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);

    // Atualiza os blocos de código
    document.querySelectorAll("pre code").forEach((block) => {
      const classes = block.className.split(" ");
      const langClass = classes.find((c) => c.startsWith("language-"));

      // Remove todas as classes de tema anteriores
      Object.keys(themes).forEach((themeName) => {
        block.classList.remove(`theme-${themeName}`);
      });

      // Adiciona a nova classe de tema e mantém a classe hljs e language
      block.className = `hljs theme-${newTheme} ${langClass || ""}`.trim();
      hljs.highlightElement(block as HTMLElement);
    });
  };

  return (
    <select
      value={theme}
      onChange={(e) => handleThemeChange(e.target.value as ThemeName)}
      className="bg-gray-800 text-white px-3 py-1 rounded-md"
      title="Selecione um tema"
    >
      {Object.keys(themes).map((themeName) => (
        <option key={themeName} value={themeName}>
          {formatThemeName(themeName)}
        </option>
      ))}
    </select>
  );
}
