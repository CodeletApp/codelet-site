import React from "react";
import {
  MuiThemeProvider,
  Typography,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  text: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  subText: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 30,
  },
});

const backgroundTheme = createMuiTheme({
  palette: {
    background: {
      default: "#397ac2",
    },
  },
});

export const QuestionSubmissionThankYou = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={backgroundTheme}>
      <CssBaseline />
      <Typography className={classes.text} variant="h1">
        <span className={classes.subText}>
          Question has been successfully submitted.
        </span>
        <br />
        Thank You!
      </Typography>
    </MuiThemeProvider>
  );
};
