import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) => ({
  content: {
    paddingLeft: theme.spacing(1),
    position: "relative"
  },
  dot: {
    position: "absolute",
    left: -7,
    top: 4,
    color: theme.palette.text.secondary,
    fontSize: 13
  },
  tags: {
    marginTop: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
    maxWidth: "100%",
    flexWrap: "wrap"
  },
  tag: {
    margin: theme.spacing(0.5)
  }
}));
