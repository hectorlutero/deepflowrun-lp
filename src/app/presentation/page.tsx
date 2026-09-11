import { decks } from "@/components/presentation/decks";
import { IndexView } from "@/components/presentation/views";

export default function PresentationIndexPage() {
  return <IndexView locale="en" decks={decks} />;
}
