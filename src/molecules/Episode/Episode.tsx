import React from "react";
import moment from "moment";
import useStyles from "./Episode.styles";
import Topic from "../../atoms/Topic/Topic";
import EventPoint from "../EventPoint/EventPoint";

import { Remove } from "@material-ui/icons";
import { Box, Typography } from "@material-ui/core";
import { Episode as EpisodeType } from "../../types/Landing";
import { episodeHeight, eventPosition } from "../../helpers/Episode";

type Props = EpisodeType;

export default function Episode({
  title,
  pretitle,
  start,
  events,
  end
}: Props) {
  const classes = useStyles();
  const height = episodeHeight(start, end);

  return (
    <Box className={classes.wrapper} height={height}>
      <Box className={classes.line} />
      <Box className={classes.text}>
        {!end && (
          <Typography variant="caption" className={classes.end} color="primary">
            {"Now"}
          </Typography>
        )}
        {events &&
          events.map((event, i) => (
            <Box
              key={i}
              className={classes.event}
              style={{ top: eventPosition(event.timestamp, start, end) }}
            >
              <EventPoint data={event} />
            </Box>
          ))}
        <Box className={classes.content}>
          <Remove className={classes.dot} />
          <Typography variant="caption">{pretitle}</Typography>
        </Box>
        <Topic color="primary">{title}</Topic>
        {start && (
          <Typography
            variant="caption"
            className={classes.start}
            color="primary"
          >
            {moment(start).format("MMMM YYYY")}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
