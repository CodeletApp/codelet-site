import React from "react";
import { Route, Switch } from "react-router-dom";
import { Landing } from "./Landing";
import { SubmitQuestion } from "./SubmitQuestion";
import { Feedback } from "./Feedback";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Terms } from "./Terms";
import { QuestionSubmissionThankYou } from "./QuestionSubmissionThankYou";
import { ResetPassword } from "./ResetPassword";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/submit-question" component={SubmitQuestion} />
      <Route
        exact
        path="/submit-question/thanks"
        component={QuestionSubmissionThankYou}
      />
      <Route exact path="/privacy" component={PrivacyPolicy} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/reset/:token" component={ResetPassword} />
    </Switch>
  );
};
