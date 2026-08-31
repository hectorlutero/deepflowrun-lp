"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

const VARIANTS = [
  { key: "E", name: "Neon FOMO · cinematic" },
  { key: "F", name: "Brutalist · editorial" },
  { key: "G", name: "Product theatre" },
] as const;

export type VariantKey = (typeof VARIANTS)[number]["key"];

export function PrototypeSwitcher({ current }: { current: VariantKey }) {
  const router = useRouter();
  const idx = VARIANTS.findIndex((v) => v.key === current);
  const cur = VARIANTS[idx >= 0 ? idx : 0];

  const go = useCallback(
    (delta: number) => {
      const next = VARIANTS[(idx + delta + VARIANTS.length) % VARIANTS.length];
      router.replace(`/prototype/bi-agent-lp?variant=${next.key}`);
    },
    [idx, router]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, [contenteditable=true]")) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="proto-switcher" role="toolbar" aria-label="Trocar variante">
      <button type="button" onClick={() => go(-1)} aria-label="Variante anterior">
        ←
      </button>
      <span>
        {cur.key} — {cur.name}
      </span>
      <button type="button" onClick={() => go(1)} aria-label="Próxima variante">
        →
      </button>
    </div>
  );
}

export function parseVariant(raw: string | null): VariantKey {
  if (raw === "F" || raw === "G") return raw;
  return "E";
}
