import React from "react";
import Story from "../../atoms/Story/Story";
import Sticky from "../../atoms/Sticky/Sticky";
import Headline from "../../atoms/Headline/Headline";

import { LandingHero } from "../../types/Landing";

interface Props {
  data: LandingHero;
}

export default function Hero({ data: { primary, secondary, story } }: Props) {
  return (
    <>
      <Headline color="textSecondary">{primary}</Headline>
      <Sticky>
        <Headline color="textPrimary">{secondary}</Headline>
      </Sticky>
      <Story content={story} />
    </>
  );
}
