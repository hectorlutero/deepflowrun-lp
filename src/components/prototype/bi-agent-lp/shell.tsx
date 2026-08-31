"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import "./prototype-v2.css";
import { PrototypeSwitcher, parseVariant } from "./switcher";
import { VariantE, VariantF, VariantG } from "./variants-v2";

function PrototypeInner() {
  const params = useSearchParams();
  const variant = parseVariant(params.get("variant"));

  return (
    <>
      {variant === "E" && <VariantE />}
      {variant === "F" && <VariantF />}
      {variant === "G" && <VariantG />}
      <PrototypeSwitcher current={variant} />
    </>
  );
}

export function BiAgentLpPrototype() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Carregando protótipo…</div>}>
      <PrototypeInner />
    </Suspense>
  );
}
