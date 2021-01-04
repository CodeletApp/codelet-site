import React from 'react';
import cookie from 'react-cookies';
import { Container, Typography,  } from '@material-ui/core';
import { LoginForm } from '../../components/LoginForm';
import { useStyles  } from './styles';

export const AdminLogin = () => {
  const classes = useStyles();

  const handleSuccessfulLogin = (data) => {
    const tokenExpirationTime = 60 * 60;
    cookie.save('codeletadmincookie', data.token, { path: '/', maxAge: tokenExpirationTime });
  }
  return (
    <Container className={classes.root}>
      <img 
        src="/logos/logo-large-blue.png" 
        alt="Coldelet"
        className={classes.img}
      />
      <Typography variant="h6" className={classes.typography}>
        Admin Portal
      </Typography>
      <LoginForm
        submitTo="/users/cla/signin"
        redirectTo="/cla/questions/portal"
        onSuccess={handleSuccessfulLogin}
      />
    </Container>
  );
 }