import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  topic: {
    "h3&": {
      marginLeft: -5,
      [theme.breakpoints.down("sm")]: {
        fontSize: 65,
        letterSpacing: -2,
        marginLeft: -4
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 40,
        letterSpacing: -1,
        marginLeft: -3
      }
    }
  }
}));
