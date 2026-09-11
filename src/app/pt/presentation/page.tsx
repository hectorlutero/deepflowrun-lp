import { decks } from "@/components/presentation/decks";
import { IndexView } from "@/components/presentation/views";

export default function PresentationPtIndexPage() {
  return <IndexView locale="pt" decks={decks} />;
}
