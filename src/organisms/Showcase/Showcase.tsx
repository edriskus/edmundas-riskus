import React from "react";
import Section from "../../templates/Section";

import { LandingShowcase } from "../../types/Landing";

interface Props {
  data: LandingShowcase;
}

export default function Showcase({ data }: Props) {
  return <Section>Showcase</Section>;
}
