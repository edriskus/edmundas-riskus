import React from "react";
import Section from "../../templates/Section";

import { LandingContacts } from "../../types/Landing";

interface Props {
  data: LandingContacts;
}

export default function Contacts({ data }: Props) {
  return <Section>Contacts</Section>;
}
