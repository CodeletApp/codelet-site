import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookie from "react-cookies";
import { Footer } from "../components/Footer";
import { DashboardNavbar } from "../pages/DasboardNavbar";
export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const token = cookie.load("codeletauthcookie");
  const isAdmin = cookie.load("codeletadmincookie");
  return (
    <Route
      {...rest}
      component={(props) => (
        <>
          <DashboardNavbar></DashboardNavbar>
          {token && isAdmin ? (
            <>
              <Component {...props} />
              <Footer />
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/cla/questions/portal/login",
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
