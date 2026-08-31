import type { Metadata } from "next";
import { META } from "@/components/bi-agent/copy";
import { StagePrototype } from "@/components/prototype/bi-agent-lp/stage";

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
  return <StagePrototype />;
}
