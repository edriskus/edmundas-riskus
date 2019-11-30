import React from "react";
import Hero from "../../organisms/Hero/Hero";
import Section from "../../templates/Section";
import Timeline from "../../organisms/Timeline/Timeline";

import { Box } from "@material-ui/core";
import { landingPage } from "../../data/Landing";

export default function Landing() {
  const { hero, timeline } = landingPage;
  return (
    <Box>
      <Section>
        <Hero data={hero} />
        <Timeline data={timeline} />
      </Section>
    </Box>
  );
}
