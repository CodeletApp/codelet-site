import React, { useState } from 'react';
import { 
  Container,
  CssBaseline,
  TextField,
  Button,
  CircularProgress,
  Typography
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { string, number, func } from 'prop-types';
import cookie from 'react-cookies';
import { useStyles } from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { AuthRedirect } from '../AuthRedirect';
import { apiRequest, getEnvUrl } from '../../services';

export const LoginForm = ({
  submitTo,
  tokenExpirationTime,
  onSuccess,
  onFailure,
  redirectTo,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles()

  const processSubmit = async (authData) => {
    try {
      setIsLoading(true);
      const { status, data } = await apiRequest({
        url: `${getEnvUrl()}${submitTo}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: authData
      })
      if (status >= 200 && status < 300) {
        cookie.save('codeletauthcookie', data.token, { path: '/', maxAge: tokenExpirationTime });
        onSuccess(data);
        setIsLoggedIn(true);
      } else {
        setError(data.message);
        onFailure(data);
      }
      setIsLoading(false);
    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <Container className={classes.root}>
      <AuthRedirect activate={isLoggedIn} to={redirectTo} />
      <CssBaseline />
      <form onSubmit={handleSubmit(processSubmit)}>
        <TextField
          inputRef={register({
            required: true,
            maxLength: 16
          })}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          inputProps={{maxLength: 16}}
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          error={errors.username}
          helperText={<ErrorMessage isError={errors.username} message={errors.username} />}
        />
        <TextField
          inputRef={register({required: true})}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="password"
          error={errors.password}
          helperText={<ErrorMessage isError={errors.password} message={errors.password} />}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
            className={classes.button}
          >
            {
              isLoading ?
              <CircularProgress className={classes.circularProgress} />
              : 
              <Typography className={classes.buttonText}>
                Sign in
              </Typography>
            }
          </Button>
          <ErrorMessage isError={error} message={error} />
      </form>
    </Container>
  )
}

LoginForm.propTypes = {
  submitTo: string.isRequired,
  tokenExpirationTime: number,
  onSuccess: func,
  onFailure: func,
  redirectTo: string,
};

LoginForm.defaultProps = {
  tokenExpirationTime: 60 * 60, // 1 hour
  onSuccess: () => {},
  onFailure: () => {},
  redirectTo: '',
}
