import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D589A",
    },
    action: {
      disabledBackground: "rgba(57, 122, 194, 0.8)",
      disabled: "white",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
