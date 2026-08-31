import { PaletteLab } from "@/components/bi-agent/palette-lab";
import "@/components/bi-agent/palette-lab.css";

export const metadata = {
  title: "BI Agent · Paletas",
  robots: { index: false, follow: false },
};

export default function BiAgentPalettesPage() {
  return <PaletteLab />;
}
