import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  errorMessage: {
    color: "red",
  },
});

export function ErrorMessage({ isError, message }) {
  const classes = useStyles();
  return (
    <>
      {isError ? (
        <Typography variant="h6" className={classes.errorMessage}>
          {message}
        </Typography>
      ) : (
        ""
      )}
    </>
  );
}
