"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { applyBiTheme, readBiTheme, writeBiTheme, type BiTheme } from "./theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<BiTheme>("light");

  useEffect(() => {
    const next = readBiTheme();
    setTheme(next);
    applyBiTheme(next);
  }, []);

  function toggle() {
    const next: BiTheme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyBiTheme(next);
    writeBiTheme(next);
  }

  return (
    <button
      type="button"
      className="ba-theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      title={theme === "dark" ? "Modo claro" : "Modo escuro"}
    >
      {theme === "dark" ? <SunIcon className="ba-theme-icon" /> : <MoonIcon className="ba-theme-icon" />}
      <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
    </button>
  );
}
