import React from "react";
import { Typography } from "@material-ui/core";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { useSubmitQuestion } from "../components/CustomHooks";

export const SubmitQuestion = () => {
  return (
    <QuestionForm showSubmissionFineprint useHook={useSubmitQuestion}>
      <Typography variant="h2">Submit a Question</Typography>
      <Typography variant="h5">
        Submit a question you'd like to see in Codelet.
      </Typography>
    </QuestionForm>
  );
};
