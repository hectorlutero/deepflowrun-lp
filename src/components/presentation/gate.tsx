"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { LogoMark, Wordmark } from "@/components/lp/logo-mark";
import { sc } from "./copy";
import {
  htmlLang,
  presentationPath,
  swapLocalePath,
  type Locale,
} from "./locale";

const COOKIE = "dfr_pres";
const MAX_AGE = 60 * 60 * 24 * 14;

function requiredPassword(): string {
  return process.env.NEXT_PUBLIC_PRESENTATION_PASSWORD ?? "";
}

function cookieUnlocked(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c === `${COOKIE}=1`);
}

function writeUnlock() {
  document.cookie = `${COOKIE}=1; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`;
}

export function Gate({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname() || presentationPath(locale);
  const required = requiredPassword();
  const skip = !required && process.env.NODE_ENV !== "production";
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(skip);
  const [value, setValue] = useState("");
  const [error, setError] = useState<"wrong" | "none" | null>(null);

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
    document.documentElement.classList.add("pres-lock");
    return () => {
      document.documentElement.classList.remove("pres-lock");
    };
  }, [locale]);

  useEffect(() => {
    if (skip) {
      setOk(true);
      setReady(true);
      return;
    }
    if (!required) {
      setOk(false);
      setError("none");
      setReady(true);
      return;
    }
    setOk(cookieUnlocked());
    setReady(true);
  }, [required, skip]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!required) {
      setError("none");
      return;
    }
    if (value === required) {
      writeUnlock();
      setOk(true);
      setError(null);
      return;
    }
    setError("wrong");
  }

  if (!ready) {
    return <div className="pres-root" />;
  }

  if (!ok) {
    const ptHref = swapLocalePath(pathname, "pt");
    const enHref = swapLocalePath(pathname, "en");
    return (
      <div className="pres-root">
        <div className="pres-gate">
          <div className="pres-gate-card">
            <a className="pres-gate-brand" href={presentationPath(locale)}>
              <LogoMark size={28} />
              <Wordmark size={16} />
            </a>
            <p className="pres-gate-kicker">{sc(locale, "presentations")}</p>
            <p className="pres-gate-lede">{sc(locale, "gateLede")}</p>
            <form onSubmit={onSubmit}>
              <label htmlFor="pres-pw">{sc(locale, "password")}</label>
              <input
                id="pres-pw"
                type="password"
                name="password"
                autoComplete="current-password"
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                disabled={!required}
              />
              <button type="submit" disabled={!required}>
                {sc(locale, "unlock")}
              </button>
            </form>
            {error === "wrong" ? <p className="pres-gate-err">{sc(locale, "wrong")}</p> : null}
            {error === "none" ? (
              <p className="pres-gate-err">{sc(locale, "unconfigured")}</p>
            ) : null}
            <nav className="pres-gate-langs" aria-label={sc(locale, "language")}>
              <a href={enHref} aria-current={locale === "en" ? "true" : undefined}>
                EN
              </a>
              <a href={ptHref} aria-current={locale === "pt" ? "true" : undefined}>
                PT
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
