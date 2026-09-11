import type { Locale, Text } from "./locale";

export type { Locale, Text };

export type LegendItem = {
  term: Text;
  meaning: Text;
};

export type Badge = "today" | "target";

export type DiagramId =
  | "cover"
  | "layer-map"
  | "what-it-is"
  | "three-steps"
  | "channels"
  | "packs"
  | "motor"
  | "stays-swaps"
  | "connectors"
  | "today-target"
  | "contract"
  | "tools"
  | "security"
  | "outputs"
  | "pipeline"
  | "handoff"
  | "glossary";

export type Slide = {
  id: string;
  section: string;
  sectionLabel: Text;
  eyebrow: Text;
  title: Text;
  body: Text;
  legend?: LegendItem[];
  badges?: Badge[];
  diagram: DiagramId;
  layerActive?: LayerKey[];
};

export type LayerKey =
  | "person"
  | "channel"
  | "engine"
  | "pack"
  | "connector"
  | "source";

export type Deck = {
  slug: string;
  title: Text;
  blurb: Text;
  slides: Slide[];
};

export type PresentationLocale = Locale;
