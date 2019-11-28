import React from "react";

import { Box } from "@material-ui/core";
import { BoxProps } from "@material-ui/core/Box";

export default function Section({ children, ...rest }: BoxProps) {
  return (
    <Box {...rest} padding={2}>
      {children}
    </Box>
  );
}
