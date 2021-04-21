import React from "react";
import cookie from "react-cookies";
import { Container, Typography } from "@material-ui/core";
import { LoginForm } from "../../components/LoginForm";
import { useStyles } from "./styles";
import { ONE_WEEK } from "../../constants";

export const AdminLogin = () => {
  const classes = useStyles();

  const handleSuccessfulLogin = (data) => {
    cookie.save("codeletadmincookie", data.token, {
      path: "/",
      maxAge: ONE_WEEK,
    });
  };
  return (
    <Container className={classes.root}>
      <img
        src="/logos/logo-large-blue.png"
        alt="Large Codelet Logo"
        className={classes.img}
      />
      <Typography variant="h6" className={classes.typography}>
        Admin Portal
      </Typography>
      <LoginForm
        submitTo="/users/cla/signin"
        redirectTo="/questions"
        onSuccess={handleSuccessfulLogin}
      />
    </Container>
  );
};
