import React from "react";
import Hero from "../../organisms/Hero/Hero";
import Section from "../../templates/Section";
import Contacts from "../../organisms/Contacts/Contacts";
import Showcase from "../../organisms/Showcase/Showcase";
import Timeline from "../../organisms/Timeline/Timeline";

import { Box } from "@material-ui/core";
import { landingPage } from "../../data/Landing";

export default function Landing() {
  const { hero, timeline, showcase, contacts } = landingPage;
  return (
    <Box>
      <Section>
        <Hero data={hero} />
        <Timeline data={timeline} />
      </Section>
      <Showcase data={showcase} />
      <Contacts data={contacts} />
    </Box>
  );
}
