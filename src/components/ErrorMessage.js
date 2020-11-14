import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  errorMessage: {
    color: "red",
  },
});

export function ErrorMessage({ isError, message }) {
  const classes = useStyles();
  return (
    <Container>
      {isError ? (
        <Typography variant="h6" className={classes.errorMessage}>
          {message}
        </Typography>
      ) : (
        ""
      )}
    </Container>
  );
}
