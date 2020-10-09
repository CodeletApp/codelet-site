import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Routes } from "./components/Routes";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes />
      </Fragment>
    </Router>
  );
};

export default App;
