import type { Metadata } from "next";
import { BiAgentLanding } from "@/components/bi-agent/landing";
import { META } from "@/components/bi-agent/copy";
import "@/components/bi-agent/bi-agent.css";

export const metadata: Metadata = {
  title: `${META.title} · versão anterior`,
  description: META.description,
  robots: { index: false, follow: false },
};

/** LP anterior — mantida para comparação / rollback rápido. */
export default function BiAgentLegadoPage() {
  return (
    <div className="bi-agent">
      <BiAgentLanding />
    </div>
  );
}
