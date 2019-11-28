import React from "react";
import useStyles from "./Topic.styles";

import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";

export default function Topic({ children, ...rest }: TypographyProps) {
  const { topic } = useStyles();
  return (
    <Typography {...rest} variant="h3" classes={{ h3: topic }}>
      {children}
    </Typography>
  );
}
