"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LogoMark, Wordmark } from "@/components/lp/logo-mark";
import { sc } from "./copy";
import { Diagram } from "./diagrams";
import {
  presentationPath,
  swapLocalePath,
  tx,
  type Locale,
} from "./locale";
import type { Deck, Slide } from "./types";

type Reading = "auto" | "portrait" | "landscape";
type Resolved = "portrait" | "landscape";

function resolveReading(mode: Reading, portraitMq: boolean): Resolved {
  if (mode === "auto") return portraitMq ? "portrait" : "landscape";
  return mode;
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "prev" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useHash() {
  const [hash, setHash] = useState("");
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return hash;
}

function Bar({
  locale,
  deckTitle,
  mode,
  onMode,
}: {
  locale: Locale;
  deckTitle?: string;
  mode: Reading;
  onMode: (m: Reading) => void;
}) {
  const pathname = usePathname();
  const hash = useHash();
  const enHref = swapLocalePath(pathname, "en") + hash;
  const ptHref = swapLocalePath(pathname, "pt") + hash;

  return (
    <header className="pres-bar">
      <Link className="pres-bar-brand" href={presentationPath(locale)}>
        <LogoMark size={22} />
        <span className="pres-bar-title">
          <Wordmark size={14} />
          <span className="sep">/</span>
          {sc(locale, "presentations")}
          {deckTitle ? (
            <>
              <span className="sep">/</span>
              <span className="ctx">{deckTitle}</span>
            </>
          ) : null}
        </span>
      </Link>
      <div className="pres-bar-tools">
        <nav className="pres-seg" aria-label={sc(locale, "language")}>
          <a
            href={enHref}
            aria-current={locale === "en" ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              window.location.assign(enHref);
            }}
          >
            EN
          </a>
          <a
            href={ptHref}
            aria-current={locale === "pt" ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              window.location.assign(ptHref);
            }}
          >
            PT
          </a>
        </nav>
        <ReadingToggle locale={locale} mode={mode} onChange={onMode} />
      </div>
    </header>
  );
}

function ReadingToggle({
  locale,
  mode,
  onChange,
}: {
  locale: Locale;
  mode: Reading;
  onChange: (m: Reading) => void;
}) {
  return (
    <div className="pres-seg" role="group" aria-label={sc(locale, "reading")}>
      <button
        type="button"
        aria-pressed={mode === "auto"}
        onClick={() => onChange("auto")}
      >
        {sc(locale, "auto")}
      </button>
      <button
        type="button"
        aria-pressed={mode === "portrait"}
        onClick={() => onChange("portrait")}
      >
        {sc(locale, "portrait")}
      </button>
      <button
        type="button"
        aria-pressed={mode === "landscape"}
        onClick={() => onChange("landscape")}
      >
        {sc(locale, "landscape")}
      </button>
    </div>
  );
}

function usePortraitMq() {
  const [portrait, setPortrait] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(orientation: portrait)");
    const apply = () =>
      setPortrait(window.innerHeight >= window.innerWidth || mq.matches);
    apply();
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);
  return portrait;
}

function slideIndexFromHash(slides: Slide[]): number {
  if (typeof window === "undefined") return 0;
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return 0;
  const i = slides.findIndex((s) => s.id === id);
  return i >= 0 ? i : 0;
}

export function DeckView({ locale, deck }: { locale: Locale; deck: Deck }) {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const portrait = usePortraitMq();
  const [mode, setMode] = useState<Reading>("auto");
  const reading = resolveReading(mode, portrait);
  const slides = deck.slides;
  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    function sync() {
      setIndex(slideIndexFromHash(slides));
    }
    sync();
    const t = window.setTimeout(sync, 0);
    window.addEventListener("hashchange", sync);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", sync);
    };
  }, [slides, locale, pathname]);

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setIndex(clamped);
      const id = slides[clamped]?.id;
      if (id) {
        window.history.replaceState(null, "", `${pathname}#${id}`);
      }
    },
    [pathname, slides],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(slides.length - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, slides.length]);

  useEffect(() => {
    let x0 = 0;
    let y0 = 0;
    function start(e: TouchEvent) {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    }
    function end(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) go(index + 1);
      else go(index - 1);
    }
    window.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchend", end, { passive: true });
    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [go, index]);

  const groups = useMemo(() => {
    const out: { section: string; indices: number[] }[] = [];
    slides.forEach((s, i) => {
      const last = out[out.length - 1];
      if (!last || last.section !== s.section) {
        out.push({ section: s.section, indices: [i] });
      } else {
        last.indices.push(i);
      }
    });
    return out;
  }, [slides]);

  const paragraphs = tx(locale, slide.body).split("\n\n");
  const n = String(index + 1).padStart(2, "0");
  const total = String(slides.length).padStart(2, "0");

  return (
    <div className="pres-root">
      <div className="pres" data-reading={reading} data-locale={locale}>
        <Bar locale={locale} deckTitle={tx(locale, deck.title)} mode={mode} onMode={setMode} />
        <div className="pres-stage">
          <article className="pres-slide" aria-labelledby="pres-slide-title">
            <div className="pres-copy">
              <p className="pres-eyebrow">{tx(locale, slide.eyebrow)}</p>
              {slide.badges?.length ? (
                <div className="pres-badges">
                  {slide.badges.map((b) => (
                    <span key={b} className="pres-badge" data-kind={b}>
                      {sc(locale, b)}
                    </span>
                  ))}
                </div>
              ) : null}
              <h1 id="pres-slide-title">{tx(locale, slide.title)}</h1>
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="pres-body">
                  {p}
                </p>
              ))}
              {slide.legend?.length ? (
                <div className="pres-legend">
                  <h2>{sc(locale, "legend")}</h2>
                  <dl>
                    {slide.legend.map((item) => (
                      <div key={tx(locale, item.term)}>
                        <dt>{tx(locale, item.term)}</dt>
                        <dd>{tx(locale, item.meaning)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </div>
            <div className="pres-visual">
              <div className="pres-visual-inner">
                <Diagram
                  id={slide.diagram}
                  locale={locale}
                  layerActive={slide.layerActive}
                />
              </div>
            </div>
          </article>
        </div>
        <footer className="pres-ctrl">
          <button
            type="button"
            className="pres-navbtn"
            aria-label={sc(locale, "prev")}
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            <Chevron dir="prev" />
          </button>
          <div className="pres-dots" role="tablist" aria-label={tx(locale, deck.title)}>
            {groups.map((g) => (
              <div key={g.section} className="pres-dot-group">
                {g.indices.map((i) => (
                  <button
                    key={slides[i].id}
                    type="button"
                    className="pres-dot"
                    data-on={i === index ? "1" : "0"}
                    aria-label={tx(locale, slides[i].title)}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            ))}
          </div>
          <span className="pres-count">
            <b>{n}</b> {sc(locale, "of")} {total}
          </span>
          <button
            type="button"
            className="pres-navbtn"
            aria-label={sc(locale, "next")}
            disabled={index === slides.length - 1}
            onClick={() => go(index + 1)}
          >
            <Chevron dir="next" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export function IndexView({ locale, decks }: { locale: Locale; decks: Deck[] }) {
  const portrait = usePortraitMq();
  const [mode, setMode] = useState<Reading>("auto");
  const reading = resolveReading(mode, portrait);

  return (
    <div className="pres-root">
      <div className="pres" data-reading={reading} data-locale={locale}>
        <Bar locale={locale} mode={mode} onMode={setMode} />
        <div className="pres-stage">
          <div className="pres-index">
            <div className="pres-index-inner">
              <p className="pres-eyebrow">{sc(locale, "presentations")}</p>
              <h1>DeepFlowRun</h1>
              <p className="pres-index-lede">{sc(locale, "gateLede")}</p>
              {decks.length === 0 ? (
                <p>{sc(locale, "empty")}</p>
              ) : (
                <ul className="pres-deck-list">
                  {decks.map((d) => (
                    <li key={d.slug}>
                      <Link
                        className="pres-deck-card"
                        href={presentationPath(locale, d.slug)}
                      >
                        <h2>{tx(locale, d.title)}</h2>
                        <p>{tx(locale, d.blurb)}</p>
                        <span>{sc(locale, "openDeck")}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <footer className="pres-ctrl">
          <span className="pres-count">
            {String(decks.length).padStart(2, "0")} {sc(locale, "presentations").toLowerCase()}
          </span>
        </footer>
      </div>
    </div>
  );
}
