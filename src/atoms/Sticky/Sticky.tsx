import React from "react";
import useStyles from "./Sticky.styles";

import { Box } from "@material-ui/core";
import { PropsWithChildren } from "react";

export default function Sticky({ children }: PropsWithChildren<{}>) {
  const { wrapper } = useStyles();
  return <Box className={wrapper}>{children}</Box>;
}
