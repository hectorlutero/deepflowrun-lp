import type { Metadata } from "next";
import { StageSituationsLab } from "@/components/prototype/bi-agent-lp/stage-situations-lab";

export const metadata: Metadata = {
  title: "PROTOTYPE — Situações lab",
  robots: { index: false, follow: false },
};

export default function SituacoesLabPage() {
  return <StageSituationsLab />;
}
