import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookie from "react-cookies";
import { DashboardNavbar } from "../pages/DasboardNavbar";

export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const token = cookie.load("codeletauthcookie");
  const isAdmin = cookie.load("codeletadmincookie");
  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          <DashboardNavbar />
          {token && isAdmin ? (
            <>
              <Component {...props} />
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/admin/login",
                state: { referer: props.location },
              }}
            />
          )}
        </>
      )}
    />
  );
};

export default PrivateAdminRoute;
