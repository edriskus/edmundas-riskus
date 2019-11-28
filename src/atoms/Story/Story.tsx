import React from "react";
import useStyles from "./Story.styles";

import { Box, Typography } from "@material-ui/core";
import { getFirstSymbol } from "../../helpers/Text";

interface Props {
  content: string;
}

export default function Story({ content }: Props) {
  const { story, box, initial } = useStyles();
  const { first, rest } = getFirstSymbol(content);
  return (
    <Box className={box}>
      <Typography variant="h1" className={initial} color="primary">
        {first}
      </Typography>
      <Typography variant="subtitle1" className={story}>
        {rest}
      </Typography>
    </Box>
  );
}
