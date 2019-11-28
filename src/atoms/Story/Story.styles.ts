import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  box: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  initial: {
    "h1&": {
      fontWeight: 900,
      [theme.breakpoints.up("xs")]: {
        fontSize: 108
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 65
      }
    }
  },
  story: {
    paddingLeft: theme.spacing(1),
    paddingTop: 3,
    lineHeight: 1.25,
    // color: theme.palette.text.secondary,
    maxWidth: 1000
  }
}));
