import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { apiRequest, getEnvUrl } from "../services";
import { Grid, TextField, Box, Button } from "@material-ui/core";
import Loading from "../components/Loading";

export const ResetPassword = ({ match }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });

  const { password, password2 } = formData;

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiRequest({
        url: `${getEnvUrl()}/users/reset-password`,
        method: "GET",
        params: {
          resetPasswordToken: match.params.token,
        },
      });
      setData(response);
    };
    fetchData();
  }, [match.params.token]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetPassword = async () => {
    await apiRequest({
      url: `${getEnvUrl()}/users/reset-password`,
      method: "PUT",
      data: {
        resetPasswordToken: match.params.token,
        password,
      },
    });
    setData();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      await resetPassword();
      alert("Password successfully reset");
    }
  };

  if (!loading && (!data || data.status !== 200)) {
    return <Redirect to="/" />;
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="full-page">
      <h1 className="title">Reset Password</h1>
      <div className="section1">
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid container direction="column">
            <Grid item>
              <TextField
                label="Password"
                placeholder="Password"
                name="password"
                onChange={(e) => onChange(e)}
                variant="outlined"
                required
                margin="normal"
                type="password"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Re-enter Password"
                placeholder="Re-enter Password"
                name="password2"
                onChange={(e) => onChange(e)}
                variant="outlined"
                required
                margin="normal"
                type="password"
              />
            </Grid>
          </Grid>
          <Box margin={1}>
            <Button color="primary" type="submit" variant="contained">
              Submit New Password
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
