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
import { string, number } from 'prop-types';
import cookie from 'react-cookies';
import { useStyles } from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { GoBack } from '../GoBack';
import { apiRequest, getEnvUrl } from '../../services';


export const LoginForm = ({ submitTo, tokenExpirationTime }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles()

  const processSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { status, data } = await apiRequest({
        url: `${getEnvUrl()}${submitTo}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (status >= 200 && status < 300) {
        cookie.save('codeletauthcookie', data, { path: '/', maxAge: tokenExpirationTime });
        setIsLoggedIn(true);
      } else {
        setError(data.message);
      }
      setIsLoading(false);
    } catch(err) {
      throw err;
    }
  }

  return (
    <Container className={classes.root}>
      <GoBack activate={isLoggedIn} />
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
  onSubmit: string.isRequired,
  tokenExpirationTime: number
};

LoginForm.defaultProps = {
  tokenExpirationTime: 60 * 60, // 1 hour
}
