export type BiTheme = "light" | "dark";

/** Explicit user choice only. Never follow prefers-color-scheme. */
const STORAGE_KEY = "dfr-bi-agent-theme";
const LEGACY_KEY = "bi-agent-theme";

export function readBiTheme(): BiTheme {
  try {
    window.localStorage.removeItem(LEGACY_KEY);
    return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function writeBiTheme(theme: BiTheme) {
  try {
    window.localStorage.removeItem(LEGACY_KEY);
    if (theme === "dark") {
      window.localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* private mode */
  }
}

export function applyBiTheme(theme: BiTheme) {
  const roots = document.querySelectorAll(".bi-agent, .stg");
  roots.forEach((root) => {
    root.classList.toggle("bi-agent--dark", theme === "dark" && root.classList.contains("bi-agent"));
    root.classList.toggle("bi-agent--light", theme === "light" && root.classList.contains("bi-agent"));
    root.classList.toggle("stg--dark", theme === "dark" && root.classList.contains("stg"));
  });
}
