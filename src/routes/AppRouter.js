import React from 'react';
import "../App.scss";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import { Landing } from "../pages/Landing";
import { SubmitQuestion } from "../pages/SubmitQuestion";
import { Feedback } from "../pages/Feedback";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Terms } from "../pages/Terms";
import { QuestionSubmissionThankYou } from "../pages/QuestionSubmissionThankYou";
import { AdminLogin } from '../pages/AdminLogin';

export const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" component={Landing} />
      <PublicRoute exact path="/feedback" component={Feedback} />
      <PublicRoute exact path="/submit-question" component={SubmitQuestion} />
      <PublicRoute
        exact
        path="/submit-question/thanks"
        component={QuestionSubmissionThankYou}
      />
      <PublicRoute exact path="/privacy" component={PrivacyPolicy} />
      <PublicRoute exact path="/terms" component={Terms} />
      <PublicRoute exact path="/cla/questions/portal/login" component={AdminLogin} />
    </Switch>
  </Router>
);

export default AppRouter;
