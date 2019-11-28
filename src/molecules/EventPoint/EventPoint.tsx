import React from "react";
import useStyles from "./EventPoint.styles";

import { Box, Typography } from "@material-ui/core";
import { EventPoint as EventPointType } from "../../types/Landing";

interface Props {
  data: EventPointType;
}

export default function EventPoint({
  data: { pretitle, title, timestamp, tags }
}: Props) {
  const classes = useStyles();
  return (
    <Box>
      {!!pretitle && (
        <Box className={classes.content}>
          <Typography variant="caption">{pretitle}</Typography>
        </Box>
      )}
      {!!title && (
        <Typography color="textSecondary" variant="h6">
          {title}
        </Typography>
      )}
    </Box>
  );
}
