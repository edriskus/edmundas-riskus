import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  wrapper: {
    position: "sticky",
    top: theme.spacing(2),
    zIndex: theme.zIndex.tooltip
  }
}));
