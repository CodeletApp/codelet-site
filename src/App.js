import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Landing } from "./components/Landing";
import { SubmitQuestion } from "./components/SubmitQuestion";
import { Feedback } from "./components/Feedback";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/feedback"
            component={Feedback}
            // component={() => {
            //   window.location.href = "https://forms.gle/tgwrcaNJMJciME4T9";
            // }}
          />
          <Route
            exact
            path="/submit-question"
            component={SubmitQuestion}
            // component={() => {
            //   window.location.href =
            //     "https://docs.google.com/forms/d/18EKDLIZOTYrTogTr5qoPpMAAwEkpIYdr8YorxUdLhyg/viewform?edit_requested=true";
            // }}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
