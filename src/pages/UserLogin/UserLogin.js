import React from 'react';
import { Container } from '@material-ui/core';
import { LoginForm } from '../../components/LoginForm';
import { useStyles  } from './styles';

export const UserLogin = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <img 
        src="/logos/logo-large-blue.png" 
        alt="Large Codelet Logo"
        className={classes.img}
      />
      <LoginForm submitTo="/users/signin" />
    </Container>
  );
 }