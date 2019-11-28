import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  headline: {
    "h1&": {
      fontWeight: 900,
      [theme.breakpoints.up("sm")]: {
        letterSpacing: -9,
        lineHeight: "160px",
        fontSize: 200,
        marginLeft: -6
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 125,
        lineHeight: "100px",
        letterSpacing: -5,
        marginLeft: -2
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 65,
        lineHeight: "52px",
        letterSpacing: -4,
        marginLeft: 0
      }
    }
  }
}));
