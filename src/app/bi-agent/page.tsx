import type { Metadata } from "next";
import { BiAgentLanding } from "@/components/bi-agent/landing";
import { META } from "@/components/bi-agent/copy";
import "@/components/bi-agent/bi-agent.css";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: "/bi-agent" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://deepflowrun.com/bi-agent",
    locale: "pt_BR",
    type: "website",
    siteName: "DeepFlowRun",
  },
};

export default function BiAgentPage() {
  return (
    <div className="bi-agent">
      <BiAgentLanding />
    </div>
  );
}
