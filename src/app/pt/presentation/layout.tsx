import type { Metadata } from "next";
import { PresentationRoot } from "@/components/presentation/root";

export const metadata: Metadata = {
  title: "Apresentações — DeepFlowRun",
  description: "Apresentações internas DeepFlowRun.",
  robots: { index: false, follow: false },
};

export default function PresentationPtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PresentationRoot locale="pt">{children}</PresentationRoot>;
}
