import React from "react";
import "../App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";
import { Landing } from "../pages/Landing";
import { SubmitQuestion } from "../pages/SubmitQuestion";
import { Feedback } from "../pages/Feedback";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { ResetPassword } from "../pages/ResetPassword";
import { Terms } from "../pages/Terms";
import { QuestionSubmissionThankYou } from "../pages/QuestionSubmissionThankYou";
import { AdminLogin } from "../pages/AdminLogin";
import { UserLogin } from "../pages/UserLogin";
import { EditQuestion } from "../pages/EditQuestion";
import { QuestionTable } from "../pages/QuestionTable";
import { Footer } from "../components/Footer";
import { DeleteAccount } from "../pages/DeleteAccount";

export const AppRouter = () => (
  <Router>
    <Switch>
      <div className="container">
        <PublicRoute exact path="/" component={Landing} />
        <PublicRoute exact path="/feedback" component={Feedback} />
        <PublicRoute exact path="/delete-account" component={DeleteAccount} />
        <PublicRoute exact path="/submit-question" component={SubmitQuestion} />
        <PublicRoute
          exact
          path="/submit-question/thanks"
          component={QuestionSubmissionThankYou}
        />
        <PublicRoute exact path="/reset/:token" component={ResetPassword} />
        <PublicRoute exact path="/privacy" component={PrivacyPolicy} />
        <PublicRoute exact path="/terms" component={Terms} />
        <PublicRoute exact path="/login" component={UserLogin} />
        <PublicRoute exact path="/admin/login" component={AdminLogin} />
        <PrivateAdminRoute
          exact
          path="/edit-question/:number"
          component={EditQuestion}
        />
        <PrivateAdminRoute exact path="/questions" component={QuestionTable} />
        <Footer />
      </div>
    </Switch>
  </Router>
);

export default AppRouter;
