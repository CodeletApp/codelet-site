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
        <sub>
          <sub>
            <sub>Question has been successfully submitted.</sub>
          </sub>
        </sub>
        <br />
        Thank You!
      </Typography>
    </MuiThemeProvider>
  );
};
