import React from "react";
import useStyles from "./Headline.styles";

import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";

export default function Headline({ children, ...rest }: TypographyProps) {
  const { headline } = useStyles();
  return (
    <Typography {...rest} variant="h1" classes={{ h1: headline }}>
      {children}
    </Typography>
  );
}
