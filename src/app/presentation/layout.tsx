import type { Metadata } from "next";
import { PresentationRoot } from "@/components/presentation/root";

export const metadata: Metadata = {
  title: "Presentations — DeepFlowRun",
  description: "DeepFlowRun internal presentations.",
  robots: { index: false, follow: false },
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PresentationRoot locale="en">{children}</PresentationRoot>;
}
