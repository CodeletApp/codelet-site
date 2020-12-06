import React from 'react';
import { Container, Typography,  } from '@material-ui/core';
import { LoginForm } from '../../components/LoginForm';
import { useStyles  } from './styles';

export const AdminLogin = () => {
  const classes = useStyles();
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
      <LoginForm submitTo="/users/signin" />
    </Container>
  );
 }