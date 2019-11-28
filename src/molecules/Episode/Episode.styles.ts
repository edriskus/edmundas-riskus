import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  wrapper: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  text: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
    flexDirection: "column",
    paddingBottom: theme.spacing(3)
  },
  event: {
    position: "absolute",
    left: 0,
    top: 0
  },
  content: {
    paddingLeft: theme.spacing(1)
  },
  line: {
    display: "flex",
    height: "100%",
    width: 1,
    background: theme.palette.text.secondary
  },
  start: {
    position: "absolute",
    left: theme.spacing(1),
    bottom: 0
  },
  end: {
    position: "absolute",
    left: theme.spacing(1),
    top: 0
  }
}));
