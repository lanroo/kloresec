import React, { useEffect } from "react";
import { themes } from "../styles/themes";
import { defaultTheme } from "./theme.types";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add(`theme-${themes[defaultTheme]}`);
  }, []);

  return <>{children}</>;
}
