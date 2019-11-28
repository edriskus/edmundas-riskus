import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import Light from "./themes/Light";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={Light}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
