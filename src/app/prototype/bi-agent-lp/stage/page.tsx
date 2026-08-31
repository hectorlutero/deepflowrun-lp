import type { Metadata } from "next";
import { StagePrototype } from "@/components/prototype/bi-agent-lp/stage";

export const metadata: Metadata = {
  title: "Lab — BI Agent stage",
  robots: { index: false, follow: false },
};

export default function StageLabPage() {
  return <StagePrototype lab />;
}
