import { biAgentArchitectureDeck } from "./bi-agent-architecture";
import type { Deck } from "../types";

export const decks: Deck[] = [biAgentArchitectureDeck];

export function getDeck(slug: string): Deck | undefined {
  return decks.find((d) => d.slug === slug);
}

export function deckSlugs(): string[] {
  return decks.map((d) => d.slug);
}
