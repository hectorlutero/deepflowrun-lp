import type { Locale, Text } from "./locale";

export const shellCopy = {
  presentations: { en: "Presentations", pt: "Apresentações" } satisfies Text,
  password: { en: "Password", pt: "Senha" } satisfies Text,
  unlock: { en: "Enter", pt: "Entrar" } satisfies Text,
  wrong: {
    en: "That password does not match.",
    pt: "Essa senha não confere.",
  } satisfies Text,
  unconfigured: {
    en: "Access is not configured yet. Set NEXT_PUBLIC_PRESENTATION_PASSWORD at build time.",
    pt: "O acesso ainda não foi configurado. Defina NEXT_PUBLIC_PRESENTATION_PASSWORD no build.",
  } satisfies Text,
  gateLede: {
    en: "DeepFlowRun internal decks. Same link for any guest — no account.",
    pt: "Decks internos DeepFlowRun. O mesmo link para qualquer convidado — sem conta.",
  } satisfies Text,
  portrait: { en: "Portrait", pt: "Retrato" } satisfies Text,
  landscape: { en: "Landscape", pt: "Paisagem" } satisfies Text,
  auto: { en: "Auto", pt: "Auto" } satisfies Text,
  prev: { en: "Previous", pt: "Anterior" } satisfies Text,
  next: { en: "Next", pt: "Próximo" } satisfies Text,
  of: { en: "of", pt: "de" } satisfies Text,
  empty: {
    en: "No presentations published yet.",
    pt: "Nenhuma apresentação publicada ainda.",
  } satisfies Text,
  openDeck: { en: "Open deck", pt: "Abrir deck" } satisfies Text,
  today: { en: "Today", pt: "Hoje" } satisfies Text,
  target: { en: "Target", pt: "Alvo" } satisfies Text,
  legend: { en: "Legend", pt: "Legenda" } satisfies Text,
  reading: { en: "Reading view", pt: "Visão de leitura" } satisfies Text,
  language: { en: "Language", pt: "Idioma" } satisfies Text,
} as const;

export function sc(locale: Locale, key: keyof typeof shellCopy): string {
  return shellCopy[key][locale];
}
