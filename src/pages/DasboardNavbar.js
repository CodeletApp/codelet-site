import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  routerLink: {
    fontSize: 34,
    textDecoration: "none",
    color: "#fff",
  },
}));

export function DashboardNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/questions" className={classes.routerLink}>
            <Typography variant="h6" className={classes.title}>
              Question List
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
