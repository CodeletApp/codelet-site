import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Routes } from "./pages/Routes";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes />
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
