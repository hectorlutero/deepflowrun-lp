import type { Metadata } from "next";
import { StagePrototype } from "@/components/prototype/bi-agent-lp/stage";

export const metadata: Metadata = {
  title: "PROTOTYPE — BI Agent palco",
  robots: { index: false, follow: false },
};

export default function StagePage() {
  return <StagePrototype />;
}
