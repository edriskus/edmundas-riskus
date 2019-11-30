import React from "react";
import useStyles from "./Timeline.styles";
import Episode from "../../molecules/Episode/Episode";

import { Box } from "@material-ui/core";
import { Episode as EpisodeType } from "../../types/Landing";

interface Props {
  data: EpisodeType[];
}

export default function Timeline({ data }: Props) {
  const { wrapper } = useStyles();
  return (
    <Box className={wrapper}>
      {data.map((episode, i) => (
        <Episode key={i} {...episode} />
      ))}
    </Box>
  );
}
