export interface LandingHero {
  primary: string;
  secondary: string;
  story: string;
}

export interface EventPoint {
  pretitle?: string;
  title?: string;
  timestamp: string;
  tags?: string[];
}

export interface Episode {
  pretitle: string;
  title?: string;
  start: string;
  end?: string;
  events?: EventPoint[];
}

export interface LandingShowcase {}

export interface LandingContacts {}

export interface LandingPage {
  hero: LandingHero;
  timeline: Episode[];
  showcase: LandingShowcase;
  contacts: LandingContacts;
}
