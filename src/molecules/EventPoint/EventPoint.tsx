import React from "react";
import useStyles from "./EventPoint.styles";

import { Remove } from "@material-ui/icons";
import { Box, Chip, Typography } from "@material-ui/core";
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
          <Remove className={classes.dot} />
          <Typography variant="caption">{pretitle}</Typography>
        </Box>
      )}
      {!!title && (
        <Typography color="textSecondary" variant="h6">
          {title}
        </Typography>
      )}
      {!!tags && (
        <Box className={classes.tags}>
          {tags.map((tag, i) => (
            <Chip
              key={i}
              className={classes.tag}
              size="small"
              variant="default"
              color="secondary"
              label={tag}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
