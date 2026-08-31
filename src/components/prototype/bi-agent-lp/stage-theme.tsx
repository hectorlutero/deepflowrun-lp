"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/bi-agent/icons";
import { applyBiTheme, readBiTheme, writeBiTheme, type BiTheme } from "@/components/bi-agent/theme";

export function StageThemeToggle() {
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
      className="stg-theme"
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      title={theme === "dark" ? "Modo claro" : "Modo escuro"}
    >
      {theme === "dark" ? <SunIcon className="stg-theme-icon" /> : <MoonIcon className="stg-theme-icon" />}
      <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
    </button>
  );
}
