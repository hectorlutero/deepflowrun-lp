import type { Metadata } from "next";
import { BiAgentLpPrototype } from "@/components/prototype/bi-agent-lp/shell";

export const metadata: Metadata = {
  title: "PROTOTYPE — BI Agent LP variants",
  robots: { index: false, follow: false },
};

export default function BiAgentLpPrototypePage() {
  return <BiAgentLpPrototype />;
}
