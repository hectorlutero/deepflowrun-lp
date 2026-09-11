import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { deckSlugs, getDeck } from "@/components/presentation/decks";
import { tx } from "@/components/presentation/locale";
import { DeckView } from "@/components/presentation/views";

export function generateStaticParams() {
  return deckSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deck = getDeck(slug);
  return {
    title: deck
      ? `${tx("en", deck.title)} — DeepFlowRun`
      : "Presentations — DeepFlowRun",
    robots: { index: false, follow: false },
  };
}

export default async function PresentationDeckPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = getDeck(slug);
  if (!deck) notFound();
  return <DeckView locale="en" deck={deck} />;
}
