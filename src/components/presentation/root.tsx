"use client";

import type { ReactNode } from "react";
import { Gate } from "./gate";
import type { Locale } from "./locale";
import "./presentation.css";

export function PresentationRoot({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <Gate locale={locale}>{children}</Gate>;
}
