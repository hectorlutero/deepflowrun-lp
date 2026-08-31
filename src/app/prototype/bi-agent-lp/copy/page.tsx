import type { Metadata } from "next";
import { CopyReviewPage } from "@/components/prototype/bi-agent-lp/copy-review";

export const metadata: Metadata = {
  title: "COPY REVIEW — BI Agent LP",
  robots: { index: false, follow: false },
};

export default function BiAgentCopyReviewPage() {
  return <CopyReviewPage />;
}
