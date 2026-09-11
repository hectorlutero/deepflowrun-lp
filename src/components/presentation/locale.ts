export const LOCALES = ["en", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export type Text = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "pt";
}

export function tx(locale: Locale, text: Text): string {
  return text[locale];
}

export function presentationBase(locale: Locale): string {
  return locale === "pt" ? "/pt/presentation" : "/presentation";
}

export function presentationPath(locale: Locale, slug?: string): string {
  const base = presentationBase(locale);
  return slug ? `${base}/${slug}` : base;
}

export function swapLocalePath(pathname: string, next: Locale): string {
  const rest = pathname.startsWith("/pt/") ? pathname.slice(3) : pathname;
  return next === "pt" ? `/pt${rest}` : rest;
}

export function htmlLang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}
